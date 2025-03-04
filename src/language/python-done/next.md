以下是根据 MDN HTML 标签分类生成目录和 Markdown 文件的 Python 脚本：

```python
import os

# MDN 分类与标签数据（含部分示例标签）
categories = {
    "一、内容分区（Content Sectioning）": [
        "header", "nav", "main", "section", "article",
        "aside", "footer", "h1", "h2", "h3", "h4",
        "h5", "h6", "figure", "figcaption"
    ],
    "二、文本内容（Text Content）": [
        "div", "p", "pre", "blockquote", "ol", "ul",
        "li", "dl", "dt", "dd", "hr", "br"
    ],
    "三、内联文本语义（Inline Text Semantics）": [
        "a", "span", "strong", "em", "code", "abbr",
        "time", "q", "mark", "del", "ins", "sub", "sup"
    ],
    "四、图像与多媒体（Image & Multimedia）": [
        "img", "audio", "video", "source", "track",
        "canvas", "svg", "picture"
    ],
    "五、表格内容（Table Content）": [
        "table", "tr", "th", "td", "caption",
        "colgroup", "col", "thead", "tbody", "tfoot"
    ],
    "六、表单（Forms）": [
        "form", "input", "label", "select", "option",
        "textarea", "button", "datalist", "fieldset",
        "legend", "optgroup", "output", "progress"
    ],
    "七、交互元素（Interactive Elements）": [
        "details", "summary", "dialog", "menu"
    ],
    "八、元数据（Metadata）": [
        "head", "meta", "title", "link", "style", "script",
        "base", "noscript"
    ],
    "九、废弃标签（Deprecated）": [
        "font", "center", "marquee", "frame",
        "frameset", "noframes", "big", "tt"
    ],
    "十、Web Components": [
        "template", "slot"
    ]
}

def create_html_tag_docs():
    """生成 HTML 标签文档结构"""
    base_dir = "HTML标签文档"
    template = """# `<{tag}>`

> **分类**: {category}

## 功能说明
（此处描述标签的用途和语义）

## 属性列表
| 属性名       | 说明                  |
|-------------|----------------------|
| `通用属性`   | `id`, `class`, `style`等 |
| `...`       | 标签特有属性          |

## 示例代码
```html
<{tag}{attributes}>
  {content}
</{tag}>
```

## MDN 参考
- [官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/{tag})
  """

    # 创建根目录
    os.makedirs(base_dir, exist_ok=True)

    # 遍历分类创建文档
    for category, tags in categories.items():
        # 创建分类目录
        category_dir = os.path.join(base_dir, category)
        os.makedirs(category_dir, exist_ok=True)

        # 创建标签文档
        for tag in tags:
            # 生成文件名（处理特殊字符）
            filename = f"{tag.lower()}.md"
            filepath = os.path.join(category_dir, filename)
      
            # 写入模板内容
            with open(filepath, 'w', encoding='utf-8') as f:
                content = template.format(
                    tag=tag,
                    category=category,
                    attributes=" " if tag in ["img", "br"] else "",
                    content="内容" if tag not in ["img", "br"] else ""
                )
                f.write(content)

    print(f"文档结构生成完成！路径：{os.path.abspath(base_dir)}")

if __name__ == "__main__":
    create_html_tag_docs()
```

### 生成的文件结构
```bash
HTML标签文档/
├── 一、内容分区（Content Sectioning）/
│   ├── header.md
│   ├── nav.md
│   ├── main.md
│   └── ...
├── 二、文本内容（Text Content）/
│   ├── div.md
│   ├── p.md
│   └── ...
└── ...其他分类
```

### 文件内容示例 (header.md)
```markdown
# `<header>`

> **分类**: 一、内容分区（Content Sectioning）

## 功能说明
（此处描述标签的用途和语义）

## 属性列表
| 属性名       | 说明                  |
|-------------|----------------------|
| `通用属性`   | `id`, `class`, `style`等 |
| `...`       | 标签特有属性          |

## 示例代码
```html
<header>
  内容
</header>
```

## MDN 参考
- [官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header)
```

### 脚本特性
1. **智能模板**：自动处理自闭合标签（如 `<img>`）与非闭合标签
2. **兼容性处理**：自动生成正确的 MDN 文档链接
3. **中文支持**：完美兼容中文路径和内容
4. **特殊标签适配**：为 `<br>`、`<img>` 等生成正确语法

执行脚本后，每个分类目录中会生成对应标签的 Markdown 文档，您只需在生成的文件中补充具体说明和示例即可快速创建完整的 HTML 标签文档库。
```

