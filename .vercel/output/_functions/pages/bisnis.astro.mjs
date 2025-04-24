import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_fLdutI3_.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { g as getSinglePage } from '../chunks/contentParser_CgJzeWoC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const categories = [...new Set(allPosts.map((post) => post.data.categories))];
  await getSinglePage("blog");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Daftar Kategori" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="background-color: #fffff0;"> <div class="container py-5"> <h1 class="text-2xl font-bold mt-5">📁 Semua Kategori</h1> ${allPosts.map((post) => renderTemplate`<ul> <li>${post.data.title}</li> </ul>`)} <h1>
Judul nya adalah ${allPosts[3].data.title} </h1> <div class="mt-6 grid grid-cols-2 gap-4 mb-5"> ${categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category}`, "href")} class="p-4 border rounded-lg hover:bg-gray-100"> <h2 class="font-medium"># ${category}</h2> <p class="text-sm text-gray-600"> ${allPosts.filter((post) => post.data.categories === category).length}${" "}
artikel
</p> </a>`)} </div> </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/bisnis/index.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/bisnis/index.astro";
const $$url = "/bisnis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
