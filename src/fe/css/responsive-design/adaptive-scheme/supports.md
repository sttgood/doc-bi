---
title: 条件规则 supports
article: false
order: 3
---

## 

这里可以添加关于该主题的详细介绍。CSS `@supports` 规则（也称为特性查询）允许开发者根据浏览器是否支持特定的 CSS 属性或值来应用样式。它是一种条件规则，类似于 JavaScript 中的 `if` 语句，但用于 CSS。通过 `@supports`，开发者可以优雅地处理浏览器兼容性问题，确保在不支持某些特性的浏览器中提供回退样式。

---

## 1. 基本语法
`@supports` 规则的基本语法如下：
```css
@supports (条件) {
  /* 如果条件为真，应用这些样式 */
}
```

• **条件**：可以是 CSS 属性、值或逻辑表达式。

---

## 2. 常见用法
### 1. 检查是否支持某个属性
```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

### 2. 检查是否支持某个属性值
```css
@supports (position: sticky) {
  .header {
    position: sticky;
    top: 0;
  }
}
```

### 3. 检查是否支持多个条件
使用 `and`、`or` 和 `not` 组合多个条件：
```css
@supports (display: flex) and (transform: rotate(45deg)) {
  .box {
    display: flex;
    transform: rotate(45deg);
  }
}
```

### 4. 检查是否不支持某个条件
```css
@supports not (display: grid) {
  .container {
    display: block;
  }
}
```

### 5. 复杂条件
```css
@supports ((display: flex) and (not (display: grid))) or (transform: scale(2)) {
  .box {
    background-color: yellow;
  }
}
```

---

## 3. 实际应用场景
### 1. 浏览器兼容性处理
为不支持某些特性的浏览器提供回退样式：
```css
.container {
  display: block; /* 回退样式 */
}

@supports (display: grid) {
  .container {
    display: grid; /* 支持 grid 时的样式 */
  }
}
```

### 2. 渐进增强
在支持某些特性的浏览器中提供更丰富的样式：
```css
.box {
  background-color: #ccc; /* 基础样式 */
}

@supports (backdrop-filter: blur(10px)) {
  .box {
    backdrop-filter: blur(10px); /* 增强样式 */
  }
}
```

### 3. 检测自定义属性支持
```css
:root {
  --primary-color: #3498db;
}

@supports (--primary-color: #3498db) {
  body {
    background-color: var(--primary-color);
  }
}
```

---

## 4. 注意事项
1. **浏览器支持**  
   `@supports` 在现代浏览器中得到了广泛支持，但在旧版浏览器（如 IE11）中不支持。如果需要兼容旧版浏览器，可以使用 JavaScript 进行特性检测。

2. **避免滥用**  
   虽然 `@supports` 很强大，但不应过度使用。对于简单的兼容性问题，使用浏览器前缀或回退样式可能更合适。

3. **逻辑清晰**  
   在组合多个条件时，确保逻辑清晰，避免复杂的嵌套条件。

---

## 5. 示例代码
以下是一个完整的示例，展示了 `@supports` 的用法：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@supports 示例</title>
  <style>
    .container {
      display: block; /* 回退样式 */
    }

    @supports (display: grid) {
      .container {
        display: grid; /* 支持 grid 时的样式 */
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
    }

    .box {
      background-color: #ccc; /* 基础样式 */
      padding: 20px;
      text-align: center;
    }

    @supports (backdrop-filter: blur(10px)) {
      .box {
        backdrop-filter: blur(10px); /* 增强样式 */
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
  </div>
</body>
</html>
```

---

## 6. 与 JavaScript 结合
如果需要在 JavaScript 中检测 CSS 特性支持，可以使用 `CSS.supports()` 方法：

```javascript
if (CSS.supports('display', 'grid')) {
  console.log('浏览器支持 CSS Grid');
} else {
  console.log('浏览器不支持 CSS Grid');
}
```

---

## 总结
CSS `@supports` 规则是一种强大的工具，可以帮助开发者优雅地处理浏览器兼容性问题。通过条件性地应用样式，可以实现渐进增强和优雅降级，确保在不支持某些特性的浏览器中提供良好的用户体验。结合 JavaScript 的特性检测，可以进一步扩展其功能。
