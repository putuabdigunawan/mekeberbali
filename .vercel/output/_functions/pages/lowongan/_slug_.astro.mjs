import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { $ as $$Base } from '../../chunks/Base_-nsSh3wL.mjs';
import { $ as $$CtaLowongan } from '../../chunks/CtaLowongan_DgRbq2Aj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
const prerender = false;
async function getStaticPaths() {
  try {
    const apiUrl = "https://firstoffice.mekeber.com/api/bali/lowongan";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error(
        "Error fetching lowongan untuk getStaticPaths:",
        response.status
      );
      return [];
    }
    const result = await response.json();
    const lowongan = result?.data || [];
    return lowongan.map((item) => ({
      params: { slug: item.slug }
    }));
  } catch (error) {
    console.error("Error di getStaticPaths:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const apiBaseUrl = "https://firstoffice.mekeber.com/api/bali/lowongan";
  const normalizedApiUrl = apiBaseUrl.endsWith("/") ? apiBaseUrl : apiBaseUrl + "/";
  const responseDetail = await fetch(`${normalizedApiUrl}${slug}`);
  const ambil = await responseDetail.json();
  const lowonganDetail = ambil.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "`${lowonganDetail.title}` + | Mekeber", "meta_title": lowonganDetail.meta_title, "description": lowonganDetail.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container py-8 -mb-10"> <div class="content mt-5 rounded-xl bg-white p-5 shadow-lg"> ${lowonganDetail ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h1 class="mt-5 text-center px-3">${lowonganDetail.title}</h1> <div>${unescapeHTML(lowonganDetail.content)}</div> <p>Lokasi: ${lowonganDetail.location}</p> ` })}` : renderTemplate`<p>Lowongan tidak ditemukan.</p>`} </div> <div class="mt-5"> <a href="/lowongan" class="inline-flex items-center font-semibold text-primary"> ${renderComponent($$result2, "FaRegArrowAltCircleLeft", FaRegArrowAltCircleLeft, {})} &nbsp;&nbsp;Kembali ke semua lowongan</a> </div> </div> </section> ${renderComponent($$result2, "CtaLowongan", $$CtaLowongan, {})} ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowongan/[slug].astro", void 0);
const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/lowongan/[slug].astro";
const $$url = "/lowongan/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
