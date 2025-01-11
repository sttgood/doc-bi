---
title: Schema属性
description: XML Schema Definition
article: false
order: 4
---

## 属性定义

只有复杂元素才可能包含属。所以其作用于complexType中

语法1

```xml
<xs:attribute name="属性名" type="属性类型" [default="默认值"]|[fixed="固定的"]>
<xs:attribute>
```

语法2

```xml
<xs:attribute ref="属性名">
</xs:attribute>
```

- `name`：XML元素的属性名
- `type`：属性的数据类型，可以使用内置数据类型或者simpleType元素定义的数据类型。
- `default`：属性的默认值，该属性可选不能和fixed属性同时存在。
- `fixed`：属性的固定值，如果该属性存在，则属性的值固定。
- `ref`：引用已经定义好的属性名称。

## 全局属性

属性按照定义的位置分为全局属性可局部属性。和元素类似，它们的区别在于作用域不同。在Schema中定义的属性称为全局属性，全局属性可以被其他的任意元素引用。在复杂类型中定义的属性称为局部属性，局部属性仅能在定义该属性的元素中使用。

## 属性组

属性组语法：

```xml
<xs:attributeGroup name="属性组名称">
    包含多个属性
</xs:attributeGroup>
```

引用属性组：

```xml
<xs:attributeGroup ref="属性组名称"/>
```

示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">
    <xs:annotation>
        <xs:documentation>属性组</xs:documentation>
    </xs:annotation>

    <xs:element name="root">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="sub" type="xs:string" default="sub1content"/>
                <xs:element ref="sub2" minOccurs="1" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attributeGroup ref="attlist"/>
        </xs:complexType>
    </xs:element>
    <xs:element name="sub2" type="xs:string"/>
    <xs:attributeGroup name="attlist">
        <xs:attribute name="id" type="xs:string"/>
        <xs:attribute name="language" type="xs:string" default="xml"/>
    </xs:attributeGroup>
</xs:schema>
```

## 注释

XML Schema有两种注释语法：

- `<!--注释内容-->`

- `<annotation>`标记。该标记通常放在各种Schema文件的开始部分，用于说明对`<annotation>`注释有两个子元素

  - `<documentation>`：该子元素的注释主要提供给其他人阅读。

  - `<appinfo>`：该子元素的注释主要提供给他程序使用。

 这两个元素可在`<annotation>`中出现多次，且不限制顺序。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="http://www.baidu.com">
<xs:annotation>
    <xs:documentation>该标记作为XML的跟标记使用</xs:documentation>
</xs:annotation>   
<xs:element name="colleague">
    <xs:complexType>
        <xs:sequence>
            <xs:annotation>
                <xs:documentation>子注释标记</xs:documentation>
                <xs:documentation>子注释标记</xs:documentation>
            </xs:annotation>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="relation" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
</xs:element>
</xs:schema>

```

