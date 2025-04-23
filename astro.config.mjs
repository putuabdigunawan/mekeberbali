import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://mekeber.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  vite: { plugins: [tailwindcss()] },
  output: 'server', // ✅ Hybrid mode (Astro ≥ v2.5+)
  adapter: vercel(), // Tidak perlu adapter jika tidak full
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        // kecuali login dan register
        return !page.includes('/signin') && !page.includes('/signup');
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Blockquote",
        "@/shortcodes/Badge",
        "@/shortcodes/ContentBlock",
        "@/shortcodes/Changelog",
        "@/shortcodes/Tab",
        "@/shortcodes/Tabs",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  // https://astro.build/config
  // output: 'hybrid',
  // outDir: './build',
});
