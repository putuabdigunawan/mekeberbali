import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Blog } from '../../chunks/Blog_DMfx8M7i.mjs';
import { $ as $$BlogCategories } from '../../chunks/BlogCategories_D3tllhhY.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Base } from '../../chunks/Base_-nsSh3wL.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_CgJzeWoC.mjs';
import { g as getTaxonomy } from '../../chunks/taxonomyParser_0cP1G5vi.mjs';
import { s as slugify, h as humanize } from '../../chunks/ClientRouter_Ba-Ivvbk.mjs';
export { renderers } from '../../renderers.mjs';

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const categories = await getTaxonomy("blog", "categories");
  return categories.map((item) => {
    const category = slugify(item);
    return {
      params: { category },
      props: {
        item
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const categories = await getTaxonomy("blog", "categories");
  const { category } = Astro2.params;
  const { item } = Astro2.props;
  const posts = await getSinglePage("blog");
  const filterByTags = taxonomyFilter(posts, "categories", category);
  const page_data = {
    index_title: "Categories",
    slug: item
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": category }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-8 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} <h1 class="h2 mb-14 text-center">
Showing posts from <span class="text-primary">${humanize(item)}</span> category
</h1> </div> </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blog", $$Blog, { "posts": filterByTags })} </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/categories/[category].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
