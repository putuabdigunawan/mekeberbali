import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Blog } from '../chunks/Blog_DMfx8M7i.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$BlogCategories } from '../chunks/BlogCategories_D3tllhhY.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { g as getSinglePage } from '../chunks/contentParser_CgJzeWoC.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_0cP1G5vi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getSinglePage("blog");
  const categories = await getTaxonomy("blog", "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "categories" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": { title: "Categories" } })} </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blog", $$Blog, { "posts": posts })} </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/categories/index.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
