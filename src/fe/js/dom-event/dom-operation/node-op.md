---
title: 节点操作
article: false
order: 4
---
在 JavaScript 中，动态创建、删除和修改 DOM 节点是前端开发的核心任务之一。以下是详细的操作方法：

---

### **1. 动态创建 DOM 节点**
- **创建元素节点**  
  使用 `document.createElement()` 方法。  
  ```javascript
  const div = document.createElement('div');
  ```

- **创建文本节点**  
  使用 `document.createTextNode()` 方法。  
  ```javascript
  const text = document.createTextNode('Hello, World!');
  ```

- **创建文档片段**  
  使用 `document.createDocumentFragment()`，用于批量添加节点以提高性能。  
  ```javascript
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 10; i++) {
      const div = document.createElement('div');
      div.textContent = `Item ${i}`;
      fragment.appendChild(div);
  }
  document.body.appendChild(fragment);
  ```

---

### **2. 插入 DOM 节点**
- **插入到父元素末尾**  
  使用 `appendChild()` 方法。  
  ```javascript
  const parent = document.getElementById('parent');
  parent.appendChild(div);
  ```

- **插入到指定位置**  
  使用 `insertBefore()` 方法。  
  ```javascript
  const parent = document.getElementById('parent');
  const referenceElement = document.getElementById('reference');
  parent.insertBefore(div, referenceElement);
  ```

- **插入 HTML 字符串**  
  使用 `innerHTML` 或 `insertAdjacentHTML()` 方法。  
  ```javascript
  parent.innerHTML = '<div>New Content</div>';
  parent.insertAdjacentHTML('beforeend', '<div>New Content</div>');
  ```

---

### **3. 修改 DOM 节点**
- **修改元素内容**  
  使用 `innerHTML` 或 `textContent`。  
  ```javascript
  div.innerHTML = '<strong>Hello</strong> World!'; // 支持 HTML
  div.textContent = 'Hello World!'; // 仅文本
  ```

- **修改元素属性**  
  使用 `setAttribute()` 或直接访问属性。  
  ```javascript
  div.setAttribute('id', 'newId'); // 设置属性
  div.id = 'newId'; // 直接修改属性
  ```

- **修改元素样式**  
  使用 `style` 属性。  
  ```javascript
  div.style.color = 'red';
  div.style.backgroundColor = '#f0f0f0';
  ```

- **修改元素类名**  
  使用 `classList` 方法。  
  ```javascript
  div.classList.add('newClass'); // 添加类
  div.classList.remove('oldClass'); // 移除类
  div.classList.toggle('active'); // 切换类
  ```

---

### **4. 删除 DOM 节点**
- **移除子节点**  
  使用 `removeChild()` 方法。  
  ```javascript
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');
  parent.removeChild(child);
  ```

- **直接移除节点**  
  使用 `remove()` 方法。  
  ```javascript
  const child = document.getElementById('child');
  child.remove();
  ```

---

### **5. 替换 DOM 节点**
- **替换子节点**  
  使用 `replaceChild()` 方法。  
  ```javascript
  const parent = document.getElementById('parent');
  const oldChild = document.getElementById('oldChild');
  const newChild = document.createElement('div');
  newChild.textContent = 'New Child';
  parent.replaceChild(newChild, oldChild);
  ```

---

### **6. 克隆 DOM 节点**
- **克隆节点**  
  使用 `cloneNode()` 方法。  
  ```javascript
  const original = document.getElementById('original');
  const clone = original.cloneNode(true); // true 表示深度克隆（包括子节点）
  document.body.appendChild(clone);
  ```

---

### **7. 综合示例**
以下是一个综合示例，展示如何动态创建、插入、修改和删除 DOM 节点：

```javascript
// 创建新元素
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';

// 插入到父元素末尾
const parent = document.getElementById('parent');
parent.appendChild(newDiv);

// 修改元素内容
newDiv.innerHTML = '<strong>Updated Content</strong>';

// 修改元素样式
newDiv.style.color = 'blue';
newDiv.style.fontSize = '20px';

// 添加类名
newDiv.classList.add('highlight');

// 移除元素
setTimeout(() => {
    newDiv.remove();
}, 3000);
```

---

### **8. 性能优化**
- **减少 DOM 操作**  
  将多次 DOM 操作合并为一次，或使用文档片段（`DocumentFragment`）。  
  ```javascript
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
      const div = document.createElement('div');
      div.textContent = `Item ${i}`;
      fragment.appendChild(div);
  }
  document.body.appendChild(fragment);
  ```

- **事件委托**  
  将事件监听器添加到父元素，利用事件冒泡机制处理子元素事件。  
  ```javascript
  document.querySelector('ul').addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          console.log('List item clicked:', event.target.textContent);
      }
  });
  ```

---

通过以上方法，你可以灵活地动态创建、删除和修改 DOM 节点，实现丰富的交互效果和动态内容更新。
