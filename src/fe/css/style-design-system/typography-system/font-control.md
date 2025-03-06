---
title: 字体控制
article: false
order: 1
---

在 CSS 中，**字体控制** 是网页设计的重要组成部分，通过 `@font-face` 和 `font-display` 可以更好地管理自定义字体的加载和显示。

---

### **1. `@font-face`**
`@font-face` 用于定义自定义字体，允许在网页中使用非系统字体。

#### **语法**
```css
@font-face {
  font-family: 'MyFont'; /* 定义字体名称 */
  src: url('myfont.woff2') format('woff2'), /* 字体文件路径和格式 */
       url('myfont.woff') format('woff');
  font-weight: normal; /* 字体粗细 */
  font-style: normal; /* 字体样式 */
}
```

#### **参数说明**
| 参数          | 描述                                                    |
| ------------- | ------------------------------------------------------- |
| `font-family` | 定义字体的名称，后续通过该名称引用字体。                |
| `src`         | 指定字体文件的路径和格式，支持多个源以提高兼容性。      |
| `font-weight` | 定义字体的粗细（如 `normal`、`bold`、`100` 到 `900`）。 |
| `font-style`  | 定义字体的样式（如 `normal`、`italic`）。               |

#### **示例**
```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans.woff2') format('woff2'),
       url('opensans.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Open Sans', sans-serif;
}
```

---

### **2. `font-display`**
`font-display` 用于控制自定义字体的加载和显示行为，避免字体加载过程中的布局闪烁（FOIT/FOUT）。

#### **语法**
```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
  font-display: swap; /* 控制字体显示行为 */
}
```

#### **取值**
| 值         | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| `auto`     | 默认值，浏览器自动决定字体显示行为。                         |
| `block`    | 阻塞文本渲染，直到字体加载完成。                             |
| `swap`     | 使用备用字体显示文本，直到自定义字体加载完成。               |
| `fallback` | 短暂阻塞文本渲染，如果字体未在短时间内加载完成，则使用备用字体。 |
| `optional` | 短暂阻塞文本渲染，如果字体未在短时间内加载完成，则放弃加载。 |

#### **示例**
```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans.woff2') format('woff2');
  font-display: swap; /* 使用备用字体，直到自定义字体加载完成 */
}
```

---

### **3. 字体加载优化**
#### **3.1 使用 `preload` 预加载字体**
通过 `<link>` 标签预加载字体文件，减少字体加载延迟。

• **示例**：
  ```html
  <link rel="preload" href="opensans.woff2" as="font" type="font/woff2" crossorigin>
  ```

#### **3.2 使用 `font-display: swap`**
避免字体加载过程中的布局闪烁，提升用户体验。

• **示例**：
  ```css
  @font-face {
    font-family: 'Open Sans';
    src: url('opensans.woff2') format('woff2');
    font-display: swap;
  }
  ```

#### **3.3 提供多种字体格式**
提供多种字体格式（如 `woff2`、`woff`、`ttf`）以提高兼容性。

• **示例**：
  ```css
  @font-face {
    font-family: 'Open Sans';
    src: url('opensans.woff2') format('woff2'),
         url('opensans.woff') format('woff'),
         url('opensans.ttf') format('truetype');
  }
  ```

---

### **4. 实际应用**
#### **4.1 定义自定义字体**
```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

#### **4.2 使用自定义字体**
```css
body {
  font-family: 'MyFont', sans-serif;
}
```

#### **4.3 预加载字体**
```html
<link rel="preload" href="myfont.woff2" as="font" type="font/woff2" crossorigin>
```

---

### **5. 总结**
通过 `@font-face` 和 `font-display`，可以更好地控制自定义字体的加载和显示，提升网页的性能和用户体验：
• **`@font-face`**：定义自定义字体，支持多种格式和样式。
• **`font-display`**：控制字体加载和显示行为，避免布局闪烁。
• **优化策略**：使用 `preload` 预加载字体，提供多种字体格式。
