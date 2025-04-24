import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
import { AiFillCheckCircle } from 'react-icons/ai';
export { renderers } from '../renderers.mjs';

const $$HowItWorks = createComponent(async ($$result, $$props, $$slots) => {
  const how_it_works = await getEntry(
    "how-it-works",
    "-index"
  );
  const { performance, our_works } = how_it_works.data;
  const page_data = {
    ...how_it_works.data,
    content: how_it_works.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": how_it_works.data.title, "meta_title": how_it_works.data.meta_title, "description": how_it_works.data.description, "image": how_it_works.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> <div class="row mt-14"> ${performance.map((item, i) => renderTemplate`<div class="mt-10 text-center sm:col-6 md:col-4 md:mb-0"> <div${addAttribute(`relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg ${performance.length - 1 !== i ? "after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block" : void 0}`, "class")}> ${renderComponent($$result2, "Image", $$Image, { "height": 122, "width": 144, "src": item.image, "alt": "" })} </div> <h2 class="h5">${item.title}</h2> <p class="mt-4">${item.description}</p> </div>`)} </div> </div> </section> <section> <div class="container"> ${our_works.map((item, index) => renderTemplate`<div class="gx-5 row mt-16 items-center first:mt-12"> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "lg:order-1" : "lg:order-0"}`, "class")}> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 473, "height": 286, "src": item.image })} </div> </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "lg:order-0" : "lg:order-1"}`, "class")}> <div class="text-container"> <h2 class="lg:text-4xl">${item.title}</h2> ${item.list && renderTemplate`<ul class="mt-6 text-text-dark lg:-ml-4"> ${item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result2, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-(--color-primary) text-white" })} ${list} </li>`)} </ul>`} </div> </div> </div>`)} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/how-it-works.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/how-it-works.astro";
const $$url = "/how-it-works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowItWorks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
