import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "the githuppages",
  author: {
    name: "stt",
    url: "",
    email: "776599148@qq.com",
  },
  logo: "/assets/image/stt-black.png",
  //repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "默认页脚",
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },
  hotReload: true,
  //加密功能
  encrypt: {
    config: {
      "/personal/": ["776599148"],
    },
  },
  blog: {
    sidebarDisplay: "none",
    description: "有着广泛兴趣爱好的T.T",
  },

  headerDepth: 4,
  markdown: {
    highlighter: {
      type: "shiki", 
      themes: {
      dark: "dark-plus",
      light:  "light-plus"
      }
    },
    align: true,
    alert: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    mermaid: true,
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
    tasklist: true,
    vPre: true,
  },
  plugins: {
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    icon:{
      assets:"//at.alicdn.com/t/c/font_4213402_mjbg83cizxd.css"
    },
    blog: true,
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },
    //网站通知----------------------------------------------
    notice: [
      {
        path: "/",
        title: "通知",
        content: "网站更新中。。。。<br><br><br>",
        actions: [
          // {
          //   text: "Primary Action",
          //   link: "https://theme-hope.vuejs.press/",
          //   type: "primary",
          // },
          { text: "确定" },
        ],
      },
    ],
    components: {
      components: [
        //组件：播放器，PDF 代码等。
        "ArtPlayer",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VidStack",
        "XiGua",
        "VPCard",
        "Badge",
      ],
    },
  
    // You should generate and use your own comment service
    // install vuepress-plugin-pwa2 and uncomment these if you want a PWA
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
