---
title: 断言
article: false
order: 4
---

正则表达式中的断言（Assertions）是一种特殊的构造，它们用于确定匹配的位置或上下文条件，但不消耗字符。换句话说，断言不会“吃掉”文本中的任何部分，只是用来检查某个位置是否满足特定条件。断言在确保模式匹配的准确性方面非常有用，尤其是在处理复杂的文本结构时。以下是关于正则表达式中几种常见断言的详细讲解：

## 锚定断言

#### **`^` 和 `$`**

- **`^`**：断言匹配必须发生在字符串的开头位置。
- **`$`**：断言匹配必须发生在字符串的结尾位置。

在多行模式下，`^` 和 `$` 分别匹配每一行的开始和结束，而不仅仅是指整个字符串的起始和终止。

## 单词边界断言

#### **`\b` 和 `\B`**

- **`\b`**：断言当前位置是单词边界，即一个单词字符（\w）和非单词字符（非 \w）之间的转换点，或者字符串的开始/结束位置如果是单词字符。
- **`\B`**：断言当前位置不是单词边界，即两个单词字符之间或两个非单词字符之间。

## 断言(环视)

### 0.断言的应用场景

- **验证输入格式**：比如电子邮件地址、电话号码等，确保某些部分前后有正确的分隔符或其他字符。
- **避免错误匹配**：通过使用断言，你可以更加精确地控制匹配行为，减少误报。
- **复杂文本解析**：如HTML、XML等标记语言中提取特定信息，确保只匹配你真正关心的部分。

### 1. 零宽前瞻断言

- **`(?=...)`**：正向零宽前瞻断言，确保当前位置之后紧跟给定的模式，但不消耗字符。

  ```bash
  1995(?=stt) :匹配1995，仅当1995的右侧是stt，
  ```

- **`(?!...)`**：负向零宽前瞻断言，确保当前位置之后没有紧跟给定的模式。 

  ```bash
  1995(?!stt): 匹配1995，仅当1995右侧不是stt
  ```


### 2. 零宽后瞻断言

- **`(?<=...)`**：正向零宽后瞻断言，确保当前位置之前紧邻给定的模式，但不消耗字符。

  ```
  (?<=s)tt： 匹配tt，左侧必须是s
  ```

- **`(?<!...)`**：负向零宽后瞻断言，确保当前位置之前没有紧邻给定的模式。

    ```bash
    (?<!l)tt：匹配tt，左侧不能是l。
    ```

示例：`(?<=\d{3})-\d{2}-\d{4}`:该正则表达式匹配类似于 `123-45-6789` 的格式，但是只有当 `-` 前面确实有三个数字时才会匹配。
