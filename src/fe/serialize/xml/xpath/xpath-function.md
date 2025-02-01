---
title: Xpath函数
article: false
order: 6
---

语法：

```xml
functionname([arg]* )
```

- **functionname**：被调用函数名称

- **arg**        ：函数的变量，用逗号隔开

Xpath1.0（共有1.0，2.0，3.1）有27个函数，根据传入的参数可分为4种：`结点集函数`，`布尔函数库`，`数字函数库`，`字符串函数库`。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="num_function.xsl"?>
<!--demo content-->
<root num="101">
    root content
    <id>stt</id>
    <id>101</id>
    <id>102</id>
    <id>10000</id>
    <name>103</name>
</root>
```

### 1.结点集函数

节点函数库就是传入的参数是节点或者节点集的函数。它们的返回值可以是任何类型。

- 节点 name(?ns) local-name()

- 位置 position() last()

- 数量 count(no?)

- 命名空间 namespace-uri()

| **函数**           | **说明**                                      |
| ------------------ | --------------------------------------------- |
| last()             | 返回结点集中，最后一个节点的位置              |
| positon()          | **返回当前处理节点在结点集中的位置**          |
| count(ns)          | **返回结点集数量**                            |
| local-name(ns?)    | 返回传入节点的本地部分                        |
| namespace-uri(ns?) | 返回传入节点的命名空间uri部分                 |
| name(ns?)          | 返回传入节点完整，扩展名称。【命名空间和uri】 |

```xml
<xsl:for-each select="root/id">
    <xsl:value-of select="name(.)"/>=
    <xsl:value-of select="text()"/><br/>
</xsl:for-each>

id元素的数量：

<xsl:value-of select="fn:count(root/id)"/><p/>
<xsl:value-of select="fn:position()"/><p/>



<xsl:for-each select="root/id">
    local_name:<xsl:value-of select="fn:local-name()"/><br/>
    namespace:<xsl:value-of select="fn:namespace-uri()"/><br/>
    name:<xsl:value-of select="name(.)"/><br/>
    value:<xsl:value-of select="text()"/><p/>
</xsl:for-each>
```

### 2.布尔函数库

布尔函数库要求传入的参数是布尔变量，一般返回值也是布尔变量。

| **函数**         | **说明**                     |
| ---------------- | ---------------------------- |
| **boolean(obj)** | 1.obj存在 2.str>1 。3.数字>0 |
| **not(boolean)** | 传入值取反                   |
| **true()**       | 简单返回true                 |
| **false()**      | 简单返回false                |
| **lang(str)**    | 有xml：lang，且值=str        |

 

```xml
boolean（root/id）:<xsl:value-of select="fn:boolean(root/id)"/><p/>

boolean(none):<xsl:value-of select="fn:boolean(none)"/><p/>

not函数测试：<xsl:value-of select="fn:not(false)"/><p/>

lang:<xsl:value-of select="fn:lang(root/id[1])"/><p/> 
```

 

### 3.数字函数库

| 函数             | 说明                                          |
| ---------------- | --------------------------------------------- |
| **number(obj)**  | 将一个对象转化为数字（root/id 下面的atoi() ） |
| **sum(ns?)**     | 传入的节点转为数字，并求和                    |
| **floor(num)**   | 利用截断原则取整                              |
| **ceiling(num)** | 利用进一法则取整                              |
| **round(num)**   | 返回四舍五入原则取整                          |

 

```xml
<xsl:for-each select="root/id">
    <xsl:value-of select="."></xsl:value-of>:
    <xsl:value-of select="fn:number(.)"/><p/>
</xsl:for-each>

sum(root/id):<xsl:value-of select="fn:sum(root/id)"/><p/>
floor(1.6):<xsl:value-of select="fn:floor(1.6)"/><p/>
ceiling(1.1):<xsl:value-of select="fn:ceiling(1.1)"/><p/>
round(1.1):<xsl:value-of select="fn:round(1.1)"/><p/>
```



### 4.字符串函数库

| 函数                             | 说明                            |
| -------------------------------- | ------------------------------- |
| string(any)                      | **构造函数，any是四种对象类型** |
| concat(string,string…)           | 返回拼接                        |
| substring(string,number,number?) | 返回截取                        |
| contains()                       | 判断包含                        |

 

```xml
<xsl:for-each select="root/id">
    <xsl:value-of select="."/>是否包含数字2：
    <xsl:value-of select="fn:contains(.,'2')"/><p/>
</xsl:for-each>
<xsl:value-of select="fn:concat('aaaaa','bbbbb')"/><p/>
<xsl:value-of select="fn:normalize-space('   a   b   v  d')"/><p/>
```

 

```xml
<xsl:for-each select="root/id">
    <xsl:value-of select="."/>是否以数字1开头
    <xsl:value-of select="fn:starts-with(string(.),fn:string(1))"/><p/>
</xsl:for-each>
```

 

  

```xml
<xsl:for-each select="root/id">
    <xsl:value-of select="."/>单词的长度
    <xsl:value-of select="fn:string-length(.)"/><p/>
</xsl:for-each>
```

  结果：      

> 100是否包含数字2： false 
>
> 101是否包含数字2： false 
>
> 102是否包含数字2： true 
>
> 10000是否包含数字2： false 
>
> aaaaabbbbb 
>
> a b v d 
>
> 100是否以数字1开头 true 
>
> 101是否以数字1开头 true 
>
> 102是否以数字1开头 true 
>
> 10000是否以数字1开头 true 
>
> 100单词的长度 3 
>
> 101单词的长度 3 
>
> 102单词的长度 3 
>
> 10000单词的长度 5

```xml
<xsl:for-each select="root/id">
    <xsl:value-of select="."/>是否包含数字2：
    <xsl:value-of select="fn:contains(.,'2')"/><p/>
</xsl:for-each>
```

 结果：

> 100是否包含数字2： false 
>
> 101是否包含数字2： false 
>
> 102是否包含数字2： true 
>
> 10000是否包含数字2： false
