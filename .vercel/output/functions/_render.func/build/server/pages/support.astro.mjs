import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
export { renderers } from '../renderers.mjs';

const $$Support = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-page="is-support" class="section"> <div class="container"> <div class="banner-grid"> <!-- Kolom Utama --> <div class="banner-card banner-highlight"> <img src="/images/highlight-bg.jpg" class="banner-image" alt="Post Highlight"> <div class="badge-container"> <span class="badge badge-highlight">Highlight</span> </div> <div class="banner-content"> <a href=""> <div class="glass-box"> <h2 class="text-white font-bold text-xl">
Judul Utama namanya Highlight yang Harus ada
</h2> </div> </a> </div> </div> <!-- Kolom Featured --> <div class="banner-card banner-featured"> <img src="/images/featured-1.jpg" class="banner-image" alt="Featured 1"> <div class="badge-container"> <span class="badge badge-featured">Featured</span> </div> <div class="banner-content"> <a href=""> <div class="glass-box"> <h3 class="text-white font-bold text-lg">
Judul Featured 1 atau pelengkap pertama
</h3> </div> </a> </div> </div> <div class="banner-card banner-featured"> <img src="/images/featured-2.jpg" class="banner-image" alt="Featured 2"> <div class="badge-container"> <span class="badge badge-featured">Featured</span> </div> <div class="banner-content"> <a href=""> <div class="glass-box"> <h3 class="text-white font-bold text-lg">
Judul Featured 2 atau pelengkap kedua
</h3> </div> </a> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/support.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/support.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
