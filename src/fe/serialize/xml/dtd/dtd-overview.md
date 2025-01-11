---
title: DTD概述
description: Document Type Definition
article: false
order: 1
---

[[toc]]

- DTD（Document Type Definition）是一种用于定义 XML 文档结构和语法规则的方式，它规定了 XML 文档中可以出现哪些元素、元素的顺序、元素的嵌套关系以及元素可以包含的数据类型等内容。

| **DTD**语句 | **功能**                 |
| ----------- | ------------------------ |
| <!ELEMENT>  | 元素声明                 |
| <!ATTLIST>  | 属性声明                 |
| <!ENTITY>   | 实体声明                 |
| <!NOTATION> | 符号声明                 |
| `<!---->`   | 注释声明  **元素声明**： |

```dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE 根元素名称[
    <!ELEMENT 根元素名称 (第一个子元素,第二个子元素)>
    <!ELEMENT 第一个子元素 (#PCDATA)>
    <!ELEMENT 第二个子元素 (#PCDATA)>
    <!ATTLIST 第一个子元素 属性一 CDATA #REQUIRED>
]>
<根元素名称>
    <第一个子元素 属性一=""></第一个子元素>
    <第二个子元素></第二个子元素>
</根元素名称>

```
