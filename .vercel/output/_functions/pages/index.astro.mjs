import { a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$BannerTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-cover bg-center bg-no-repeat w-full relative"> ${renderComponent($$result, "Image", $$Image, { "height": 90, "width": 90, "src": "/images/tech.jpg", "alt": "", "class": "w-full h-[380px] absolute", "fetchpriority": "high" })} <div class="py-8 md:py-20 bg-stone-950/20 backdrop-blur-md"> <div class="container"> <div class="row items-center mt-10 mb-5"> <div class="text-center"> <h1 class="banner-title text-white">Lowongan Kerja Bali 2025</h1> <p class="text-white">
Temukan lowongan kerja yang sesuai dengan skill yang kamu punya.
</p> <a class="btn btn-white mt-8" href="/lowongan"> Cari </a> </div> </div> </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/BannerTop.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntry(
    "homepage",
    "-index"
  );
  const { banner, key_features, service, testimonial } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTop", $$BannerTop, {})} ${maybeRenderHead()}<div class="hidden"> ${renderComponent($$result2, "Cta", $$Cta, {})} </div> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/index.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
