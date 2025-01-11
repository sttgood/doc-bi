---
title: 复合类型
description: 复杂数据
article: false
order: 3
---
[[toc]]

## 数组

序列是一组按顺序排列的值，通常以连字符 `-` 开头来定义每个元素

也可以使用流式风格（flow style）用方括号 `[ ]` 包裹，并用逗号加空格分隔各个元素。

```yaml
hobby: 
 - java
 - c/c++
 - python
 - 汇编

# 行内格式
hobby: [ java, c/c++, python, 汇编]
```

## 映射(对象)

映射是由键值对组成的集合，键和值之间用冒号 `:` 分隔，并在**冒号后跟随一个空格**

同样地，映射既可以通过区块格式（block format）定义，也可以通过流式风格（flow style）定义。

```yaml
# block style
user:
  name: stt
  age: 18
  
# flow style
user: {name: stt, age: 18}

```

```yaml
companies:
  -
      id: 1
      name: company1
      price: 200W
  -
      id: 2
      name: company2
      price: 500W 
```

等同于

```yaml
companies: [{id: 1,name: company1,price: 200W},{id: 2,name: company2,price: 500W}]
```

### 简单建

```yaml
user:
  name: stt
  age: 18
```

### 复杂键

问号用于定义复杂键的情况，特别是在键本身包含特殊字符或者需要多行表达的时候。它允许键可以跨越多行并且可以包含任意字符，包括冒号、连字符等。在这种情况下，问号后面跟一个换行符，然后是键的内容，再接下来是值

```yaml
# 较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value：

# 数组键
# 意思即对象的属性是一个数组 [complexkey1,complexkey2]，对应的值也是一个数组 [complexvalue1,complexvalue2]
?  
  - complexkey1
  - complexkey2
:
  - complexvalue1
  - complexvalue2
# 特殊字符键  键包含冒号
? complex:key:with:colons
: value for the complex key
# 多行键
? |
  This is a very long key
  that spans multiple lines
: and this is its value
```

### 高级

#### 锚点

锚点通过符号 `&` 来创建，紧跟其后的是一个唯一的标识符（通常是一个有意义的名字），用来标记一个特定的数据节点。这个节点可以是任何有效的 YAML 数据类型，比如标量、序列或者映射。一旦定义了锚点，你就可以在整个文档中引用它而不必重复写入相同的数据

#### 引用

别名通过符号 `*` 来实现，用于引用之前已经定义过的锚点。当你希望在另一个位置使用相同的值或对象时，只需简单地放置 `*` 加上相应的锚点名称即可。这不仅减少了冗余代码，还确保了所有引用的地方都能一致更新

```yaml
people:
  - &person1 Steve
  - Clark
  - Brian
  - *person1
```

翻译为json

```json
{
  "people": [
    "Steve",
    "Clark",
    "Brian",
    "Steve"
  ]
}
```

#### 地图合并

除了简单的锚点和别名之外，YAML 还支持一种称为“地图合并map merge”的特性，它允许将一个映射的内容复制到另一个映射中。这可以通过 `<<` 操作符来完成，它可以接受单个锚点或一系列锚点作为参数。**地图合并经常在锚点和引用一起使用**

```yaml
defaults: &defaults
  adapter: postgres
  host: localhost
```

```yaml
development:
  <<: *defaults
  database: myapp_development
test:
  <<: *defaults
  database: myapp_te
```

```json
{
  "defaults": {
    "adapter": "postgres",
    "host": "localhost"
  },
  "development": {
    "adapter": "postgres",
    "host": "localhost",
    "database": "myapp_development"
  },
  "test": {
    "adapter": "postgres",
    "host": "localhost",
    "database": "myapp_te"
  }
}
```
