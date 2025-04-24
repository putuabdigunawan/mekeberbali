import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Blog } from '../../../chunks/Blog_DMfx8M7i.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../../../chunks/Shape_BJ7ONu_5.mjs';
import { c as config } from '../../../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Base } from '../../../chunks/Base_-nsSh3wL.mjs';
import { s as sortByDate, $ as $$Pagination } from '../../../chunks/sortFunctions_nE0eLfTE.mjs';
import { g as getSinglePage } from '../../../chunks/contentParser_CgJzeWoC.mjs';
import { a as getEntry } from '../../../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const posts = await getSinglePage("blog");
  const recentPost = posts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: {
        slug: i.toString()
        // Perbaikan: Langsung menggunakan i.toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const blogIndex = await getEntry("blog", "-index");
  const { slug } = Astro2.params;
  const posts = await getSinglePage("blog");
  const sortedPosts = sortByDate(posts);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = recentPost.slice(indexOfFirstPost, indexOfLastPost);
  const page_data = {
    index_title: blogIndex.data.title,
    slug: `page / ${slug}`
    // Perbaikan: slug akan selalu ada karena getStaticPaths.
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": blogIndex.data.title, "meta_title": blogIndex.data.meta_title, "description": blogIndex.data.description, "image": blogIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> <section class="section"> <div class="container"> <h2 class="h4 mb-4">Recent Posts</h2> ${renderComponent($$result2, "Blog", $$Blog, { "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "blog", "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/blog/page/[slug].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/blog/page/[slug].astro";
const $$url = "/blog/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
