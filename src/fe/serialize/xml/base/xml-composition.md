---
title: 文档组成
icon: 
description: 
order: 3
article: false
---

[[toc]]

## 文档组成

XML文档逻辑上由：XML声明、文档类型声明、处理指令、注释、元素。

### **XML声明**

- **定义与作用**：XML 声明是 XML 文档的起始部分，用于声明 XML 文档的版本和编码方式等基本信息。它不是必需的，但如果存在，必须放在文档的最开头。这部分信息能帮助 XML 处理器正确地解析文档。

  ```xml
  <?xml version="1.0|1.1" [encoding="编码方式"] [standalone="yes|no"]?>
  ```

  

- **常见形式**：`<?xml version="1.0" encoding="UTF - 8"?>`。
  
  - `version`属性指定 XML 的版本，目前广泛使用的是 1.0 版本。
  - `encoding`属性表示文档所使用的字符编码。
  - `standalone`：该属性可选，指定该XML文档是否和一个外部文档配套使用。该属性的值yes时说明当前XML是一个独立的XML文档，与外部文档无关联，默认为yes。

### **文档类型定义（DTD）或 XML Schema（XSD）**

- DTD

  - **定义与作用**：DTD 用于定义 XML 文档的结构和语法规则。它规定了文档中允许出现的元素、元素的顺序、元素的层次关系以及元素可以包含的数据类型等内容，从而保证 XML 文档的结构完整性和一致性。

  - 内部 DTD 常见形式

    ```xml
    <!DOCTYPE root - element - name [
        <!ELEMENT element - name (content - model)>
        <!ELEMENT another - element - name (#PCDATA)>
        <!ATTLIST element - name attribute - name attribute - type default - value>
    ]>
    ```

    例如，定义一个简单的 XML 文档结构用于存储学生信息：

    ```xml
    <!DOCTYPE students [
        <!ELEMENT students (student)>
        <!ELEMENT student (name, age, grade)>
        <!ELEMENT name (#PCDATA)>
        <!ELEMENT age (#PCDATA)>
        <!ELEMENT grade (#PCDATA)>
    ]>
    ```

    这里`students`是根元素，包含`student`元素，`student`元素又包含`name`、`age`和`grade`子元素，且这些子元素的内容类型是`#PCDATA`（即解析字符数据）。

  - **外部 DTD 常见形式**：

    ```xml
    SYSTEM代表DTD来自本地
    <!DOCTYPE root-element-name SYSTEM "dtd - file - name.dtd"> 
    PUBLIC代表DTD来自网络
    <!DOCTYPE root-element-name PUBLIC "public - identifier" "dtd - file - name.dtd">
    
    例如，`<!DOCTYPE students SYSTEM "students.dtd">`
    ```

- XSD

  - **定义与作用**：XML Schema 是另一种用于定义 XML 文档结构的方式，相比 DTD 功能更强大。它可以精确地定义数据类型、元素出现的次数限制、元素之间的复杂关系等。

  - 常见形式：

    ```xml
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="root-element-name">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="child-element-name" type="data-type">
                        <xs:annotation>
                            <xs:documentation>Element description.</xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
        </xs:element>
    </xs:schema>
    ```
    
    例如，定义一个图书信息 XML 文档的 XMLSchema：

    ```xml
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="bookstore">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="book" maxOccurs="unbounded">
                        <xs:complexType>
                            <xs:sequence>
                                <xs:element name="title" type="xs:string">
                                    <xs:annotation>
                                        <xs:documentation>The title of the book.</xs:documentation>
                                    </xs:annotation>
                                </xs:element>
                                <xs:element name="author" type="xs:string">
                                    <xs:annotation>
                                        <xs:documentation>The author of the book.</xs:documentation>
                                    </xs:annotation>
                                </xs:element>
                                <xs:element name="price" type="xs:decimal">
                                    <xs:annotation>
                                        <xs:documentation>The price of the book.</xs:documentation>
                                    </xs:annotation>
                                </xs:element>
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
        </xs:element>
    </xs:schema>
    ```
    
    此XMLSchema 定义了`bookstore`为根元素，包含多个`book`元素（maxOccurs="unbounded"表示可以有无限多个），每个book元素又包含`title`（字符串类型）、`author`（字符串类型）和`price`（十进制类型）子元素，并且每个元素都有注释说明其用途。

### **元素（Elements）**

- 根元素（Root Element）

  - **定义与作用**：每个 XML 文档必须有且仅有一个根元素，它是整个文档的核心容器，所有其他元素都包含在根元素之内，构成一个层次分明的树形结构。

  - 常见形式

    ：例如，在一个描述公司部门组织结构的 XML 文档中，根元素可能是company

    ```xml
    <company>
        <!-- 包含部门等子元素 -->
    </company>
    ```
  
- 子元素（Child Elements）

  - **定义与作用**：根元素内部的元素称为子元素，它们可以按照一定的层次结构进行嵌套，用于表示各种具体的信息片段。通过这种嵌套关系，可以清晰地表达复杂的数据关系。

  - 常见形式

    ：以公司部门组织结构文档为例，在`company`根元素下可以有`department`子元素，department元素下又可以有`employee`等子元素，

    ```xml
    <company>
        <department>
            <department-name>研发部</department-name>
            <employee>
                <employee-name>张三</employee-name>
                <employee-position>软件工程师</employee-position>
            </employee>
        </department>
    </company>
    ```
  
- 空元素（Empty Elements）

  - **定义与作用**：空元素是一种特殊的元素，它没有内部的文本内容，但可以包含属性来传递信息。通常用于表示不需要具体文本描述的概念，如标记、链接等。
  - **常见形式**：有两种表示方式，一种是`<tag></tag>`，另一种是`<tag/>`。例如，在一个 HTML - like 的 XML 文档中，`<img></img>`或者`<img/>`可以用来表示图像元素，它可能通过属性（如`src`属性指定图像来源）来传递更多信息。

### **属性（Attributes）**

- **定义与作用**：属性是在元素的开始标签中定义的，用于提供关于元素的额外信息。这些信息可以是元素的标识符、元素的状态描述、与其他元素的关联等。属性以名称 - 值对的形式出现，名称和值之间用等号`=`连接，值需要用引号（单引号或双引号）括起来。
- **常见形式**：例如，在`<book id="123" category="技术">`中，`id`和`category`是属性名，`123`和`技术`是属性值。在一个表示商品信息的 XML 文档中，`id`属性可以用于唯一标识每个商品，`category`属性可以描述商品所属的类别。

### **文本内容（Text Content）**

- **定义与作用**：元素内部的文本数据称为文本内容，它是 XML 文档存储实际数据的主要部分。这些文本内容可以是用户能够直接看到的信息，如文章的段落内容、产品的名称和描述等，也可以是用于程序内部处理的数据，如数字、代码等。
- **常见形式**：例如，在`<product - name>智能手机</product - name>`中，“智能手机” 就是`product - name`元素的文本内容。在一个包含新闻文章的 XML 文档中，`<article - content>这是一篇关于科技的新闻。</article - content>`的文本内容就是新闻的具体内容。

### **注释（Comments）**

- **定义与作用**：注释用于在 XML 文档中添加解释性的信息，这些信息不会被 XML 处理器当作文档内容进行处理。注释主要是为了方便开发人员理解文档的结构、意图或者特定部分的含义，对于文档的维护和共享非常有帮助。
- **常见形式**：`<!-- 这是注释内容 -->`。例如，`<!-- 以下是员工信息部分 -->`可以添加在一组员工信息元素之前，用于提示这部分内容的用途。需要注意的是，注释不能嵌套，即一个注释内部不能再包含另一个注释。

### **处理指令（Processing Instructions）**

- **定义与作用**：处理指令用于为处理 XML 文档的应用程序提供额外的信息。这些信息通常与特定的应用程序或 XML 处理环境相关，帮助应用程序正确地解析、转换或呈现 XML 文档。
- **常见形式**：处理指令的格式是`<?target instructions?>`，其中`target`是指令的目标应用程序或处理程序的名称，`instructions`是传递给该目标的具体指令内容。例如，`<?xml-stylesheet type="text/css" href="styles.css"?>`，这个处理指令的目标是 XML 样式表处理器，指令内容是告诉处理器使用名为`styles.css`的 CSS 样式表来格式化 XML 文档，使其在浏览器等环境中以特定的样式呈现。

注意处理指令和生明的区别；XML 声明必须在文档的第一行，而处理指令可以在文档的任何位置。声明必须有，处理指令可选。
