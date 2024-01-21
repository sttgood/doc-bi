import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defineUserConfig } from "vuepress";
import path from 'path'
import theme from "./theme.js";


export default defineUserConfig({
  markdown:{
    headers:{
      level: [2, 3, 4, 5, 6],
    }
  },
  alias: {
    "@MyComponent": path.resolve(__dirname, "components/MyComponent.vue"),
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
  
  plugins: [
     shikiPlugin({
      theme: "one-dark-pro",
    }), 
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
