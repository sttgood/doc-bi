---
title: DOM树结构与节点类型
article: false
order: 1
---
DOM（Document Object Model，文档对象模型）是浏览器将 HTML 文档解析为树形结构的一种表示方式。通过 DOM，JavaScript 可以动态地访问、操作和更新 HTML 文档的内容、结构和样式。

---

### **一、DOM 树结构**
DOM 树是由节点（Node）组成的层次结构，每个节点代表 HTML 文档中的一个元素、属性或文本内容。以下是 DOM 树的基本结构：

1. **根节点**  
   - `document`：DOM 树的根节点，代表整个 HTML 文档。

2. **元素节点**  
   - HTML 标签（如 `<div>`、`<p>`、`<a>`）被解析为元素节点（Element Node）。

3. **属性节点**  
   - HTML 标签的属性（如 `class`、`id`、`href`）被解析为属性节点（Attribute Node）。

4. **文本节点**  
   - HTML 标签内的文本内容被解析为文本节点（Text Node）。

5. **注释节点**  
   - HTML 中的注释（`<!-- 注释 -->`）被解析为注释节点（Comment Node）。

---

### **二、节点类型**
DOM 中的每个节点都有一个 `nodeType` 属性，用于标识节点的类型。以下是常见的节点类型及其对应的 `nodeType` 值：

| **节点类型**        | **nodeType 值** | **说明**                                                     |
| ------------------- | --------------- | ------------------------------------------------------------ |
| `Element Node`      | 1               | 元素节点，代表 HTML 标签（如 `<div>`、`<p>`）。              |
| `Attribute Node`    | 2               | 属性节点，代表 HTML 标签的属性（如 `class`、`id`）。         |
| `Text Node`         | 3               | 文本节点，代表 HTML 标签内的文本内容。                       |
| `Comment Node`      | 8               | 注释节点，代表 HTML 中的注释（`<!-- 注释 -->`）。            |
| `Document Node`     | 9               | 文档节点，代表整个 HTML 文档（`document`）。                 |
| `DocumentType Node` | 10              | 文档类型节点，代表 `<!DOCTYPE>` 声明。                       |
| `DocumentFragment`  | 11              | 文档片段节点，用于临时存储一组节点（如 `document.createDocumentFragment()`）。 |

---

### **三、DOM 树示例**
以下是一个简单的 HTML 文档及其对应的 DOM 树结构：

#### **HTML 文档**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM 示例</title>
  </head>
  <body>
    <h1>Hello, DOM!</h1>
    <p>这是一个段落。</p>
    <!-- 这是一个注释 -->
  </body>
</html>
```

#### **DOM 树结构**
```
Document (nodeType: 9)
  ├── DocumentType (nodeType: 10) <!DOCTYPE html>
  ├── Element (nodeType: 1) <html>
  │   ├── Element (nodeType: 1) <head>
  │   │   └── Element (nodeType: 1) <title>
  │   │       └── Text (nodeType: 3) "DOM 示例"
  │   └── Element (nodeType: 1) <body>
  │       ├── Element (nodeType: 1) <h1>
  │       │   └── Text (nodeType: 3) "Hello, DOM!"
  │       ├── Element (nodeType: 1) <p>
  │       │   └── Text (nodeType: 3) "这是一个段落。"
  │       └── Comment (nodeType: 8) " 这是一个注释 "
```

---

### **四、常用节点属性和方法**
#### **节点属性**
1. **`nodeType`**  
   返回节点的类型（如 `1` 表示元素节点，`3` 表示文本节点）。

2. **`nodeName`**  
   返回节点的名称（如元素节点返回标签名，文本节点返回 `#text`）。

3. **`nodeValue`**  
   返回节点的值（如文本节点返回文本内容，元素节点返回 `null`）。

4. **`childNodes`**  
   返回节点的子节点列表（NodeList）。

5. **`parentNode`**  
   返回节点的父节点。

6. **`firstChild` / `lastChild`**  
   返回节点的第一个/最后一个子节点。

7. **`previousSibling` / `nextSibling`**  
   返回节点的前一个/后一个兄弟节点。

#### **节点方法**
1. **`appendChild()`**  
   向节点添加一个子节点。

2. **`removeChild()`**  
   移除节点的子节点。

3. **`replaceChild()`**  
   替换节点的子节点。

4. **`cloneNode()`**  
   克隆节点。

5. **`hasChildNodes()`**  
   检查节点是否有子节点。

---

### **五、示例代码**
```javascript
// 获取元素节点
const body = document.body;
console.log(body.nodeType); // 1 (元素节点)
console.log(body.nodeName); // "BODY"

// 获取文本节点
const h1 = document.querySelector("h1");
const textNode = h1.firstChild;
console.log(textNode.nodeType); // 3 (文本节点)
console.log(textNode.nodeValue); // "Hello, DOM!"

// 添加新节点
const newParagraph = document.createElement("p");
newParagraph.textContent = "这是新添加的段落。";
body.appendChild(newParagraph);

// 移除节点
const oldParagraph = document.querySelector("p");
body.removeChild(oldParagraph);
```

---

### **六、总结**
- DOM 树是由节点组成的层次结构，包括元素节点、属性节点、文本节点等。
- 通过 `nodeType` 可以区分节点类型。
- JavaScript 可以通过 DOM API 动态操作 HTML 文档的内容和结构。

掌握 DOM 树结构和节点类型是前端开发的基础，能够帮助你更高效地操作页面内容。
