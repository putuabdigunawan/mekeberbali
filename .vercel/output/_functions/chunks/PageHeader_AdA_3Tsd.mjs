import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, r as renderTemplate } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';
import { h as humanize, s as slugify, m as markdownify } from './ClientRouter_Ba-Ivvbk.mjs';

const $$Astro = createAstro("https://mekeber.com");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { page_data } = Astro2.props || {};
  const { title, index_title, page_title, slug, content } = page_data || {};
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <ul class="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-light px-4 py-2"> <li class="leading-none text-text-dark"> <a href="/" class="inline-flex items-center text-primary"> <svg class="mr-1.5" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z" fill="black"></path> </svg> <span class="text-sm leading-none">Home</span> </a> </li> <li class="leading-none text-text-dark"> ${index_title ? renderTemplate`<span class="text-sm leading-none">
/${" "} <a${addAttribute(`/${slugify(index_title)}`, "href")} class="text-primary"> ${index_title} </a>${" "}
/ ${page_title ? page_title : humanize(slug.replace("page /", ""))} </span>` : renderTemplate`<span class="text-sm leading-none">/ ${title}</span>`} </li> </ul> <h1 class="mb-5 mt-8">${unescapeHTML(markdownify(
    page_data?.page_title ? page_data?.page_title : page_data?.title
  ))}</h1> <p>${unescapeHTML(markdownify(content))}</p> ${page_data.buttons && renderTemplate`<div class="mt-11 justify-center sm:flex"> ${page_data.buttons.map(
    (button) => button?.enable && renderTemplate`<a${addAttribute(`btn m-3 block sm:inline-block ${button?.outline ? "btn-outline-primary" : "btn-primary"} `, "class")}${addAttribute(button?.link, "href")}> ${button?.label} </a>`
  )} </div>`} </div>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
