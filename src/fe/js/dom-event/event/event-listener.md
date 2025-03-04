---
title: 事件监听
article: false
order: 2
---
### 1. 添加事件监听
- **使用 `addEventListener()`**  
  这是推荐的方式，可以为同一个事件添加多个处理程序。  
  语法：  
  
  ```javascript
  element.addEventListener(event, handler, options);
  ```
  示例：  
  ```javascript
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
      console.log('Button clicked!');
  });
  ```
  
- **使用 HTML 属性**  
  直接在 HTML 元素中绑定事件处理程序。  
  示例：  
  ```html
  <button onclick="handleClick()">Click me</button>
  <script>
      function handleClick() {
          console.log('Button clicked!');
      }
  </script>
  ```

- **使用 DOM 属性**  
  通过 JavaScript 直接为 DOM 元素的属性赋值。  
  示例：  
  ```javascript
  const button = document.getElementById('myButton');
  button.onclick = function() {
      console.log('Button clicked!');
  };
  ```

---

### **2. 移除事件监听**
- **使用 `removeEventListener()`**  
  移除通过 `addEventListener()` 添加的事件处理程序。  
  语法：  
  ```javascript
  element.removeEventListener(event, handler);
  ```
  示例：  
  ```javascript
  function handleClick() {
      console.log('Button clicked!');
  }
  button.addEventListener('click', handleClick);
  button.removeEventListener('click', handleClick);
  ```



```javascript
button.addEventListener('click', function(event) {
    console.log('Target:', event.target)
    console.log('Current Target:', event.currentTarget);
    event.preventDefault(); // 阻止默认行
});
```

以下是一个综合示例，展示事件监听、事件对象和事件委托的使用：

```html
<button id="myButton">Click me</button>
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<script>
    // 按钮点击事件
    const button = document.getElementById('myButton');
    button.addEventListener('click', function(event) {
        console.log('Button clicked!');
        console.log('Event target:', event.target);
    });

    // 列表项点击事件（事件委托）
    const list = document.getElementById('myList');
    list.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            console.log('List item clicked:', event.target.textContent);
        }
    });
</script>
```

- **添加事件监听**：使用 `addEventListener()`。  
- **移除事件监听**：使用 `removeEventListener()`。  
