import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { m as markdownify } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
import { a as getEntry, r as renderEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("pages", "404");
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": entry.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="flex h-[40vh] items-center justify-center"> <div class="text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/404.png", "class": "mb-4 inline", "alt": "logo", "height": 120, "width": 120 })} <h1 class="mb-4">${unescapeHTML(markdownify(entry.data.title))}</h1> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/404.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
