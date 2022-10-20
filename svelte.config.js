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
      "@i18n": "src/i18n.ts",
      "@config": "src/common/config.ts",
      "@utils": "src/common/utils.ts",
      "@typing/*": "src/common/typing/*",
      "@services": "src/common/services/index.ts",
      "@components": "src/components/index.ts",
      "@styles": "src/styles/Globals.scss",
      "@stylespages/*": "src/styles/pages/*",
      "@stylescomponents/*": "src/styles/components/*",
    }
  },
};

export default config;
