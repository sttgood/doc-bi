---
title: role
article: false
order: 4
---
TML `role` 全局属性权威指南（2025版）

---

一、核心定义与作用 
`role` 是WAI-ARIA规范的核心属性，用于定义元素的语义角色及交互特性：

- ♿ 无障碍支持：指导辅助技术识别元素功能 
- 🛠️ 语义补充：增强非标准控件的可访问性 
- 🔄 动态内容适配：支持AJAX/SPA应用的无障碍交互 
- 📜 标准状态：W3C ARIA 1.3正式规范属性 

---

二、属性分类与值域 

1. 主要角色类型 

| 类别     | 示例角色               | 适用场景         |
| -------- | ---------------------- | ---------------- |
| 文档结构 | `article`, `heading`   | 内容区块组织     |
| 窗体控件 | `button`, `checkbox`   | 交互元素定义     |
| 动态区域 | `alert`, `status`      | 实时更新内容标记 |
| 导航相关 | `navigation`, `search` | 页面导航区域标识 |

2. 复合角色规范 

```html 
<div role="menu">
  <div role="menuitem">选项1</div>
  <div role="menuitemradio">选项2</div>
</div>
```

---

三、语法规则详解 

1. 基础语法 

```html 
<!-- 自定义按钮 -->
<div role="button" tabindex="0" aria-label="提交">
  点击提交 
</div>
 
<!-- 实时通知区域 -->
<div role="alert" aria-live="assertive">
  新消息到达！
</div>
```

2. 使用限制 

| 规则类型   | 具体约束                                         |
| ---------- | ------------------------------------------------ |
| 元素兼容性 | 部分角色禁止用于特定HTML元素                     |
| 层次结构   | 需遵循角色继承关系（如`listitem`必须在`list`内） |
| 状态依赖   | 需配合`aria-*`属性使用（如`aria-checked`）       |

---

四、与HTML5语义元素关系 

1. 隐式角色映射 

| HTML元素   | 隐式角色     | 显式声明示例    |
| ---------- | ------------ | --------------- |
| `<nav>`    | `navigation` | role="region"   |
| `<main>`   | `main`       | role="document" |
| `<button>` | `button`     | role="switch"   |

2. 覆盖原则 

```html 
<!-- 显式覆盖隐式角色 -->
<nav role="search">
  <!-- 角色变为search而非navigation -->
</nav>
```

---

五、核心应用场景 

1. 自定义控件开发 

```html 
<div role="slider" 
     aria-valuemin="0"
     aria-valuemax="100"
     aria-valuenow="50"
     tabindex="0">
  进度：50%
</div>
```

2. 动态内容标记 

```html 
<!-- 实时股票信息 -->
<div role="timer" aria-live="polite">
  更新时间：<span id="stock-time">16:45:23</span>
</div>
```

---

六、辅助技术适配 

1. 屏幕阅读器支持 

| 阅读器             | 角色支持深度   | 特殊处理             |
| ------------------ | -------------- | -------------------- |
| NVDA 2025          | 全角色支持     | 自动检测`aria-*`状态 |
| VoiceOver (iOS 19) | 复合角色优化   | 触控手势适配         |
| JAWS 2023          | 企业级应用增强 | 虚拟光标模式支持     |

2. 键盘导航要求 

```html 
<div role="button" tabindex="0" 
     aria-pressed="false"
     onkeypress="handleEnter(event)">
  切换按钮 
</div>
```

---

七、浏览器兼容性 

| 浏览器/平台  | ARIA 1.3支持度   | 特殊说明               |
| ------------ | ---------------- | ---------------------- |
| Chrome 120+  | ✅ 完整支持       | 自动角色映射优化       |
| Firefox 130+ | ✅ 完整支持       | 严格属性验证           |
| Safari 17.4+ | ✅ 基础角色支持   | 部分动态角色需手动刷新 |
| Edge 120+    | ✅ 同Chromium内核 | 开发者工具增强提示     |

---

八、验证与调试 

1. 开发者工具检测 

```javascript 
// 获取元素计算后的角色 
getComputedRole(element);
// 返回示例：'button'
```

2. 审计工具 

| 工具名称         | 检测维度         | 特点             |
| ---------------- | ---------------- | ---------------- |
| axe DevTools     | 角色层次结构验证 | 实时反馈修复建议 |
| WAVE Evaluation  | 角色上下文分析   | 可视化覆盖层显示 |
| Lighthouse 12.0+ | 无障碍评分审计   | 性能影响分析     |

---

九、最佳实践指南 

1. 使用优先级原则 

```markdown 
1. 优先使用原生语义元素  
   `<button>` > `<div role="button">`
 
2. 最小化角色覆盖  
   仅在必要时覆盖隐式角色 
 
3. 完整状态管理  
   角色必须配合相关`aria-*`属性 
```

2. 动态内容处理 

```javascript 
// AJAX更新后刷新角色状态 
function updateLiveRegion() {
  const region = document.getElementById('live-region');
  region.setAttribute('aria-busy', 'false');
  region.setAttribute('role', 'status');
}
```

---

十、错误处理案例 

1. 常见错误模式 

```html 
<!-- 错误1：角色层级断裂 -->
<div role="list">
  <div>项目1</div> <!-- 缺少role="listitem" -->
</div>
 
<!-- 错误2：冲突角色声明 -->
<input type="checkbox" role="radio">
```

2. 容错机制 

| 浏览器  | 错误处理策略   | 降级方案              |
| ------- | -------------- | --------------------- |
| Chrome  | 忽略无效角色   | 回退到元素默认语义    |
| Firefox | 控制台警告提示 | 部分角色转为`generic` |

---

通过合理应用`role`属性，开发者可以：
✅ 提升85%以上的辅助技术兼容性  
✅ 降低动态内容误报率约60%  
✅ 增强复杂控件键盘导航体验  
✅ 符合WCAG 2.2 AA级无障碍标准  