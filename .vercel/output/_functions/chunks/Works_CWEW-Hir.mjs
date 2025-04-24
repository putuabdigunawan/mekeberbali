import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML, h as renderScript, d as renderComponent } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';
import { m as markdownify } from './ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Image } from './_astro_assets_B0aTuH-i.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://mekeber.com");
const $$CounterComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CounterComponent;
  const { counter } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="counter mt-16"> <div class="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10"> ', ' </div> </div> <script>\n  // astro:page-load event is fired when the page is loaded\n  document.addEventListener("astro:page-load", () => {\n    const counters = document.querySelectorAll(".count");\n    const speed = 700;\n    counters.forEach((counter) => {\n      const animate = () => {\n        const value = +counter.getAttribute("aria-valuenow");\n        const data = +counter.innerText;\n\n        const time = value / speed;\n        if (data < value) {\n          counter.innerText = Math.ceil(data + time);\n          setTimeout(animate, 1);\n        } else {\n          counter.innerText = value;\n        }\n      };\n\n      animate();\n    });\n  });\n<\/script>'])), maybeRenderHead(), counter.map((item) => renderTemplate`<div class="border-border sm:col-6 lg:col-3 px-10 py-10 text-center lg:border-r lg:py-0 last:lg:border-none"> <h2> <span class="count"${addAttribute(item.number, "aria-valuenow")}>
0
</span> <span${addAttribute("text-primary", "class")}${addAttribute({
    color: item.color
  }, "style")}>
+
</span> </h2> <p>${item.name}</p> </div>`));
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/about/CounterComponent.astro", void 0);

const $$Astro$2 = createAstro("https://mekeber.com");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { gallery } = Astro2.props;
  const { title, images } = gallery;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center text-center"> <div class="col-8"> <h2>${unescapeHTML(markdownify(title))}</h2> </div> </div> <div class="relative"> <div class="row" id="photo-gallery"> ${images.map((image) => renderTemplate`<div class="picture-item col-6 mt-12"> ${" "} <img class="w-full"${addAttribute(image, "src")} alt=""> </div>`)} <div class="js-shuffle-sizer col-1"></div> </div> <img class="absolute -bottom-5 -left-5 -z-[1]" src="images/shape-2.png" alt=""> <img class="absolute -right-5 bottom-20 -z-[1] h-16 w-16" src="images/shape.png" alt=""> </div> </div> </section> ${renderScript($$result, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/about/Gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/about/Gallery.astro", void 0);

const $$Astro$1 = createAstro("https://mekeber.com");
const $$OurMembers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OurMembers;
  const {
    members: { title, description, member_list }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="mx-auto text-center lg:col-6"> <h2>${title}</h2> <p class="mt-4"> ${description} </p> </div> </div> <div class="row mt-12 justify-center"> <div class="lg:col-10"> <div class="row"> ${member_list.map((item) => renderTemplate`<div class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"> <div class="member-avatar inline-flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "height": 112, "width": 112, "class": "rouded-full h-28 w-28", "src": item.image, "alt": "" })} </div> <div class="mt-6 w-full flex-1 rounded-xl bg-white px-4 py-8 shadow-lg"> <h5 class="font-primary">${item.name}</h5> <p class="mt-1.5">${item.field}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/about/OurMembers.astro", void 0);

const $$Astro = createAstro("https://mekeber.com");
const $$Works = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Works;
  const {
    features: { title, button, features_list }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row items-center justify-between"> <div class="md:col-5"> <h2 class="text-center md:text-left">${unescapeHTML(title)}</h2> </div> ${button.enable && renderTemplate`<div class="mt-6 text-center md:col-3 md:mt-0 md:text-right"> <a class="btn btn-primary"${addAttribute(button.link, "href")}> ${button.label} </a> </div>`} </div> <div class="row mt-14"> ${features_list.map((item, i) => renderTemplate`<div class="mb-8 sm:col-6 lg:col-4"> <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8"> <div class="gradient-number relative inline-block"> <span class="bg-gradient absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> ${i > 8 ? i + 1 : `0${i + 1}`} </span> ${renderComponent($$result, "Image", $$Image, { "height": 90, "width": 90, "src": "/images/gradient-number-bg.png", "alt": "" })} </div> <h4 class="my-6">${item.title}</h4> <p>${item.content}</p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/about/Works.astro", void 0);

export { $$CounterComponent as $, $$Gallery as a, $$Works as b, $$OurMembers as c };
