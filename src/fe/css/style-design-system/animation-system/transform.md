---
title: 变换
article: false
order: 1
---

在 CSS 中，**`transform`** 属性用于对元素进行变换，包括平移、旋转、缩放、倾斜等操作。它不会影响文档流，但可以改变元素的视觉表现。以下是 `transform` 属性的详细解析：

---

### **1. 基本语法**
```css
transform: 变换函数(参数);
```

---

### **2. 常用变换函数**
#### **2.1 平移（Translate）**
将元素从当前位置移动到指定位置。

| 函数              | 描述                                                |
| ----------------- | --------------------------------------------------- |
| `translateX(x)`   | 沿 X 轴平移 `x` 距离（如 `translateX(50px)`）。     |
| `translateY(y)`   | 沿 Y 轴平移 `y` 距离（如 `translateY(50px)`）。     |
| `translate(x, y)` | 沿 X 轴和 Y 轴平移（如 `translate(50px, 100px)`）。 |

• **示例**：
  ```css
  .box {
    transform: translate(50px, 100px);
  }
  ```

#### **2.2 旋转（Rotate）**
将元素围绕中心点旋转指定角度。

| 函数            | 描述                                      |
| --------------- | ----------------------------------------- |
| `rotate(angle)` | 旋转 `angle` 角度（如 `rotate(45deg)`）。 |

• **示例**：
  ```css
  .box {
    transform: rotate(45deg);
  }
  ```

#### **2.3 缩放（Scale）**
将元素按比例放大或缩小。

| 函数          | 描述                                       |
| ------------- | ------------------------------------------ |
| `scaleX(x)`   | 沿 X 轴缩放 `x` 倍（如 `scaleX(1.5)`）。   |
| `scaleY(y)`   | 沿 Y 轴缩放 `y` 倍（如 `scaleY(1.5)`）。   |
| `scale(x, y)` | 沿 X 轴和 Y 轴缩放（如 `scale(1.5, 2)`）。 |

• **示例**：
  ```css
  .box {
    transform: scale(1.5, 2);
  }
  ```

#### **2.4 倾斜（Skew）**
将元素沿 X 轴或 Y 轴倾斜。

| 函数           | 描述                                            |
| -------------- | ----------------------------------------------- |
| `skewX(angle)` | 沿 X 轴倾斜 `angle` 角度（如 `skewX(30deg)`）。 |
| `skewY(angle)` | 沿 Y 轴倾斜 `angle` 角度（如 `skewY(30deg)`）。 |
| `skew(x, y)`   | 沿 X 轴和 Y 轴倾斜（如 `skew(30deg, 15deg)`）。 |

• **示例**：
  ```css
  .box {
    transform: skew(30deg, 15deg);
  }
  ```

#### **2.5 变换原点（Transform Origin）**
定义变换的参考点。

| 属性               | 描述                                                 |
| ------------------ | ---------------------------------------------------- |
| `transform-origin` | 定义变换的参考点（如 `transform-origin: 50% 50%`）。 |

• **示例**：
  ```css
  .box {
    transform-origin: top left; /* 以左上角为参考点 */
  }
  ```

---

### **3. 多重变换**
可以同时应用多个变换函数，用空格分隔。

• **示例**：
  ```css
  .box {
    transform: translate(50px, 100px) rotate(45deg) scale(1.5);
  }
  ```

---

### **4. 3D 变换**
#### **4.1 3D 平移**
| 函数                   | 描述                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `translateZ(z)`        | 沿 Z 轴平移 `z` 距离（如 `translateZ(50px)`）。            |
| `translate3d(x, y, z)` | 沿 X、Y、Z 轴平移（如 `translate3d(50px, 100px, 20px)`）。 |

#### **4.2 3D 旋转**
| 函数                       | 描述                                                 |
| -------------------------- | ---------------------------------------------------- |
| `rotateX(angle)`           | 沿 X 轴旋转 `angle` 角度（如 `rotateX(45deg)`）。    |
| `rotateY(angle)`           | 沿 Y 轴旋转 `angle` 角度（如 `rotateY(45deg)`）。    |
| `rotateZ(angle)`           | 沿 Z 轴旋转 `angle` 角度（如 `rotateZ(45deg)`）。    |
| `rotate3d(x, y, z, angle)` | 沿 X、Y、Z 轴旋转（如 `rotate3d(1, 1, 0, 45deg)`）。 |

#### **4.3 3D 缩放**
| 函数               | 描述                                           |
| ------------------ | ---------------------------------------------- |
| `scaleZ(z)`        | 沿 Z 轴缩放 `z` 倍（如 `scaleZ(1.5)`）。       |
| `scale3d(x, y, z)` | 沿 X、Y、Z 轴缩放（如 `scale3d(1.5, 2, 1)`）。 |

#### **4.4 透视（Perspective）**
定义 3D 变换的透视效果。

| 属性          | 描述                                      |
| ------------- | ----------------------------------------- |
| `perspective` | 定义透视距离（如 `perspective: 500px`）。 |

• **示例**：
  ```css
  .container {
    perspective: 500px;
  }
  .box {
    transform: rotateY(45deg);
  }
  ```

---

### **5. 实际应用**
#### **5.1 悬停效果**
```css
.box {
  transition: transform 0.3s ease;
}
.box:hover {
  transform: scale(1.2) rotate(15deg);
}
```

#### **5.2 卡片翻转**
```css
.card {
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.card:hover {
  transform: rotateY(180deg);
}
```

#### **5.3 3D 立方体**
```css
.cube {
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(45deg);
}
```

---

### **6. 总结**
| 变换类型     | 函数示例                               | 描述               |
| ------------ | -------------------------------------- | ------------------ |
| **平移**     | `translate(50px, 100px)`               | 移动元素位置。     |
| **旋转**     | `rotate(45deg)`                        | 旋转元素角度。     |
| **缩放**     | `scale(1.5, 2)`                        | 放大或缩小元素。   |
| **倾斜**     | `skew(30deg, 15deg)`                   | 倾斜元素。         |
| **3D 变换**  | `rotateX(45deg)`                       | 实现 3D 效果。     |
| **多重变换** | `translate(50px, 100px) rotate(45deg)` | 同时应用多个变换。 |

通过灵活运用 `transform` 属性，可以为网页元素添加丰富的视觉效果，提升用户体验！
