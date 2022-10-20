import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: staticAdapter(),
    alias: {
      "@styles": "src/styles/Globals.scss",
      "@stylespages/*": "src/styles/pages/*",
      "@stylescomponents/*": "src/styles/components/*",
    }
  },
};

export default config;