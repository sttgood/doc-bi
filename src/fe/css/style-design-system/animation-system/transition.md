---
title: 过渡动画
article: false
order: 1
---

在 CSS 中，**过渡（Transition）** 是一种用于在元素状态变化时添加动画效果的技术。通过过渡，可以平滑地改变元素的属性值（如颜色、大小、位置等），从而提升用户体验。

---

### **1. 过渡属性**
过渡通过以下属性定义：

| 属性                         | 描述                                                        |
| ---------------------------- | ----------------------------------------------------------- |
| `transition-property`        | 指定需要过渡的 CSS 属性（如 `width`、`background-color`）。 |
| `transition-duration`        | 指定过渡的持续时间（如 `1s`、`500ms`）。                    |
| `transition-timing-function` | 指定过渡的时间函数（如 `ease`、`linear`）。                 |
| `transition-delay`           | 指定过渡的延迟时间（如 `0s`、`1s`）。                       |

---

### **2. 过渡语法**
过渡可以通过简写属性 `transition` 定义，也可以分别定义各个属性。

#### **简写语法**
```css
transition: 属性 持续时间 时间函数 延迟;
```

#### **示例**
```css
.box {
  transition: width 1s ease 0s;
}
```

#### **分别定义**
```css
.box {
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
```

---

### **3. 过渡属性详解**
#### **3.1 `transition-property`**
指定需要过渡的 CSS 属性。

• **取值**：
  • 单个属性：`width`、`background-color` 等。
  • 多个属性：用逗号分隔（如 `width, height`）。
  • `all`：所有属性都过渡。
• **示例**：
  ```css
  .box {
    transition-property: width, background-color;
  }
  ```

#### **3.2 `transition-duration`**
指定过渡的持续时间。

• **取值**：时间值（如 `1s`、`500ms`）。
• **示例**：
  ```css
  .box {
    transition-duration: 1s;
  }
  ```

#### **3.3 `transition-timing-function`**
指定过渡的时间函数，控制动画的速度曲线。

• **取值**：
| 值               | 描述                                                      |
| ---------------- | --------------------------------------------------------- |
| `ease`           | 默认值，慢速开始，快速结束。                              |
| `linear`         | 匀速过渡。                                                |
| `ease-in`        | 慢速开始，快速结束。                                      |
| `ease-out`       | 快速开始，慢速结束。                                      |
| `ease-in-out`    | 慢速开始和结束。                                          |
| `cubic-bezier()` | 自定义贝塞尔曲线（如 `cubic-bezier(0.42, 0, 0.58, 1)`）。 |

• **示例**：
  ```css
  .box {
    transition-timing-function: ease-in-out;
  }
  ```

#### **3.4 `transition-delay`**
指定过渡的延迟时间。

• **取值**：时间值（如 `0s`、`1s`）。
• **示例**：
  ```css
  .box {
    transition-delay: 0.5s;
  }
  ```

---

### **4. 实际应用**
#### **4.1 按钮悬停效果**
```css
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
```

#### **4.2 展开动画**
```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 1s ease;
}

.box:hover {
  width: 200px;
}
```

#### **4.3 延迟过渡**
```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 1s ease 0.5s;
}

.box:hover {
  width: 200px;
}
```

---

### **5. 过渡与动画的区别**
| 特性         | 过渡（Transition）            | 动画（Animation）                |
| ------------ | ----------------------------- | -------------------------------- |
| **触发方式** | 需要状态变化（如 `:hover`）。 | 自动触发或通过 JavaScript 控制。 |
| **控制粒度** | 只能控制开始和结束状态。      | 可以定义多个关键帧，控制更复杂。 |
| **适用场景** | 简单的状态变化动画。          | 复杂的连续动画。                 |

---

### **6. 总结**
CSS 过渡是一种简单而强大的动画技术，适用于以下场景：
1. **状态变化动画**：如悬停、点击等。
2. **平滑过渡效果**：如颜色、大小、位置等属性的变化。
3. **提升用户体验**：通过动画效果增强交互性。
