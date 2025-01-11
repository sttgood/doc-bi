---
title: 书写规范
description: 书写规范
article: false
order: 1
---

[[toc]]

### 书写规则

:::important 基本书写规则

- 缩进：YAML 使用缩进来表示层级关系，推荐使用两个空格进行缩进，但不能使用制表符（Tab）。缩进层次必须严格一致。
- 大小写敏感：YAML 对键名是大小写敏感的，Name 和 name 会被认为是不同的键。
- 注释：以 # 开始的行被视为注释，且只能在行首或键值对之后添加注释。
- 字符串引号：虽然大多数情况下**不需要用引号**包围字符串，但如果字符串中包含特殊字符（如冒号、连字符等）或者可能引起歧义时，则需要使用单引号 ' 或双引号 "。
- 多文档：可以在一个文件中定义多个文档，每个文档之间用三个破折号 --- 分隔。

:::

### 注释（Comments）

注释是以井号 `#` 开头的文字，它们不会被解析器处理，主要用于解释代码意图或提供上下文信息。YAML 不支持多行注释，但可以通过连续添加单行注释来达到相似效果

```yaml
# This is a comment explaining the following line
api_key: secret-key-value
```

### 文档边界（Document Boundaries）

YAML 文件可以包含多个独立的文档，文档之间用三个短横线 `---` 分隔，表示新文档的开始；三个点 `...` 标记文档结束。这种机制允许在一个文件中组织多个逻辑上分离的部分

```yaml
---
document1:
  key: value1
...
---
document2:
  key: value2
...
```

### 字面量块（Literal Blocks）

对于多行文本内容，YAML 提供了保留换行符和其他格式特性的字面量块语法。使用竖线 `|` 可以保持原文本格式，包括空行和缩进

```yaml
long_text: |
  This is a long text block.
  It preserves newlines and spaces.
```

### 折叠块（Folded Blocks）

折叠块使用大于号 `>` 来表示，它会将所有换行符转换为空格，除非遇到空行或特定条件下的换行符才会保留。这对于生成简短但可读性强的文本很有帮助

```yaml
shortened_text: >
  This will be folded into a single line of text,
  except where there are blank lines or specific formatting rules apply.
```

### 类型标记（Type Tags）

YAML 允许指定数据类型的标签，以便更精确地控制如何解析某些字段。例如，可以明确指出某个值应该被视为整数而不是字符串

```yaml
explicit_integer: !!int "42"
```
