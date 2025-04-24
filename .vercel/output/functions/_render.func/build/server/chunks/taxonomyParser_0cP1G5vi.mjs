import { a as createComponent, r as renderTemplate } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSinglePage } from './contentParser_CgJzeWoC.mjs';
import { s as slugify } from './ClientRouter_Ba-Ivvbk.mjs';

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/lib/taxonomyParser.astro", void 0);

export { getTaxonomy as g };
