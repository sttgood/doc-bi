---
title: 事件对象与事件委托
article: false
order: 3
---
### **1. 事件对象（Event Object）**
事件对象是事件触发时自动创建的对象，包含与事件相关的信息和方法。通过事件对象，可以获取事件的详细信息并控制事件的行为。

#### **1.1 常用属性和方法**
- **`event.target`**  
  触发事件的元素（事件的实际目标）。  
  ```javascript
  button.addEventListener('click', function(event) {
      console.log('Target:', event.target);
  });
  ```

- **`event.currentTarget`**  
  绑定事件处理程序的元素（当前处理事件的元素）。  
  ```javascript
  button.addEventListener('click', function(event) {
      console.log('Current Target:', event.currentTarget);
  });
  ```

- **`event.type`**  
  事件类型（如 `click`、`keydown` 等）。  
  ```javascript
  button.addEventListener('click', function(event) {
      console.log('Event type:', event.type);
  });
  ```

- **`event.preventDefault()`**  
  阻止事件的默认行为（如表单提交、链接跳转）。  
  ```javascript
  link.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Link click prevented');
  });
  ```

- **`event.stopPropagation()`**  
  阻止事件冒泡。  
  ```javascript
  child.addEventListener('click', function(event) {
      event.stopPropagation();
      console.log('Child clicked');
  });
  parent.addEventListener('click', function() {
      console.log('Parent clicked');
  });
  ```

- **`event.key`**  
  获取按下的键盘键值（用于键盘事件）。  
  ```javascript
  document.addEventListener('keydown', function(event) {
      console.log('Key pressed:', event.key);
  });
  ```

#### **1.2 示例**
```javascript
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Target:', event.target); // 触发事件的元素
    console.log('Current Target:', event.currentTarget); // 绑定事件的元素
    console.log('Event type:', event.type); // 事件类型
    event.preventDefault(); // 阻止默认行为
    event.stopPropagation(); // 阻止事件冒泡
});
```

---

### **2. 事件委托（Event Delegation）**
事件委托是一种优化技术，利用事件冒泡机制，将事件监听器添加到父元素，处理子元素的事件。这种方式可以减少事件监听器的数量，提高性能。

#### **2.1 事件委托的原理**
- 事件冒泡：事件从目标元素向上传播到父元素。
- 将事件监听器添加到父元素，通过 `event.target` 判断实际触发事件的子元素。

#### **2.2 事件委托的优点**
- 减少事件监听器的数量，节省内存。
- 动态添加的子元素无需重新绑定事件。

#### **2.3 示例**
```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<script>
    // 将事件监听器添加到父元素
    document.getElementById('myList').addEventListener('click', function(event) {
        // 判断实际触发事件的子元素
        if (event.target.tagName === 'LI') {
            console.log('List item clicked:', event.target.textContent);
        }
    });
</script>
```

#### **2.4 动态添加子元素**
事件委托非常适合处理动态添加的元素，无需重新绑定事件。  
```javascript
// 动态添加子元素
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
document.getElementById('myList').appendChild(newItem);

// 点击新添加的子元素，仍然会触发事件
```

---

### **3. 综合示例**
以下是一个综合示例，展示事件对象和事件委托的使用：

```html
<button id="myButton">Click me</button>
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<script>
    // 按钮点击事件
    document.getElementById('myButton').addEventListener('click', function(event) {
        console.log('Button clicked');
        console.log('Event target:', event.target);
        console.log('Event type:', event.type);
    });

    // 事件委托：列表项点击事件
    document.getElementById('myList').addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            console.log('List item clicked:', event.target.textContent);
        }
    });

    // 动态添加子元素
    const newItem = document.createElement('li');
    newItem.textContent = 'Item 4';
    document.getElementById('myList').appendChild(newItem);
</script>
```

---

### **4. 总结**
- **事件对象**：通过 `event` 对象获取事件信息，控制事件行为。  
- **事件委托**：利用事件冒泡机制，将事件监听器添加到父元素，处理子元素的事件。  
- **优点**：减少事件监听器数量，支持动态添加元素，提高性能。  

通过掌握事件对象和事件委托，你可以更高效地处理 DOM 事件，实现复杂的交互逻辑。
