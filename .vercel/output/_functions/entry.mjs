import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CB_XwMkc.mjs';
import { manifest } from './manifest_Q0LkFWFz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/about1.astro.mjs');
const _page4 = () => import('./pages/bali.astro.mjs');
const _page5 = () => import('./pages/bisnis.astro.mjs');
const _page6 = () => import('./pages/blog/page/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog/_single_.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/categories/_category_.astro.mjs');
const _page10 = () => import('./pages/categories.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/features.astro.mjs');
const _page13 = () => import('./pages/how-it-works.astro.mjs');
const _page14 = () => import('./pages/index-ori.astro.mjs');
const _page15 = () => import('./pages/integrations/_single_.astro.mjs');
const _page16 = () => import('./pages/integrations.astro.mjs');
const _page17 = () => import('./pages/klinik.astro.mjs');
const _page18 = () => import('./pages/lowongan/page/_slug_.astro.mjs');
const _page19 = () => import('./pages/lowongan/_slug_contoh.astro.mjs');
const _page20 = () => import('./pages/lowongan/_slug_.astro.mjs');
const _page21 = () => import('./pages/lowongan.astro.mjs');
const _page22 = () => import('./pages/lowonganbali/page/_slug_.astro.mjs');
const _page23 = () => import('./pages/lowonganbali/_single_.astro.mjs');
const _page24 = () => import('./pages/lowonganbali.astro.mjs');
const _page25 = () => import('./pages/password-reset.astro.mjs');
const _page26 = () => import('./pages/pricing.astro.mjs');
const _page27 = () => import('./pages/publicholiday.astro.mjs');
const _page28 = () => import('./pages/signin.astro.mjs');
const _page29 = () => import('./pages/signup.astro.mjs');
const _page30 = () => import('./pages/support.astro.mjs');
const _page31 = () => import('./pages/_regular_.astro.mjs');
const _page32 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/about1.astro", _page3],
    ["src/pages/bali.astro", _page4],
    ["src/pages/bisnis/index.astro", _page5],
    ["src/pages/blog/page/[slug].astro", _page6],
    ["src/pages/blog/[single].astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/categories/[category].astro", _page9],
    ["src/pages/categories/index.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/features.astro", _page12],
    ["src/pages/how-it-works.astro", _page13],
    ["src/pages/index-ori.astro", _page14],
    ["src/pages/integrations/[single].astro", _page15],
    ["src/pages/integrations/index.astro", _page16],
    ["src/pages/klinik/index.astro", _page17],
    ["src/pages/lowongan/page/[slug].astro", _page18],
    ["src/pages/lowongan/[slug]contoh.astro", _page19],
    ["src/pages/lowongan/[slug].astro", _page20],
    ["src/pages/lowongan/index.astro", _page21],
    ["src/pages/lowonganbali/page/[slug].astro", _page22],
    ["src/pages/lowonganbali/[single].astro", _page23],
    ["src/pages/lowonganbali/index.astro", _page24],
    ["src/pages/password-reset.astro", _page25],
    ["src/pages/pricing.astro", _page26],
    ["src/pages/publicholiday.astro", _page27],
    ["src/pages/signin.astro", _page28],
    ["src/pages/signup.astro", _page29],
    ["src/pages/support.astro", _page30],
    ["src/pages/[regular].astro", _page31],
    ["src/pages/index.astro", _page32]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5811d9ee-0d43-4bdb-9737-1de219261096",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
