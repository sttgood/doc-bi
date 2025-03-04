---
title: 常见事件类型
article: false
order: 4
---

以下是常见事件类型的表格总结，涵盖了鼠标事件、键盘事件、表单事件、窗口事件和触摸事件等：

| **事件类型**  | **描述**                                                     | **示例**                                                     |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **鼠标事件**  |                                                              |                                                              |
| `click`       | 当用户点击元素时触发。                                       | `element.addEventListener('click', () => console.log('Clicked!'));` |
| `dblclick`    | 当用户双击元素时触发。                                       | `element.addEventListener('dblclick', () => console.log('Double Clicked!'));` |
| `mouseover`   | 当鼠标指针移动到元素上方时触发。                             | `element.addEventListener('mouseover', () => console.log('Mouse Over!'));` |
| `mouseout`    | 当鼠标指针移出元素时触发。                                   | `element.addEventListener('mouseout', () => console.log('Mouse Out!'));` |
| `mousemove`   | 当鼠标指针在元素内移动时触发。                               | `element.addEventListener('mousemove', () => console.log('Mouse Moving!'));` |
| `mousedown`   | 当鼠标按钮在元素上按下时触发。                               | `element.addEventListener('mousedown', () => console.log('Mouse Down!'));` |
| `mouseup`     | 当鼠标按钮在元素上释放时触发。                               | `element.addEventListener('mouseup', () => console.log('Mouse Up!'));` |
| **键盘事件**  |                                                              |                                                              |
| `keydown`     | 当用户按下键盘上的任意键时触发。                             | `document.addEventListener('keydown', (e) => console.log('Key Down:', e.key));` |
| `keyup`       | 当用户释放键盘上的任意键时触发。                             | `document.addEventListener('keyup', (e) => console.log('Key Up:', e.key));` |
| `keypress`    | 当用户按下并释放一个字符键时触发（已弃用，推荐使用 `keydown` 或 `keyup`）。 | `document.addEventListener('keypress', (e) => console.log('Key Press:', e.key));` |
| **表单事件**  |                                                              |                                                              |
| `submit`      | 当表单提交时触发。                                           | `form.addEventListener('submit', (e) => { e.preventDefault(); console.log('Form Submitted!'); });` |
| `input`       | 当输入框的值发生变化时触发。                                 | `input.addEventListener('input', () => console.log('Input Changed!'));` |
| `change`      | 当表单元素的值发生变化并失去焦点时触发（如输入框、下拉框）。 | `input.addEventListener('change', () => console.log('Input Changed!'));` |
| `focus`       | 当元素获得焦点时触发。                                       | `input.addEventListener('focus', () => console.log('Input Focused!'));` |
| `blur`        | 当元素失去焦点时触发。                                       | `input.addEventListener('blur', () => console.log('Input Blurred!'));` |
| **窗口事件**  |                                                              |                                                              |
| `load`        | 当页面或资源（如图片）加载完成时触发。                       | `window.addEventListener('load', () => console.log('Page Loaded!'));` |
| `resize`      | 当窗口大小改变时触发。                                       | `window.addEventListener('resize', () => console.log('Window Resized!'));` |
| `scroll`      | 当页面滚动时触发。                                           | `window.addEventListener('scroll', () => console.log('Page Scrolled!'));` |
| **触摸事件**  |                                                              |                                                              |
| `touchstart`  | 当用户触摸屏幕时触发。                                       | `element.addEventListener('touchstart', () => console.log('Touch Started!'));` |
| `touchmove`   | 当用户在屏幕上移动手指时触发。                               | `element.addEventListener('touchmove', () => console.log('Touch Moved!'));` |
| `touchend`    | 当用户停止触摸屏幕时触发。                                   | `element.addEventListener('touchend', () => console.log('Touch Ended!'));` |
| **其他事件**  |                                                              |                                                              |
| `contextmenu` | 当用户右键点击元素时触发。                                   | `element.addEventListener('contextmenu', (e) => { e.preventDefault(); console.log('Right Clicked!'); });` |
| `dragstart`   | 当用户开始拖动元素时触发。                                   | `element.addEventListener('dragstart', () => console.log('Drag Started!'));` |
| `drop`        | 当用户释放拖动的元素时触发。                                 | `element.addEventListener('drop', () => console.log('Element Dropped!'));` |

---



**1. 鼠标事件**

- **`click`**  
  当用户点击元素时触发。  
  
  ```javascript
  element.addEventListener('click', function() {
      console.log('Element clicked');
  });
  ```
  
- **`dblclick`**  
  当用户双击元素时触发。  
  ```javascript
  element.addEventListener('dblclick', function() {
      console.log('Element double-clicked');
  });
  ```

- **`mouseover`**  
  当鼠标指针移动到元素上方时触发。  
  ```javascript
  element.addEventListener('mouseover', function() {
      console.log('Mouse over element');
  });
  ```

- **`mouseout`**  
  当鼠标指针移出元素时触发。  
  ```javascript
  element.addEventListener('mouseout', function() {
      console.log('Mouse out of element');
  });
  ```

- **`mousemove`**  
  当鼠标指针在元素内移动时触发。  
  ```javascript
  element.addEventListener('mousemove', function() {
      console.log('Mouse moving over element');
  });
  ```

- **`mousedown`**  
  当鼠标按钮在元素上按下时触发。  
  ```javascript
  element.addEventListener('mousedown', function() {
      console.log('Mouse button pressed');
  });
  ```

- **`mouseup`**  
  当鼠标按钮在元素上释放时触发。  
  ```javascript
  element.addEventListener('mouseup', function() {
      console.log('Mouse button released');
  });
  ```

---

### **2. 键盘事件**
- **`keydown`**  
  当用户按下键盘上的任意键时触发。  
  ```javascript
  document.addEventListener('keydown', function(event) {
      console.log('Key pressed:', event.key);
  });
  ```

- **`keyup`**  
  当用户释放键盘上的任意键时触发。  
  ```javascript
  document.addEventListener('keyup', function(event) {
      console.log('Key released:', event.key);
  });
  ```

- **`keypress`**  
  当用户按下并释放一个字符键时触发（已弃用，推荐使用 `keydown` 或 `keyup`）。  
  ```javascript
  document.addEventListener('keypress', function(event) {
      console.log('Key pressed:', event.key);
  });
  ```

---

### **3. 表单事件**
- **`submit`**  
  当表单提交时触发。  
  ```javascript
  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); // 阻止默认提交行为
      console.log('Form submitted');
  });
  ```

- **`input`**  
  当输入框的值发生变化时触发。  
  ```javascript
  document.querySelector('input').addEventListener('input', function() {
      console.log('Input value changed');
  });
  ```

- **`change`**  
  当表单元素的值发生变化并失去焦点时触发（如输入框、下拉框）。  
  ```javascript
  document.querySelector('input').addEventListener('change', function() {
      console.log('Input value changed');
  });
  ```

- **`focus`**  
  当元素获得焦点时触发。  
  ```javascript
  document.querySelector('input').addEventListener('focus', function() {
      console.log('Input focused');
  });
  ```

- **`blur`**  
  当元素失去焦点时触发。  
  ```javascript
  document.querySelector('input').addEventListener('blur', function() {
      console.log('Input blurred');
  });
  ```

---

### **4. 窗口事件**
- **`load`**  
  当页面或资源（如图片）加载完成时触发。  
  ```javascript
  window.addEventListener('load', function() {
      console.log('Page loaded');
  });
  ```

- **`resize`**  
  当窗口大小改变时触发。  
  ```javascript
  window.addEventListener('resize', function() {
      console.log('Window resized');
  });
  ```

- **`scroll`**  
  当页面滚动时触发。  
  ```javascript
  window.addEventListener('scroll', function() {
      console.log('Page scrolled');
  });
  ```

---

### **5. 触摸事件（移动端）**
- **`touchstart`**  
  当用户触摸屏幕时触发。  
  ```javascript
  element.addEventListener('touchstart', function() {
      console.log('Touch started');
  });
  ```

- **`touchmove`**  
  当用户在屏幕上移动手指时触发。  
  ```javascript
  element.addEventListener('touchmove', function() {
      console.log('Touch moved');
  });
  ```

- **`touchend`**  
  当用户停止触摸屏幕时触发。  
  ```javascript
  element.addEventListener('touchend', function() {
      console.log('Touch ended');
  });
  ```

---

### **6. 其他事件**
- **`contextmenu`**  
  当用户右键点击元素时触发。  
  ```javascript
  element.addEventListener('contextmenu', function(event) {
      event.preventDefault(); // 阻止默认右键菜单
      console.log('Right-clicked');
  });
  ```

- **`dragstart`**  
  当用户开始拖动元素时触发。  
  ```javascript
  element.addEventListener('dragstart', function() {
      console.log('Drag started');
  });
  ```

- **`drop`**  
  当用户释放拖动的元素时触发。  
  ```javascript
  element.addEventListener('drop', function() {
      console.log('Element dropped');
  });
  ```

---

### **7. 综合示例**
以下是一个综合示例，展示常见事件的使用：

```html
<button id="myButton">Click me</button>
<input id="myInput" type="text" placeholder="Type something">
<form id="myForm">
    <input type="submit" value="Submit">
</form>
<script>
    // 按钮点击事件
    document.getElementById('myButton').addEventListener('click', function() {
        console.log('Button clicked');
    });

    // 输入框输入事件
    document.getElementById('myInput').addEventListener('input', function() {
        console.log('Input value:', this.value);
    });

    // 表单提交事件
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
    });

    // 窗口大小改变事件
    window.addEventListener('resize', function() {
        console.log('Window resized');
    });
</script>
```

### **总结**

- **鼠标事件**：处理用户与鼠标的交互，如点击、移动等。
- **键盘事件**：处理用户与键盘的交互，如按键按下、释放等。
- **表单事件**：处理表单元素的交互，如输入、提交等。
- **窗口事件**：处理页面加载、窗口大小改变等。
- **触摸事件**：处理移动端触摸交互。
- **其他事件**：如右键菜单、拖放等。
