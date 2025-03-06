---
title: 范围选择器 scope
article: false
order: 2
---

在 CSS 中，**范围选择器**（Range Selectors）通常指的是用于选择特定范围内元素的选择器。虽然 CSS 本身没有直接称为“范围选择器”的概念，但可以通过以下方式实现类似的功能：

---

### **1. 结构伪类选择器**
结构伪类选择器可以根据元素在文档中的位置选择特定范围内的元素。

#### **1.1 `:nth-child()`**
选择指定位置的子元素。

• **语法**：
  ```css
  :nth-child(公式)
  ```
• **示例**：
  ```css
  li:nth-child(n+3):nth-child(-n+6) {
    color: red;
  }
  ```
  • 选择第 3 到第 6 个 `<li>` 元素。

#### **1.2 `:nth-of-type()`**
选择指定类型的元素中特定位置的元素。

• **语法**：
  ```css
  :nth-of-type(公式)
  ```
• **示例**：
  ```css
  p:nth-of-type(n+2):nth-of-type(-n+4) {
    font-weight: bold;
  }
  ```
  • 选择第 2 到第 4 个 `<p>` 元素。

#### **1.3 `:first-child` 和 `:last-child`**
选择第一个或最后一个子元素。

• **示例**：
  ```css
  li:first-child {
    color: blue;
  }
  li:last-child {
    color: green;
  }
  ```

#### **1.4 `:nth-last-child()` 和 `:nth-last-of-type()`**
从后往前选择特定位置的元素。

• **示例**：
  ```css
  li:nth-last-child(3) {
    color: purple;
  }
  ```

---

### **2. 通用兄弟选择器**
通过通用兄弟选择器（`~`）选择某个元素之后的所有兄弟元素。

• **语法**：
  ```css
  A ~ B
  ```
• **示例**：
  ```css
  h2 ~ p {
    color: orange;
  }
  ```
  • 选择 `<h2>` 元素之后的所有 `<p>` 元素。

---

### **3. 属性选择器**
通过属性选择器选择属性值在特定范围内的元素。

#### **3.1 属性值范围选择**
使用 `[属性>=值]` 和 `[属性<=值]` 选择属性值在指定范围内的元素。

• **示例**：
  ```css
  [data-price>="10"][data-price<="20"] {
    background-color: yellow;
  }
  ```
  • 选择 `data-price` 属性值在 10 到 20 之间的元素。

---

### **4. JavaScript 辅助**
如果 CSS 无法满足需求，可以使用 JavaScript 动态选择范围内的元素。

#### **示例**
```javascript
const items = document.querySelectorAll('li');
items.forEach((item, index) => {
  if (index >= 2 && index <= 5) {
    item.style.color = 'red';
  }
});
```
• 使用 JavaScript 选择第 3 到第 6 个 `<li>` 元素。

---

### **5. 综合示例**
以下是一个综合示例，展示了如何使用结构伪类选择器和属性选择器实现范围选择：

#### **HTML**
```html
<ul>
  <li data-price="5">Item 1</li>
  <li data-price="10">Item 2</li>
  <li data-price="15">Item 3</li>
  <li data-price="20">Item 4</li>
  <li data-price="25">Item 5</li>
</ul>
```

#### **CSS**
```css
/* 选择第 2 到第 4 个 <li> 元素 */
li:nth-child(n+2):nth-child(-n+4) {
  color: blue;
}

/* 选择 data-price 在 10 到 20 之间的 <li> 元素 */
li[data-price>="10"][data-price<="20"] {
  background-color: yellow;
}
```

---

### **6. 注意事项**
1. **兼容性**：结构伪类选择器和属性选择器在现代浏览器中支持良好，但在旧版浏览器中可能存在兼容性问题。
2. **性能**：复杂的选择器可能影响性能，建议在需要时使用。
3. **灵活性**：如果 CSS 无法满足需求，可以结合 JavaScript 实现更复杂的范围选择。

---

通过灵活使用这些选择器，可以实现对特定范围内元素的精准控制，提升开发效率和代码质量！
