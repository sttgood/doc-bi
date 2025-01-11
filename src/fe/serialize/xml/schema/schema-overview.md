---
title: Schema概述
description: XML Schema Definition
article: false
order: 1
---

Schema 即XML Schema，也称为XML Schema Definition(XSD),是万维网协会推出的能够描述，约束和检查XML文档的新方法。它提供了更强大的功能，也是DTD的替代者。与DTD相比它的特点：

- XML Schema 可以针对未来的需求进行扩展
- Schema 基于XML文档编写
- Schema 支持数据类型
- Schema 支持命名空间

XML Schema 建议规范中有两个基础的命名空间，一个用于Schema文档的Schema URI，即`http://www.w3.org/2001/XMLSchema`,通常使用xs表示，另一个用于XML文档，即`http://www.w3.org/2001/XMLSchema-instance`用xsi表示。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="college">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="name" type="xs:string"/>
                <xs:element name="majro" type="xs:string" minOccurs="1",maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

由于schema也是XML文件，因此次文件必须有一个根元素。Schema根元素包括了一个属性，即xmlns:xs="http://www.w3.org/2001/XMLSchema",该属性从语法上是引入了命名空间，语义上是引入当前XML文档的语义约束即命名空间的别名。

xml文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<school xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="first.xsd">
    <name>stt</name>
    <major>java</major>
</school>
```

