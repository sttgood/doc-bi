---
title: CSS-in-JS方案对比
article: false
order: 3
---

**CSS-in-JS** 是一种将 CSS 样式直接写入 JavaScript 代码中的技术，它通过组件化的方式管理样式，解决了传统 CSS 的全局污染、命名冲突等问题。以下是几种流行的 CSS-in-JS 方案的对比，包括它们的优缺点和适用场景。

---

## **1. 主流 CSS-in-JS 方案**
### **1.1 Styled Components**
• **特点**：
  • 基于模板字符串的语法。
  • 支持动态样式和主题。
  • 自动生成唯一的类名，避免冲突。
• **优点**：
  • 语法简洁，易于上手。
  • 支持服务端渲染（SSR）。
  • 社区活跃，文档完善。
• **缺点**：
  • 运行时性能开销较大。
  • 生成的 CSS 文件可能较大。
• **适用场景**：
  • 需要动态样式的 React 项目。
  • 对 SSR 有需求的项目。

```javascript
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

<Button primary>Click Me</Button>
```

---

### **1.2 Emotion**
• **特点**：
  • 支持字符串模板和对象语法。
  • 提供高性能的 CSS 注入。
  • 支持 SSR 和静态提取。
• **优点**：
  • 性能优于 Styled Components。
  • 支持多种语法风格。
  • 功能丰富，插件生态完善。
• **缺点**：
  • 学习曲线稍高。
  • 文档相对较少。
• **适用场景**：
  • 需要高性能和灵活性的项目。
  • 需要支持多种语法风格的项目。

```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

<button css={style}>Click Me</button>
```

---

### **1.3 JSS**
• **特点**：
  • 基于 JavaScript 对象的语法。
  • 支持动态样式和主题。
  • 提供插件系统，功能强大。
• **优点**：
  • 语法灵活，易于集成。
  • 支持 SSR 和静态提取。
  • 插件生态丰富。
• **缺点**：
  • 语法不如 Styled Components 直观。
  • 社区活跃度较低。
• **适用场景**：
  • 需要高度定制化的项目。
  • 需要插件扩展功能的项目。

```javascript
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    background: 'blue',
    color: 'white',
    fontSize: '1em',
    padding: '0.25em 1em',
    border: '2px solid blue',
    borderRadius: '3px',
  },
});

const Button = () => {
  const classes = useStyles();
  return <button className={classes.button}>Click Me</button>;
};
```

---

### **1.4 Linaria**
• **特点**：
  • 零运行时 CSS-in-JS。
  • 样式在构建时提取为静态 CSS 文件。
• **优点**：
  • 无运行时性能开销。
  • 生成的 CSS 文件较小。
  • 支持 SSR 和静态提取。
• **缺点**：
  • 动态样式支持有限。
  • 功能相对较少。
• **适用场景**：
  • 需要高性能和静态样式的项目。
  • 对运行时性能要求高的项目。

```javascript
import { css } from 'linaria';
import { styled } from 'linaria/react';

const Button = styled.button`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

<Button>Click Me</Button>
```

---

## **2. 方案对比**
| 特性         | Styled Components | Emotion         | JSS  | Linaria    |
| ------------ | ----------------- | --------------- | ---- | ---------- |
| **语法**     | 模板字符串        | 模板字符串/对象 | 对象 | 模板字符串 |
| **性能**     | 中等              | 高              | 中等 | 高         |
| **动态样式** | 支持              | 支持            | 支持 | 有限       |
| **SSR 支持** | 支持              | 支持            | 支持 | 支持       |
| **静态提取** | 不支持            | 支持            | 支持 | 支持       |
| **插件生态** | 一般              | 丰富            | 丰富 | 较少       |
| **学习曲线** | 低                | 中              | 中   | 低         |

---

## **3. 如何选择 CSS-in-JS 方案？**
• **需要动态样式和主题**：选择 Styled Components 或 Emotion。
• **需要高性能**：选择 Emotion 或 Linaria。
• **需要静态提取**：选择 Emotion、JSS 或 Linaria。
• **需要插件扩展**：选择 Emotion 或 JSS。
• **需要零运行时**：选择 Linaria。

---

## **4. 总结**
CSS-in-JS 是一种强大的样式管理技术，适合组件化开发。不同方案各有优缺点，选择时应根据项目需求和团队技术栈进行权衡：
• **Styled Components**：适合需要动态样式和 SSR 的项目。
• **Emotion**：适合需要高性能和灵活性的项目。
• **JSS**：适合需要插件扩展和高度定制化的项目。
• **Linaria**：适合需要零运行时和静态提取的项目。

通过合理选择 CSS-in-JS 方案，可以显著提升开发效率和项目性能。
