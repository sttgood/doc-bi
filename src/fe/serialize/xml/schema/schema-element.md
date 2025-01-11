---
title: Schema元素
description: XML Schema Definition
article: false
order: 3
---

由于XML Schema是基于XML语法规范编写的，文件的跟标记必须为Schema。`xmlns:xs="http://www.w3.org/2001/XMLSchema"`属性指定了XML文档使用的命名空间，这也是W3C的命名空间。

头中常用属性：

- `elementFormDefault`：qualified/unqualified,执行xml文档使用该Schema中定义的局部元素时是否须用命名空间限定。

- `attributeFormDefault`：qualified/unqualified,执行xml文档使用该Schema中定义的局部属性是否由命名空间限定。

## 元素定义语法

- 语法1：

单标记

```xml
<eldment name="元素名称"  type="数据类型"  [default="默认值"]  [minOccurs=“最少出现次数“]  [maxOccurs="最多出现次数"]/>
```

- 语法2：

双标记

```xml
<eldment name="元素名称"  type="数据类型"  [default="默认值"]  [minOccurs=“最少出现次数“]  [maxOccurs="最多出现次数"]>
Element type
</eldment>
```

- 语法3

```xml
<element ref="引用元素名称"  [default="默认值"]    [minOccurs=“最少出现次数“]   [maxOccurs="最多出现次数"]/>
```

注意：

- minOccurs默认为1，属性值为0表示元素可选，属性值大于0表示元素强制出现。如果没有与maxOccurs同时出现，该值只能是0或1。
- maxOccurs默认为1，属性值为"unbounded"时表示元素可以出现任意多次。没有与minOccurs同时出现，该属性值不能为0。

**全局元素和局部元素**：

根据元素定义的位置，可分为**全局元素**和局部元素。在schema中定义的元素为全局元素，可以被其他元素任意引用。复杂类型中定义的元素为局部元素，局部元素只能在定义该元素的外部元素中使用。

## 元素组

元素组就是个多个元素及其约束组合在一起，使用时作为一个整体。可以更好的实现**复用**。

定义：	

```xml
<xs:group name="元素组名称">
   包含多个元素和其约束
</xs:group>
```

使用

```
<xs:group ref="元素组名称"/>
```

案例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="root">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="main1">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:group ref="subgroup"></xs:group>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
                <xs:element name="main2">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:group ref="subgroup"></xs:group>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
    
    <xs:element name="sub2" type="xs:string"></xs:element>

    <xs:group name="subgroup">
        <xs:sequence>
            <xs:element name="sub1" type="xs:string" default="sub1content"></xs:element>
            <xs:element ref="sub2" minOccurs="1" maxOccurs="unbounded"></xs:element>
        </xs:sequence>
    </xs:group>
</xs:schema>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="test.xsd">
    <main1>
        <sub1>sub1content</sub1>
        <sub2></sub2>
    </main1>
    <main2>
        <sub1>sub1content</sub1>
        <sub2></sub2>
    </main2>
</root>
```

