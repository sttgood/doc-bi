---
title: 元素 类 ID 通配符选择器
article: false
order: 1
---

在CSS中，选择器用于指定要应用样式的HTML元素。以下是几种常见的选择器类型及其用法：

---

## **3. ID选择器 (ID Selector)**

ID选择器通过HTML元素的 `id` 属性选择元素。ID名前加 `#`。

```css
#ID名 {
  属性: 值;
}
```

```css
#header {
  font-size: 24px;
}
```

上述代码会将 `id="header"` 的元素的字体大小设置为24px。

---

## 

## **2. 类选择器 (Class Selector)**

类选择器通过HTML元素的 `class` 属性选择元素。类名前加 `.`。

```css
.类名 {
  属性: 值;
}
```

```css
.highlight {
  background-color: yellow;
}
```
上述代码会将所有 `class="highlight"` 的元素的背景颜色设置为黄色。

---

## **1. 元素选择器 (Element Selector)**

元素选择器通过HTML元素名称选择元素。

```css
元素名称 {
  属性: 值;
}
```

```css
p {
  color: blue;
}
```

上述代码会将所有 `<p>` 元素的文本颜色设置为蓝色。

---

## 

## **4. 通配符选择器 (Universal Selector)**

通配符选择器选择页面中的所有元素，使用 `*` 表示。

```css
* {
  属性: 值;
}
```

```css
* {
  margin: 0;
  padding: 0;
}
```
上述代码会将所有元素的外边距和内边距设置为0。

---

## **选择器的优先级**
选择器的优先级从高到低依次为：
1. **ID选择器** (`#ID名`)
2. **类选择器** (`.类名`)
3. **元素选择器** (`元素名称`)
4. **通配符选择器** (`*`)



以下是一个综合，展示了各种选择器的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS选择器</title>
  <style>
    /* 元素选择器 */
    p {
      color: blue;
    }

    /* 类选择器 */
    .highlight {
      background-color: yellow;
    }

    /* ID选择器 */
    #header {
      font-size: 24px;
    }

    /* 通配符选择器 */
    * {
      margin: 0;
      padding: 0;
    }

    /* 后代选择器 */
    .container p {
      color: red;
    }

    /* 子元素选择器 */
    .container > p {
      color: green;
    }

    /* 相邻兄弟选择器 */
    h1 + p {
      font-size: 20px;
    }

    /* 通用兄弟选择器 */
    h1 ~ p {
      color: purple;
    }
  </style>
</head>
<body>
  <div id="header">这是头部</div>
  <div class="container">
    <p>这是容器内的段落。</p>
    <div>
      <p>这是嵌套的段落。</p>
    </div>
  </div>
  <h1>标题</h1>
  <p>这是紧接在标题后的段落。</p>
  <p>这是另一个段落。</p>
  <p class="highlight">这是高亮的段落。</p>
</body>
</html>
```

---

**总结**

• **元素选择器**：通过元素名称选择元素。
• **类选择器**：通过 `class` 属性选择元素。
• **ID选择器**：通过 `id` 属性选择元素。
• **通配符选择器**：选择所有元素。
• 选择器可以组合使用，以更精确地选择元素。

通过灵活使用这些选择器，可以更好地控制HTML元素的样式。
