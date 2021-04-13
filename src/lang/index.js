import merge from 'deepmerge';

import enLang from './data/en';
import zhLang from './data/zh';
import esLang from './data/es';
import ptLang from './data/pt';
const en = enLang;
const zh = merge.all([enLang, zhLang]);
const es = merge.all([enLang, esLang]);
const pt = merge.all([enLang, ptLang]);
// console.log({ en, zh, es, pt });
export default [zh, en, es, pt];
