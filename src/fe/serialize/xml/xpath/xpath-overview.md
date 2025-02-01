---
title: Xpath概述
article: false
order: 1
---

XPath（XML Path Language）是一种在XML文档中查找信息的语言。它被设计用于在XML文档中通过元素和属性进行导航，并且可以用来选择节点或计算值。XPath广泛应用于各种技术中，包括XSLT、XML Schema、XQuery等。以下是关于XPath的详细介绍，涵盖其语法、功能以及如何使用。

### 1. **XPath 基础**

#### 1.1 **节点类型**

XPath操作的是XML文档树中的节点，主要的节点类型包括：

- **元素节点**：XML文档中的元素。
- **属性节点**：元素的属性。
- **文本节点**：元素内的文本内容。
- **命名空间节点**：定义命名空间前缀与URI的关系。
- **处理指令节点**：如`<?xml-stylesheet type="text/css" href="style.css"?>`。
- **注释节点**：如`<!-- 这是一个注释 -->`。
- **根节点**：整个文档的根。

**xpath语法：**

```xml
轴::节点测试[限定谓语]      eg：
child::id[text()=100]
```

**轴      ：**用与定义**当前节点**和**所选节点**的关系

**节点测试 ：**用与指定**轴内部**的部分节点。

**限定谓语 ：**0个1个或者1个以上的**判断语句**。使用专用的表达式对轴和节点测试性匹配的节点做进一步限定。

```xml
<xsl:tmplate math="/root" />     当前节点设置为root即self轴

<xsl:value-of select="Xpath路径"/>  显示XPath搜索到的结点集。
```

#### 1.2 **路径表达式**

路径表达式是XPath的核心，用于指定要选取的节点。路径表达式由一个或多个步骤组成，每个步骤可以选择某些节点并可能应用谓词来进一步筛选。

- **绝对路径**：从根节点开始，例如`/bookstore/book/title`。
- **相对路径**：从当前上下文节点开始，例如`book/title`。
- **通配符**：`*`表示任何元素节点；`@*`表示任何属性节点。
- **点号**：`.`表示当前节点；`..`表示父节点。

### 2. **选择节点**

#### 2.1 **基本选择器**

- `node()`：匹配任何类型的节点。
- `elementName`：匹配特定名称的元素。
- `@attributeName`：匹配特定名称的属性。
- `/`：根节点。
- `//`：从当前节点的后代节点中选择。

#### 2.2 **位置和顺序**

- `[n]`：选择第n个子节点，索引从1开始。
- `[last()]`：选择最后一个子节点。
- `[position() < n]`：选择位置小于n的所有子节点。

#### 2.3 **逻辑运算符**

- `|`：联合两个选择集。
- `and`：逻辑与。
- `or`：逻辑或。
- `not(expression)`：逻辑非。

#### 2.4 **谓词**

谓词用于进一步筛选节点，通常放在方括号内。例如：

- `book[price > 35.00]`：选择价格大于35.00的所有书。
- `book[@category='children']`：选择类别为“children”的所有书。

### 3. **轴（Axes）**

轴定义了相对于当前节点的节点集合的方向。常见的轴有：

- `child::`：选择当前节点的子节点（默认）。
- `parent::`：选择当前节点的父节点。
- `ancestor::`：选择当前节点的所有祖先节点。
- `descendant::`：选择当前节点的所有后代节点。
- `following-sibling::`：选择当前节点之后的所有同级节点。
- `preceding-sibling::`：选择当前节点之前的所有同级节点。
- `self::`：选择当前节点本身。
- `attribute::`：选择当前节点的属性（简写为`@`）。

### 4. **函数**

XPath提供了一系列内置函数来处理字符串、数值、日期时间、节点集合等。一些常用的函数包括：

- **字符串函数**
  - `string-length(string)`：返回字符串长度。
  - `concat(string, string, ...)`：连接多个字符串。
  - `contains(string, substring)`：检查一个字符串是否包含另一个字符串。
  - `starts-with(string, prefix)`：检查字符串是否以某个前缀开始。
  - `substring(string, start, length?)`：提取子字符串。
- **数值函数**
  - `sum(node-set)`：对节点集中所有数值求和。
  - `floor(number)`：向下取整。
  - `ceiling(number)`：向上取整。
  - `round(number)`：四舍五入。
- **布尔函数**
  - `boolean(object)`：将对象转换为布尔值。
  - `true()` 和 `false()`：返回布尔真或假。
  - `not(boolean-expression)`：逻辑非。
- **节点集函数**
  - `count(node-set)`：计算节点集中节点的数量。
  - `id(id)`：根据ID选择元素。
  - `local-name(node-set?)`：返回节点的本地名称。
  - `namespace-uri(node-set?)`：返回节点的命名空间URI。
- **上下文函数**
  - `position()`：返回当前节点的位置。
  - `last()`：返回最后节点的位置。

### 5. **变量和命名空间**

- **变量**：可以在XPath表达式中定义和使用变量，通常与XSLT一起使用。
- **命名空间**：处理带有命名空间的XML文档时，需要声明命名空间前缀，并在XPath表达式中使用它们。

### 6. **XPath 2.0 及以上版本的新特性**

XPath 2.0引入了许多新特性和改进，包括但不限于：

- **增强的数据类型支持**：如`xs:integer`、`xs:date`等。
- **更丰富的函数库**：增加了更多处理字符串、数值、日期时间等功能的函数。
- **序列**：允许表达式结果为多个项的序列。
- **FLWOR 表达式**：类似于SQL查询的FOR、LET、WHERE、ORDER BY、RETURN结构。

### 示例

假设我们有一个简单的XML文档：

xml

深色版本



```xml
<bookstore>
    <book category="cooking">
        <title lang="en">Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <year>2005</year>
        <price>30.00</price>
    </book>
    <book category="children">
        <title lang="en">Harry Potter</title>
        <author>J K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
    </book>
    <book category="web">
        <title lang="en">XQuery Kick Start</title>
        <author>James McGovern</author>
        <year>2003</year>
        <price>49.99</price>
    </book>
</bookstore>
```

#### 使用XPath表达式：

- **选择所有书名**：`/bookstore/book/title`
- **选择价格超过30美元的书籍**：`/bookstore/book[price > 30.00]`
- **选择类别为“children”的书籍的标题**：`/bookstore/book[@category='children']/title`
- **选择第一个书的作者**：`/bookstore/book[1]/author`
- **选择所有语言为“en”的标题**：`//title[@lang='en']`
- **计算所有书籍的价格总和**：`sum(/bookstore/book/price)`

### 总结

XPath是一种强大而灵活的语言，用于在XML文档中定位和选择数据。通过理解路径表达式、轴、函数以及其他高级特性，您可以有效地从复杂的XML结构中提取所需的信息。无论是简单的查询还是复杂的转换任务，XPath都是不可或缺的工具之一。掌握XPath不仅能够提高您处理XML数据的能力，还能让您更好地利用像XSLT这样的技术来实现动态的内容生成和格式化。
