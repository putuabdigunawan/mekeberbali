import { a as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$FeatureBanner, a as $$ProjectManagement } from '../chunks/ProjectManagement_Cib3daUI.mjs';
import { $ as $$Shape } from '../chunks/Shape_BJ7ONu_5.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const features = await getEntry(
    "features",
    "-index"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": features.data.title, "meta_title": features.data.meta_title, "description": features.data.description, "image": features.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${renderComponent($$result2, "FeatureBanner", $$FeatureBanner, { "features": features.data })} ${renderComponent($$result2, "ProjectManagement", $$ProjectManagement, { "features": features.data })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/features.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/features.astro";
const $$url = "/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Features,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
