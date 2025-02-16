import { navbar } from "vuepress-theme-hope";
/* 
  navbar属性
  text:: 项目文字
  link: 项目链接
  icon: 项目图标 (可选)
  activeMatch: 项目激活匹配 (可选)，支持正则字符串。 */

export const zhNavbar = navbar([
  "/",
  //------------------------------前端---------------------------------------
  {
    text: "编程语言",
    icon: "",
    children: [
      {
        //分组名
        text: "前端预处理规范",
        prefix: "/fe/preprocess/",
        children: [
          { text: "TypeScript", icon: "typescript", link: "typescript.md" },
          { text: "Less", icon: "less", link: "Less.md" },
          { text: "Sass", icon: "sass", link: "Sass.md" },
        ],
      },
      {
        text: "前端基础语言",
        prefix: "/fe/",
        children: [
          { text: "JavaScript", icon: "", link: "js/" },
          { text: "HTML", icon: "", link: "html/" },
          { text: "CSS", icon: "", link: "css/" },
        ],
      },
      {
        text: "后端基础语言",
        prefix: "/be/ ",
        children: [
          { text: "待开发", icon: "", link: "js/" },
          { text: "待开发", icon: "", link: "js/" },
          { text: "待开发", icon: "", link: "js/" },
        ],
        
      },
      {
        text: "通用基础语言",
        prefix: "/language/",
        children: [
          { text: "python", icon: "", link: "python/" },
          { text: "待开发", icon: "", link: "js/" },
          { text: "待开发", icon: "", link: "js/" },
        ],
        
      }
    ],
  },


  //------------------------------专业课---------------------------------------
  {
    text: "理论知识",
    icon: "html",
    prefix: "/professional-knowledge/",
    children: [
      {
        //分组名
        text: "408",
        children: [
          { text: "计算机网络", icon: "", link: "computer-network/" },
          { text: "操作系统", icon: "", link: "Less.md" },
          { text: "计算机组成原理", icon: "", link: "Sass.md" },
          { text: "数据结构", icon: "", link: "Sass.md" },
        ],
      },
      {
        text: "其他",
        children: [
          { text: "占位", icon: "", link: "js/" },
          { text: "占位", icon: "", link: "html/" },
          { text: "占位", icon: "", link: "css.md" },
        ],
      },
    ],
  },
  //------------------------------链接---------------------------------------
  {
    text: "官网",
    icon: "guanwang",
    link: "https://www.baidu.com",
    children: [
      {
        text: "FE",
        icon: "",
        children: [
          {
            text: "MDN",
            link: "https://developer.mozilla.org/zh-CN/",
          },
          {
            text: "MarkDown",
            link: "/fe/markdown/",
          },
          {
            text: "NPM",
            link: "https://npm.nodejs.cn/",
          },
        ],
      },
      {
        text: "BE",
        icon: "",
        children: [
          {
            text: "插件1",
            link: "",
          },
          {
            text: "插件2",
            link: "",
          },
        ],
      },
      {
        text: "OTHER",
        icon: "",
        children: [
          {
            text: "插件1",
            link: "",
          },
          {
            text: "插件2",
            link: "",
          },
        ],
      },
    ],
  },

  {
    text: "日记",
    link: "/personal/README.md",
    icon: "diary",
  },
  {
    text: "博客",
    link: "/article/",
    icon: "blog",
  },
]);
