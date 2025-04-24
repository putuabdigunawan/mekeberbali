import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$Base } from '../../chunks/Base_-nsSh3wL.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_CgJzeWoC.mjs';
import { m as markdownify, h as humanize } from '../../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_B0aTuH-i.mjs';
import { a as getEntry, r as renderEntry } from '../../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const integrations = await getSinglePage("integrations");
  const paths = integrations.map((post) => ({
    params: {
      single: post.id
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const integrationsIndex = await getEntry(
    "integrations",
    "-index"
  );
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const page_data = {
    ...post.data,
    index_title: integrationsIndex.data.title,
    slug: post.id
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.title, "meta_title": post.data.meta_title, "description": post.data.description, "image": post.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-8 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> <section class="section career-single pt-0"> <div class="container"> <div class="lg:gx-4 row"> <div class="mx-auto lg:col-8"> <div class="lg:py-[60px] rounded-xl bg-white p-7 shadow-lg lg:px-12"> <div class="mb-8 px-4 text-center"> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": post.data.image, "alt": "", "height": 80, "width": 80 })} <h1 class="mt-6">${post.data.title}</h1> <p class="mt-6">${unescapeHTML(markdownify(post.data.excerpt))}</p> ${post.data.button && renderTemplate`<a class="btn btn-primary mt-8 px-10"${addAttribute(post.data.button.link, "href")}> ${humanize(post?.data.button.label)} ${humanize(post.data.name)} </a>`} </div> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/integrations/[single].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/integrations/[single].astro";
const $$url = "/integrations/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
