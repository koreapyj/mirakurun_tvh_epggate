import {encode} from 'html-entities';
import * as ARIB from './arib_const.ts';
import Net from 'node:net';

type TVHService = {sid: number} & Record<string,any>;
type TVHMux = {onid: number, services: string[]} & Record<string,any>;

const toXMLTVTime = (date: Date) => date.toISOString().replace(/\.000Z/,'').replace(/[-T:]/g,'') + ' +0000';
const ftoh = (str: string) => str.replace(
        /[！-～]/g,
        function(ch) { return String.fromCharCode(ch.charCodeAt(0) - 0xfee0); }
    ).replace(/　/g,' ');
const encodeXMLTV = (str: string) => encode(str).replace(/\r\n|\r|\n/g,'&#xA;');

const { TVHEADEND_ENDPOINT, MIRAKURUN_ENDPOINT, TVHEADEND_XMLTV } = process.env;

if(!TVHEADEND_ENDPOINT) {
    console.error('TVHEADEND_ENDPOINT is not defined');
    process.exit(1);
}

if(!TVHEADEND_XMLTV) {
    console.error('TVHEADEND_XMLTV is not defined');
    process.exit(1);
}

if(!MIRAKURUN_ENDPOINT) {
    console.error('MIRAKURUN_ENDPOINT is not defined');
    process.exit(1);
}

const XMLTV = TVHEADEND_XMLTV ? Net.connect(TVHEADEND_XMLTV) : process.stdout;

(async () => {
    const out_channels: any[] = [];

    const tvh_muxes: TVHMux[] = await (await fetch(new URL('/api/raw/export?class=dvb_mux', TVHEADEND_ENDPOINT))).json();
    const tvh_services: TVHService[] = await (await fetch(new URL('/api/raw/export?class=service', TVHEADEND_ENDPOINT))).json();
    const tvh_service_by_uuid: Record<string, TVHService> = tvh_services.reduce((obj, row) => {
        obj[row.uuid]=row;
        return obj
    }, {});
    const tvh_service_by_mirakurun_id: Record<number, TVHService> = {};

    for(const mux of tvh_muxes) {
        const {onid} = mux;
        for(const uuid of mux.services) {
            tvh_service_by_uuid[uuid].onid = onid;
            tvh_service_by_mirakurun_id[onid * 100000 + tvh_service_by_uuid[uuid].sid] = tvh_service_by_uuid[uuid];
        }
    }

    const mirakurun_services = await (await fetch(new URL('/api/services', MIRAKURUN_ENDPOINT))).json();
    XMLTV.write(`<?xml version="1.0" encoding="utf-8" ?>\n<!DOCTYPE tv SYSTEM "xmltv.dtd">\n<tv generator-info-name="mirakurun_tvh_epggate" source-info-name="mirakurun_tvh_epggate">\n`);
    for(const service of mirakurun_services) {
        const tvh_service = tvh_service_by_mirakurun_id[service.id];
        if(!tvh_service) {
            console.error(`tvh service not found for '${service.id}'`);
            continue;
        }
        XMLTV.write(`<channel id="${tvh_service.uuid}"><display-name>${ftoh(service.name)}</display-name><display-name>${service.channel.channel}</display-name><display-name>${tvh_service.svcname}</display-name></channel>\n`);
    }

    const programs = await (await fetch(new URL('/api/programs', MIRAKURUN_ENDPOINT))).json();
    const program_by_id = programs.reduce((obj, row) => {
        obj[row.id]=row;
        return obj
    }, {});
    program: for(const program of programs) {
        const mid = program.networkId * 100000 + program.serviceId;
        const service = tvh_service_by_mirakurun_id[mid];
        if(!service) {
            console.error(`tvh service not found for '${mid}'`);
            continue;
        }
        for(let i = 0;!program.name && (program.relatedItems instanceof Array) && program.relatedItems[i]?.type === 'shared';i++){
            const ref_id = (program.networkId * 100000 + program.relatedItems[i].serviceId) * 100000 + program.relatedItems[i].eventId;
            const o = program_by_id[ref_id];
            if(!o) {
                console.error(`program '${mid}' is shared object but ref '${ref_id}' is not found.`);
                continue program;
            }
            for(const [k,v] of Object.entries(o)) {
                if(program[k]) continue;
                program[k] = v;
            }
        }
        if(program.video && !ARIB.VideoComponentType[program.video.componentType]) {
            console.error(`unknown componentType '${program.video.componentType}'`);
            continue;
        }
        XMLTV.write(`<programme start="${toXMLTVTime(new Date(program.startAt))}" stop="${toXMLTVTime(new Date(program.startAt + program.duration))}" channel="${service.uuid}">`);
        XMLTV.write(`<title lang="ja">${encodeXMLTV(program.name)}</title>`);
        XMLTV.write(`<sub-title lang="ja">${encodeXMLTV(program.description)}</sub-title>`);
        if(program.genres) {
            const dvb_genres = {};
            const o_genres = {};
            for(const genre of program.genres) {
                if(ARIB.Genre[genre.lv1]) {
                    o_genres[genre.lv1] = ARIB.Genre[genre.lv1].name;
                    if(ARIB.Genre[genre.lv1].dvb_name) {
                        dvb_genres[genre.lv1] = ARIB.Genre[genre.lv1].dvb_name;
                    }
                }
                if(ARIB.SubGenre[genre.lv1][genre.lv2]) {
                    o_genres[(genre.lv1 << 4) | (genre.lv2 & 0xf)] = ARIB.SubGenre[genre.lv1][genre.lv2].name;
                    if(ARIB.SubGenre[genre.lv1][genre.lv2].dvb_name) {
                        dvb_genres[(genre.lv1 << 4) | (genre.lv2 & 0xf)] = ARIB.SubGenre[genre.lv1][genre.lv2].dvb_name;
                    }
                }
            }
            Object.values(dvb_genres).forEach(x=>XMLTV.write(`<category>${encodeXMLTV(x as string)}</category>`));
            Object.values(o_genres).forEach(x=>XMLTV.write(`<keyword lang="ja">${encodeXMLTV(x as string)}</keyword>`));
        }
        if(program.extended) {
            XMLTV.write(`<desc lang="ja">${encodeXMLTV(Object.entries(program.extended).map(([k,v])=>(`${k}\n${v}\n\n`)).join("\n"))}</desc>`)
        }
        if(program.video?.componentType) {
            XMLTV.write(`<video>${Object.entries(ARIB.VideoComponentType[program.video.componentType]).reduce((str, row)=>`${str}<${row[0]}>${encodeXMLTV(row[1] as string)}</${row[0]}>`,'')}</video>`);
        }
        if(program.name.includes('🈑')) {
            XMLTV.write('<subtitles type="deaf-signed"/>');
        }
        if(program.name.includes('🈖')) {
            XMLTV.write('<audio-described />');
        }
        if(program.name.includes('🈟︎')) {
            XMLTV.write('<new />');
        }
        XMLTV.write(`</programme>\n`);
    }

    XMLTV.write(`</tv>\n`);
    console.error('done.')
})().then(()=>{
    XMLTV.destroy();
    process.exit(0);
});
