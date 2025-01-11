import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  
  markdown:{
    headers:{
      level: [2, 3, 4, 5, 6],
    }
  },
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "SttDoc",
      description: "资料查询文档",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
  },
  
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

