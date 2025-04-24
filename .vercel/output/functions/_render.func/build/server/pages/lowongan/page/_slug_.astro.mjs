import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../../chunks/Base_-nsSh3wL.mjs';
import { $ as $$CtaLowongan } from '../../../chunks/CtaLowongan_DgRbq2Aj.mjs';
import { c as config } from '../../../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { C as CardJobBali } from '../../../chunks/CardJobBali_Be9Q9fSn.mjs';
import { a as sortByDate1, $ as $$Pagination } from '../../../chunks/sortFunctions_nE0eLfTE.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  try {
    const apiUrl = "https://firstoffice.mekeber.com/api/bali/lowongan";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error(
        "Error fetching lowongan untuk getStaticPaths:",
        response.status
      );
      return [];
    }
    const result = await response.json();
    const lowongan = result?.data || [];
    const totalPages = Math.ceil(lowongan.length / config.settings.pagination);
    const paths = [];
    for (let i = 1; i < totalPages; i++) {
      paths.push({
        params: {
          slug: (i + 1).toString()
        }
      });
    }
    return paths;
  } catch (error) {
    console.error("Error di getStaticPaths:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const apiUrl = "https://firstoffice.mekeber.com/api/bali/lowongan";
  const response = await fetch(apiUrl);
  const result = await response.json();
  const lowongan = result.data;
  const sortedPosts = sortByDate1(lowongan);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const totalPages = Math.ceil(sortedPosts.length / config.settings.pagination);
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const recentPost = sortedPosts;
  const currentPosts = recentPost.slice(indexOfFirstPost, indexOfLastPost);
  ({
    index_title: lowongan.title});
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Daftar lowongan Bali 2025", "meta_title": "Lowongan Bali 2025 | Mekeber", "description": "Daftar lowongan yang tersedia di Denpasar, Tabanan, Canggu" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container py-10"> <h1 class="mt-5 text-center">
Mekeber Bali: <br>Daftar Lowongan Kerja 2025
</h1> <p class="mb-8 text-center">
Khusus area Bali seperti Denpasar, Tabanan, Badung, Ubud, Klungkung,
        Singaraja, Uluwatu, Jimbaran
</p> <div class="row mt-12"> ${currentPosts.map(
    (posts, i) => renderTemplate`${renderComponent($$result2, "CardJobBali", CardJobBali, { "key": `post-${i}`, "posts": posts })}`
  )} </div> </div> </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "lowongan", "totalPages": totalPages, "currentPage": currentPage })} ${renderComponent($$result2, "CtaLowongan", $$CtaLowongan, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowongan/page/[slug].astro", void 0);
const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowongan/page/[slug].astro";
const $$url = "/lowongan/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
