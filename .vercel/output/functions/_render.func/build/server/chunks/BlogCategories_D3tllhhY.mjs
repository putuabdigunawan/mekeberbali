import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';
import { h as humanize, s as slugify } from './ClientRouter_Ba-Ivvbk.mjs';

const $$Astro = createAstro("https://mekeber.com");
const $$BlogCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCategories;
  const { categories } = Astro2.props;
  const params = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div class="category-filter mb-10 mt-3 rounded-xl bg-[#EEEEEE] p-4"> <ul class="filter-list flex flex-wrap items-center"> <li> <a${addAttribute(`filter-btn ${!params.category ? "filter-btn-active" : void 0} btn btn-sm`, "class")} href="/categories">All Categories</a> </li> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`filter-btn ${params.category === slugify(category) ? "filter-btn-active" : void 0} btn btn-sm`, "class")}${addAttribute(`/categories/${slugify(category)}`, "href")}> ${humanize(category)} </a> </li>`)} </ul> </div>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/blog/BlogCategories.astro", void 0);

export { $$BlogCategories as $ };
