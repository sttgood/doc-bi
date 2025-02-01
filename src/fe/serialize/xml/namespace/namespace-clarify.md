---
title: 命名空间分类
description: namespace
article: false
order: 2
---

## 命名空间分类

### 默认命名空间

- 可以在元素上声明一个默认命名空间，该元素及其所有子元素（除非子元素声明了自己的命名空间）都属于该命名空间。一个文件可以使用多个命名空间，但是只能使用一个没有前缀的命名空间

```xml
<root xmlns="http://example.com/namespace">
    <child>内容</child>
</root>
```

在这个例子中，`root` 元素及其子元素 `child` 都属于 `http://example.com/namespace` 这个命名空间。

### 带前缀的命名空间

- 可以为命名空间分配一个前缀，使用时在元素或属性前添加该前缀。

```xml
<r:root xmlns:r="http://example.com/namespace">
    <r:child>内容</r:child>
</r:root>
```

这里，`r` 是命名空间 `http://example.com/namespace` 的前缀，`r:root` 和 `r:child` 元素属于这个命名空间。

注意：命名空间的位置一般在根元素上，但也可放在子元素上，则只适用于该子元素及其子元素。

## 多个命名空间的使用

- 一个 XML 文档可以同时使用多个命名空间，每个命名空间可以有不同的前缀或使用默认命名空间。

```xml
<root xmlns="http://example.com/namespace1" xmlns:ns2="http://example.com/namespace2">
    <child>内容 1</child>
    <ns2:child2>内容 2</ns2:child2>
</root>
```

`child` 元素属于 `http://example.com/namespace1` 命名空间，而 `ns2:child2` 元素属于 `http://example.com/namespace2` 命名空间。

## 属性和命名空间

属性很少使用命名空间，如果没有使用别名，则不属于任何空间。属性的命名空间和元素的命名空间是独立的

```xml
<root bk:xmlns="www">
    <sub bk:id="1">abc</sub>
</root>
```

DTD早于命名空间，所以DTD不支持命名空间。DTD需要根据XML进行相应的修改。
