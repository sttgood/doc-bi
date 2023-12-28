import { tr } from "element-plus/es/locale";
import { sidebar } from "vuepress-theme-hope";
export const zhSidebar = sidebar({
  "/personal/":[
    {
      text: "视频收藏",
      prefix: "video/",
      collapsible: true,
      children: [
        {
          text: "罗翔语录",
          link: "heart.md",

        },
        {
          text: "...",
          link: "less/",
        },
      ]
    },
    {
      text: "随笔语录",
      prefix: "text/",
      collapsible: true,
      children: [
        {
          text: "日常随笔",
          link: "heart.md",

        },
        {
          text: "...",
          link: "less/",
        },
      ]
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
      ]
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
      ]
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
      ]
    },
  
  ],
  "/fe/": [
    {
      text: "预处理语言",
      prefix: "preprocess/",
      link: "preprocess/",
      collapsible: true,
      children: [
        {
          text: "TypeScript",
          link: "typescript/",

        },
        {
          text: "Less",
          link: "less/",
        },
        {
          text: "Scss",
          link: "scss/",
        },
      ],
    },
    {
      text: "基础语言",
      collapsible: true,
      children: [
        {
          text: "javascript",
          link: "js/",
          prefix: "js/",
          
        },
        {
          text: "HTML",
          link: "html/",
        },
        {
          text: "CSS",
          link: "css/",
        },
        {
          text: "Node",
          link: "nodejs/",
        },
        {
          text: "Vue",
          link: "vue/",
        },
      ],
    },
    "slides",
  ],

  "/be/": [
    {
      text: "Java基础",
      prefix: "java/",
      link: "java/",
      children: [
        {
          text: "java",
          link: "",
          activeMatch: "/fe/preprocess/typescript",
        },
        {
          text: "Less",
          link: "less",
          activeMatch: "/fe/preprocess/less",
        },
        {
          text: "Scss",
          link: "scss",
          activeMatch: "/fe/preprocess/scss",
        },
      ],
    },
    "slides",
  ],
  
});
