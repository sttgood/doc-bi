---
title: 自定义属性 CSS Variables
article: false
order: 1
---

CSS 自定义属性（CSS Custom Properties），也称为 CSS 变量（CSS Variables），是一种允许开发者在 CSS 中定义可重用值的特性。它们类似于编程语言中的变量，可以存储颜色、尺寸、字体等值，并在整个样式表中重复使用。CSS 自定义属性极大地提高了 CSS 的可维护性和灵活性。

---

## 1. 基本语法
### 定义自定义属性
使用 `--` 前缀定义自定义属性，通常放在 `:root` 伪类中，以便全局使用：
```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
  --spacing: 10px;
}
```

### 使用自定义属性
使用 `var()` 函数引用自定义属性：
```css
body {
  background-color: var(--primary-color);
  font-size: var(--font-size);
  padding: var(--spacing);
}
```

---

## 2. 自定义属性的特点
1. **作用域**  
   自定义属性具有作用域，可以在全局或局部定义：
   • 全局作用域：在 `:root` 中定义，整个文档可用。
   • 局部作用域：在特定选择器中定义，仅在该选择器及其子元素中可用。

   ```css
   .container {
     --background-color: #2ecc71;
     background-color: var(--background-color);
   }
   ```

2. **继承性**  
   自定义属性会继承父元素的值，除非在子元素中重新定义：
   ```css
   :root {
     --text-color: #333;
   }
   
   .container {
     --text-color: #fff; /* 覆盖父元素的值 */
   }
   ```

3. **默认值**  
   使用 `var()` 时，可以为变量提供默认值，以防止变量未定义时出现问题：
   ```css
   body {
     color: var(--text-color, #000); /* 如果 --text-color 未定义，则使用 #000 */
   }
   ```

4. **动态更新**  
   自定义属性可以通过 JavaScript 动态修改，实现动态主题切换等功能：
   ```javascript
   document.documentElement.style.setProperty('--primary-color', '#e74c3c');
   ```

---

## 3. 实际应用
### 主题切换
通过自定义属性，可以轻松实现主题切换：
```css
:root {
  --background-color: #fff;
  --text-color: #333;
}

[data-theme="dark"] {
  --background-color: #333;
  --text-color: #fff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
```

```html
<button onclick="toggleTheme()">切换主题</button>

<script>
  function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    root.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
  }
</script>
```

### 响应式设计
结合媒体查询，可以使用自定义属性实现响应式设计：
```css
:root {
  --font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    --font-size: 14px;
  }
}

body {
  font-size: var(--font-size);
}
```

### 复杂计算
自定义属性可以与 `calc()` 结合，实现复杂的计算：
```css
:root {
  --spacing: 10px;
}

.container {
  padding: calc(var(--spacing) * 2);
}
```

---

## 4. 注意事项
1. **浏览器兼容性**  
   CSS 自定义属性在现代浏览器中得到了广泛支持，但在旧版浏览器（如 IE11）中不支持。可以使用 PostCSS 等工具进行兼容性处理。

2. **命名规范**  
   建议使用语义化的命名，如 `--primary-color`，而不是 `--color1`，以提高代码可读性。

3. **避免滥用**  
   虽然自定义属性很强大，但不应过度使用。对于简单的值（如单个颜色或尺寸），直接使用 CSS 属性可能更合适。

---

## 5. 示例代码
以下是一个完整的示例，展示了自定义属性的定义、使用和动态更新：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS 自定义属性示例</title>
  <style>
    :root {
      --primary-color: #3498db;
      --font-size: 16px;
      --spacing: 10px;
    }

    body {
      background-color: var(--primary-color);
      font-size: var(--font-size);
      padding: var(--spacing);
      color: #fff;
    }

    .container {
      --background-color: #2ecc71;
      background-color: var(--background-color);
      padding: calc(var(--spacing) * 2);
    }
  </style>
</head>
<body>
  <div class="container">
    <p>这是一个使用 CSS 自定义属性的示例。</p>
    <button onclick="changeColor()">更改主题颜色</button>
  </div>

  <script>
    function changeColor() {
      const root = document.documentElement;
      const currentColor = root.style.getPropertyValue('--primary-color');
      root.style.setProperty('--primary-color', currentColor === '#3498db' ? '#e74c3c' : '#3498db');
    }
  </script>
</body>
</html>
```

---

## 总结
CSS 自定义属性是一种强大的工具，可以提高 CSS 的可维护性、灵活性和动态性。通过定义和使用变量，开发者可以轻松实现主题切换、响应式设计和复杂计算等功能。尽管在旧版浏览器中可能存在兼容性问题，但在现代 Web 开发中，CSS 自定义属性已经成为不可或缺的一部分。
