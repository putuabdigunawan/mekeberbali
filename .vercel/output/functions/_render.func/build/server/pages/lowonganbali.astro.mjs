import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';
import { m as markdownify, h as humanize, c as config } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as Icon from 'react-feather';
import { J as JobPosts } from '../chunks/JobPosts_Bgqs9SvD.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { g as getSinglePage } from '../chunks/contentParser_CgJzeWoC.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_0cP1G5vi.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
import { s as sortByDate, $ as $$Pagination } from '../chunks/sortFunctions_nE0eLfTE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
const $$PageHeaderCareer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeaderCareer;
  const { page_data } = Astro2.props || {};
  const { title, index_title, page_title, slug, content } = page_data || {};
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <h1 class="mb-5 mt-8">${unescapeHTML(markdownify(
    page_data?.page_title ? page_data?.page_title : page_data?.title
  ))}</h1> <p>${unescapeHTML(markdownify(content))}</p> ${page_data.buttons && renderTemplate`<div class="mt-11 justify-center sm:flex"> ${page_data.buttons.map(
    (button) => button?.enable && renderTemplate`<a${addAttribute(`btn m-3 block sm:inline-block ${button?.outline ? "btn-outline-primary" : "btn-primary"} `, "class")}${addAttribute(button?.link, "href")}> ${button?.label} </a>`
  )} </div>`} </div>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/PageHeaderCareer.astro", void 0);

const CareerBenefits = ({ benefits }) => {
  const { title, description, benefit_list } = benefits;
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center lg:col-8", children: [
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4", children: description })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row mt-14 text-center", children: benefit_list.map((item, i) => {
      const FeatherIcon = Icon[humanize(item.icon)];
      return /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:col-6 lg:col-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `mx-auto h-[90px] w-[100px]`,
              style: {
                fill: item.color,
                opacity: 0.1
              },
              viewBox: "0 0 200 200",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M47.1,-61.5C62.2,-53.9,76.5,-41.7,83.1,-25.9C89.6,-10.2,88.6,9.1,82.4,26.4C76.2,43.6,64.9,58.7,50.4,70.5C35.8,82.2,17.9,90.6,0,90.7C-18,90.7,-35.9,82.4,-48.4,70C-61,57.6,-68.1,41,-73.6,23.9C-79.1,6.9,-83,-10.7,-78.6,-26C-74.3,-41.3,-61.6,-54.3,-47.1,-62.1C-32.6,-70,-16.3,-72.7,-0.1,-72.5C16,-72.3,32,-69.2,47.1,-61.5Z",
                  transform: "translate(100 100)"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "benifit-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[28%]", children: /* @__PURE__ */ jsx(FeatherIcon, { color: item.color, size: 48 }) })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "h4 mb-4 mt-8", children: item.title }),
        /* @__PURE__ */ jsx("p", { children: item.content })
      ] }, i);
    }) })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const careerIndex = await getEntry(
    "lowongan",
    "-index"
  );
  const { benefits, career, image } = careerIndex.data;
  const categories = await getTaxonomy("lowongan", "categories");
  const jobPosts = await getSinglePage("lowongan");
  const page_data = {
    title: careerIndex.data.title,
    page_title: careerIndex.data.page_title,
    content: careerIndex.body
  };
  await getSinglePage("lowongan");
  const sortedPosts = sortByDate(jobPosts);
  sortedPosts.filter((item) => item.data.featured);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPosts = recentPost.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": careerIndex.data.title, "meta_title": careerIndex.data.meta_title, "description": careerIndex.data.description, "image": careerIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-10 pt-10"> <div class="container hidden"> ${renderComponent($$result2, "PageHeaderCareer", $$PageHeaderCareer, { "page_data": page_data })} <div class="col-12 mt-14"> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": "", "height": 532, "width": 1044, "class": "w-full rounded" })} ${renderComponent($$result2, "Image", $$Image, { "class": "lg:h-[150px] lg:w-[150px] absolute -left-[8%] bottom-[12%] z-[-1] h-20 w-20 -rotate-90 lg:-left-8 lg:bottom-4", "src": "/images/shape.png", "height": 130, "width": 130, "alt": "" })} ${renderComponent($$result2, "Image", $$Image, { "class": "absolute -bottom-4 -right-4 z-[-1] h-16 w-16 -rotate-90", "src": "/images/shape.png", "alt": "", "height": 64, "width": 64 })} </div> </div> </div> </section> <div class="hidden"> ${renderComponent($$result2, "CareerBenefits", CareerBenefits, { "benefits": benefits, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/CareerBenefits", "client:component-export": "default" })} </div> ${renderComponent($$result2, "JobPosts", JobPosts, { "client:load": true, "categories": categories, "career": career ?? { title: "Default Title", subtitle: "Default Subtitle" }, "posts": currentPosts, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/JobPosts", "client:component-export": "default" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "lowonganbali", "currentPage": 1, "totalPages": totalPages })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowonganbali/index.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowonganbali/index.astro";
const $$url = "/lowonganbali";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
