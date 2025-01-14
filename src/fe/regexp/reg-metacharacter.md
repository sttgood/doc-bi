---
title: 元字符
article: false
order: 2
---

[[toc]]

具有特殊含义的字符，用于定义复杂的模式匹配规则。常见的元字符包括：

- `.`：匹配除换行符外的任意单个字符
- `^`：匹配字符串的开头，或者在方括号内部用来表示取反
- `$`：匹配字符串的结尾
- `*`：匹配前面的子表达式零次或多次
- `+`：匹配前面的子表达式一次或多次
- `?`：匹配前面的子表达式零次或一次，或在某些上下文中表示非贪婪匹配
- `[]` ：匹配方括号内的任意一个字符。
- `|`：表示逻辑“或”操作
- `()`：定义子表达式，用于分组和捕获
- `{}`：匹配前面的子表达式指定次数
- `{n}` ：匹配前面的子表达式恰好n次。
- `{n,}` ：匹配前面的子表达式至少n次。
- `{n,m}` ：匹配前面的子表达式至少n次，至多m次。

## 边界符

### 1.`^`

在区间内代表取反，区间外代表多行匹配的**行开始。**

```
  [^a-z]：不含小写字母的数据
  ^java：java开头的
```

### 2.`$`

匹配开头， 多行匹配中匹配**行**结尾  

```
Java&：匹配以java结尾的字符串
```

> 开头和结尾,实际应用一般是文本的开头和结尾，当行模式(m),hi每行的开头和结尾。

## 量词

表示某个模式重复次数

### 1.`*？+`

| \*   | {0, }  0个或多个 |      |
| ---- | ---------------- | ---- |
| ？   | {0,1} 0个或一个  |      |
| \+   | {1, }  1个或多个 |      |

::: warning  注意 在正则表达式中，? 的作用取决于它出现在什么位置以及前面是否有其他量词。
**作为量词：**

- 当 ? 出现在一个字符、一组字符（即括号内的内容），或者一个转义序列之后时，它表示前面的元素是可选的，也就是说它可以出现0次或1次。

> 例如，colou?r 这个正则表达式可以匹配 "color" 或 "colour"，因为 u 后面的 ? 表示 u 是可选的。

**作为非贪婪修饰符：**

- 如果 ? 紧跟在一个量词 (*, +, {n,m}) 后面，则它改变该量词的行为为非贪婪模式。

> 例如，在 .+? 中，+ 是一个量词，表示匹配前面的字符（.）一次或多次；而紧跟其后的 ? 则将这个行为转换成非贪婪模式，意味着它会尽可能少地匹配字符。

总结来说，? 是否代表非贪婪匹配取决于它的上下文。如果它紧跟在一个量词后面，那么它就是非贪婪修饰符；否则，它就是一个量词，表示前面的元素是可选的。
:::

### 2.`{n}`

  前一个位置的字符重复了N次

```
   \d{3}-\d{5}：010-1111
```

### 3.`{n,}`

```
  \d{1,}  :开启区间。匹配1个数字或者无数个数组。
```

### 4.`{m,n}`

  前一个位置区间

```
  \d{3,4}：可以同时匹配**123**和**1234**，**1234**5

  \d{3,4}？：只能匹配**123**和**123**4，**123**45，**非贪婪模式**，能匹配3个数字，不会匹配4个数字
```

## （三）字符类

### 1.`[]`

匹配`[]`中**任何一个**即匹配成功。

```
  [Jj]ava ：匹配大写java和小写java
```

**简化：**

- [0-9]：有数字

- [a-z]：所有小写

- [A-Z]：所有大写

- [0-9a-zA-Z]：以上所有



### 2.预定义

指的是常见模式的简化

| **预定类** | **说明**                                                     |
| ---------- | ------------------------------------------------------------ |
| **`\d`**   | 所有数字，相当于`[0-9]`                                      |
| **`\D`**   | 所有非数字，相当于`[^0-9]`                                   |
| **`\w`**   | 所有字符。字母数组下划线，相当于`[A-Za-z0-9_]`               |
| **`\W`**   | 所有非字符，可以匹配特殊字符，相当于`[^A-Za-z0-9_]`          |
| **`\s`**   | 匹配空格（换行符，制表符，空格符等），相当于`[\t\r\n\v\f]`   |
| **`\S`**   | 非空白，相当于`[^\t\r\n\v\f]`                                |
| **`\b`**   | 单词边界 **单词和非单词间的位置`（\w\W）`，**包括单词的**首尾，**单词和**空格** |
| **`点.`**  | 除了`\r`  和`\n`之外的任意字符                               |
