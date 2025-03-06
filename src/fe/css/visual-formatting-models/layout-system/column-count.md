---
title: 多列布局 column-count
article: false
order: 4
---

**多列布局（Multi-column Layout）** 是CSS中的一种布局方式，允许将内容自动分成多列显示，类似于报纸或杂志的排版效果。通过 `column-count` 属性，可以指定内容分成多少列。以下是关于 `column-count` 及其相关属性的详细解析：

---

## **1. `column-count` 属性**
`column-count` 用于指定内容分成的列数。

### 语法
```css
元素 {
  column-count: 数值;
}
```

### 示例
```css
.container {
  column-count: 3;
}
```
上述代码会将 `.container` 元素的内容分成3列显示。

---

## **2. 相关属性**
除了 `column-count`，多列布局还支持以下属性：

### **2.1 `column-width`**
指定每列的宽度。如果同时设置了 `column-count` 和 `column-width`，浏览器会根据两者计算最终的列数。

```css
.container {
  column-width: 200px;
}
```

### **2.2 `column-gap`**
指定列与列之间的间距。

```css
.container {
  column-gap: 20px;
}
```

### **2.3 `column-rule`**
指定列与列之间的分隔线。类似于 `border`，可以设置宽度、样式和颜色。

```css
.container {
  column-rule: 1px solid #ccc;
}
```

### **2.4 `column-span`**
指定某个元素是否跨越多列。通常用于标题或图片。

```css
h1 {
  column-span: all; /* 跨越多列 */
}
```

---

## **3. 多列布局的兼容性**
多列布局在现代浏览器中得到了广泛支持，但在某些旧版浏览器（如IE）中可能不支持。可以通过以下方式检测浏览器是否支持多列布局：

```css
@supports (column-count: 3) {
  .container {
    column-count: 3;
  }
}
```

---

## **4. 多列布局的示例**
以下是一个完整的多列布局示例：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>多列布局示例</title>
  <style>
    .container {
      column-count: 3; /* 分成3列 */
      column-gap: 20px; /* 列间距 */
      column-rule: 1px solid #ccc; /* 列分隔线 */
    }

    h1 {
      column-span: all; /* 标题跨越多列 */
      text-align: center;
    }

    p {
      margin: 0 0 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>多列布局示例</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  </div>
</body>
</html>
```

---

## **5. 多列布局的应用场景**
• **新闻或杂志排版**：将长篇文章分成多列显示，提升阅读体验。
• **图片画廊**：将图片分成多列展示，节省空间。
• **响应式布局**：在小屏幕设备上，将内容分成单列显示；在大屏幕设备上，分成多列显示。

---

## **6. 响应式多列布局**
可以通过媒体查询（`@media`）在不同屏幕尺寸下调整列数。

```css
.container {
  column-count: 1;
}

@media (min-width: 600px) {
  .container {
    column-count: 2;
  }
}

@media (min-width: 900px) {
  .container {
    column-count: 3;
  }
}
```

---

## **总结**
• `column-count` 用于将内容分成多列显示。
• 相关属性包括 `column-width`、`column-gap`、`column-rule` 和 `column-span`。
• 多列布局适合用于新闻、杂志、图片画廊等场景。
• 通过媒体查询可以实现响应式多列布局。

通过灵活使用多列布局，可以为网页添加更丰富的排版效果。
