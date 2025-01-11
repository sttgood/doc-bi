---
title: 属性
description: Document Type Definition
article: false
order: 5
---

## 属性声明

```xml
<!ATTLIST element-name attribute-name attribute-ype default-value>  即：
<!ATTLIST   元素名称    [属性名，        属性类型 [约束] [默认值]]+>              
```

```xml
<!ATTLIST  root param  CDATA   #FIXED  "default value"> 
```

:::tabs

@tab 类型定义

| **属性类型** | **说明**                                                     |
| ------------ | ------------------------------------------------------------ |
| CDATA        | 单纯字符数据                                                 |
| ID           | 具有唯一的属性值，必须以**字母**开头                         |
| IDREF        | 引用其他ID属性的**值**，该值必须在其他ID属性中存在           |
| IDREFS       | 引用多个其他ID属性值，用空格隔开。                           |
| ENTITY       | 未解析的外部实体                                             |
| ENTITIES     | 多个未解析的外部实体，用空格隔开                             |
| NMTOKEN      | Name Token,关键字的名字，值可以包含**字母，数字，下划线 、中划线、点 、冒号。 |
| NOTATION     | 表示DTD声明过的符号，不建议使用即将过期。                    |
| Enumerated   | 枚举类型，从已有的属性中选                                   |

@tab 约束

| **约束修饰符** | **含义**                                                     |
| -------------- | ------------------------------------------------------------ |
| #REQUIRED      | 必须                                                         |
| #EMPLIED       | 可省略                                                       |
| #FIXED         | xml文档会给元素属性所定义的固定值，当约束为该值时，才能给出默认值，默认值必须给出。 |

**默认值**：属性默认值，用语指出属性没给时取得值。只有约束为#FIXED，才可以给出默认值。

:::

## 属性类型

### CDATA

- **定义与用途**：这是最常见的属性类型，用于表示属性值是普通的字符数据。例如，一个`book`元素的`title`属性可以是`CDATA`类型，用于存储书籍的标题文本。

  ```xml
  <?xml version="1.0"encoding="UTF-8"?>
  <!DOCTYPE book
  <!ELEMENT book (#PCDATA)>
  <!ATTLIST book description CDATA #REQUIRED>
  ]>
  <book description=:"一本xml书籍">XL基础及实践开发教程<book>
  ```
  
  这里表示`book`元素的`description`属性是字符数据类型，并且是必须的（`#REQUIRD`）。

### ID

- **定义与用途**：在整个XML文档中，具有`ID`类型的属性值必须是唯一的。它通常用于在文档中唯一地标识一个元素，方便在文档内部进行引用或关联其他元素。

  ```
  <!ATTLIST person personID ID #REQUIRED>
  ```

- 这意味着每个`person`元素必须有一个唯一的`personID`属性值。例如，在一个包含人员信息的XML文档中，可以通过这个`ID`来区分不同的人员记录。  

### IDREF和IDREFS

- **`IDREF`定义与用途**：用于引用另一个元素的`ID`属性。例如，在一个描述图书馆藏书和借阅者的 XML 文档中，`borrower`元素的`bookBorrowed`属性可以是`IDREF`类型，用于指向`book`元素的`ID`，表示借阅者借阅的书籍。

  ```
  <!ATTLIST borrower bookBorrowed IDREF #IMPLIED>
  ```

- **`IDREFS`定义与用途**：可以引用多个`ID`属性，属性值之间用空格分隔。例如，一个`booklist`元素的`booksIncluded`属性如果是`IDREFS`类型，可以包含多个`book`元素的`ID`，表示这个书单包含的书籍。

  ```
  <!ATTLIST booklist booksIncluded IDREFS #IMPLIED>
  ```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE root[
    <!ELEMENT root (book+, person+)>
<!ELEMENT book (#PCDATA)>
<!ELEMENT person (#PCDATA)>
<!ATTLIST book id ID #REQUIRED
                   borrowed IDREFS #REQUIRED>
<!ATTLIST person num ID #REQUIRED
                 borrow IDREF #REQUIRED>
]>
<root>
    <book id ="b1" borrowed="p1">xm1</book>
    <book id ="b2" borrowed="p2 p3">html</book>
    <person num="p1" borrow="b1">张三</person>
    <person num="p2" borrow="b2">李四</person>
    <person num="p3" borrow="b2">王五</person>
</root>
<!--id idref idrefs 案例-->
```

### ENTITY和ENTITIES

- **`ENTITY`定义与用途**：可以引用一个已声明的实体。例如，在一个包含图像元素的 XML 文档中，`image`元素的`source`属性如果是`ENTITY`类型，可以引用一个外部或内部实体来表示图像的来源。

  ```
  <!ATTLIST image source ENTITY #IMPLIED>
  ```

- **`ENTITIES`定义与用途**：用于引用多个已声明的实体。比如，一个`multimedia`元素的`mediaFiles`属性如果是`ENTITIES`类型，可以包含多个实体引用，用于表示多种媒体文件的来源。

  ```
  <!ATTLIST multimedia mediaFiles ENTITIES #IMPLIED> 
  ```

### NMTOKEN`和`NMTOKENS

NMTOKEN就是name token的缩写。属性值只能由数字、字母、英文下划线、英文中划线、英文点号、英文冒号组成比CDATA范围窄了一些。相比Enumerated已被定义的枚举，NMTOKEN的属性值未被定义。

- **`NMTOKEN`定义与用途**：表示属性值是一个名称标记，通常是一个符合 XML 命名规则的字符串。例如，一个`color`元素的`code`属性如果是`NMTOKEN`类型，可以存储颜色代码的名称，如`"red"`或`"blue"`。

  ```
  <!ATTLIST color code NMTOKEN #IMPLIED>
  ```

- **`NMTOKENS`定义与用途**：表示属性值是多个名称标记，用空格分隔。例如，一个`styles`元素的`styleNames`属性如果是`NMTOKENS`类型，可以存储多个样式名称，如`"bold italic"`。

  ```
  <!ATTLIST styles styleNames NMTOKENS #IMPLIED>
  ```

### Enumerated

枚举类型

```xml
<?xml version="1.0"  encoding="UTF-8"?>
<!DOCTYPE root [
 <!ELEMENT root (#PCDATA)>
 <!ATTLIST root day (星期一|星期二|星期三|星期四|星期五|星期六|星期日) #REQUIRED>
]>
<root day="星期一"></root>

```

## 属性默认值的处理方式

### #REQUIRED

- **含义与作用**：表示属性是必需的。当一个元素使用了这种属性声明时，在 XML 文档中必须为该元素提供这个属性的值。

  ```
  <!ATTLIST product serialNumber CDATA #REQUIRED>
  ```

- 这意味着每个`product`元素都必须有一个`serialNumber`属性，且其值为字符数据类型。

### #IMPLIED

- **含义与作用**：表示属性是可选的，并且没有默认值。如果在 XML 文档中没有为该元素提供这个属性，解析器不会报错。

  ```
  <!ATTLIST note comment CDATA #IMPLIED>
  ```

- `note`元素可以有`comment`属性，也可以没有。

### #FIXED "value

- **含义与作用**：表示属性有一个固定的值，不能修改。在 XML 文档中，如果元素包含这个属性，其值必须是固定的值。

  ```
  <!ATTLIST setting type CDATA #FIXED "default">
  ```

- 这意味着`setting`元素的`type`属性如果出现，其值必须是`"default"`。

### "default"

- **含义与作用**：除了上述三种特殊的默认值指定方式外，还可以直接为属性指定一个具体的默认值。例如，

  ```
  <!ATTLIST order status CDATA "pending">
  ```

- 这表示`order`元素的`status`属性默认值是`"pending"`，如果在 XML 文档中没有为`order`元素提供`status`属性，解析器会自动将其值设置为`"pending"`。
