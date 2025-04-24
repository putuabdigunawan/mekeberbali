import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, d as renderComponent, b as addAttribute, r as renderTemplate } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { m as markdownify, h as humanize } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as Icon from 'react-feather';
import { Play, Star } from 'react-feather';
import { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { AiFillCheckCircle } from 'react-icons/ai';
import SwiperCore from 'swiper';
/* empty css                                     */
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://mekeber.com");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props;
  const { title, button, image, content } = banner;
  return renderTemplate`${maybeRenderHead()}<section class="section banner relative"> <div class="container"> <div class="row items-center"> <div class="lg:col-6"> <h1 class="banner-title">${unescapeHTML(markdownify(title))}</h1> <p class="mt-6">${unescapeHTML(markdownify(content))}</p> ${button.enable && renderTemplate`<a class="btn btn-white mt-8"${addAttribute(button.link, "href")}> ${button.label} </a>`} </div> <div class="lg:col-6"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-contain", "alt": "banner", "src": image, "width": 603, "height": 396 })} </div> </div> </div> ${renderComponent($$result, "Image", $$Image, { "class": "banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%] hidden", "alt": "banner", "src": "/images/banner-shape.png", "width": 496, "height": 466 })} </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/Banner.astro", void 0);

const HomapageFeature = ({ feature_list }) => {
  return /* @__PURE__ */ jsx("div", { className: "key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4", children: feature_list.map((item, i) => {
    const FeatherIcon = Icon[humanize(item.icon)];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "h4 text-xl lg:text-2xl", children: item.title }),
            /* @__PURE__ */ jsx("p", { children: item.content })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "icon mt-4", children: /* @__PURE__ */ jsx(FeatherIcon, {}) })
        ]
      },
      i
    );
  }) });
};

const $$Astro$2 = createAstro("https://mekeber.com");
const $$KeyFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$KeyFeatures;
  const { key_features } = Astro2.props;
  const { title, description, feature_list } = key_features;
  return renderTemplate`${maybeRenderHead()}<section class="section key-feature relative"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute left-0 top-0 -z-[1] -translate-y-1/2 hidden", "src": "/images/feature-shape.png", "height": 126, "width": 63, "alt": "" })} <div class="container"> <div class="row justify-between text-center lg:text-start"> <div class="lg:col-5"> <h2>${unescapeHTML(markdownify(title))}</h2> </div> <div class="mt-6 lg:col-5 lg:mt-0"> <p>${unescapeHTML(markdownify(description))}</p> </div> </div> ${renderComponent($$result, "HomapageFeature", HomapageFeature, { "feature_list": feature_list, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/HomapageFeature", "client:component-export": "default" })} </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/KeyFeatures.astro", void 0);

const HomepageTab = ({ homepage_tab }) => {
  const { title, description, tab_list } = homepage_tab;
  const [tab, setTab] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "tab gx-5 row items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-7 lg:order-2", children: /* @__PURE__ */ jsx("div", { className: "tab-content", children: tab_list.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `tab-content-panel ${tab === index ? "active" : void 0}`,
        children: /* @__PURE__ */ jsx("img", { className: "w-full object-contain", src: item.image })
      },
      index
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 lg:col-5 lg:order-1 lg:mt-0", children: /* @__PURE__ */ jsxs("div", { className: "text-container", children: [
      /* @__PURE__ */ jsx("h2", { className: "lg:text-4xl", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4", children: description }),
      /* @__PURE__ */ jsx("ul", { className: "tab-nav mt-8! border-b-0", children: tab_list.map((item, index) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return /* @__PURE__ */ jsxs(
          "li",
          {
            className: `tab-nav-item ${tab === index ? "active" : void 0}`,
            onClick: () => setTab(index),
            children: [
              /* @__PURE__ */ jsx("span", { className: "tab-icon mr-3", children: /* @__PURE__ */ jsx(FeatherIcon, {}) }),
              item.title
            ]
          },
          index
        );
      }) })
    ] }) })
  ] });
};

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width
}) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !play ? /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
    /* @__PURE__ */ jsx("button", { className: "video-play-btn", onClick: () => setPlay(true), children: /* @__PURE__ */ jsx(Play, {}) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        width,
        height,
        src,
        alt: title,
        className: "inline h-auto max-w-full rounded-2xl"
      }
    )
  ] }) : /* @__PURE__ */ jsx("div", { className: "youtube mx-auto text-center", children: /* @__PURE__ */ jsx(
    YouTube,
    {
      videoId: video_id,
      opts: videoOptions,
      iframeClassName: `  aspect-video ${video_height} ${video_width} max-w-full bg-transparent rounded-2xl`
    }
  ) }) });
};

const $$Astro$1 = createAstro("https://mekeber.com");
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Service;
  const { service } = Astro2.props;
  const { homepage_tab, our_service } = service;
  return renderTemplate`${maybeRenderHead()}<section class="section services"> <div class="container"> ${renderComponent($$result, "HomepageTab", HomepageTab, { "client:load": true, "homepage_tab": homepage_tab, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/HomepageTab", "client:component-export": "default" })} ${our_service.map((item, index) => renderTemplate`<div class="gx-5 row mt-12 items-center lg:mt-0"> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "order-0" : "order-1"}`, "class")}> ${item.image && renderTemplate`<div class="relative"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 667, "height": 498, "src": item.image })} ${renderComponent($$result, "Image", $$Image, { "class": "absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2 hidden", "src": "/images/shape-2.png", "alt": "", "height": 147, "width": 151 })} </div>`} ${item.video && renderTemplate`${renderComponent($$result, "VideoComponent", VideoComponent, { "client:load": true, "src": item.video.thumbnail, "height": 370, "width": 700, "title": item.title, "video_id": item.video.video_id, "video_width": "w-[700px]", "video_height": "h-[370px]", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/VideoComponent", "client:component-export": "default" })}`} </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "order-1" : "order-0"}`, "class")}> <div class="text-container"> <h2 class="lg:text-4xl">${item.title}</h2> <p class="mt-4">${item.description}</p> ${item.button && item.button.enable && renderTemplate`<a class="btn btn-white mt-6"${addAttribute(item.button.link, "href")}> ${item.button.label} </a>`} <ul class="mt-6 text-text-dark lg:-ml-4"> ${item.list && item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-(--color-primary) text-white" })} ${list} </li>`)} </ul> </div> </div> </div>`)} </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/Service.astro", void 0);

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "reviews-carousel relative", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        pagination: {
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true
        },
        onSwiper: (swiper2) => {
          setSwiper(swiper2);
        },
        loop: true,
        autoplay: {
          delay: 4e3
        },
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        },
        children: list.map((item, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "review", children: [
          /* @__PURE__ */ jsx("div", { className: "review-author-avatar bg-gradient", children: /* @__PURE__ */ jsx("img", { src: item.avatar, alt: "" }) }),
          /* @__PURE__ */ jsx("h4", { className: "mb-2", children: item.author }),
          /* @__PURE__ */ jsx("p", { className: "mb-4 text-text-dark/80", children: item.organization }),
          /* @__PURE__ */ jsx("p", { children: item.content }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `review-rating mt-6 flex items-center justify-center space-x-2.5 ${item.rating}`,
              children: [
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {})
              ]
            }
          )
        ] }) }, "feature-" + i))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative flex justify-center testimonial-slider-pagination", children: /* @__PURE__ */ jsx(
      "div",
      {
        width: "100%",
        className: "swiper-pagination reviews-carousel-pagination !bottom-0",
        style: { width: "100%" },
        ref: paginationRef
      }
    ) })
  ] });
};

const $$Astro = createAstro("https://mekeber.com");
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { testimonial } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="reviews"> <div class="container"> <div class="row justify-between"> <div class="lg:col-6"> <h2>${testimonial.title}</h2> </div> <div class="lg:col-4"> <p> ${testimonial.description} </p> </div> </div> <div class="row mt-10"> <div class="col-12"> ${renderComponent($$result, "TestimonialSlider", TestimonialSlider, { "list": testimonial.testimonial_list, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/TestimonialSlider", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/Testimonial.astro", void 0);

const $$IndexOri = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntry(
    "homepage",
    "-index"
  );
  const { banner, key_features, service, testimonial } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Banner, { "banner": banner })} ${renderComponent($$result2, "KeyFeatures", $$KeyFeatures, { "key_features": key_features })} ${renderComponent($$result2, "Service", $$Service, { "service": service })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonial": testimonial })} ${maybeRenderHead()}<div class="hidden"> ${renderComponent($$result2, "Cta", $$Cta, {})} </div> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/index-ori.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/index-ori.astro";
const $$url = "/index-ori";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexOri,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
