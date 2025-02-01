---
title: XPath节点测试
article: false
order: 3
---

## 节点测试5个

Xpath中，节点测试是对轴的刷选的结果集做**下一步过滤**。

元素名称，元素类型，元素内容，处理指令，注释

| **名称**                | **含义**                                               |
| ----------------------- | ------------------------------------------------------ |
| **nodename**            | 从指定轴匹配的所有节点集中选出**名称**为nodename的节点 |
| **node()**              | 选择与指定轴匹配的所有**类型**的节点                   |
| **text()**              | 选择与指定轴匹配的所有**文本类型**的节点               |
| **comment**             | 选择与指定轴匹配的所有**注释**节点                     |
| **process-instruction** | 选择与指定轴匹配的所有注释处理指令节点                 |
| `*`                     | **通配符**，不对轴进行任何过滤                         |

**xml文件**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="mulid.xslt" type="text/xsl"?>
<!--this is a comment-->
<root>
root content
    <id>100</id>
    <id>101</id>
    <id>102</id>
</root>
```

**xslt文件**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/xpath-functions">
	<xsl:output method="html" encoding="UTF-8" indent="yes"/>
	
	<xsl:template match="/">
		<html>
			<head>
				<title></title>
			</head>
			<body>
				Nodename:<xsl:value-of select="child::root"/><p/>
				node():<xsl:value-of select="child::node()"/><p/>
				text():<xsl:value-of select="root/child::text()"/><p/>
				process-instruction:<xsl:value-of select="child::processing-instruction()"/><p/>
				comment:<xsl:value-of select="child::comment()"/><p/>
				*:<xsl:value-of select="child::*"/>
				
				
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
```

**输出：**

> `Nodename`: root content 100 101 102 
>
> `node()`:href="mulid.xslt" type="text/xsl" this is a comment root content  100 101 102 
>
> `text()`: root content 
>
> `process-instruction`:href="mulid.xslt" type="text/xsl"
>
> `comment`:this is a comment
>
> `*`: root content 100 101 102 
