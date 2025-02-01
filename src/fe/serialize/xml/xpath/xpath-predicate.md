---
title: XPath谓词
article: false
order: 4
---

## 谓词

谓词本身是一个**布尔表达式**

```xml
[position=1]      简化为 [1]       xpath的索引从1开始 
```

xml文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet href="mulid.xslt" type="text/xsl"?>
<!--this is a comment-->
<root>
root content
    <id>100</id>
    <id>101</id>
    <id>102</id>
    <name>103</name>
</root>
```

xslt文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/xpath-functions">
 <xsl:output method="html" encoding="gb2312" indent="yes"/>
 <xsl:template match="/">
  <html>
   <head>
    <title/>
   </head>
   <body>
    <!--谓词筛选所有节点等于100的集合-->
    一个谓词：<xsl:value-of select="root/*[text()=100]"/><p/>
    <!--多个谓词筛选100或者102-->
    多个谓词：<xsl:value-of select="root/*[text()=100 or text()=102]"/><p/>

   </body>
  </html>
 </xsl:template>
</xsl:stylesheet>
```

输出：

> `一个谓词`：100
>
> `多个谓词`：100 102

Xpath的实际使用中常见简化路径有两种：轴名简化和谓词简化。
