import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mekeber.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mb-4 mt-3 flex items-center justify-center" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="mr-5 flex items-center rounded-full border px-4 py-2 text-text-dark hover:shadow-lg md:px-6 md:py-3"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>Previous</span></a>` : renderTemplate`<span class="  mr-5 flex min-w-[150px] items-center rounded-[50px] border-white bg-white px-4 py-2 text-center capitalize text-text md:px-6 md:py-3 "><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>Previous</span></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page"${addAttribute(`mx-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:h-12  md:w-12`, "class")}>${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page"${addAttribute(`mx-1 flex h-10 w-10 items-center justify-center rounded-full border bg-white text-text-dark hover:bg-primary hover:text-white md:h-12 md:w-12 `, "class")}>${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="ml-5 flex items-center rounded-full border px-4 py-2 text-text-dark hover:shadow-lg md:px-6 md:py-3"><span>Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="  ml-5 flex min-w-0 items-center rounded-[50px]  border-white bg-white px-4 py-2 text-center capitalize text-text md:px-6 md:py-3 "><span>Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/components/Pagination.astro", void 0);

const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.data.date && b.data.date).valueOf() - new Date(a.data.date && a.data.date).valueOf()
  );
  return sortedArray;
};
const sortByDate1 = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.pubDate && b.pubDate).valueOf() - new Date(a.pubDate && a.pubDate).valueOf()
  );
  return sortedArray;
};

export { $$Pagination as $, sortByDate1 as a, sortByDate as s };
