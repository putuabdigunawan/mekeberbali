import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { c as config } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { C as CardJobBali } from '../chunks/CardJobBali_Be9Q9fSn.mjs';
import { a as sortByDate1, $ as $$Pagination } from '../chunks/sortFunctions_nE0eLfTE.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const apiUrl = "https://firstoffice.mekeber.com/api/bali/lowongan";
  const response = await fetch(apiUrl);
  const result = await response.json();
  const lowongan = result.data;
  const sortedPosts = sortByDate1(lowongan);
  const recentPost = sortedPosts;
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPosts = recentPost.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Daftar lowongan Bali 2025", "meta_title": "Lowongan Bali 2025 | Mekeber", "description": "Daftar lowongan yang tersedia di Denpasar, Tabanan, Canggu" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-page="is-lowongan"> <div class="container py-10"> <h1 class="mt-5 text-center">
Mekeber Bali: <br>Daftar Lowongan Kerja 2025
</h1> <p class="mb-8 text-center">
Khusus area Bali seperti Denpasar, Tabanan, Badung, Ubud, Klungkung,
        Singaraja, Uluwatu, Jimbaran
</p> <div class="row mt-20"> ${currentPosts.map(
    (posts, i) => renderTemplate`${renderComponent($$result2, "CardJobBali", CardJobBali, { "client:load": true, "?key": `post-${i}`, "posts": posts, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/CardJobBali", "client:component-export": "default" })}`
  )} </div> </div> </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "lowongan", "currentPage": 1, "totalPages": totalPages })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowongan/index.astro", void 0);
const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowongan/index.astro";
const $$url = "/lowongan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
