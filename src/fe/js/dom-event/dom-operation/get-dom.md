---
title: 获取domdo
article: false
order: 2
---
在 JavaScript 中，选择 DOM 元素是操作网页内容的基础。以下是常用的 DOM 元素选择方法：

---

### **一、通过 `document` 方法选择元素**
#### **1. 通过 ID 选择**
使用 `document.getElementById()` 选择具有指定 `id` 的元素。
```javascript
const element = document.getElementById("myId");
```

#### **2. 通过类名选择**
使用 `document.getElementsByClassName()` 选择具有指定类名的元素集合（返回 HTMLCollection）。
```javascript
const elements = document.getElementsByClassName("myClass");
```

#### **3. 通过标签名选择**
使用 `document.getElementsByTagName()` 选择指定标签名的元素集合（返回 HTMLCollection）。
```javascript
const elements = document.getElementsByTagName("div");
```

#### **4. 通过名称选择**
使用 `document.getElementsByName()` 选择具有指定 `name` 属性的元素集合（返回 NodeList）。
```javascript
const elements = document.getElementsByName("myName");
```

---

### **二、通过 CSS 选择器选择元素**
#### **1. 选择单个元素**
使用 `document.querySelector()` 选择匹配指定 CSS 选择器的第一个元素。
```javascript
const element = document.querySelector(".myClass");
```

#### **2. 选择多个元素**
使用 `document.querySelectorAll()` 选择匹配指定 CSS 选择器的所有元素（返回 NodeList）。
```javascript
const elements = document.querySelectorAll("div.myClass");
```

---

### **三、选择特定元素**
#### **1. 选择 `<html>` 元素**
```javascript
const htmlElement = document.documentElement;
```

#### **2. 选择 `<head>` 元素**
```javascript
const headElement = document.head;
```

#### **3. 选择 `<body>` 元素**
```javascript
const bodyElement = document.body;
```

---

### **四、选择子元素**
#### **1. 选择子元素**
使用 `element.children` 获取元素的所有子元素（返回 HTMLCollection）。
```javascript
const children = document.body.children;
```

#### **2. 选择第一个/最后一个子元素**
```javascript
const firstChild = document.body.firstElementChild;
const lastChild = document.body.lastElementChild;
```

---

### **五、选择父元素**
使用 `element.parentElement` 获取元素的父元素。
```javascript
const parent = document.getElementById("myId").parentElement;
```

---

### **六、选择兄弟元素**
#### **1. 选择前一个兄弟元素**
```javascript
const previousSibling = document.getElementById("myId").previousElementSibling;
```

#### **2. 选择后一个兄弟元素**
```javascript
const nextSibling = document.getElementById("myId").nextElementSibling;
```

---

### **七、示例代码**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM 选择示例</title>
  </head>
  <body>
    <div id="container">
      <p class="text">段落 1</p>
      <p class="text">段落 2</p>
      <p class="text">段落 3</p>
    </div>
    <script>
      // 通过 ID 选择
      const container = document.getElementById("container");
      console.log(container);

      // 通过类名选择
      const paragraphs = document.getElementsByClassName("text");
      console.log(paragraphs);

      // 通过 CSS 选择器选择
      const firstParagraph = document.querySelector(".text");
      console.log(firstParagraph);

      const allParagraphs = document.querySelectorAll(".text");
      console.log(allParagraphs);

      // 选择子元素
      const children = container.children;
      console.log(children);

      // 选择父元素
      const parent = firstParagraph.parentElement;
      console.log(parent);

      // 选择兄弟元素
      const nextSibling = firstParagraph.nextElementSibling;
      console.log(nextSibling);
    </script>
  </body>
</html>
```

---

### **八、总结**
| **方法**                   | **返回类型**   | **说明**                            |
| -------------------------- | -------------- | ----------------------------------- |
| `getElementById()`         | 单个元素       | 通过 `id` 选择元素。**常用**        |
| `getElementsByClassName()` | HTMLCollection | 通过类名选择元素集合。**常用**      |
| `getElementsByTagName()`   | HTMLCollection | 通过标签名选择元素集合。            |
| `getElementsByName()`      | NodeList       | 通过 `name` 属性选择元素集合。      |
| `querySelector()`          | 单个元素       | 通过 CSS 选择器选择第一个匹配元素。 |
| `querySelectorAll()`       | NodeList       | 通过 CSS 选择器选择所有匹配元素。   |
| `children`                 | HTMLCollection | 获取元素的所有子元素。              |
| `parentElement`            | 单个元素       | 获取元素的父元素。                  |
| `previousElementSibling`   | 单个元素       | 获取元素的前一个兄弟元素。          |
| `nextElementSibling`       | 单个元素       | 获取元素的后一个兄弟元素。          |

掌握这些方法可以高效地选择和操作 DOM 元素，是前端开发的核心技能之一。
