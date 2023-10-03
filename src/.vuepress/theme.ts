import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "",
    url: "",
  },

  //图标相关
  iconAssets: "//at.alicdn.com/t/c/font_4213402_oteptqh3p5.css",

  logo: "/assets/image/stt-black.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",


  
  
  //全屏开关
  fullscreen: true,
  //纯净模式
  pure: false,

  // darkmode:"enable",
  /*   
  "switch": 在深色模式，浅色模式和自动之间切换 (默认)
  "toggle": 在深色模式和浅色模式之间切换
  "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
  "enable": 强制深色模式
  "disable": 禁用深色模式 */

  locales: {
      /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },  
  },

  //加密功能
  encrypt: {
    config: {
      "/heart/": ["776599148"]
    },
  },
  blog:{
    sidebarDisplay: "none"
  },
  plugins: {
    
    //关闭prismjs高亮器。使用shiki@next(更多支持，更慢)
    prismjs: false,
  
    // prismjs: 支持的主题：
    //    light: "ateliersulphurpool-light" | "coldark-cold" | "coy" | "duotone-light" | "ghcolors" | "gruvbox-light" | "material-light" | "one-light" | "vs";
    //    dark: "atom-dark" | "cb" | "coldark-dark" | "dark" | "dracula" | "duotone-dark" | "duotone-earth" | "duotone-forest" | "duotone-sea" | "duotone-space" | "gruvbox-dark" | "holi" | "hopscotch" | "lucario" | "material-dark" | "material-oceanic" | "night-owl" | "nord" | "one-dark" | "pojoaque" | "shades-of-purple" | "solarized-dark-atom" | "tomorrow" | "vsc-dark-plus" | "xonokai" | "z-touch";
    //prismjs: {light:"dracula",dark:'one-dark'},

    blog: true,
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },
    
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      card: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    components:{
      components:[
        //组件：播放器，PDF 代码等。
        "ArtPlayer",
        "AudioPlayer",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        // "VidStack",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ]
    },
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
