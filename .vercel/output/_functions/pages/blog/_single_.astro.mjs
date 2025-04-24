import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as addAttribute } from '../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_-nsSh3wL.mjs';
import { d as dateFormat, r as readingTime } from '../../chunks/readingTime_B27unFHI.mjs';
import { h as humanize, s as slugify } from '../../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_B0aTuH-i.mjs';
import { r as renderEntry } from '../../chunks/_astro_content_fLdutI3_.mjs';
import { FaRegUserCircle, FaRegCalendarAlt, FaRegClock, FaRegFolder } from 'react-icons/fa';
import { g as getSinglePage } from '../../chunks/contentParser_CgJzeWoC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://mekeber.com");
const $$BlogSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSingle;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${maybeRenderHead()}<section class="section blog-single"> <div class="container"> <div class="row justify-center"> <div class="lg:col-10"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl aspect-video object-contain", "src": post.data.image, "alt": "", "width": 920, "height": 450 })} </div> <div class="mt-10 max-w-[810px] lg:col-9"> <h1 class="h2"> ${post.data.title} </h1> <div class="mb-5 mt-6 flex items-center space-x-2"> <ul class="mb-4"> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegUserCircle", FaRegUserCircle, { "className": "mr-2 -mt-1 inline-block" })} ${humanize(post.data.author)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-2 -mt-1 inline-block" })} ${dateFormat(post.data.date)} </li> ${post.body && renderTemplate`<li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegClock", FaRegClock, { "className": "mr-2 -mt-1 inline-block" })} ${readingTime(post.body)} </li>`} <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegFolder", FaRegFolder, { "className": "mr-2 -mt-1 inline-block" })} ${post.data.categories.map((category, index) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}`, "href")} class="hover:text-primary"> ${humanize(category)} ${index !== post.data.categories.length - 1 && ","} </a>`)} </li> </ul> </div> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/BlogSingle.astro", void 0);

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const posts = await getSinglePage("blog");
  const paths = posts.map((post) => ({
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
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogSingle", $$BlogSingle, { "post": post })} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/blog/[single].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/blog/[single].astro";
const $$url = "/blog/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
