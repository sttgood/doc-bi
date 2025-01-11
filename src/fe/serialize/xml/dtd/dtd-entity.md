---
title: 实体
description: Document Type Definition
article: false
order: 3
---

[[toc]]

## 内部实体

- **内部实体（General Entities）**

  - 基本语法格式为`<!ENTITY entity-name "entity-value">`。
    - `entity-name`是实体的名称，用于在 XML 文档中引用该实体。名称的命名规则是以字母、数字或下划线开头，后续可以包含字母、数字、下划线、连字符或点号。
    - `entity-value`是实体所代表的实际文本内容，文本内容需用双引号或单引号括起来。
    - 总结：`标签`用于定义实体，`&实体名称`用来引用实体。

  - 使用场景与示例
  
    - **重复文本内容**：当 XML 文档中有部分内容需要频繁重复出现时，内部实体可以减少重复输入，提高文档的可维护性。例如，对于一个描述图书信息的 XML 文档，如果出版社名称经常出现，可以定义一个内部实体。
  
    ```xml
    <!DOCTYPE library [
        <!ENTITY publisherName "ABC Publishing House">
    ]>
    ```
  
    在 XML 文档中可以这样
  
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE library SYSTEM "library.dtd">
    <library>
        <book>
            <title>XML Guide</title>
            <publisher>&publisherName;</publisher>
        </book>
        <book>
            <title>Data Structures</title>
            <publisher>&publisherName;</publisher>
        </book>
    </library>
    ```
  
    这里，`&publisherName;`在文档解析时会被替换为 “ABC Publishing House”。如果出版社名称需要修改，只需要在 DTD 中修改实体定义即可。

## 外部实体

- 外部实体用于引用外部文件或资源，有两种常见的引用方式：
  - `<!ENTITY entity-name SYSTEM "system-identifier">`：用于引用本地或网络上的文件，`system-identifier` 是文件的路径或 URL。
  - `<!ENTITY entity-name PUBLIC "public-identifier" "system-identifier">`：
    - `public-identifier` 是公共标识符，通常用于公共标准或规范；
    - `system-identifier` 是文件的实际路径或 URL。

### SYSTEM

- 假设你有一个文件 `footer.txt`，内容为 "版权所有 © 2024 ABC 科技有限公司"，你可以在 DTD 中定义一个外部实体：

```xml
<!DOCTYPE company [
    <!ENTITY footer SYSTEM "footer.txt">
]>
```

然后在 XML 文档中使用该实体：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE company SYSTEM "company.dtd">
<company>
    <content>
        <p>这是公司的网页内容。</p>
    </content>
    <footer>&footer;</footer>
</company>
```

当解析这个 XML 文档时，`&footer;` 会被替换为 `footer.txt` 文件的内容。

### PUBLIC

- 对于公共标准，例如 XHTML 1.0 的 DTD 引用：

```xml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

- `//W3C//DTD XHTML 1.0 Transitional//EN` 是公共标识符，用于在全球范围内唯一标识该 DTD 资源。它通常遵循一定的命名规范，由组织或标准机构定义.

  它的核心功能是帮助 XML 解析器准确地定位和识别应该遵循的外部 DTD 资源，以确保 XML 文档的结构和语法符合特定的标准。

  > 以网页开发中的XHTML为例，当使用`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1 - transitional.dtd">`这样的引用时，公共标识符`-//W3C//DTD XHTML 1.0 Transitional//EN`明确了文档应该遵循 W3C（万维网联盟）制定的 XHTML 1.0 Transitional 标准。这有助于浏览器等解析工具按照正确的规则来解析和呈现文档内容，实现不同系统和工具之间对文档结构理解的一致性。

- `http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd` 是系统标识符，用于指定 XHTML 1.0 过渡型 DTD 的位置。

**注意事项**：

- **安全风险**：外部实体在处理外部文件时可能带来安全风险，特别是在处理用户输入的 XML 数据时。如果外部实体引用了恶意文件或网络资源，可能会导致安全漏洞，如 XXE（XML External Entity）攻击。因此，在解析 XML 时需要谨慎处理外部实体，尤其是在处理不可信的 XML 数据时，可考虑禁用外部实体。

## 参数实体

参数实体是在 DTD 内部使用的一种特殊实体，主要用于在 DTD 内部引用和重用 DTD 片段，语法为：

```
<!ENTITY % entity-name "entity-value">
```

注意，参数实体的名称以`%`开头。

示例

- 假设你要在 DTD 中多次定义元素的数据类型为四位数字，可以使用参数实体：

```xml
<!DOCTYPE product [
    <!ENTITY % fourDigits "[0-9][0-9][0-9][0-9]">
    <!ELEMENT year (#PCDATA)>
    <!ATTLIST year value %fourDigits; #REQUIRED>
    <!ELEMENT productionYear (#PCDATA)>
    <!ATTLIST productionYear value %fourDigits; #REQUIRED>
]>
```

这里 `%fourDigits;` 被定义为一个参数实体，用于表示四位数字，然后在 `year` 和 `productionYear` 元素的属性声明中使用。

**在内部 DTD 中的使用**：

- 参数实体可以在内部 DTD 中方便地重用 DTD 片段，提高 DTD 的可维护性和可读性。例如，如果你要定义多个元素都具有相同的子元素结构，可以使用参数实体：

```xml
<!DOCTYPE invoice [
    <!ENTITY % item "(product, quantity, price)">
    <!ELEMENT invoice (customer, %item;*)>
    <!ELEMENT customer (#PCDATA)>
    <!ELEMENT product (#PCDATA)>
    <!ELEMENT quantity (#PCDATA)>
    <!ELEMENT price (#PCDATA)>
]>
```

这里 `%item;` 参数实体定义了一个元素结构，`invoice` 元素包含 `customer` 元素和零个或多个由 `%item;` 定义的子元素组合。

**注意**：参数实体在某些情况下可以与正则表达式相关，内部实体和外部实体的值一般不是正则表达式。

## 特殊字符实体（预定义内部实体）

- 在XM中，某些字符具有特殊的语法意义，如`<`、`>`、`&`、`'`、`"`。如果要在XML文本内容中使用这些字符本身，需要使用特殊字符实体来避免解析错误。
- **`<`和`>`**：`<`代表小于号`<`，`>`代表大于号`>`。例如，在 XML 元素的文本内容中，如果要表示数学表达式 “x < y”，应该写成`<expression>x < y</expression>`。这样可以防止解析器将`<`误认为是一个新元素的开始标签。
- **`&`**：代表`&`字符。因为`&`用于开始一个实体引用，所以当需要在文本内容中表示`&`本身时，要使用`&`。例如，在表示公司名称 “AT&T” 时，应写成`<company>AT&T</company>`。
- **`'`和`"`**：`'`用于表示单引号`'`，`"`用于表示双引号`"`。当文本内容中的引号可能与 XML 元素属性值的引号产生混淆时，需要使用这些实体。例如，`<message>He said 'Hello!'</message>`，确保了单引号在文本内容中的正确表示。

## 场景

- **内部实体**：方便在 XML 文档中重用文本片段，提高文档的可读性和可维护性，避免重复输入相同内容。
- **外部实体**：可以引用外部文件或公共标准，但要注意安全风险，防止恶意文件引用。
- **参数实体**：主要用于 DTD 内部，方便在 DTD 中重用和定义 DTD 结构和规则，提高 DTD 的灵活性和可维护性。
