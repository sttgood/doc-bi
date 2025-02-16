---
title: HTML
article: false
index: false
---

以下是 HTML 所有标签的**完整分类列表**（基于 HTML5 及现代标准），按功能和使用场景整理，并标注废弃标签：

---

### **一、文档结构标签**
- **根标签**  
  `<html>` `<head>` `<body>`  
- **元信息**  
  `<title>` `<meta>` `<link>` `<style>` `<base>`  
- **脚本相关**  
  `<script>` `<noscript>` `<template>`  

---

### **二、内容分区与语义化标签**
- **页面结构**  
  `<header>` `<footer>` `<nav>` `<main>` `<article>` `<section>` `<aside>`  
- **内容分组**  
  `<div>` `<span>` `<p>` `<hr>` `<pre>` `<blockquote>` `<figure>` `<figcaption>`  
- **标题与文本**  
  `<h1>`~`<h6>` `<hgroup>` `<em>` `<strong>` `<i>` `<b>` `<u>` `<s>` `<cite>` `<code>` `<kbd>` `<mark>` `<small>` `<sub>` `<sup>` `<time>` `<abbr>` `<address>` `<q>` `<ins>` `<del>`  

---

### **三、列表与表格**
- **列表**  
  `<ul>` `<ol>` `<li>` `<dl>` `<dt>` `<dd>` `<menu>` `<menuitem>`（已废弃）  
- **表格**  
  `<table>` `<caption>` `<thead>` `<tbody>` `<tfoot>` `<tr>` `<th>` `<td>` `<col>` `<colgroup>`  

---

### **四、表单与输入控件**
- **表单容器**  
  `<form>` `<fieldset>` `<legend>`  
- **输入控件**  
  `<input>` `<textarea>` `<select>` `<option>` `<optgroup>` `<button>` `<label>` `<datalist>` `<output>` `<progress>` `<meter>`  
- **验证与提示**  
  `<keygen>`（已废弃）  

---

### **五、多媒体与嵌入内容**
- **图像与图形**  
  `<img>` `<picture>` `<map>` `<area>` `<canvas>` `<svg>`  
- **音频与视频**  
  `<audio>` `<video>` `<source>` `<track>`  
- **外部资源**  
  `<iframe>` `<embed>` `<object>` `<param>`  

---

### **六、超链接与导航**
- **链接与锚点**  
  `<a>`  
- **页面导航**  
  `<nav>`  

---

### **七、交互与动态内容**
- **对话框**  
  `<dialog>`  
- **折叠内容**  
  `<details>` `<summary>`  

---

### **八、其他功能性标签**
- **文本换行**  
  `<br>` `<wbr>`  
- **注释**  
  `<!-- 注释内容 -->`  

---

### **九、已废弃标签（避免使用）**
- **布局与样式**  
  `<font>` `<center>` `<big>` `<strike>` `<tt>`  
- **框架**  
  `<frame>` `<frameset>` `<noframes>`  
- **动态效果**  
  `<marquee>` `<blink>`  

---

### **完整标签列表（按字母排序）**
```html
<!-- 结构标签 -->
<html> <head> <body> <title> <meta> <link> <style> <base> <script> <noscript> <template>

<!-- 语义化标签 -->
<header> <footer> <nav> <main> <article> <section> <aside> <div> <span> <p> <hr> <pre>
<blockquote> <figure> <figcaption> <h1>~<h6> <hgroup> <em> <strong> <i> <b> <u> <s> <cite>
<code> <kbd> <mark> <small> <sub> <sup> <time> <abbr> <address> <q> <ins> <del>

<!-- 列表与表格 -->
<ul> <ol> <li> <dl> <dt> <dd> <menu> <table> <caption> <thead> <tbody> <tfoot> <tr> <th> <td>
<col> <colgroup>

<!-- 表单相关 -->
<form> <fieldset> <legend> <input> <textarea> <select> <option> <optgroup> <button> <label>
<datalist> <output> <progress> <meter>

<!-- 多媒体 -->
<img> <picture> <map> <area> <canvas> <svg> <audio> <video> <source> <track> <iframe> <embed>
<object> <param>

<!-- 其他功能 -->
<a> <dialog> <details> <summary> <br> <wbr>
```

---

### **注意事项**
1. **语义化优先**：推荐使用 `<article>`、`<nav>` 等语义化标签，替代 `<div>` 的滥用。
2. **废弃标签**：如 `<font>`、`<center>` 已废弃，用 CSS 替代样式控制。
3. **自闭合标签**：如 `<img>`、`<br>`、`<input>` 无需闭合符号。
4. **动态内容**：现代交互建议使用 JavaScript + CSS 实现，而非 `<marquee>`。

建议参考 [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element) 获取最新标签和用法说明！