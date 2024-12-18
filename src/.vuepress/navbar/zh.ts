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
    text: "Front End",
    icon: "html",
    prefix: "/fe/",
    children: [
      {
        //分组名
        text: "预处理规范",
        prefix: "preprocess/",
        children: [
          { text: "TypeScript", icon: "typescript", link: "typescript.md" },
          { text: "Less", icon: "less", link: "Less.md" },
          { text: "Sass", icon: "sass", link: "Sass.md" },
        ],
      },
      {
        //分组名
        text: "语言基础",
        children: [
          { text: "JavaScript", icon: "javascript", link: "js/" },
          { text: "HTML", icon: "html", link: "html/" },
          { text: "CSS", icon: "css", link: "css.md"
           },
          
        
        ],
      },
      
    ],
  },
  //------------------------------后端---------------------------------------
  {
    text: "Back End",
    icon: "houduanicon",
    prefix: "/be/",
    children: [
      {
        //分组名
        text: "Java",
        prefix: "java/",
        children: [
          { text: "TypeScript", icon: "typescript", link: "typescript.md" },
          { text: "Less", icon: "less", link: "Less.md" },
          { text: "Sass", icon: "sass", link: "Sass.md" },
        ],
      },
      {
        //分组名
        text: "Web",
        prefix: "service/",
        children: [
          { text: "Mybatis", icon: "typescript", link: "typescript.md" },
          { text: "Spring", icon: "less", link: "Less.md" },
          { text: "SpringBoot", icon: "sass", link: "Sass.md" },
          { text: "SpringCloud", icon: "sass", link: "Sass.md" },
        ],
      },
      
    ],
  },
  //------------------------------链接---------------------------------------
  {
    text:"官网",
    icon:"guanwang",
    link:"https://www.baidu.com",
    children: [
      {
        text:"FE",
        icon:"",
        children:[
          {
            
            text:"MDN",
            link:"https://developer.mozilla.org/zh-CN/",
          },
          {
            text:"MarkDown",
            link:"/fe/markdown/",
          }
        ],
      },
      {
        text:"BE",
        icon:"",
        children:[
          {
            text:"插件1",
            link:"",
          },
          {
            text:"插件2",
            link:"",
          }
        ],
      },
      {
        text:"OTHER",
        icon:"",
        children:[
          {
            text:"插件1",
            link:"",
          },
          {
            text:"插件2",
            link:"",
          }
        ],
      },
    ],
  },
  {
    text: "Vue",
    icon: "Vue",
    children: [
      {
        text: "vuepress",
        link: "https://v2.vuepress.vuejs.org/zh/",
      },
      {
        text: "hope",
        link: "https://theme-hope.vuejs.press/zh/",
      },
      {
        text: "vue2",
        link: "/fe/vue/vue.md",
      },
    ],
  },
  {
    text: "日记",
    link: "/personal/README.md",
    icon:"diary",
  },
  {
    text: "博客",
    link:"/article/",
    icon: "blog",
    
  },
]);
