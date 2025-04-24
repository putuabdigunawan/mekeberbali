import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$CounterComponent, a as $$Gallery, b as $$Works, c as $$OurMembers } from '../chunks/Works_CWEW-Hir.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getEntry("about", "-index");
  const { counter, gallery, features, members } = about.data;
  const page_data = {
    ...about.data,
    content: about.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": about.data.title, "meta_title": about.data.meta_title, "description": about.data.description, "image": about.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero py-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> ${renderComponent($$result2, "CounterComponent", $$CounterComponent, { "counter": counter })} ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery })} ${renderComponent($$result2, "Works", $$Works, { "features": features })} ${renderComponent($$result2, "OurMembers", $$OurMembers, { "members": members })} </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/about.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
