import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { h as humanize } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { marked } from 'marked';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { g as getSinglePage } from '../chunks/contentParser_CgJzeWoC.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_0cP1G5vi.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const IntegrateMedia = ({ integrations, categories }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab ? integrations : integrations.filter((post) => post.data.categories.includes(tab));
  return /* @__PURE__ */ jsx("section", { className: "section pt-0", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:col-10", children: /* @__PURE__ */ jsxs("ul", { className: "integration-tab filter-list flex flex-wrap items-center justify-center", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "span",
        {
          className: `filter-btn ${!tab ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
          onClick: () => setTab(""),
          children: "All Categories"
        }
      ) }),
      categories.map((category, i) => /* @__PURE__ */ jsx("li", { onClick: () => setTab(category), children: /* @__PURE__ */ jsx(
        "span",
        {
          className: `filter-btn ${tab === category ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
          children: humanize(category)
        }
      ) }, `category-${i}`))
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "integration-tab-items row mt-10", children: filterPost.map((item, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "integration-tab-item mb-8 md:col-6 lg:col-4",
        children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "integration-card-head flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: item.data.image, alt: "" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "h4", children: humanize(item.data.name) }),
              item.data.categories.map((category, i2) => /* @__PURE__ */ jsx("span", { className: "font-medium", children: humanize(category) }, i2))
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "my-5 border-y border-border py-5", children: /* @__PURE__ */ jsx(
            "p",
            {
              dangerouslySetInnerHTML: {
                __html: marked.parseInline(
                  item.data.excerpt.slice(0, 80)
                )
              }
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "group inline-flex items-center font-semibold text-text-dark hover:text-primary",
              href: `/integrations/${item.id}`,
              children: [
                "View integration",
                /* @__PURE__ */ jsx(AiOutlineArrowRight, { className: "ml-1.5 text-xl font-bold duration-300 group-hover:ml-3" })
              ]
            }
          )
        ] })
      },
      i
    )) })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const integrationsIndex = await getEntry(
    "integrations",
    "-index"
  );
  const categories = await getTaxonomy("integrations", "categories");
  const integrations = await getSinglePage("integrations");
  const page_data = {
    ...integrationsIndex.data,
    content: integrationsIndex.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": integrationsIndex.data.title, "meta_title": integrationsIndex.data.meta_title, "description": integrationsIndex.data.description, "image": integrationsIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> ${renderComponent($$result2, "IntegrateMedia", IntegrateMedia, { "client:load": true, "integrations": integrations, "categories": categories, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/IntegrateMedia", "client:component-export": "default" })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/integrations/index.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/integrations/index.astro";
const $$url = "/integrations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
