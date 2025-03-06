---
title: 渐变系统
article: false
order: 1
---

在 CSS 中，**渐变（Gradient）** 是一种强大的背景效果，可以创建平滑的颜色过渡。CSS 支持三种渐变类型：**线性渐变（Linear Gradient）**、**径向渐变（Radial Gradient）** 和 **锥形渐变（Conic Gradient）**。以下是详细解析：

---

### **1. 线性渐变（Linear Gradient）**
线性渐变沿着一条直线创建颜色过渡。

#### **语法**
```css
background: linear-gradient(方向, 颜色1, 颜色2, ...);
```

#### **参数**
| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| **方向** | 渐变的方向，可以是角度（如 `45deg`）或关键字（如 `to right`）。 |
| **颜色** | 渐变的颜色值，可以指定多个颜色和位置（如 `red 10%`）。       |

#### **示例**
```css
/* 从左到右的渐变 */
.linear-gradient {
  background: linear-gradient(to right, red, yellow);
}

/* 对角渐变 */
.diagonal-gradient {
  background: linear-gradient(45deg, red, yellow);
}

/* 多颜色渐变 */
.multi-color-gradient {
  background: linear-gradient(to right, red, yellow 30%, green);
}
```

---

### **2. 径向渐变（Radial Gradient）**
径向渐变从中心点向外创建颜色过渡。

#### **语法**
```css
background: radial-gradient(形状 大小 at 位置, 颜色1, 颜色2, ...);
```

#### **参数**
| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| **形状** | 渐变的形状，可以是 `circle`（圆形）或 `ellipse`（椭圆形）。  |
| **大小** | 渐变的大小，可以是 `closest-side`、`farthest-corner` 等。    |
| **位置** | 渐变的中心点，可以是 `center`、`top left` 或具体坐标（如 `50% 50%`）。 |
| **颜色** | 渐变的颜色值，可以指定多个颜色和位置（如 `red 10%`）。       |

#### **示例**
```css
/* 圆形渐变 */
.radial-gradient {
  background: radial-gradient(circle, red, yellow);
}

/* 椭圆形渐变 */
.ellipse-gradient {
  background: radial-gradient(ellipse, red, yellow);
}

/* 多颜色渐变 */
.multi-color-radial-gradient {
  background: radial-gradient(circle at center, red, yellow 30%, green);
}
```

---

### **3. 锥形渐变（Conic Gradient）**
锥形渐变围绕中心点创建颜色过渡，类似于时钟的颜色分布。

#### **语法**
```css
background: conic-gradient(颜色1, 颜色2, ...);
```

#### **参数**
| 参数     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| **颜色** | 渐变的颜色值，可以指定多个颜色和位置（如 `red 10%`）。 |

#### **示例**
```css
/* 简单锥形渐变 */
.conic-gradient {
  background: conic-gradient(red, yellow, green);
}

/* 多颜色锥形渐变 */
.multi-color-conic-gradient {
  background: conic-gradient(red 0%, yellow 30%, green 60%, blue 100%);
}

/* 带有角度的锥形渐变 */
.angled-conic-gradient {
  background: conic-gradient(from 45deg, red, yellow, green);
}
```

---

### **4. 实际应用**
#### **4.1 按钮背景**
```css
.button {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
```

#### **4.2 卡片背景**
```css
.card {
  background: radial-gradient(circle, #ffffff, #f0f0f0);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

#### **4.3 进度条**
```css
.progress-bar {
  background: conic-gradient(#4caf50 0%, #4caf50 75%, #f0f0f0 75%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

---

### **5. 总结**
| 渐变类型     | 描述                       | 适用场景               |
| ------------ | -------------------------- | ---------------------- |
| **线性渐变** | 沿着一条直线创建颜色过渡。 | 按钮背景、导航栏背景   |
| **径向渐变** | 从中心点向外创建颜色过渡。 | 卡片背景、圆形元素背景 |
| **锥形渐变** | 围绕中心点创建颜色过渡。   | 进度条、时钟效果       |
