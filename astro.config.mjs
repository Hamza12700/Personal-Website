import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercel({
    speedInsights: { enabled: true },
  }),
});
