import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_AdA_3Tsd.mjs';
import { c as config } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B0aTuH-i.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry(
    "contact",
    "-index"
  );
  const { contact_form_action } = config.params;
  const contact = entry.data;
  const page_data = {
    ...contact,
    content: entry.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": contact.title, "meta_title": contact.meta_title, "description": contact.description, "image": contact.image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-6 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> <section class="section pt-0"> <div class="container"> <div class="row"> <div class="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9"> <div class="contact-img relative inline-flex pb-5 pl-5"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/contact-img.png", "height": 544, "width": 500, "alt": "" })} ${renderComponent($$result2, "Image", $$Image, { "class": "absolute bottom-0 left-0 -z-[1] h-14 w-14", "src": "/images/shape-2.png", "alt": "", "height": 56, "width": 56 })} </div> </div> <div class="md:col-6 md:order-1"> <form class="lg:max-w-[484px]"${addAttribute(contact_form_action, "action")} method="POST"> <div class="form-group mb-5"> <label class="form-label" for="name">Full Name</label> <input class="form-control" type="text" id="name" placeholder="Your Full Name"> </div> <div class="form-group mb-5"> <label class="form-label" for="eamil">Email Adrdess</label> <input class="form-control" type="text" id="email" placeholder="Your  Email Address"> </div> <div class="form-group mb-5"> <label class="form-label" for="reason">Reason/Purpose</label> <select name="reason" id="reason" class="form-select" required> <option value="">Select reason/purpose</option> <option value="investment plane">Investment Plan</option> <option value="investment plane-2">Investment Plan 2</option> <option value="investment plane-3">Investment Plan 3</option> </select> </div> <div class="form-group mb-5"> <label class="form-label" for="message">Message Here</label> <textarea class="form-control" id="message" cols="30" rows="6"></textarea> </div> <input class="btn btn-primary block w-full" type="submit" value="Send Message"> </form> </div> </div> </div> </section> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/contact.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
