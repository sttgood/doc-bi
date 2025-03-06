---
title: 设计令牌 Design Tokens
article: false
order: 2
---

**CSS 设计令牌（Design Tokens）** 是一种用于管理和维护设计系统的一致性和可扩展性的技术。它将设计中的核心属性（如颜色、字体、间距、阴影等）抽象为可复用的变量或常量，使开发人员和设计师能够更高效地协作，并确保设计系统的一致性。

以下是关于 CSS 设计令牌的详细说明：

---

## 1. **什么是设计令牌？**
设计令牌是设计系统中的最小单位，用于定义设计属性的值。例如：
• 颜色：`--color-primary: #007BFF;`
• 字体大小：`--font-size-large: 24px;`
• 间距：`--spacing-medium: 16px;`
• 阴影：`--shadow-default: 0 2px 4px rgba(0, 0, 0, 0.1);`

设计令牌通过将这些属性抽象为变量，使它们可以在整个设计系统中复用。

---

## 2. **设计令牌的优势**
• **一致性**：确保设计属性在整个应用中保持一致。
• **可维护性**：通过集中管理设计属性，便于更新和维护。
• **可扩展性**：支持多种平台（如 Web、移动端）和主题（如浅色、深色模式）。
• **协作性**：为设计师和开发人员提供统一的语言，便于沟通。

---

## 3. **CSS 设计令牌的实现**
在 CSS 中，设计令牌通常通过 **CSS 自定义属性（CSS Variables）** 实现。

### 示例
```css
/* 定义设计令牌 */
:root {
  --color-primary: #007BFF;
  --color-secondary: #6C757D;
  --font-size-large: 24px;
  --spacing-medium: 16px;
  --shadow-default: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 使用设计令牌 */
.button {
  background-color: var(--color-primary);
  font-size: var(--font-size-large);
  padding: var(--spacing-medium);
  box-shadow: var(--shadow-default);
}
```

---

## 4. **设计令牌的分类**
设计令牌通常可以分为以下几类：

### 颜色
```css
:root {
  --color-primary: #007BFF;
  --color-secondary: #6C757D;
  --color-success: #28A745;
  --color-danger: #DC3545;
}
```

### 字体
```css
:root {
  --font-family-primary: 'Arial', sans-serif;
  --font-size-small: 12px;
  --font-size-medium: 16px;
  --font-size-large: 24px;
}
```

### 间距
```css
:root {
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
}
```

### 阴影
```css
:root {
  --shadow-default: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-large: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

### 边框
```css
:root {
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-width-default: 1px;
}
```

---

## 5. **主题支持**
设计令牌可以轻松支持多种主题（如浅色、深色模式）。

### 示例
```css
/* 默认主题 */
:root {
  --color-background: #FFFFFF;
  --color-text: #000000;
}

/* 深色主题 */
[data-theme="dark"] {
  --color-background: #121212;
  --color-text: #FFFFFF;
}

/* 应用主题 */
body {
  background-color: var(--color-background);
  color: var(--color-text);
}
```

---

## 6. **工具支持**
以下工具可以帮助管理和使用设计令牌：
• **Style Dictionary**：将设计令牌转换为多平台可用的格式（如 CSS、JSON、Android、iOS）。
• **Theo**：用于生成设计令牌的工具，支持多种格式。
• **Figma Tokens**：将 Figma 中的设计属性导出为设计令牌。

---

## 7. **最佳实践**
• **命名规范**：使用清晰、一致的命名规则，例如 `--color-primary`、`--font-size-large`。
• **集中管理**：将所有设计令牌定义在一个文件中（如 `tokens.css`），便于维护。
• **分层结构**：将设计令牌按照类别（如颜色、字体、间距）进行分组。
• **文档化**：为设计令牌编写文档，说明其用途和用法。

---

## 8. **示例项目**
以下是一个完整的设计令牌示例：

```css
/* tokens.css */
:root {
  /* 颜色 */
  --color-primary: #007BFF;
  --color-secondary: #6C757D;
  --color-success: #28A745;
  --color-danger: #DC3545;

  /* 字体 */
  --font-family-primary: 'Arial', sans-serif;
  --font-size-small: 12px;
  --font-size-medium: 16px;
  --font-size-large: 24px;

  /* 间距 */
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;

  /* 阴影 */
  --shadow-default: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-large: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* 边框 */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-width-default: 1px;
}
```

```css
/* styles.css */
.button {
  background-color: var(--color-primary);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-medium);
  padding: var(--spacing-medium);
  border-radius: var(--border-radius-small);
  box-shadow: var(--shadow-default);
}
```

---

## 总结
CSS 设计令牌是构建现代设计系统的核心技术之一。通过将设计属性抽象为可复用的变量，设计令牌能够显著提升设计系统的一致性、可维护性和可扩展性。结合 CSS 自定义属性和工具支持，设计令牌可以轻松应用于各种场景，是前端开发和设计协作的重要工具。
