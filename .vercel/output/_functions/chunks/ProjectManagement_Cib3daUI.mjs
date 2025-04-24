import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, b as addAttribute, r as renderTemplate, u as unescapeHTML } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_B0aTuH-i.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { marked } from 'marked';
import { useState } from 'react';
import { h as humanize, m as markdownify } from './ClientRouter_Ba-Ivvbk.mjs';
import * as Icon from 'react-feather';
import { AiFillCheckCircle } from 'react-icons/ai';

const $$Astro$2 = createAstro("https://mekeber.com");
const $$FeatureBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeatureBanner;
  const {
    features: { title, banner }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="mb-14 text-center lg:col-6 lg:order-1 lg:mb-0 lg:mt-0 lg:text-left"> <ul class="breadcrumb mb-8 inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-light px-4 py-2"> <li class="leading-none text-text-dark"> <a class="inline-flex items-center text-primary" href="/"> <svg class="mr-1.5" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z" fill="black"></path> </svg> <span class="text-sm leading-none">Home</span> </a> </li> <li class="leading-none text-text-dark"> <span class="text-sm leading-none">/ ${title}</span> </li> </ul> <h1> ${banner.title} </h1> <p class="mt-6"> ${banner.content} </p> ${banner.button.enable && renderTemplate`<a class="btn btn-white mt-6"${addAttribute(banner.button.link, "href")}> ${banner.button.label} </a>`} </div> <div class="lg:col-6 lg:order-2"> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto", "src": "/images/features-banner-img.png", "width": 412, "height": 483, "alt": "" })} </div> </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/features/FeatureBanner.astro", void 0);

const FeatureTab = ({ feature_tab }) => {
  const [tab, setTab] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "row mt-[120px] items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "col-8 mx-auto mb-10 text-center", children: /* @__PURE__ */ jsx(
      "h2",
      {
        dangerouslySetInnerHTML: {
          __html: marked.parseInline(feature_tab.title)
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-6", children: feature_tab.list.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `features-tab-panel ${tab === index ? "active" : void 0} relative`,
        children: /* @__PURE__ */ jsx("img", { className: "w-full object-contain", src: item.image })
      },
      `item-${index}`
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 lg:col-6 lg:mt-0", children: /* @__PURE__ */ jsx("div", { className: "lg:max-w-[473px]", children: feature_tab.list.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `features-tab-item ${tab === index ? "active" : void 0} mt-9 first:mt-0`,
        children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "lg:text-2xl",
              dangerouslySetInnerHTML: {
                __html: marked.parseInline(item.title)
              },
              onClick: () => setTab(index)
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: item.content })
        ]
      },
      index
    )) }) })
  ] });
};

const Projects = ({ projects }) => {
  return /* @__PURE__ */ jsx("div", { className: "col-12 ", children: /* @__PURE__ */ jsx("div", { className: "row", children: projects.map((item, i) => {
    const FeatherIcon = Icon[humanize(item.icon)];
    return /* @__PURE__ */ jsx("div", { className: "lg:col-6", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8 lg:mt-6  ${projects.length - 1 === i ? "mb-0" : "mb-6 "} `,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-flex h-24 w-24 items-center justify-center p-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "project-icon text-[#FA7398]", children: [
              " ",
              /* @__PURE__ */ jsx(FeatherIcon, { className: "font-semibold" })
            ] }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "absolute left-0 top-0 h-full w-full",
                width: "90",
                height: "90",
                viewBox: "0 0 90 90",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    opacity: "0.1",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z",
                    fill: "#FFCC99"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "h5 font-primary", children: item.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
              item.content,
              " "
            ] })
          ] })
        ]
      }
    ) }, `item-${i}`);
  }) }) });
};

const $$Astro$1 = createAstro("https://mekeber.com");
const $$FeatureService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureService;
  const { feature_service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="gx-5 row mt-16 items-center"> <div class="lg:col-6 lg:order-2"> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "height": 354, "width": 476, "class": "w-full object-contain", "src": feature_service.image, "alt": "" })} </div> </div> <div class="mt-6 lg:col-6 lg:order-1 lg:mt-0"> <div> <h2 class="lg:text-4xl">${feature_service.title}</h2> <p class="mt-4">${feature_service.description}</p> <ul class="mt-6 text-text-dark lg:-ml-4"> ${feature_service.list && feature_service.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-(--color-primary) text-white" })} ${list} </li>`)} </ul> </div> <div class="mt-11 flex flex-wrap"> ${feature_service.buttons.map(
    (button) => button.enable && renderTemplate`<a${addAttribute(`btn m-3 ml-0 block sm:inline-block ${button.outline ? "btn-outline-primary" : "btn-primary"} `, "class")}${addAttribute(button.link, "href")}> ${button.label} </a>`
  )} </div> </div> </div>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/features/FeatureService.astro", void 0);

const $$Astro = createAstro("https://mekeber.com");
const $$ProjectManagement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectManagement;
  const {
    features: {
      project_management: {
        title,
        content,
        management,
        feature_service,
        feature_tab
      }
    }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section features pb-0 bg-emerald-300"> <div class="container"> <div class="row"> <div class="mx-auto text-center lg:col-7"> <h2>${unescapeHTML(markdownify(title))}</h2> <p class="mt-4">${unescapeHTML(markdownify(content))}</p> </div> </div> <div class="p mt-14 rounded-xl bg-white p-6 shadow-lg lg:px-12 lg:py-16"> <div class="row"> ${renderComponent($$result, "Projects", Projects, { "client:load": true, "projects": management.projects, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/Projects", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "FeatureService", $$FeatureService, { "feature_service": feature_service })} ${renderComponent($$result, "FeatureTab", FeatureTab, { "client:load": true, "feature_tab": feature_tab, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/FeatureTab", "client:component-export": "default" })} </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/features/ProjectManagement.astro", void 0);

export { $$FeatureBanner as $, $$ProjectManagement as a };
