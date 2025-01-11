---
title: 命名空间概述
description: namespace
article: false
order: 1
---

### 产生原因

当有名字相同但是含义不同的元素。

```xml
<root>
    <name>stt</name>
    <book>
        <name>sttgood</name>
    </book>
</root>
```

容易造成混乱。引入命名空间:

```xml
<root xmlns:na="www" xmlns:bkna="baidu">
  <na:name>stt</na:name>
  <book>
      <bkna:name>sttgood</bkna:name>
  </book>
</root>
```

命名空间是0个或多个名称的集合，在命名空间中，每一个名称都是唯一的。

### 语法格式

:::important

```
xmlns[:prefix] = "命名空间字符串"
```

- `xmlns` ：即xml namespace，固定的。
- `prefix` ：随意指定一个简短的名字。也成命名空间别名。
- `命名空间字符串` ：是一个URI，但是不需要指定实际的内容。可以不是真实的，但是保证唯一性。不推荐使用相对路径。命名空间主要有：没有前缀限定的命名空间和有前缀限定的命名空间。

:::

**注意：**

- 命名空间不能有冒号

- 不能使用xml和xmlns字符

- 命名空间以`命名空间字符串`为标识符，即使别名不同。命名空间字符串相同仍属于同一命名空间。

  ```
  <book xmlns=""> 值为空等同于 <book>
  <book xmlns:bk="www.baidu.com">  值相同等同于<book xmlns:book="www.baidu.com">
  ```


### 命名空间的选择和使用注意事项

- **选择 URI**：
  - 选择命名空间URI时，尽量确保其唯一性，可以使用组织或项目的域名或其他唯一标识符。
  - 不需要确保URI指向实际的资源，但应该保证其在使用环境中的唯一性。
- **一致性**：
  - 在 XML 文档中使用命名空间时，要保持一致性，避免在不同位置使用相同的前缀表示不同的命名空间或相同的命名空间使用不同的前缀。
- **复杂性**：
  - 过多的命名空间会使XML文档变得复杂，增加解析和处理的难度，在设计XML文档时需要谨慎使用。