import { tr } from "element-plus/es/locale";
import { sidebar } from "vuepress-theme-hope";
/* 
text: 项目文字
link 项目链接
icon: 项目图标 (可选)
activeMatch: 项目激活匹配 (可选)，支持正则字符串。
*/

export const zhSidebar = sidebar({
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