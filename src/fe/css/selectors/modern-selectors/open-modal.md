---
title: 状态选择器
article: false
order: 3
---

**状态选择器**（也称为**伪类选择器**）是CSS中用于选择元素在特定状态下的样式的选择器。它们以单冒号 `:` 开头，用于匹配元素的不同状态或位置。以下是一些常见的状态选择器及其用法：

---

## **1. `:hover`**
选择鼠标悬停在元素上时的状态。

### 语法
```css
元素:hover {
  属性: 值;
}
```

### 示例
```css
button:hover {
  background-color: yellow;
}
```
上述代码会在鼠标悬停在按钮上时，将按钮的背景颜色设置为黄色。

---

## **2. `:active`**
选择元素被激活（例如鼠标点击）时的状态。

### 语法
```css
元素:active {
  属性: 值;
}
```

### 示例
```css
button:active {
  background-color: red;
}
```
上述代码会在按钮被点击时，将按钮的背景颜色设置为红色。

---

## **3. `:focus`**
选择元素获得焦点（例如输入框被选中）时的状态。

### 语法
```css
元素:focus {
  属性: 值;
}
```

### 示例
```css
input:focus {
  border: 2px solid blue;
}
```
上述代码会在输入框获得焦点时，将输入框的边框设置为蓝色。

---

## **4. `:visited`**
选择已访问过的链接的状态。

### 语法
```css
a:visited {
  属性: 值;
}
```

### 示例
```css
a:visited {
  color: purple;
}
```
上述代码会将已访问过的链接的文本颜色设置为紫色。

---

## **5. `:link`**
选择未访问过的链接的状态。

### 语法
```css
a:link {
  属性: 值;
}
```

### 示例
```css
a:link {
  color: blue;
}
```
上述代码会将未访问过的链接的文本颜色设置为蓝色。

---

## **6. `:checked`**
选择被选中的表单元素（例如复选框或单选按钮）的状态。

### 语法
```css
元素:checked {
  属性: 值;
}
```

### 示例
```css
input[type="checkbox"]:checked {
  background-color: green;
}
```
上述代码会在复选框被选中时，将复选框的背景颜色设置为绿色。

---

## **7. `:disabled`**
选择被禁用的表单元素的状态。

### 语法
```css
元素:disabled {
  属性: 值;
}
```

### 示例
```css
input:disabled {
  background-color: #ccc;
}
```
上述代码会将禁用的输入框的背景颜色设置为灰色。

---

## **8. `:enabled`**
选择未被禁用的表单元素的状态。

### 语法
```css
元素:enabled {
  属性: 值;
}
```

### 示例
```css
input:enabled {
  background-color: white;
}
```
上述代码会将未禁用的输入框的背景颜色设置为白色。

---

## **9. `:first-child`**
选择父元素中的第一个子元素。

### 语法
```css
元素:first-child {
  属性: 值;
}
```

### 示例
```css
li:first-child {
  font-weight: bold;
}
```
上述代码会将列表中的第一个 `<li>` 元素的文本设置为粗体。

---

## **10. `:last-child`**
选择父元素中的最后一个子元素。

### 语法
```css
元素:last-child {
  属性: 值;
}
```

### 示例
```css
li:last-child {
  color: red;
}
```
上述代码会将列表中的最后一个 `<li>` 元素的文本颜色设置为红色。

---

## **11. `:nth-child(n)`**
选择父元素中的第 `n` 个子元素。

### 语法
```css
元素:nth-child(n) {
  属性: 值;
}
```

### 示例
```css
li:nth-child(2) {
  background-color: yellow;
}
```
上述代码会将列表中的第二个 `<li>` 元素的背景颜色设置为黄色。

---

## **12. `:nth-of-type(n)`**
选择父元素中同类型的第 `n` 个子元素。

### 语法
```css
元素:nth-of-type(n) {
  属性: 值;
}
```

### 示例
```css
p:nth-of-type(2) {
  font-size: 20px;
}
```
上述代码会将父元素中的第二个 `<p>` 元素的字体大小设置为20px。

---

## **13. `:not(selector)`**
选择不符合指定选择器的元素。

### 语法
```css
元素:not(选择器) {
  属性: 值;
}
```

### 示例
```css
p:not(.highlight) {
  color: gray;
}
```
上述代码会将所有不包含 `class="highlight"` 的 `<p>` 元素的文本颜色设置为灰色。

---

## **示例代码**
以下是一个综合示例，展示了各种状态选择器的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>状态选择器示例</title>
  <style>
    /* :hover */
    button:hover {
      background-color: yellow;
    }

    /* :active */
    button:active {
      background-color: red;
    }

    /* :focus */
    input:focus {
      border: 2px solid blue;
    }

    /* :visited */
    a:visited {
      color: purple;
    }

    /* :link */
    a:link {
      color: blue;
    }

    /* :checked */
    input[type="checkbox"]:checked {
      background-color: green;
    }

    /* :disabled */
    input:disabled {
      background-color: #ccc;
    }

    /* :first-child */
    li:first-child {
      font-weight: bold;
    }

    /* :nth-child */
    li:nth-child(2) {
      background-color: yellow;
    }

    /* :not */
    p:not(.highlight) {
      color: gray;
    }
  </style>
</head>
<body>
  <button>点击我</button>
  <input type="text" placeholder="请输入内容">
  <input type="text" disabled placeholder="禁用输入框">
  <input type="checkbox"> 复选框
  <a href="#">未访问的链接</a>
  <a href="#" style="color: purple;">已访问的链接</a>
  <ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
  </ul>
  <p>普通段落</p>
  <p class="highlight">高亮段落</p>
</body>
</html>
```

---

## **总结**
• 状态选择器用于选择元素在特定状态下的样式。
• 常见的状态选择器包括 `:hover`、`:active`、`:focus`、`:visited`、`:link`、`:checked`、`:disabled`、`:first-child`、`:nth-child`、`:not` 等。
• 状态选择器以单冒号 `:` 开头。

通过灵活使用状态选择器，可以为网页添加丰富的交互效果和动态样式。
