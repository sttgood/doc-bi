---
title: 事件流（冒泡与捕获）
article: false
order: 1
---
在 JavaScript 中，DOM 事件流描述了事件从触发到处理的整个过程。事件流分为三个阶段：**捕获阶段**、**目标阶段**和**冒泡阶段**。理解事件流对于正确处理事件至关重要。

---

### **1. 事件流的三个阶段**
1. **捕获阶段（Capture Phase）**  
   - 事件从文档根节点（`window`）向下传播到目标元素。  
   - 在这个阶段，事件会经过目标元素的祖先元素。

2. **目标阶段（Target Phase）**  
   - 事件到达目标元素，触发目标元素的事件处理程序。

3. **冒泡阶段（Bubble Phase）**  
   - 事件从目标元素向上传播到文档根节点。  
   - 在这个阶段，事件会经过目标元素的祖先元素。

---

### **2. 事件捕获与冒泡的默认行为**
- **默认行为**  
  大多数事件（如 `click`）默认在冒泡阶段触发事件处理程序。  
  例如：  
  ```javascript
  document.getElementById('child').addEventListener('click', function() {
      console.log('Child clicked');
  });
  document.getElementById('parent').addEventListener('click', function() {
      console.log('Parent clicked');
  });
  ```
  点击子元素时，输出顺序为：  
  ```
  Child clicked
  Parent clicked
  ```

- **捕获阶段触发事件**  
  可以通过将 `addEventListener` 的第三个参数设置为 `true`，在捕获阶段触发事件处理程序。  
  ```javascript
  document.getElementById('child').addEventListener('click', function() {
      console.log('Child clicked');
  }, true);
  document.getElementById('parent').addEventListener('click', function() {
      console.log('Parent clicked');
  }, true);
  ```
  点击子元素时，输出顺序为：  
  ```
  Parent clicked
  Child clicked
  ```

---

### **3. 阻止事件冒泡**
- **使用 `stopPropagation()`**  
  阻止事件继续向上冒泡。  
  ```javascript
  document.getElementById('child').addEventListener('click', function(event) {
      console.log('Child clicked');
      event.stopPropagation(); // 阻止冒泡
  });
  document.getElementById('parent').addEventListener('click', function() {
      console.log('Parent clicked');
  });
  ```
  点击子元素时，只会输出：  
  ```
  Child clicked
  ```

---

### **4. 阻止默认行为**
- **使用 `preventDefault()`**  
  阻止事件的默认行为（如表单提交、链接跳转）。  
  ```javascript
  document.querySelector('a').addEventListener('click', function(event) {
      event.preventDefault(); // 阻止链接跳转
      console.log('Link clicked');
  });
  ```

---

### **5. 事件委托**
- **利用冒泡机制**  
  将事件监听器添加到父元素，通过事件冒泡处理子元素的事件。  
  ```javascript
  document.querySelector('ul').addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          console.log('List item clicked:', event.target.textContent);
      }
  });
  ```

---

### **6. 综合示例**
以下是一个综合示例，展示事件捕获、冒泡和事件委托的使用：

```html
<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <div id="child">Child</div>
    </div>
</div>
```

```javascript
// 捕获阶段
document.getElementById('grandparent').addEventListener('click', function() {
    console.log('Grandparent clicked (Capture)');
}, true);

document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent clicked (Capture)');
}, true);

// 目标阶段
document.getElementById('child').addEventListener('click', function(event) {
    console.log('Child clicked (Target)');
    event.stopPropagation(); // 阻止冒泡
});

// 冒泡阶段
document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent clicked (Bubble)');
});

document.getElementById('grandparent').addEventListener('click', function() {
    console.log('Grandparent clicked (Bubble)');
});
```

点击 `Child` 元素时，输出顺序为：  
```
Grandparent clicked (Capture)
Parent clicked (Capture)
Child clicked (Target)
```

---

### **7. 总结**
- **事件捕获**：从根节点向下传播到目标元素。  
- **目标阶段**：事件到达目标元素。  
- **事件冒泡**：从目标元素向上传播到根节点。  
- **事件委托**：利用冒泡机制，将事件监听器添加到父元素。  
- **阻止冒泡**：使用 `event.stopPropagation()`。  
- **阻止默认行为**：使用 `event.preventDefault()`。

通过理解事件流，你可以更好地控制事件的处理顺序，优化代码性能，并实现复杂的交互逻辑。
