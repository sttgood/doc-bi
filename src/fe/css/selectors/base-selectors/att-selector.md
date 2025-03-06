---
title: 属性选择器 attr^=value等
article: false
order: 2
---

属性选择器（Attribute Selectors）是 CSS 中用于根据 HTML 元素的属性及其值来选择元素的一类选择器。它们非常灵活，可以精确匹配属性值、部分匹配属性值，或者仅根据属性是否存在来选择元素。以下是属性选择器的详细分类和用法：

---

### **1. 存在属性选择器**
选择具有指定属性的元素，无论属性值是什么。

#### **语法**
```css
[属性]
```

#### **示例**
```css
[title] {
  color: red;
}
```
• 选择所有具有 `title` 属性的元素。

---

### **2. 属性值选择器**
选择属性值等于指定值的元素。

#### **语法**
```css
[属性=值]
```

#### **示例**
```css
[type="text"] {
  border: 1px solid #ccc;
}
```
• 选择 `type` 属性值为 `text` 的元素（如 `<input type="text">`）。

---

### **3. 属性值包含选择器**
选择属性值中包含指定值的元素。

#### **语法**
```css
[属性*=值]
```

#### **示例**
```css
[href*="example"] {
  color: blue;
}
```
• 选择 `href` 属性值中包含 `example` 的元素（如 `<a href="https://example.com">`）。

---

### **4. 属性值开头选择器**
选择属性值以指定值开头的元素。

#### **语法**
```css
[属性^=值]
```

#### **示例**
```css
[href^="https"] {
  color: green;
}
```
• 选择 `href` 属性值以 `https` 开头的元素（如 `<a href="https://example.com">`）。

---

### **5. 属性值结尾选择器**
选择属性值以指定值结尾的元素。

#### **语法**
```css
[属性$=值]
```

#### **示例**
```css
[src$=".jpg"] {
  border: 2px solid #000;
}
```
• 选择 `src` 属性值以 `.jpg` 结尾的元素（如 `<img src="image.jpg">`）。

---

### **6. 属性值空格分隔选择器**
选择属性值中包含以空格分隔的指定值的元素。

#### **语法**
```css
[属性~=值]
```

#### **示例**
```css
[class~="btn"] {
  background-color: yellow;
}
```
• 选择 `class` 属性值中包含 `btn` 的元素（如 `<div class="btn primary">`）。

---

### **7. 属性值连字符分隔选择器**
选择属性值以指定值开头并以连字符分隔的元素。

#### **语法**
```css
[属性|=值]
```

#### **示例**
```css
[lang|="en"] {
  font-style: italic;
}
```
• 选择 `lang` 属性值以 `en` 开头并以连字符分隔的元素（如 `<p lang="en-US">`）。

---

### **8. 综合示例**
以下是一个综合示例，展示了多种属性选择器的用法：

#### **HTML**
```html
<a href="https://example.com" title="Example">Example</a>
<input type="text" placeholder="Enter text">
<img src="image.jpg" alt="Image">
<div class="btn primary">Button</div>
<p lang="en-US">English</p>
```

#### **CSS**
```css
/* 存在属性选择器 */
[title] {
  color: red;
}

/* 属性值选择器 */
[type="text"] {
  border: 1px solid #ccc;
}

/* 属性值包含选择器 */
[href*="example"] {
  color: blue;
}

/* 属性值开头选择器 */
[href^="https"] {
  color: green;
}

/* 属性值结尾选择器 */
[src$=".jpg"] {
  border: 2px solid #000;
}

/* 属性值空格分隔选择器 */
[class~="btn"] {
  background-color: yellow;
}

/* 属性值连字符分隔选择器 */
[lang|="en"] {
  font-style: italic;
}
```

---

### **9. 注意事项**
1. **区分大小写**：属性值选择器默认区分大小写。如果需要不区分大小写，可以使用 `i` 标志（如 `[type="text" i]`）。
2. **性能优化**：属性选择器的性能通常低于类选择器和 ID 选择器，建议在需要时使用。
3. **兼容性**：属性选择器在现代浏览器中支持良好，但在极少数旧版浏览器中可能存在兼容性问题。

