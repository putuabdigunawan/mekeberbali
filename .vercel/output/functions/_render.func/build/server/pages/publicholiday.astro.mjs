import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { $ as $$Cta } from '../chunks/Cta_XMg3ReMw.mjs';
import { a as getEntry } from '../chunks/_astro_content_fLdutI3_.mjs';
export { renderers } from '../renderers.mjs';

const $$Publicholiday = createComponent(async ($$result, $$props, $$slots) => {
  const publicholiday = await getEntry(
    "publicholiday",
    "-index"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": publicholiday.data.title, "meta_title": publicholiday.data.meta_title, "description": publicholiday.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center">Hari Libur Nasional Indonesia 2025</h1> <div class="md:flex items-start md:mt-10"> <div class="w-4/6 leading-snug space-y-5"> <div class="content"> <table class="table info"> <!-- head --> <thead> <tr> <th>No</th> <th>Tanggal</th> <th>Libur</th> </tr> </thead> <tbody> <!-- row 1 --> <tr> <th>1</th> <td>1 Januari</td> <td>Tahun Baru 2025 Masehi</td> </tr> <!-- row 2 --> <tr> <th>2</th> <td>27 Januari</td> <td>Isra Miraj Nabi Muhammad SAW</td> </tr> <!-- row 3 --> <tr> <th>3</th> <td>29 Januari</td> <td>Tahun Baru Imlek 2576 Kongzili</td> </tr> <!-- row 4 --> <tr> <th>4</th> <td>29 Maret</td> <td>Hari Suci Nyepi (Tahun Baru Saka 1947)</td> </tr> <!-- row 5 --> <tr> <th>5</th> <td>31 Maret - 1 April</td> <td>Idul Fitri 1446 Hijriah</td> </tr> <!-- row 6 --> <tr> <th>6</th> <td>18 April</td> <td>Wafat Yesus Kristus</td> </tr> <!-- row 7 --> <tr> <th>7</th> <td>20 April</td> <td>Kebangkitan Yesus Kristus (Paskah)</td> </tr> <!-- row 8 --> <tr> <th>8</th> <td>1 Mei</td> <td>Hari Buruh</td> </tr> <!-- row 8 --> <tr> <th>9</th> <td>12 Mei</td> <td>Hari Raya Waisak 2569 BE</td> </tr> <!-- row 8 --> <tr> <th>10</th> <td>29 Mei</td> <td>Kenaikan Yesus Kristus</td> </tr> <!-- row 8 --> <tr> <th>11</th> <td>1 Juni</td> <td>Hari Lahir Pancasila</td> </tr> <!-- row 8 --> <tr> <th>12</th> <td>6 Juni</td> <td>Idul Adha 1446 Hijriah</td> </tr> <!-- row 8 --> <tr> <th>13</th> <td>27 Juni</td> <td>1 Muharam Tahun Baru Islam 1447 Hijriah</td> </tr> <!-- row 8 --> <tr> <th>14</th> <td>17 Agustus</td> <td>Proklamasi Kemerdekaan</td> </tr> <!-- row 8 --> <tr> <th>15</th> <td>5 September</td> <td>Maulid Nabi Muhammad SAW</td> </tr> <!-- row 8 --> <tr> <th>16</th> <td>25 Desember</td> <td>Kelahiran Yesus Kristus</td> </tr> </tbody> </table> </div> </div> <div class="w-2/6 sticky top-30 md:mx-3 mt-5">sewain mobil</div> </div> </div> </section> <div class="hidden"> ${renderComponent($$result2, "Cta", $$Cta, {})} </div> ` })}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/publicholiday.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/publicholiday.astro";
const $$url = "/publicholiday";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publicholiday,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
