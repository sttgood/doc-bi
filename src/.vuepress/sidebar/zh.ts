import { tr } from "element-plus/es/locale";
import { sidebar } from "vuepress-theme-hope";
export const zhSidebar = sidebar({
  "/personal/": [
    {
      text: "媒体收藏",
      prefix: "media/",
      collapsible: true,
      children: [
        {
          text: "视频收藏",
          prefix: "",
          collapsible: true,
          icon: "video",
          children: [
            {
              text: "罗翔",
              link: "",
            },
          ],
        },
        {
          text: "音频收藏",
          prefix: "audio/",
          collapsible: true,
          icon: "music",
          children: [
            {
              text: "喜欢",
              link: "most.md",
            },
          ],
        },
        {
          text: "...",
          link: "less/",
        },
      ],
    },
    {
      text: "随笔语录",
      prefix: "text/",
      collapsible: true,
      children: [
        {
          text: "日常随笔",
          link: "heart.md",
          activeMatch: "^/personal/",
        },

        {
          text: "实用感受",
          link: "practical.md",
        },
        {
          text: "...",
          link: "less/",
        },
      ],
    },
    {
      text: "日常问题",
      prefix: "daily_problem/",
      collapsible: true,
      children: [
        {
          text: "日常问题记录",
          link: "solve.md",
        },
        {
          text: "...",
          link: "less/",
        },
      ],
    },
    {
      text: "专业问题",
      prefix: "profess_problem/",
      collapsible: true,
      children: [
        {
          text: "专业问题记录",
          link: "program.md",
        },
        {
          text: "...",
          link: "less/",
        },
      ],
    },
    {
      text: "个人计划",
      prefix: "schedule/",
      collapsible: true,
      children: [
        {
          text: "日常计划",
          link: "daily_schedule.md",
        },
        {
          text: "...",
          link: "less/",
        },
      ],
    },
  ],
  "/fe/preprocess/": "structure",
  "/fe/html/": "structure",
  "/fe/markdown/": "structure",
  "/fe/regexp/": "structure",
  "/fe/serialize/": "structure",
  "/fe/xml/": "structure",
  "/fe/nodejs/": "structure",

  "/fe/js/": "structure",
  "/be/linux/": "structure",

  // "/be/": [
  //   {
  //     text: "Java基础",
  //     prefix: "java/",
  //     link: "java/",
  //     children: [
  //       {
  //         text: "java",
  //         link: "",
  //         activeMatch: "/fe/preprocess/typescript",
  //       },
  //       {
  //         text: "Less",
  //         link: "less",
  //         activeMatch: "/fe/preprocess/less",
  //       },
  //       {
  //         text: "Scss",
  //         link: "scss",
  //         activeMatch: "/fe/preprocess/scss",
  //       },
  //     ],
  //   },
  //   "slides",
  // ],
});
