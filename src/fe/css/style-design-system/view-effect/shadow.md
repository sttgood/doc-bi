---
title: 阴影体系
article: false
order: 2
---

**阴影体系** 是 CSS 中用于为元素添加阴影效果的一组属性，主要包括 `box-shadow` 和 `filter: drop-shadow()`。它们分别适用于不同的场景，能够为元素或图像添加逼真的阴影效果。以下是 `box-shadow` 和 `drop-shadow` 的详细解析：

---

### 一、`box-shadow` 属性

`box-shadow` 用于为元素的整个盒子（包括边框和内容）添加阴影。

1. **语法**
   ```css
   box-shadow: <offset-x> <offset-y> <blur-radius> <spread-radius> <color> <inset>;
   ```

2. **参数说明**
   • `<offset-x>`：水平阴影偏移量（正值为右，负值为左）。
   • `<offset-y>`：垂直阴影偏移量（正值为下，负值为上）。
   • `<blur-radius>`：模糊半径，值越大阴影越模糊（可选，默认值为 `0`）。
   • `<spread-radius>`：阴影扩展半径，值越大阴影越大（可选，默认值为 `0`）。
   • `<color>`：阴影颜色（可选，默认值为当前文本颜色）。
   • `<inset>`：将阴影设置为内阴影（可选，默认值为外阴影）。

3. **示例**
   ```css
   .box {
     box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
   }
   ```

4. **多阴影效果**
   ```css
   .box {
     box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5),
                -5px -5px 10px 0 rgba(255, 255, 255, 0.5);
   }
   ```

5. **内阴影**
   ```css
   .box {
     box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
   }
   ```

6. **应用场景**
   • 为按钮、卡片、模态框等元素添加阴影效果。
   • 实现 3D 效果或层次感。

---

### 二、`filter: drop-shadow()` 函数

`drop-shadow()` 是 CSS `filter` 属性的一个函数，用于为元素的轮廓（包括透明部分）添加阴影。

1. **语法**
   ```css
   filter: drop-shadow(<offset-x> <offset-y> <blur-radius> <color>);
   ```

2. **参数说明**
   • `<offset-x>`：水平阴影偏移量（正值为右，负值为左）。
   • `<offset-y>`：垂直阴影偏移量（正值为下，负值为上）。
   • `<blur-radius>`：模糊半径，值越大阴影越模糊（可选，默认值为 `0`）。
   • `<color>`：阴影颜色（可选，默认值为当前文本颜色）。

3. **示例**
   ```css
   .icon {
     filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
   }
   ```

4. **应用场景**
   • 为图标、SVG、透明背景的元素添加阴影。
   • 实现更自然的阴影效果，尤其是对于不规则形状的元素。

---

### 三、`box-shadow` 与 `drop-shadow` 的区别

| 特性           | `box-shadow`                       | `drop-shadow`                |
| -------------- | ---------------------------------- | ---------------------------- |
| **适用对象**   | 元素的整个盒子（包括边框和内容）。 | 元素的轮廓（包括透明部分）。 |
| **阴影类型**   | 外阴影或内阴影。                   | 外阴影。                     |
| **不规则形状** | 不支持不规则形状的阴影。           | 支持不规则形状的阴影。       |
| **性能**       | 性能较好，适合大面积使用。         | 性能较差，适合小面积使用。   |
| **多阴影支持** | 支持多阴影效果。                   | 不支持多阴影效果。           |

---

### 四、实际应用示例

#### 1. 卡片阴影（`box-shadow`）
```css
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

#### 2. 图标阴影（`drop-shadow`）
```css
.icon {
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
```

#### 3. 3D 按钮效果（`box-shadow`）
```css
.button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3),
              inset 0 -2px 4px rgba(255, 255, 255, 0.5);
}
```

#### 4. 透明图像阴影（`drop-shadow`）
```css
.transparent-image {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}
```

---

### 五、注意事项

1. **性能优化**
   • `box-shadow` 性能较好，适合大面积使用。
   • `drop-shadow` 性能较差，适合小面积使用。

2. **浏览器兼容性**
   • `box-shadow` 在现代浏览器中支持良好。
   • `drop-shadow` 在现代浏览器中支持良好，但在旧版浏览器（如 IE）中不支持。

3. **阴影叠加**
   • `box-shadow` 支持多阴影叠加，`drop-shadow` 不支持。

---

### 六、总结

`box-shadow` 和 `drop-shadow` 是 CSS 中用于添加阴影效果的重要工具。`box-shadow` 适合为元素的整个盒子添加阴影，而 `drop-shadow` 适合为元素的轮廓添加阴影，尤其是不规则形状的元素。通过合理使用这两种阴影效果，可以为页面元素增添层次感和视觉吸引力。
