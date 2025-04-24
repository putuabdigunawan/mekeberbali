import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_AdA_3Tsd.mjs';
import { c as config } from '../../../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Base } from '../../../chunks/Base_-nsSh3wL.mjs';
import { J as JobPosts } from '../../../chunks/JobPosts_Bgqs9SvD.mjs';
import { $ as $$Cta } from '../../../chunks/Cta_XMg3ReMw.mjs';
import { g as getSinglePage } from '../../../chunks/contentParser_CgJzeWoC.mjs';
import { g as getTaxonomy } from '../../../chunks/taxonomyParser_0cP1G5vi.mjs';
import { a as getEntry } from '../../../chunks/_astro_content_fLdutI3_.mjs';
import { s as sortByDate, $ as $$Pagination } from '../../../chunks/sortFunctions_nE0eLfTE.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const posts = await getSinglePage("lowongan");
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const careerIndex = await getEntry(
    "lowongan",
    "-index"
  );
  const { benefits, career, image } = careerIndex.data;
  const categories = await getTaxonomy("lowongan", "categories");
  await getSinglePage("lowongan");
  const { slug } = Astro2.params;
  const posts = await getSinglePage("lowongan");
  const sortedPosts = sortByDate(posts);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = recentPost.slice(indexOfFirstPost, indexOfLastPost);
  const page_data = {
    index_title: careerIndex.data.title,
    slug: `page / ${slug}`
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": careerIndex.data.title, "meta_title": careerIndex.data.meta_title, "description": careerIndex.data.description, "image": careerIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> <section class="section"> <div class="container"> <h2 class="h4 mb-4">Recent Posts</h2> ${renderComponent($$result2, "JobPosts", JobPosts, { "client:load": true, "categories": categories, "career": career, "posts": currentPosts, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/JobPosts", "client:component-export": "default" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "lowonganbali", "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowonganbali/page/[slug].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowonganbali/page/[slug].astro";
const $$url = "/lowonganbali/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
