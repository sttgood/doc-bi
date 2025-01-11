---
title: 纯量Scalas
description: 基本数据
article: false
order: 2
---
[[toc]]
纯量是最基本的数据单元，不可再分。它们包括但不限于以下几种：

```yaml
boolean: 
    - TRUE  #true,True都可以
    - FALSE  #false，False都可以
float:
    - 3.14
    - 6.8523015e+5  #可以使用科学计数法
int:
    - 123
    - 0b1010_0111_0100_1010_1110    #二进制表示
null:
    nodeName: 'node'
    parent: ~  #使用~表示null
string:
    - 哈哈
    - 'Hello world'  #可以使用双引号或者单引号包裹特殊字符
    - newline
      newline2    #字符串可以拆成多行，每一行会被转化成一个空格
date:
    - 2018-02-17    #日期必须使用ISO 8601格式，即yyyy-MM-dd
datetime: 

```

## 字符串

默认情况下不需要引号，但如果包含特殊字符或空格，则需要使用单引号 ' 或双引号 " 包围。

```yaml
string: Hello, World!
quoted_string: 'Hello, "World"!'
```

## 布尔值

可以用 true、True、TRUE 表示真，用 false、False、FALSE 表示假。

```yaml
boolean_true: true
boolean_false: false
```

## 整数

直接书写数字即可，也支持二进制、八进制和十六进制表示法。

```yaml
decimal: 42
binary: 0b101010
octal: 052
hexadecimal: 0x2A
```

## 浮点数

可以是普通的十进制小数，也可以采用科学计数法表示。

```yaml
float_decimal: 3.14
float_scientific: 6.02e23
```

## Null

用于表示空值，可以用 null 或者波浪线 ~ 来表示。

```yaml
null_value: null
another_null: ~
```

## 时间日期

遵循 ISO 8601 格式，支持日期、时间和带时区的时间戳。

```yaml
date_only: 2024-01-01
datetime_with_timezone: 2024-01-01T12:00:00+08:00
```
