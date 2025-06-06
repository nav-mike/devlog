// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://devlog-snowy.vercel.app",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

