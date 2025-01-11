---
title: 用户自定义数据类型
description: XML Schema Definition
article: false
order: 2
---

用户自定义数据类型可以分为全局数据类型和局部数据类型。

## 自定义定义简单数据类型

是通过对内置数据类型的限制、列表、联合的一种或者几种形成的新数据类型。

语法：

```xml
<xs:simpleType [name ="自定义类型名"]>
  [限制、列表、联合的一种或者几种方式]
</xs:simpleType>
```

### 限制

语法：

根节点下必须写类型名称，子节点不用写。

```xml
<xs:simpleType [name="自定义类型名称"]>                            
    <xs:restriction base="基类型">
    [约束特征]
    </xs:restriction>
</xs:simpleType>
```

其中base:表示自定义数据类型是基于哪种类型增加约束的。

约束特征：

| 特性名称       | 描述                                               |
| -------------- | -------------------------------------------------- |
| enumeration    | 枚举                                               |
| fractionDigits | 限定最大的小数位，用语限定精度                     |
| length         | 指定数据长度                                       |
| maxExclusive   | 指定数据的最大值（小于）                           |
| maxInclusive   | 指定数据的最大值（小于等于）                       |
| maxLength      | 指定长度的最大值                                   |
| minExclusive   | 指定最小值（大于）                                 |
| minInclusive   | 指定最小值（大于等于）                             |
| minLength      | 指定最小长度                                       |
| pattern        | 指定数据的显示规范                                 |
| totalDigits    | 定义所允许的阿拉伯数字精确度，必须大于0            |
| whiteSpace     | 定义空白字符（换行，回车，制表符，空格）的处理方式 |

### 列表

1.方式一

```xml
<xs:simpleType name="自定义类型名">
    <xs:list itemType="列表元素类型"></xs:list>
</xs:simpleType>
```

2.方式二

```xml
<xs:element name="sim">
    <xs:simpleType>
        <xs:list></xs:list>
    </xs:simpleType>
</xs:element>
```

### 联合

1.方式一 

```XML
<xs:simpleType name="自定义元素类型">
    <xs:union memberTypes="列表元素类型"></xs:union>
</xs:simpleType>
```

其中memberType指定一个或者多个简单类型，空格隔开

eg：memberType=“string decimal”  

2.方式二

```xml
<xs:simpleType name="自定义类型名称">
<xs:union>
<xs:simpleType/>
    </xs:union>
</xs:simpleType>
```

## 自定义复杂数据类型

**复杂数据类型，属性，子元素，同时包含属性或者子元素。与可能包含字符内容。**

 

```XML
<xs:complexType name="自定义元素名字" mixed="false/ture">
    [顺序、选择、简单内容、复杂内容]+   
</xs:complexType>
```

mixed属性：是否混合内容，默认false

### 顺序<xs:sequence>

```XML
<xs:complexType name="mytype">
    <xs:sequence minOccurs="1" maxOccurs="3">
    <xs:element name="sub1"/>
    <xs:element name="sub2"/>
    </xs:sequence>
</xs:complexType>
```

###  选择<xs:choice>

 `<xs:choice/>`

```XML
<xs:complexType name="sub2Type">
    <xs:choice minOccurs="1" maxOccurs="3">
    <xs:element name="sub21" type="xs:string" minOccurs="1" m**axOccurs="3"></xs:element>
    <xs:element name="sub22" type="xs:string" minOccurs="2" maxOccurs="3"></xs:element>
    </xs:choice>
</xs:complexType>
```

### 无序<xs:all#>

子元素无序，但是，数量不能被设定，只能是一个。

不能增加元素

不能与sequence和choice同时出现。

```XML
<xs:complexType name="allType">
    <xs:all>
        <xs:element name="all1" minOccurs="1"></xs:element>
        <xs:element name="all2" minOccurs="1"></xs:element>
    </xs:all>
</xs:complexType>
```

 

minOccurs和maxOccurs既可以是all的属性，也可以是element的属性。

### 简单内容<xs:simpleContnet#>

元素只包含属性，不包含子元素。无子

#### restriction

**里面写约束特征，字符串长度，数字长度，精度。**

```XML
<xs:simpleContent>
    <xs:restriction base="simpleType">
        <xs:minLength value="3"></xs:minLength>
    </xs:restriction>
</xs:simpleContent>
```

#### extension

extension中写属性

```XML
<xs:simpleContent>
    <xs:extension base="xs:string ">
        <xs:attribute name="sim1" type="xs:string"></xs:attribute>
        <xs:attribute name="sim2" type="xs:string"></xs:attribute>
    </xs:extension>
</xs:simpleContent>
```

### 复杂内容<xs:compelxContent>

#### restriction

不能重新加子元素，但是可以再次限制子元素

#### extension

添加属性

