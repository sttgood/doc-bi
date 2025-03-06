---
title: 文本渲染
article: false
order: 2
---

**文本渲染** 是 CSS 中用于控制文本显示效果的一组属性，包括字体渲染、连字符断字、换行等。

---

### 一、`text-rendering` 属性

`text-rendering` 属性用于控制浏览器渲染文本时的优化方式，主要影响字体的清晰度和渲染速度。

1. **语法**
   ```css
   text-rendering: auto | optimizeSpeed | optimizeLegibility | geometricPrecision;
   ```

2. **属性值**
   • `auto`（默认）：浏览器根据上下文自动选择渲染方式。
   • `optimizeSpeed`：优先考虑渲染速度，可能会降低文本的清晰度。
   • `optimizeLegibility`：优先考虑文本的可读性，可能会启用字距调整和连字。
   • `geometricPrecision`：优先保持文本的几何精度，适合需要高精度渲染的场景。

3. **示例**
   ```css
   .text {
     text-rendering: optimizeLegibility;
   }
   ```

4. **应用场景**
   • 在需要高可读性的场景（如正文）中，使用 `optimizeLegibility`。
   • 在需要高性能的场景（如动画）中，使用 `optimizeSpeed`。

---

### 二、`hyphens` 属性

`hyphens` 属性用于控制浏览器是否以及如何对文本进行连字符断字。

1. **语法**
   ```css
   hyphens: none | manual | auto;
   ```

2. **属性值**
   • `none`（默认）：不进行连字符断字。
   • `manual`：仅在文本中显式插入的连字符（如 `&shy;`）处断字。
   • `auto`：浏览器根据语言规则自动插入连字符。

3. **示例**
   ```css
   .text {
     hyphens: auto;
   }
   ```

4. **注意事项**
   • `hyphens` 属性需要浏览器支持，并且需要设置 `lang` 属性以指定语言。
   • 对于中文等没有连字符的语言，`hyphens` 属性无效。

5. **应用场景**
   • 在长文本（如段落）中，使用 `auto` 可以改善换行效果。
   • 在需要精确控制断字的位置时，使用 `manual`。

---

### 三、其他相关属性

1. **`word-break`**  
   控制单词在换行时的断字方式。
   • `normal`（默认）：按单词边界换行。
   • `break-all`：允许在任意字符处换行。
   • `keep-all`：不允许在字符之间换行（适用于 CJK 文本）。

2. **`overflow-wrap`（`word-wrap`）**  
   控制长单词或 URL 是否可以在换行时断开。
   • `normal`（默认）：不强制断行。
   • `break-word`：允许在单词内断行。

3. **`white-space`**  
   控制空白符的处理方式。
   • `normal`（默认）：合并空白符，按需换行。
   • `nowrap`：禁止换行。
   • `pre`：保留空白符，按需换行。
   • `pre-wrap`：保留空白符，允许换行。
   • `pre-line`：合并空白符，允许换行。

---

### 四、实际应用示例

#### 1. 优化文本渲染
```css
.text {
  text-rendering: optimizeLegibility;
}
```

#### 2. 自动连字符断字
```html
<p lang="en" class="text">This is a long text that needs hyphenation.</p>
```
```css
.text {
  hyphens: auto;
}
```

#### 3. 强制断行
```css
.text {
  word-break: break-all;
  overflow-wrap: break-word;
}
```

#### 4. 保留空白符
```css
.code {
  white-space: pre;
}
```

`text-rendering` 和 `hyphens` 是 CSS 中用于控制文本渲染和断字的重要属性。通过合理使用这些属性，可以优化文本的可读性和显示效果，特别是在多语言和响应式设计中。结合 `word-break`、`overflow-wrap` 和 `white-space` 等属性，可以实现更灵活的文本布局。
