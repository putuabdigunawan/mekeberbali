import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Shape } from '../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { marked } from 'marked';
import { h as humanize } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import * as Icon from 'react-feather';
import { BsPinAngleFill } from 'react-icons/bs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const Faq = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionHandler = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("section", { className: "faqs section", children: /* @__PURE__ */ jsx("div", { className: "container max-w-[1230px]", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center lg:col-4 lg:text-start", children: [
      /* @__PURE__ */ jsx("h2", { children: data.faq.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 lg:max-w-[404px]", children: data.faq.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 lg:col-8 lg:mt-0", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8", children: data.faq.faq_list.map((item, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `accordion border-b border-border ${activeIndex === i ? "active" : ""}`,
        onClick: () => accordionHandler(i),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "accordion-header relative pl-6 text-lg font-semibold text-text-dark", children: [
            item.title,
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "accordion-icon absolute left-0 top-[22px]",
                x: "0px",
                y: "0px",
                viewBox: "0 0 512 512",
                xmlSpace: "preserve",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "accordion-content pl-6", children: /* @__PURE__ */ jsx(
            "p",
            {
              dangerouslySetInnerHTML: {
                __html: marked.parseInline(item.content)
              }
            }
          ) })
        ]
      },
      `item-${i}`
    )) }) })
  ] }) }) }) });
};

const PricingCard = ({ item }) => {
  const FeatherIcon = Icon[humanize(item.icon)];
  return /* @__PURE__ */ jsx("div", { className: "mt-8 px-3 md:col-6 lg:col-4 lg:mt-0", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `rounded-xl bg-white px-8 py-10 shadow-lg ${item.featured ? "-mt-16 border border-primary " : void 0}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "h3", children: item.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-3 text-2xl text-text-dark", children: [
              item.pre_currency,
              " ",
              item.price,
              ".00 ",
              item.post_currency
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `inline-flex h-16 w-16 items-center justify-center rounded-full font-bold ${item.featured ? "bg-gradient text-white" : "bg-light text-text-dark"}`,
              children: /* @__PURE__ */ jsx(FeatherIcon, { className: "font-semibold" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "my-6 border-y border-border py-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "h6", children: item.services.title }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6", children: item.services.list.map((service, i) => /* @__PURE__ */ jsxs("li", { className: "mb-3 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2", children: /* @__PURE__ */ jsx(
              BsPinAngleFill,
              {
                className: `mr-1 inline h-[14px] w-[14px] ${item.featured ? "text-primary" : void 0}`
              }
            ) }),
            service
          ] }, `service-${i}`)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: `btn ${item.featured ? "btn-primary" : "btn-outline-white"} block h-[48px] w-full rounded-[50px] leading-[30px]`,
              href: item.buttons.buy_now.link,
              children: item.buttons.buy_now.label
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "mt-6 inline-flex items-center text-text-dark",
              href: item.buttons.free_trial.link,
              children: [
                item.buttons.free_trial.label,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-1.5",
                    width: "13",
                    height: "16",
                    viewBox: "0 0 13 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z",
                        fill: "currentColor"
                      }
                    )
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  ) }, item.title);
};

const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const pricing = await getEntry(
    "pricing",
    "-index"
  );
  const page_data = {
    ...pricing.data,
    content: pricing.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": pricing.data.title, "meta_title": pricing.data.meta_title, "description": pricing.data.description, "image": pricing.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section>  <section class="section mt-12 pt-0"> <div class="container"> <div class="row lg:px-10"> ${pricing.data.pricing_card.map((item) => renderTemplate`${renderComponent($$result2, "PricingCard", PricingCard, { "item": item, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/PricingCard.jsx", "client:component-export": "default" })}`)} </div> </div> </section> ${renderComponent($$result2, "Faq", Faq, { "client:load": true, "data": pricing.data, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/Faq.tsx", "client:component-export": "default" })} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/pricing.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
