---
title: 流程图配置
article: false
order: 1
---

：**流程图配置项**

```yaml
---
mermaid:
  flowchart:
    diagramPadding: 20       # 图表边距（像素）
    htmlLabels: true          # 是否使用 HTML 标签渲染文本
    nodeSpacing: 50          # 节点水平间距
    rankSpacing: 100         # 层级垂直间距
    curve: "basis"           # 连线弯曲类型
    useMaxWidth: true        # 是否限制图表最大宽度
    defaultRenderer: "dagre" # 渲染引擎（如 "dagre" 或 "elk"）
---
```

---

### **配置项详解**

#### **1. `diagramPadding`**
- **作用**：设置流程图与容器边缘的边距。
- **类型**：数值（像素）。
- **示例**：
  ```yaml
  diagramPadding: 20
  ```

#### **2. `htmlLabels`**
- **作用**：是否使用 HTML 标签渲染节点文本。
  - 如果为 `true`，支持更丰富的文本样式（如加粗、斜体）。
  - 如果为 `false`，使用纯文本渲染。
- **类型**：布尔值。
- **示例**：
  ```yaml
  htmlLabels: true
  ```

#### **3. `nodeSpacing`**
- **作用**：设置节点之间的水平间距。
- **类型**：数值（像素）。
- **示例**：
  ```yaml
  nodeSpacing: 50
  ```

#### **4. `rankSpacing`**
- **作用**：设置不同层级之间的垂直间距。
- **类型**：数值（像素）。
- **示例**：
  ```yaml
  rankSpacing: 100
  ```

#### **5. `curve`**
- **作用**：设置节点之间连线的弯曲类型。
- **可选值**：
  - `linear`：直线。
  - `basis`：平滑曲线。
  - `step`：折线。
- **示例**：
  ```yaml
  curve: "basis"
  ```

#### **6. `useMaxWidth`**
- **作用**：是否限制流程图的最大宽度。
  - 如果为 `true`，图表会根据容器宽度自动调整。
  - 如果为 `false`，图表宽度不受限制。
- **类型**：布尔值。
- **示例**：
  ```yaml
  useMaxWidth: true
  ```

#### **7. `defaultRenderer`**
- **作用**：设置流程图的渲染引擎。
- **可选值**：
  - `dagre`：默认引擎，适合大多数场景。
  - `elk`：更强大的布局引擎，适合复杂流程图。
- **示例**：
  ```yaml
  defaultRenderer: "dagre"
  ```

---

### **完整示例**
```yaml
---
title: "流程图配置示例"
mermaid:
  flowchart:
    diagramPadding: 20
    htmlLabels: true
    nodeSpacing: 50
    rankSpacing: 100
    curve: "basis"
    useMaxWidth: true
    defaultRenderer: "dagre"
---
```

---

### **注意事项**
1. **优先级**：单个流程图的配置会覆盖 Frontmatter 中的全局配置。
2. **兼容性**：部分配置项需要 Mermaid 8.13+ 版本支持。
3. **渲染引擎**：如果使用 `elk` 引擎，需确保环境支持（如浏览器或渲染工具）。

### 
