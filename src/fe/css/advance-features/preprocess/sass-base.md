---
title: Sass SCSS核心功能
article: false
order: 1
---

**Sass** 是一种 CSS 预处理器，它扩展了 CSS 的功能，提供了变量、嵌套、混合（Mixin）、继承等特性，使 CSS 更易于维护和扩展。**SCSS** 是 Sass 的一种语法格式，完全兼容 CSS 语法。以下是 Sass/SCSS 的核心功能详解：

---

### **1. 变量（Variables）**
变量用于存储可复用的值（如颜色、字体、尺寸等）。

#### **语法**
```scss
$变量名: 值;
```

#### **示例**
```scss
$primary-color: #007bff;
$font-size: 16px;

.button {
  background-color: $primary-color;
  font-size: $font-size;
}
```

---

### **2. 嵌套（Nesting）**
嵌套允许将选择器嵌套在父选择器内，减少代码重复。

#### **语法**
```scss
父选择器 {
  子选择器 {
    样式;
  }
}
```

#### **示例**
```scss
.nav {
  background-color: #333;

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    color: white;
    text-decoration: none;
  }
}
```

---

### **3. 混合（Mixins）**
混合用于定义可复用的样式块，支持参数传递。

#### **语法**
```scss
@mixin 混合名(参数) {
  样式;
}
```

#### **示例**
```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.button {
  @include border-radius(5px);
}
```

---

### **4. 继承（Inheritance）**
继承允许一个选择器继承另一个选择器的样式。

#### **语法**
```scss
@extend 选择器;
```

#### **示例**
```scss
%message-shared {
  padding: 10px;
  border: 1px solid #ccc;
}

.success {
  @extend %message-shared;
  background-color: green;
}

.error {
  @extend %message-shared;
  background-color: red;
}
```

---

### **5. 运算（Operations）**
Sass 支持数学运算（如加减乘除）。

#### **示例**
```scss
.container {
  width: 100% / 3;
  padding: 10px + 5px;
}
```

---

### **6. 函数（Functions）**
Sass 提供了内置函数，也支持自定义函数。

#### **内置函数**
```scss
$color: lighten(#007bff, 10%);
$width: percentage(0.5);
```

#### **自定义函数**
```scss
@function calculate-rem($px) {
  @return $px / 16 * 1rem;
}

body {
  font-size: calculate-rem(16px);
}
```

---

### **7. 条件与循环**
#### **条件语句（@if, @else）**
```scss
$theme: dark;

body {
  @if $theme == dark {
    background-color: black;
    color: white;
  } @else {
    background-color: white;
    color: black;
  }
}
```

#### **循环语句（@for, @each, @while）**
```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

---

### **8. 导入（Import）**
Sass 支持将多个文件导入到一个文件中，便于模块化管理。

#### **语法**
```scss
@import '文件名';
```

#### **示例**
```scss
@import 'variables';
@import 'mixins';
@import 'components/button';
```

---

### **9. 插值（Interpolation）**
插值允许将变量或表达式嵌入到选择器或属性名中。

#### **语法**
```scss
#{$变量或表达式}
```

#### **示例**
```scss
$class-name: 'button';

.#{$class-name} {
  background-color: #007bff;
}
```

---

### **10. 父选择器引用（&）**
`&` 用于引用父选择器。

#### **示例**
```scss
.button {
  &:hover {
    background-color: darken(#007bff, 10%);
  }
}
```

---

### **11. 媒体查询嵌套**
Sass 支持在嵌套中直接编写媒体查询。

#### **示例**
```scss
.container {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
}
```

---

### **12. 实际应用**
#### **12.1 模块化 CSS**
```scss
// _variables.scss
$primary-color: #007bff;

// _mixins.scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

// main.scss
@import 'variables';
@import 'mixins';

.button {
  background-color: $primary-color;
  @include border-radius(5px);
}
```

#### **12.2 响应式设计**
```scss
.container {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
}
```

#### **12.3 主题切换**
```scss
$theme: dark;

body {
  @if $theme == dark {
    background-color: black;
    color: white;
  } @else {
    background-color: white;
    color: black;
  }
}
```

---

### **13. 总结**
Sass/SCSS 的核心功能包括：
1. **变量**：存储可复用的值。
2. **嵌套**：简化选择器结构。
3. **混合**：定义可复用的样式块。
4. **继承**：共享样式。
5. **运算**：支持数学运算。
6. **函数**：内置函数和自定义函数。
7. **条件与循环**：实现逻辑控制。
8. **导入**：模块化管理。
9. **插值**：动态生成选择器或属性名。
10. **父选择器引用**：简化嵌套。
11. **媒体查询嵌套**：简化响应式设计。

通过掌握这些功能，可以更高效地编写和维护 CSS，提升开发效率和代码质量！
