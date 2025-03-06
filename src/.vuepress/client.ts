import { defineClientConfig } from "vuepress/client";
import { defineMermaidConfig } from "vuepress-plugin-md-enhance/client";

defineMermaidConfig({
  // 在此设置 mermaid 选项
  theme: "base",
  themeVariables: {
    primaryColor: "#F0FFF0",
    // primaryTextColor: "",
    // background: "",
    // nodeBorder: "",
    mainBkg: "#F0FFF0",
    
  }
});

export default defineClientConfig({
  // ...
});