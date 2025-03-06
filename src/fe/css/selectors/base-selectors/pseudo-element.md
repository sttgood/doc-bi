---
title: 伪元素 placeholder selection
article: false
order: 4
---

**伪元素选择器** 是CSS中的一种特殊选择器，用于选择元素的特定部分或生成内容。伪元素以双冒号 `::` 开头（为了与伪类区分，CSS3规范建议使用双冒号，但单冒号 `:` 仍然被支持）。

以下是常见的伪元素选择器及其用法：

---

## **1. `::before`**
在选中的元素内容之前插入生成的内容。

### 语法
```css
元素::before {
  属性: 值;
}
```

### 示例
```css
p::before {
  content: "★";
  color: red;
}
```
上述代码会在每个 `<p>` 元素的内容前插入一个红色的星号。

---

## **2. `::after`**
在选中的元素内容之后插入生成的内容。

### 语法
```css
元素::after {
  属性: 值;
}
```

### 示例
```css
p::after {
  content: " (结束)";
  color: blue;
}
```
上述代码会在每个 `<p>` 元素的内容后插入蓝色的文字“ (结束)”。

---

## **3. `::first-line`**
选择元素的第一行文本。

### 语法
```css
元素::first-line {
  属性: 值;
}
```

### 示例
```css
p::first-line {
  font-weight: bold;
  color: green;
}
```
上述代码会将每个 `<p>` 元素的第一行文本设置为粗体并改变颜色。

---

## **4. `::first-letter`**
选择元素的第一个字母。

### 语法
```css
元素::first-letter {
  属性: 值;
}
```

### 示例
```css
p::first-letter {
  font-size: 24px;
  color: red;
}
```
上述代码会将每个 `<p>` 元素的第一个字母放大并改变颜色。

---

## **5. `::selection`**
选择用户选中的文本部分。

### 语法
```css
元素::selection {
  属性: 值;
}
```

### 示例
```css
::selection {
  background-color: yellow;
  color: black;
}
```
上述代码会将用户选中的文本背景设置为黄色，文字颜色设置为黑色。

---

## **6. `::placeholder`**
选择表单元素的占位符文本。

### 语法
```css
元素::placeholder {
  属性: 值;
}
```

### 示例
```css
input::placeholder {
  color: gray;
  font-style: italic;
}
```
上述代码会将输入框的占位符文本设置为灰色并斜体显示。

---

## **7. `::marker`**
选择列表项（`<li>`）的标记符号（如圆点、数字等）。

### 语法
```css
元素::marker {
  属性: 值;
}
```

### 示例
```css
li::marker {
  color: red;
  font-size: 18px;
}
```
上述代码会将列表项的标记符号设置为红色并放大。

---

## **8. `::backdrop`**
选择全屏元素的背景层（通常与 `:fullscreen` 伪类一起使用）。

### 语法
```css
元素::backdrop {
  属性: 值;
}
```

### 示例
```css
video::backdrop {
  background-color: black;
}
```
上述代码会将全屏视频的背景设置为黑色。

---

## **伪元素的使用场景**
1. **装饰性内容**：使用 `::before` 和 `::after` 添加图标、符号等。
2. **文本样式**：使用 `::first-line` 和 `::first-letter` 增强文本效果。
3. **用户交互**：使用 `::selection` 美化用户选中的文本。
4. **表单样式**：使用 `::placeholder` 自定义占位符文本。
5. **列表样式**：使用 `::marker` 自定义列表项标记。

---

## **示例代码**
以下是一个综合示例，展示了各种伪元素选择器的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>伪元素选择器示例</title>
  <style>
    /* ::before */
    p::before {
      content: "★";
      color: red;
    }

    /* ::after */
    p::after {
      content: " (结束)";
      color: blue;
    }

    /* ::first-line */
    p::first-line {
      font-weight: bold;
      color: green;
    }

    /* ::first-letter */
    p::first-letter {
      font-size: 24px;
      color: purple;
    }

    /* ::selection */
    ::selection {
      background-color: yellow;
      color: black;
    }

    /* ::placeholder */
    input::placeholder {
      color: gray;
      font-style: italic;
    }

    /* ::marker */
    li::marker {
      color: red;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>这是一个段落。</p>
  <input type="text" placeholder="请输入内容">
  <ul>
    <li>列表项1</li>
    <li>列表项2</li>
  </ul>
</body>
</html>
```

---

## **总结**
• 伪元素选择器用于选择元素的特定部分或生成内容。
• 常见的伪元素包括 `::before`、`::after`、`::first-line`、`::first-letter`、`::selection`、`::placeholder`、`::marker` 等。
• 伪元素以双冒号 `::` 开头，但单冒号 `:` 仍然被支持。
• 伪元素可以用于装饰性内容、文本样式、用户交互等场景。

通过灵活使用伪元素选择器，可以为网页添加丰富的视觉效果和交互体验。
