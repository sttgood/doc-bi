---
title: 元素声明
description: Document Type Definition
article: false
order: 2
---

[[toc]]

## 基本格式

- 语法：

```
<!ELEMENT element-name content-model>
```

- 例如：`<!ELEMENT book (title, author, publisher)>`。
  - `book`是元素名称
  - `(title, author, publisher)`是内容模型。它表示`book`元素包含三个子元素，分别是`title`、`author`和`publisher`，并且这些子元素的顺序是固定的。

## 内容模型

| 类型定义    | **描述**         |
| ----------- | ---------------- |
| EMPTY       | 空元素           |
| （#PCDATA） | 字符串           |
| ANY         | 任意类型，无限制 |
| 子元素      | 嵌套             |
| 混合类型    | 字符串和子元素   |

### EMPTY

当元素不包含任何内容，只是一个标记时，使用`EMPTY`来定义内容模型。例如，

```
<!ELEMENT img EMPTY>
```

这种元素通常用于表示一些具有特定功能的标记，如 HTML 中的`<img>`标签，它主要通过属性（如`src`属性用于指定图像的来源）来提供信息，而本身没有文本内容或子元素。

### PCDATA

用于元素可以包含纯文本内容的情况。

- 语法

```
<!ELEMENT element-name PCDATA>
```

例如

```
<!ELEMENT description PCDATA>
```

这意味着`description`元素可以包含任意的解析字符数据，即普通文本内容。用户可以在这个元素中写入文本信息，如产品描述、文章内容等。

**类型定义：**

- `#PCDATA`：表示元素包含解析字符数据，即文本内容。
- `EMPTY`：表示元素是空元素，不包含任何内容。
- `ANY`：表示元素可以包含任何内容，包括其他元素、文本或混合内容。但这种情况通常较少使用，因为它可能导致结构松散。

案例：

```xml
<!ELEMENT to (#PCDATA)>   表示to元素只能包含文本内容，如 <to>张三</to>。
```

```xml
<!ELEMENT br EMPTY>        表示为 <br/> 或 <br></br>。
```

```xml
<!ELEMENT div ANY>
```

### 子元素序列

当元素包含多个子元素，且这些子元素的顺序是固定的，就可以使用这种内容模型。

- 语法

```
<!ELEMENT element-name (sub-element1, sub-element2,...)>
```

例如，

```
<!ELEMENT order (customer, item, quantity)>
```

在这个例子中，`order`元素的内容必须按照`customer`、`item`、`quantity`的顺序来包含子元素。这种严格的顺序要求在表示具有特定逻辑结构的数据时非常有用，比如订单信息，先有客户信息，然后是商品信息，最后是商品数量信息。

### 混合模型

使用`|`（或）操作符来定义元素的内容模型是多个子元素选项中的一个。

- 语法

```
<!ELEMENT element-name (sub-element1 | sub-element2 |...)>
```

例如

```
<!ELEMENT input (text | password)>
```

这表示`input`元素可以包含`text`子元素或者`password`子元素，但不能同时包含两者。这种声明方式适用于元素可以有多种不同类型的子元素，但在具体的实例中只能出现一种的情况，比如一个输入框可以是文本输入框或者密码输入框。

### ANY

  任意类型，ANY，既可以是字符串类型，也可以是子元素，混合类型，或者空。不建议。

## 重复元素

- `*`：表示元素可以出现零次或多次。

- `+`：表示元素可以出现一次或多次。

- `?`：表示元素可以出现零次或一次。

 ```xml
<!ELEMENT list (item*)>
表示`list`元素可以包含零个或多个`item`子元素。这种声明适用于像列表这样的结构，列表可能为空，也可能包含多个项目。
 ```

  ```xml
  <!ELEMENT books (book+)>        表示 `books` 元素至少包含一个 `book` 元素。
  ```

  ```xml
  <!ELEMENT optional (element?)>  表示 `optional` 元素可以包含零个或一个 `element` 元素。
  ```

特殊字符

## 案例

### 案例-子元素

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE 根元素名称[
    <!ELEMENT 根元素名称 (第一个子元素*,第二个子元素+)>
    <!ELEMENT 第一个子元素 (#PCDATA)>
    <!ELEMENT 第二个子元素 (#PCDATA)>
    <!ATTLIST 第一个子元素 属性一 CDATA #REQUIRED>
]>
<根元素名称>
 <第一个子元素 属性一="attr"></第一个子元素>
 <第二个子元素></第二个子元素>
 <第二个子元素></第二个子元素>
</根元素名称>
```

### 案例-混合类型

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE root[
  <!ELEMENT root (sub1,sub2,sub3)>
  <!ELEMENT sub1 EMPTY>
  <!ELEMENT sub2 ANY>
  <!ELEMENT sub3 (#PCDATA)>
]>

<root>
    <sub1/>
    <sub2>任意类型</sub2>
    <sub3>字符串类型</sub3>
</root>
```
