---
title: 饼图配置
article: false
order: 8
---

Mermaid 的 Frontmatter 配置中，饼图（Pie Chart）的专用配置项用于控制饼图的外观和行为。以下是 **饼图 (Pie Chart)** 的详细配置说明：

---

### **饼图配置项**
```yaml
---
mermaid:
  pie:
    textPosition: 0.5        # 文本位置（相对于饼图中心）
    outerRadius: 1.0         # 饼图外半径（相对于容器大小）
    innerRadius: 0           # 饼图内半径（用于环形图）
    showData: true           # 是否显示数据标签
    disableGradient: false   # 是否禁用渐变效果
    useMaxWidth: true        # 是否限制图表最大宽度
---
```

---

### **配置项详解**

#### **1. `textPosition`**
- **作用**：设置数据标签文本的位置。
  - 值为 `0` 到 `1`，表示相对于饼图中心的位置。
  - `0.5` 表示文本位于饼图边缘与中心之间。
- **类型**：数值。
- **示例**：
  ```yaml
  textPosition: 0.5
  ```

#### **2. `outerRadius`**
- **作用**：设置饼图的外半径。
  - 值为 `0` 到 `1`，表示相对于容器大小的比例。
  - `1.0` 表示饼图占满容器。
- **类型**：数值。
- **示例**：
  ```yaml
  outerRadius: 1.0
  ```

#### **3. `innerRadius`**
- **作用**：设置饼图的内半径（用于创建环形图）。
  - 值为 `0` 到 `1`，表示相对于容器大小的比例。
  - `0` 表示实心饼图。
  - `0.5` 表示内半径为外半径的一半。
- **类型**：数值。
- **示例**：
  ```yaml
  innerRadius: 0.5
  ```

#### **4. `showData`**
- **作用**：是否显示数据标签（如百分比或数值）。
- **类型**：布尔值。
- **示例**：
  ```yaml
  showData: true
  ```

#### **5. `disableGradient`**
- **作用**：是否禁用饼图的渐变效果。
  - 如果为 `true`，饼图使用纯色填充。
  - 如果为 `false`，饼图使用渐变填充。
- **类型**：布尔值。
- **示例**：
  ```yaml
  disableGradient: false
  ```

#### **6. `useMaxWidth`**
- **作用**：是否限制饼图的最大宽度。
  - 如果为 `true`，图表会根据容器宽度自动调整。
  - 如果为 `false`，图表宽度不受限制。
- **类型**：布尔值。
- **示例**：
  ```yaml
  useMaxWidth: true
  ```

---

### **完整示例**
```yaml
---
title: "饼图配置示例"
mermaid:
  pie:
    textPosition: 0.5
    outerRadius: 1.0
    innerRadius: 0
    showData: true
    disableGradient: false
    useMaxWidth: true
---
```

---

### **注意事项**
1. **优先级**：单个饼图的配置会覆盖 Frontmatter 中的全局配置。
2. **兼容性**：部分配置项需要 Mermaid 8.13+ 版本支持。
3. **渲染工具**：确保渲染工具（如 Docsify、VuePress）支持 Mermaid Frontmatter。


```mermaid

```

