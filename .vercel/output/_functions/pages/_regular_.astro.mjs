import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { g as getSinglePage } from '../chunks/contentParser_CgJzeWoC.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://mekeber.com");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { Content } = await data.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <h2>Cik jigur</h2> <div class="container"> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/Default.astro", void 0);

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const page_data = {
    ...page.data
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hidden"> ${renderComponent($$result2, "Shape", $$Shape, {})} </div> <section class="page-hero pb-14 pt-16"> <h1>Disini margondes jadi gogon</h1> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> ${renderComponent($$result2, "Default", $$Default, { "data": page })} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/[regular].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/[regular].astro";
const $$url = "/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
