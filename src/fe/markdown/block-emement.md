---
title: 块元素
order: 3
icon: fab fa-markdown
article: false
---
[[toc]]

## 块元素

### 段落和换行

一个段落是由一个以上相连接的行句组成，而一个以上的空行则会切分出不同的段落 (空行的定义是显示上看起来像是空行，便会被视为空行。比方说，若某一行只包含空白和 tab，则该行也会被视为空行) ，一般的段落不需要用空白或断行缩进。

「一个以上相连接的行句组成」这句话其实暗示了 Markdown 允许段落内的强迫断行，这个特性和其他大部分的 text-to-HTML 格式不一样 (包括 MovableType 的「Convert Line Breaks」选项) ，其它的格式会把每个断行都转成 `<br />` 标签。

<!-- markdownlint-disable MD038 -->

如果你*真的*想要插入 `<br />` 标签的话，在行尾加上两个以上的空格 () 或斜线 (`/`)，然后按 Enter。

<!-- markdownlint-enable MD038 -->

是的，这确实需要花比较多功夫来插入 `<br />` ，但是「每个换行都转换为 `<br />`」的方法在 Markdown 中并不适合， Markdown 中 email 式的 [块引言][bq] 和多段落的 [列表][l] 在使用换行来排版的时候，不但更好用，还更好阅读。

### 标题

标题能显示出文章的结构。

Markdown 支持两种标题的语法，[Setext][1] 和 [atx][2] 形式。

Setext 形式是用底线的形式，利用 `=` (最高阶标题) 和 `-` (第二阶标题) ，例如:

```md
# This is an H1

## This is an H2
```

任何数量的 `=` 和 `-` 都可以有效果。

Atx (推荐)形式则是在行首插入 1 到 6 个 `#` ，对应到标题 1 到 6 阶，例如:

- H1: `# Header 1`
- H2: `## Header 2`
- H3: `### Header 3`
- H4: `#### Header 4`
- H5: `##### Header 5`
- H6: `###### Header 6`

### Blockquotes

Markdown 使用 email 形式的块引言，如果你很熟悉如何在 email 信件中引言，你就知道怎么在 Markdown 文件中建立一个块引言，那会看起来像是你强迫断行，然后在每行的最前面加上 `>` :

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Markdown 也允许你只在整个段落的第一行最前面加上 `>` :

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

块引言可以有阶层 (例如: 引言内的引言) ，只要根据层数加上不同数量的 `>` :

```md
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

引言的块内也可以使用其他的 Markdown 语法，包括标题、列表、代码块等:

```md
> ## This is a header
>
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here's some example code:
>
> plain return shell_exec("echo $input | $markdown_script");
```

任何标准的文字编辑器都能简单地建立 email 样式的引言，例如 BBEdit ，你可以选取文字后然后从选单中选择*增加引言阶层*。

### 列表

Markdown 支持有序列表和无序列表。

无序列表使用减号作为列表标记(也可使用星号、加号):

```md
- Red
- Green
- Blue
```

也可以(不建议):

```md
- Red
- Green
- Blue

* Red
* Green
* Blue
```

有序列表则使用数字接着一个英文句点:

```md
1.  Bird
2.  McHale
3.  Parish
```

很重要的一点是，你在列表标记上使用的数字并不会影响输出的 HTML 结果，上面的列表所产生的 HTML 标记为:

```html
<ol>
  <li>Bird</li>
  <li>McHale</li>
  <li>Parish</li>
</ol>
```

如果你的列表标记写成:

```md
1. Bird
1. McHale
1. Parish
```

你都会得到完全相同的 HTML 输出。重点在于，你可以让 Markdown 文件的列表数字和输出的结果相同，或是你懒一点都写作 `1` 你可以完全不用在意数字的正确性。

列表项目标记通常是放在最左边，但是其实也可以缩进，最多三个空白，项目标记后面则一定要接着至少一个空白或 tab。

要让列表看起来更漂亮，你可以把内容用固定的缩进整理好:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

但是如果你很懒，那也不一定需要:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

如果列表项目间用空行分开， Markdown 会把项目的内容在输出时用 `<p>` 标签包起来，举例来说:

```md
- Bird
- Magic
```

会被转换为:

```html
<ul>
  <li>Bird</li>
  <li>Magic</li>
</ul>
```

但是这个:

```md
- Bird

- Magic
```

会被转换为:

```html
<ul>
  <li><p>Bird</p></li>
  <li><p>Magic</p></li>
</ul>
```

列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空白或是一个 tab :

```md
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

如果你每行都有缩进，看起来会看好很多，当然，再次地，如果你很懒惰，Markdown 也允许:

```md
- This is a list item with two paragraphs.

  This is the second paragraph in the list item. You're
  only required to indent the first line. Lorem ipsum dolor
  sit amet, consectetuer adipiscing elit.

- Another item in the same list.
```

如果要在列表项目内放进引言，那 `>` 就需要缩进:

```md
- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.
```

当然，项目列表很可能会不小心产生，像是下面这样的写法:

```md
1986. What a great season.
```

换句话说，也就是在行首出现*数字-句点-空白*，要避免这样的状况，你可以在句点前面加上反斜线。

```md
1986\. What a great season.
```

### 代码块

和代码相关的写作或是标签语言原始码通常会有已经排版好的代码块，通常这些块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 `<pre>` 和 `<code>` 标签来把代码块包起来。

要在 Markdown 中建立代码块很简单，只要简单地缩进 4 个空白或是 1 个 tab 就可以，例如，下面的输入:

```md
This is a normal paragraph:

This is a code block.
```

Markdown 会转换成:

```html
<p>This is a normal paragraph:</p>

<pre>
  <code>This is a code block.</code>
</pre>
```

这里的缩进 (4 个空白或是 1 个 tab) ，都会被移除，例如:

```md
Here is an example of AppleScript:

tell application "Foo"
beep
end tell
```

会被转换为:

```html
<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
  beep
end tell
</code></pre>
```

一个代码块会一直持续到没有缩进的那一行 (或是文件结尾) 。

在代码块里面， `&` 、 `<` 和 `>` 会自动转成 HTML 实体，这样的方式让你非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制粘贴，再加上缩进就可以了，剩下的 Markdown 都会帮你处理，例如:

````md
```plain
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
```
````

会被转换为:

```html
<pre>
  <code>&lt;div class="footer"&gt;
  &amp;copy; 2004 Foo Corporation
&lt;/div&gt;</code>
</pre>
```

代码块中，一般的 Markdown 语法不会被转换，像是星号便只是星号，这表示你可以很容易地以 Markdown 语法撰写 Markdown 语法相关的文件。

如果你想要在代码块里输入用 Markdown 表示的代码库，你可以进行嵌套。

`````md
````md
```js
const a = 1;
```
````
`````

会渲染为

````md
```js
const a = 1;
```
````

### 分隔线

你可以在一行中用三个或以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号中间插入空白。下面每种写法都可以建立分隔线:

```html
---(建议) * * * *** ***** - - - ---------------------------------------
```
