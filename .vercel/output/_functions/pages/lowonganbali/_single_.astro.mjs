import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { $ as $$PageHeader } from '../../chunks/PageHeader_AdA_3Tsd.mjs';
import { $ as $$Base } from '../../chunks/Base_-nsSh3wL.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_CgJzeWoC.mjs';
import { a as getEntry, r as renderEntry } from '../../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://mekeber.com");
const $$CareerSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CareerSidebar;
  const { posts, sidebar_content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="career-single-sidebar mt-8 lg:col-4 lg:mt-0"> ${sidebar_content && sidebar_content.enable && renderTemplate`<div class="mb-8 rounded-xl bg-white px-7 py-10 shadow-lg"> <h5 class="h5">${sidebar_content.title}</h5> <p class="mt-4">${sidebar_content.content}</p> <a class="btn btn-primary mt-6 block w-full"${addAttribute(sidebar_content.button.link, "href")}> ${sidebar_content.button.label} </a> </div>`} ${posts?.slice(0, 2).map((item) => renderTemplate`<div class="mb-8 rounded-xl bg-white px-7 py-10 shadow-lg"> <h5 class="h5"> <a${addAttribute(`/lowongan/${item.id}`, "href")}></a> ${item.data.title} </h5> <p class="mt-6">${item.data.excerpt}</p> <ul class="text-text-dark mt-6 flex flex-wrap items-center"> <li class="my-1 mr-8 inline-flex items-center"> <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z" fill="currentColor"></path> </svg> ${item.data.job_nature} </li> <li class="my-1 mr-8 inline-flex items-center"> <svg class="mr-1" width="16" height="20" viewBox="0 0 23 33" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.5007 0.970703C5.61504 0.970703 0.824219 5.75958 0.824219 11.6472C0.824219 20.1359 10.3612 31.2259 10.7669 31.6956L11.5007 32.5401L12.2345 31.6937C12.6402 31.2259 22.1772 20.1359 22.1772 11.6472C22.1772 5.75958 17.3863 0.970703 11.5007 0.970703ZM11.5007 29.5351C9.2761 26.7709 2.7654 18.1229 2.7654 11.6472C2.7654 6.83111 6.68463 2.91188 11.5007 2.91188C16.3167 2.91188 20.236 6.83111 20.236 11.6472C20.236 18.1171 13.7253 26.7709 11.5007 29.5351ZM11.5007 6.09347C8.28998 6.09347 5.67716 8.70629 5.67716 11.917C5.67716 15.1277 8.28998 17.7405 11.5007 17.7405C14.7114 17.7405 17.3242 15.1277 17.3242 11.917C17.3242 8.70629 14.7114 6.09347 11.5007 6.09347ZM11.5007 15.7993C9.35957 15.7993 7.61834 14.0581 7.61834 11.917C7.61834 9.77588 9.35957 8.03464 11.5007 8.03464C13.6418 8.03464 15.383 9.77588 15.383 11.917C15.383 14.0581 13.6418 15.7993 11.5007 15.7993Z" fill="currentColor"></path> </svg> ${item.data.location} </li> <li class="my-1 mr-8"> <a class="text-primary inline-flex items-center font-semibold"${addAttribute(`/lowongan/${item.id}`, "href")}>
Read More
${renderComponent($$result, "AiOutlineArrowRight", AiOutlineArrowRight, { "className": "ml-1.5 text-xl font-bold" })} </a> </li> </ul> </div>`)} </div>`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/career/CareerSidebar.astro", void 0);

const similerItems = (currentItem, allItems, slug) => {
  let categories = [];
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }
  const filterByCategories = allItems.filter(
    (item) => categories.find((category) => item.data.categories.includes(category))
  );
  const mergedItems = [.../* @__PURE__ */ new Set([filterByCategories])];
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);
  return filterBySlug;
};

const $$Astro = createAstro("https://mekeber.com");
async function getStaticPaths() {
  const careers = await getSinglePage("lowongan");
  const paths = careers.map((post) => ({
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
  const careerIndex = await getEntry(
    "lowongan",
    "-index"
  );
  const careers = await getSinglePage("lowongan");
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const similarPosts = similerItems(post, careers, post.id);
  const page_data = {
    index_title: careerIndex.data.title,
    page_title: post.data.title,
    slug: post.id
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.title, "meta_title": post.data.meta_title, "description": post.data.description, "image": post.data.image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> <section class="section career-single pt-0"> <div class="container"> <div class="lg:gx-4 row"> <div class="lg:col-8"> <div class="content lg:py-[60px] rounded-xl bg-white p-7 shadow-lg lg:px-12"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> ${renderComponent($$result2, "CareerSidebar", $$CareerSidebar, { "posts": similarPosts[0], "sidebar_content": careerIndex.data.sidebar_content })} </div> </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowonganbali/[single].astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowonganbali/[single].astro";
const $$url = "/lowonganbali/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
