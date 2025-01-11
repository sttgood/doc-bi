---
title: 内置数据类型
description: XML Schema Definition
article: false
order: 2
---

## 任意类型

- anyType：与DTD中的ANY类似。没有任何约束。

- anySimpleType：简单类型，不能有子元素和属性，其他无要求。

## 内置基本数据类型

Schema中内置了大量的基本数据类型：字符串与相关类型、数值类型、日期类型，时间类型、boolean类型、anyURI类型、二进制数据类型、NOTATION类型。

### 字符串相关类型

- string  ：字符串，保留空白。

- QName：包含xml命名空间内的名称。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">
    <xs:element name="typedemo">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="stringdemo" type="xs:string"></xs:element>
                <xs:element name="QNamedemo" type="xs:QName"></xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<typedemo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="anytype.xsd">
  <stringdemo>Str</stringdemo>
  <QNamedemo>xml:lang</QNamedemo>
</typedemo>
```

元素Qnamedemo的内容是QName，可以包含命名空间

### 数值类型

| 数据类型  | 描述                              |
| --------- | --------------------------------- |
| decimal   | 特定精度数字                      |
| float     | 精度32为(4字节)，支持科学计数法   |
| double    | 精度64位（8字节），支持科学计数法 |
| hexBinary | 十六进制                          |

```xml
<xs:element name="decimaldemo" type="xs:decimal"></xs:element>
```

### 日期类型

| 数据类型   | 描述       |
| ---------- | ---------- |
| date       | YYYY-MM-DD |
| gYearMonth | YYYY-MM    |
| gYear      | YYYY       |
| gMonthDay  | MM-DD      |
| gDay       | DD         |

```xml
<xs:element name="datedemo" type="xs:gYear"></xs:element>
```



- YYYY 表示年份
- MM 表示月份
- DD 表示天数

**注意：**所有的成分都是必需的

### 时间类型

- hh 表示小时
- mm 表示分钟
- ss 表示秒

**注意：** 所有的成分都是必需的！

| 数据类型     | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| **duration** | 表示持续时间PnYnMnTnHnMnS,p起始实限定符（周期），T为分隔符，s前面的n可以小数 |
| **dateTime** | 特定时间YYYY-MM-DDThh:mm:ss:sss，sss表示好毫秒数             |
| **time**     | 特定时间hh:mm:ss:sss，sss表示毫秒数                          |

```xml
**<durationDemo>P1Y2M3DT10H30M</durationDemo> 
```

1年两个月3天，10小时30分钟的周期。

### 布尔类型

| 数据类型    | 描述                             |
| ----------- | -------------------------------- |
| **boolean** | 布尔型，只能是true，false或者0,1 |

### anyURI类型

| 数据类型   | 描述                    |
| ---------- | ----------------------- |
| **anyURI** | 表示一个URI用来定位文件 |

### 二进制数据类型

| 数据类型         | 描述                           |
| ---------------- | ------------------------------ |
| **base64Binary** | **任意base64编码的二进制数**   |
| **hexBinary**    | **任意十六进制编码的二进制数** |

### NOTATION类型

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="root">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="notationDemo">
                    <xs:simpleType>
                        <xs:restriction base="xs:NOTATION">
                            <xs:enumeration value="gif"></xs:enumeration>
                            <xs:enumeration value="jpeg"></xs:enumeration>
                        </xs:restriction>
                    </xs:simpleType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
    <xs:notation name="gif" public="img/gif" system="view.exe"></xs:notation>
    <xs:notation name="jpeg" public="img/jpeg" system="view.exe"></xs:notation>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="anytype.xsd">
    <notationDemo>gif</notationDemo>
</root>
```

## 内置扩展数据类型

内置基本类型对内容的约束不够具体，内置扩展数据类型约束更加具体，由string或者decimal派生。

### string派生的约束性属性类型

只能用语约束属性，于DTD一一对应，在DTD中，属于属性类型。

| 数据类型 | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| NMTOKEN  | 必须是合法的XML名称，只能由字符、数字、"_"、"-"、"."、"."、":"组成 |
| NMTOKENS | 多个NMTOKEN，空格为分隔符                                    |
| ID       | 标识符                                                       |
| IDREF    | 引用另一个ID                                                 |
| IDREFS   | 引用多个已有的ID，空格为分隔符                               |
| ENTITY   | 外部实体                                                     |
| ENTITIES | 多个外部实体，空格为分隔符                                   |

没有CDATA

### 由string派生的其他类型

| 数据类型         | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| normalizedString | 将字符串的换行、制表符、和回车都换成空白                     |
| token            | 将字符串的换行、制表符、和回车都换成空白并自动删除前后的空白，若中间有多个空白，压缩为一个 |
| language         | 定义合法的语言代码                                           |
| Name             | 含有一个有效的xml名称的字符串                                |
| NCName           | 省略或不带命名空间前缀的XML名称字符串，不含冒号              |

### 由decimal派生的约束属性类型

| **数据类型**       | **描述**                 | **最小值** | **最大值** |
| ------------------ | ------------------------ | ---------- | ---------- |
| integer            | 无限制整数               | 无限制     | 无限制     |
| nonNegativeInteger | 无限制非负数（整数）     | 0          | 无限制     |
| nonPositiveInteger | 无限制非正数（负数）     | 无限制     | 0          |
| long               | 长整形  ，64位有符号数， | -2^63^     | 2^63^-1    |
| positiveInteger    | 无限制正整数             | 1          | 无限制     |
| negativeInteger    | 无限制负整数             | 无限制     | -1         |
| unsignedLong       | 64位无符号数             | 0          | 2^64^-1    |
| int                | 32位有符号数             | -2^31^     | 2^31^-1    |
| unsingnedInt       | 32位无符号数             | 0          | 2^32^-1    |
| short              | 16位有符号数             | -2^15^     | 2^15^-1    |
| unsignedShort      | 16位无符号数             | 0          | 2^16^-1    |
| byte               | 8位有符号数              | -2^7^      | 2^7^-1     |
| unsignedByte       | 8位无符号数              | 0          | 2^8^-1     |
