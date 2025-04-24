import { a as createComponent, r as renderTemplate } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_fLdutI3_.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => {
    const pageData = data.data;
    return pageData.draft !== true;
  });
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
