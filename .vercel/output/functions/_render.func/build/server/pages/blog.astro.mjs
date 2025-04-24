import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, b as addAttribute, r as renderTemplate, e as renderHead, f as renderSlot } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Blog } from '../chunks/Blog_DMfx8M7i.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$BlogCategories } from '../chunks/BlogCategories_D3tllhhY.mjs';
import { h as humanize, s as slugify, p as plainify, c as config, $ as $$AstroFont, a as $$ClientRouter, b as $$TwSizeIndicator, d as $$Header, e as $$Footer, t as theme } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { d as dateFormat, r as readingTime } from '../chunks/readingTime_B27unFHI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
/* empty css                                     */
import { s as sortByDate, $ as $$Pagination } from '../chunks/sortFunctions_nE0eLfTE.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { g as getSinglePage } from '../chunks/contentParser_CgJzeWoC.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_0cP1G5vi.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://mekeber.com");
const $$FeaturedBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedBlog;
  const { summary_length } = config.settings;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="h4 mb-4">Featured Posts</h2> <div class="featured-posts row"> ${posts.map((post) => renderTemplate`<div class="mb-8 md:col-6"> <div class="card"> ${renderComponent($$result, "Image", $$Image, { "class": "card-img", "width": 235, "height": 304, "src": post.data.image, "alt": post.data.title })} <div class="card-content"> <div class="card-tags space-x-1"> ${post.data.categories.map((category) => renderTemplate`<a class="tag"${addAttribute(`/categories/${slugify(category)}`, "href")}> ${humanize(category)} </a>`)} </div> <h3 class="h4 card-title"> <a${addAttribute(`/blog/${post.id}`, "href")}>${post.data.title}</a> </h3> ${post.body && renderTemplate`<p class="mb-4 text-text"> ${plainify(post.body?.slice(0, Number(summary_length)))}...
</p>`} <div class="card-footer mt-6 flex space-x-4"> <span class="inline-flex items-center text-xs text-[#666]"> <svg class="mr-1.5" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 2H11V0.375C11 0.16875 10.8313 0 10.625 0H9.375C9.16875 0 9 0.16875 9 0.375V2H5V0.375C5 0.16875 4.83125 0 4.625 0H3.375C3.16875 0 3 0.16875 3 0.375V2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V3.5C14 2.67188 13.3281 2 12.5 2ZM12.3125 14.5H1.6875C1.58438 14.5 1.5 14.4156 1.5 14.3125V5H12.5V14.3125C12.5 14.4156 12.4156 14.5 12.3125 14.5Z" fill="#939393"></path> </svg> ${dateFormat(post.data.date)} </span> ${post.body && renderTemplate`<span class="inline-flex items-center text-xs text-[#666]"> <svg class="mr-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z" fill="#939393"></path> </svg> ${readingTime(post.body)} </span>`} </div> </div> </div> </div>`)} </div>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/blog/FeaturedBlog.astro", void 0);

const $$Astro = createAstro("https://mekeber.com");
const $$BlogMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogMain;
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  let fontPrimary, fontSecondary;
  {
    fontPrimary = theme.fonts.font_family.primary.replace(/\+/g, " ").replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  }
  {
    fontSecondary = theme.fonts.font_family.secondary.replace(/\+/g, " ").replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  }
  const { title, meta_title, description, image, noindex, canonical } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="pinwheel-astro"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- google font css -->${renderComponent($$result, "AstroFont", $$AstroFont, { "config": [
    {
      src: [],
      preload: false,
      display: "swap",
      name: fontPrimary,
      fallback: "sans-serif",
      cssVariable: "font-primary",
      googleFontsURL: `https://fonts.googleapis.com/css2?family=${pf}&display=swap`
    },
    {
      src: [],
      preload: false,
      display: "swap",
      name: fontSecondary,
      fallback: "sans-serif",
      cssVariable: "font-secondary",
      googleFontsURL: `https://fonts.googleapis.com/css2?family=${sf}&display=swap`
    }
  ] })}<!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>
      ${plainify(meta_title ? meta_title : title ? title : config.site.title)}
    </title><!-- canonical url -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}<!-- noindex robots -->${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- meta-description --><meta name="description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- og-title --><meta property="og:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- og-description --><meta property="og:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}><!-- twitter-title --><meta name="twitter:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- twitter-description --><meta name="twitter:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- og-image --><meta property="og:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><!-- twitter-image --><meta name="twitter:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <body data-page="is-blog"> ${renderComponent($$result, "TwSizeIndicator", $$TwSizeIndicator, {})} ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/BlogMain.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogIndex = await getEntry("blog", "-index");
  const posts = await getSinglePage("blog");
  const categories = await getTaxonomy("blog", "categories");
  const sortedPosts = sortByDate(posts);
  const featuredPost = sortedPosts.filter((item) => item.data.featured);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPosts = recentPost.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "BlogMain", $$BlogMain, { "title": blogIndex.data.title, "meta_title": blogIndex.data.meta_title, "description": blogIndex.data.description, "image": blogIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero py-20 bg-green-300"> <div class="container hidden"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": blogIndex.data })} </div> <div class="container text-center py-20"> <h1 class="py-5">
Berbagai Macam Insight untuk mencari lowongan pekerjaan
</h1> <p>Manfaatkan sebaik mungkin</p> </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "FeaturedBlog", $$FeaturedBlog, { "posts": featuredPost })} ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} <h2 class="h4 mb-4">Recent Posts</h2> ${renderComponent($$result2, "Blog", $$Blog, { "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "blog", "currentPage": 1, "totalPages": totalPages })} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/blog/index.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
