---
title: 元素属性与内容操作
article: false
order: 3
---
在 JavaScript 中，操作 DOM 元素的属性和内容是前端开发的核心任务之一。以下是详细的操作方法：

---

### **1. 操作 DOM 元素的属性**
- **获取属性值**  
  使用 `getAttribute()` 方法或直接访问属性。  
  ```javascript
  const element = document.getElementById('myElement');
  const id = element.getAttribute('id'); // 获取 id 属性
  const src = element.src; // 直接访问 src 属性
  ```

- **设置属性值**  
  使用 `setAttribute()` 方法或直接修改属性。  
  ```javascript
  element.setAttribute('class', 'newClass'); // 设置 class 属性
  element.src = 'image.jpg'; // 直接修改 src 属性
  ```

- **移除属性**  
  使用 `removeAttribute()` 方法。  
  ```javascript
  element.removeAttribute('class'); // 移除 class 属性
  ```

- **检查属性是否存在**  
  使用 `hasAttribute()` 方法。  
  ```javascript
  if (element.hasAttribute('disabled')) {
      console.log('Element is disabled');
  }
  ```

---

### **2. 操作 DOM 元素的内容**
- **获取元素内容**  
  使用 `innerHTML`、`textContent` 或 `innerText`。  
  ```javascript
  const content = element.innerHTML; // 获取 HTML 内容
  const text = element.textContent; // 获取文本内容（包括隐藏元素）
  const visibleText = element.innerText; // 获取可见文本内容
  ```

- **设置元素内容**  
  使用 `innerHTML`、`textContent` 或 `innerText`。  
  ```javascript
  element.innerHTML = '<strong>Hello</strong> World!'; // 支持 HTML
  element.textContent = 'Hello World!'; // 仅文本
  element.innerText = 'Hello World!'; // 仅可见文本
  ```

- **插入 HTML 字符串**  
  使用 `insertAdjacentHTML()` 方法。  
  ```javascript
  element.insertAdjacentHTML('beforeend', '<div>New Content</div>');
  ```

---

### **3. 操作 DOM 元素的样式**
- **获取样式值**  
  使用 `style` 属性或 `window.getComputedStyle()` 方法。  
  ```javascript
  const color = element.style.color; // 获取内联样式
  const computedStyle = window.getComputedStyle(element);
  const fontSize = computedStyle.fontSize; // 获取计算样式
  ```

- **设置样式值**  
  使用 `style` 属性。  
  ```javascript
  element.style.color = 'red';
  element.style.backgroundColor = '#f0f0f0';
  ```

- **修改类名**  
  使用 `classList` 方法。  
  ```javascript
  element.classList.add('newClass'); // 添加类
  element.classList.remove('oldClass'); // 移除类
  element.classList.toggle('active'); // 切换类
  ```

---

### **4. 操作 DOM 元素的数据属性**
- **获取数据属性值**  
  使用 `dataset` 属性。  
  ```javascript
  const element = document.getElementById('myElement');
  const userId = element.dataset.userId; // 获取 data-user-id 属性
  ```

- **设置数据属性值**  
  使用 `dataset` 属性。  
  ```javascript
  element.dataset.userId = '123'; // 设置 data-user-id 属性
  ```

---

### **5. 操作表单元素的值**
- **获取表单值**  
  使用 `value` 属性。  
  ```javascript
  const input = document.querySelector('input');
  const inputValue = input.value; // 获取输入框的值
  ```

- **设置表单值**  
  使用 `value` 属性。  
  ```javascript
  input.value = 'New Value'; // 设置输入框的值
  ```

- **获取复选框或单选框的状态**  
  使用 `checked` 属性。  
  ```javascript
  const checkbox = document.querySelector('input[type="checkbox"]');
  const isChecked = checkbox.checked; // 获取复选框状态
  ```

---

### **6. 综合示例**
以下是一个综合示例，展示如何操作 DOM 元素的属性和内容：

```javascript
// 获取元素
const element = document.getElementById('myElement');

// 操作属性
element.setAttribute('class', 'newClass'); // 设置 class 属性
const id = element.getAttribute('id'); // 获取 id 属性
element.removeAttribute('disabled'); // 移除 disabled 属性

// 操作内容
element.innerHTML = '<strong>Hello</strong> World!'; // 设置 HTML 内容
const text = element.textContent; // 获取文本内容

// 操作样式
element.style.color = 'blue';
element.style.fontSize = '20px';

// 操作类名
element.classList.add('highlight');
element.classList.remove('oldClass');

// 操作数据属性
element.dataset.userId = '123';
const userId = element.dataset.userId;

// 操作表单元素
const input = document.querySelector('input');
input.value = 'New Value';
const inputValue = input.value;
```

---

### **7. 性能优化**
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
