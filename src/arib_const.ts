/* Forked from https://github.com/l3tnun/EPGStation.git which is licensed under the MIT */

export const Genre = {
    0x0: {
        name: 'ニュース・報道',
        dvb_name: 'News / Current Affairs',
    },
    0x1: {
        name: 'スポーツ',
        dvb_name: 'Sports',
    },
    0x2: {
        name: '情報・ワイドショー',
        dvb_name: 'Talk show',
    },
    0x3: {
        name: 'ドラマ',
        dvb_name: 'Movie / Drama',
    },
    0x4: {
        name: '音楽',
        dvb_name: 'Music / Ballet / Dance',
    },
    0x5: {
        name: 'バラエティ',
        dvb_name: 'Variety show',
    },
    0x6: {
        name: '映画',
        dvb_name: 'Movie / Drama',
    },
    0x7: {
        name: 'アニメ・特撮',
        dvb_name: 'Cartoons / Puppets',
    },
    0x8: {
        name: 'ドキュメンタリー・教養',
        dvb_name: 'Documentary',
    },
    0x9: {
        name: '劇場・公演',
        dvb_name: 'Musical / Opera',
    },
    0xa: {
        name: '趣味・教育',
        dvb_name: 'Leisure hobbies',
    },
    0xb: {
        name: '福祉',
        dvb_name: 'Social / Political issues / Economics',
    },
    0xc: {
        name: '予備',
    },
    0xd: {
        name: '予備',
    },
    0xe: {
        name: '拡張',
    },
    0xf: {
        name: 'その他',
    },
};

export const SubGenre = {
    0x0: {
        0x0: {
            name: '定時・総合',
            dvb_name: 'News / Current Affairs',
        },
        0x1: {
            name: '天気',
            dvb_name: 'News / Weather report',
        },
        0x2: {
            name: '特集・ドキュメント',
            dvb_name: 'Documentary',
        },
        0x3: {
            name: '政治・国会',
            dvb_name: 'Political issues',
        },
        0x4: {
            name: '経済・市況',
            dvb_name: 'Economics',
        },
        0x5: {
            name: '海外・国際',
            dvb_name: 'Foreign countries',
        },
        0x6: {
            name: '解説',
            dvb_name: 'Reports',
        },
        0x7: {
            name: '討論・会談',
            dvb_name: 'Discussion / Interview / Debate',
        },
        0x8: {
            name: '報道特番',
            dvb_name: 'News',
        },
        0x9: {
            name: 'ローカル・地域',
        },
        0xa: {
            name: '交通',
        },
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x1: {
        0x0: {
            name: 'スポーツニュース',
        },
        0x1: {
            name: '野球',
        },
        0x2: {
            name: 'サッカー',
        },
        0x3: {
            name: 'ゴルフ',
        },
        0x4: {
            name: 'その他の球技',
        },
        0x5: {
            name: '相撲・格闘技',
        },
        0x6: {
            name: 'オリンピック・国際大会',
        },
        0x7: {
            name: 'マラソン・陸上・水泳',
        },
        0x8: {
            name: 'モータースポーツ',
        },
        0x9: {
            name: 'マリン・ウィンタースポーツ',
        },
        0xa: {
            name: '競馬・公営競技',
        },
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x2: {
        0x0: {
            name: '芸能・ワイドショー',
        },
        0x1: {
            name: 'ファッション',
        },
        0x2: {
            name: '暮らし・住まい',
        },
        0x3: {
            name: '健康・医療',
        },
        0x4: {
            name: 'ショッピング・通販',
        },
        0x5: {
            name: 'グルメ・料理',
        },
        0x6: {
            name: 'イベント',
        },
        0x7: {
            name: '番組紹介・お知らせ',
        },
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x3: {
        0x0: {
            name: '国内ドラマ',
        },
        0x1: {
            name: '海外ドラマ',
        },
        0x2: {
            name: '時代劇',
        },
        0x3: null,
        0x4: null,
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x4: {
        0x0: {
            name: '国内ロック・ポップス',
            dvb_name: 'Rock / Pop',
        },
        0x1: {
            name: '海外ロック・ポップス',
            dvb_name: 'Rock / Pop',
        },
        0x2: {
            name: 'クラシック・オペラ',
            dvb_name: 'Classical music / Opera'
        },
        0x3: {
            name: 'ジャズ・フュージョン',
        },
        0x4: {
            name: '歌謡曲・演歌',
        },
        0x5: {
            name: 'ライブ・コンサート',
        },
        0x6: {
            name: 'ランキング・リクエスト',
        },
        0x7: {
            name: 'カラオケ・のど自慢',
        },
        0x8: {
            name: '民謡・邦楽',
        },
        0x9: {
            name: '童謡・キッズ',
        },
        0xa: {
            name: '民族音楽・ワールドミュージック',
        },
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x5: {
        0x0: {
            name: 'クイズ',
        },
        0x1: {
            name: 'ゲーム',
        },
        0x2: {
            name: 'トークバラエティ',
        },
        0x3: {
            name: 'お笑い・コメディ',
        },
        0x4: {
            name: '音楽バラエティ',
        },
        0x5: {
            name: '旅バラエティ',
        },
        0x6: {
            name: '料理バラエティ',
        },
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x6: {
        0x0: {
            name: '洋画',
            dvb_name: 'Movie / Drama',
        },
        0x1: {
            name: '邦画',
            dvb_name: 'Movie / Drama',
        },
        0x2: {
            name: 'アニメ',
            dvb_name: 'Cartoons',
        },
        0x3: null,
        0x4: null,
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x7: {
        0x0: {
            name: '国内アニメ',
        },
        0x1: {
            name: '海外アニメ',
        },
        0x2: {
            name: '特撮',
        },
        0x3: null,
        0x4: null,
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x8: {
        0x0: {
            name: '社会・時事',
        },
        0x1: {
            name: '歴史・紀行',
        },
        0x2: {
            name: '自然・動物・環境',
        },
        0x3: {
            name: '宇宙・科学・医学',
        },
        0x4: {
            name: 'カルチャー・伝統文化',
        },
        0x5: {
            name: '文学・文芸',
        },
        0x6: {
            name: 'スポーツ',
        },
        0x7: {
            name: 'ドキュメンタリー全般',
        },
        0x8: {
            name: 'インタビュー・討論',
        },
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0x9: {
        0x0: {
            name: '現代劇・新劇',
        },
        0x1: {
            name: 'ミュージカル',
        },
        0x2: {
            name: 'ダンス・バレエ',
        },
        0x3: {
            name: '落語・演芸',
        },
        0x4: {
            name: '歌舞伎・古典',
        },
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0xa: {
        0x0: {
            name: '旅・釣り・アウトドア',
        },
        0x1: {
            name: '園芸・ペット・手芸',
        },
        0x2: {
            name: '音楽・美術・工芸',
        },
        0x3: {
            name: '囲碁・将棋',
        },
        0x4: {
            name: '麻雀・パチンコ',
        },
        0x5: {
            name: '車・オートバイ',
        },
        0x6: {
            name: 'コンピュータ・ＴＶゲーム',
        },
        0x7: {
            name: '会話・語学',
        },
        0x8: {
            name: '幼児・小学生',
        },
        0x9: {
            name: '中学生・高校生',
        },
        0xa: {
            name: '大学生・受験',
        },
        0xb: {
            name: '生涯教育・資格',
        },
        0xc: {
            name: '教育問題',
        },
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0xb: {
        0x0: {
            name: '高齢者',
        },
        0x1: {
            name: '障害者',
        },
        0x2: {
            name: '社会福祉',
        },
        0x3: {
            name: 'ボランティア',
        },
        0x4: {
            name: '手話',
        },
        0x5: {
            name: '文字(字幕)',
        },
        0x6: {
            name: '音声解説',
        },
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
    0xc: {
        0x0: null,
        0x1: null,
        0x2: null,
        0x3: null,
        0x4: null,
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: null,
    },
    0xd: {
        0x0: null,
        0x1: null,
        0x2: null,
        0x3: null,
        0x4: null,
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: null,
    },
    0xe: {
        0x0: {
            name: 'BS/地上デジタル放送用番組付属情報',
        },
        0x1: {
            name: '広帯域 CS デジタル放送用拡張',
        },
        0x2: null,
        0x3: {
            name: 'サーバー型番組付属情報',
        },
        0x4: {
            name: 'IP 放送用番組付属情報',
        },
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: null,
    },
    0xf: {
        0x0: null,
        0x1: null,
        0x2: null,
        0x3: null,
        0x4: null,
        0x5: null,
        0x6: null,
        0x7: null,
        0x8: null,
        0x9: null,
        0xa: null,
        0xb: null,
        0xc: null,
        0xd: null,
        0xe: null,
        0xf: {
            name: 'その他',
        },
    },
};

export const VideoComponentType = {
    0x01: {
        aspect: '4:3',
        quality: '480',
    },
    0x02: {
        aspect: '16:9',
        quality: '480',
    },
    0x03: {
        aspect: '16:9',
        quality: '480',
    },
    0x04: {
        quality: '480'
    },
    0x83: {
        aspect: '16:9',
        quality: '4320',
    },
    0x91: {
        aspect: '4:3',
        quality: '2160,'
    },
    0x92: {
        aspect: '16:9',
        quality: '2160',
    },
    0x93: {
        aspect: '16:9',
        quality: '2160',
    },
    0x94: {
        quality: '2160'
    },
    0xa1: {
        aspect: '4:3',
        quality: '480',
    },
    0xa2: {
        aspect: '16:9',
        quality: '480',
    },
    0xa3: {
        aspect: '16:9',
        quality: '480',
    },
    0xa4: {
        quality: '480'
    },
    0xb1: {
        aspect: '4:3',
        quality: '1080,'
    },
    0xb2: {
        aspect: '16:9',
        quality: '1080',
    },
    0xb3: {
        aspect: '16:9',
        quality: '1080',
    },
    0xb4: {
        quality: '1080'
    },
    0xc1: {
        aspect: '4:3',
        quality: '720',
    },
    0xc2: {
        aspect: '16:9',
        quality: '720',
    },
    0xc3: {
        aspect: '16:9',
        quality: '720',
    },
    0xc4: {
        quality: '720'
    },
    0xd1: {
        aspect: '4:3',
        quality: '240',
    },
    0xd2: {
        aspect: '16:9',
        quality: '240',
    },
    0xd3: {
        aspect: '16:9',
        quality: '240',
    },
    0xd4: {
        quality: '240'
    },
    0xe1: {
        aspect: '4:3',
        quality: '1080,'
    },
    0xe2: {
        aspect: '16:9',
        quality: '1080',
    },
    0xe3: {
        aspect: '16:9',
        quality: '1080',
    },
    0xe4: {
        quality: '1080'
    },
    0xf1: {
        aspect: '4:3',
        quality: '180',
    },
    0xf2: {
        aspect: '16:9',
        quality: '180',
    },
    0xf3: {
        aspect: '16:9',
        quality: '180',
    },
    0xf4: {
        quality: '180'
    },
};
