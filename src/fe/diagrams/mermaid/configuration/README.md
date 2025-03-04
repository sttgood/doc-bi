---
title: 配置
article: false
index: false
dir:
  order: 2
  link: true
---

当 mermaid 启动时，会提取配置以确定要用于图表的配置。有 3 个配置源：

- 默认配置
- 站点级别的覆盖由初始化调用设置，并将应用于站点/应用中的所有图表。这个术语是 siteConfig。
- Frontmatter (v10.5.0+) - 图表作者可以更新图表 frontmatter 中选定的配置参数。这些应用于渲染配置。
- 指令（已被 Frontmatter 弃用） - 图表作者可以通过指令直接在图表代码中更新选定的配置参数。这些应用于渲染配置。
