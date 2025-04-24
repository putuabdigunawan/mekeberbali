import { c as createAstro, a as createComponent, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, r as renderTemplate } from './astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { p as plainify, c as config, $ as $$AstroFont, a as $$ClientRouter, b as $$TwSizeIndicator, d as $$Header, e as $$Footer, t as theme } from './ClientRouter_Ba-Ivvbk.mjs';
/* empty css                             */

const $$Astro = createAstro("https://mekeber.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
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
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/layouts/Base.astro", void 0);

export { $$Base as $ };
