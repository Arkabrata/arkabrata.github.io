import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://arkabrata.github.io",
  output: "static",
  integrations: [sitemap()],
});
