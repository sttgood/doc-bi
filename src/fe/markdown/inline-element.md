---
title: 行内元素
icon: fab fa-markdown
order: 4
article: false
---
[[toc]]

## 行内元素

### 链接

Markdown 支持两种形式的链接语法: *行内*和*参考*两种形式。

不管是哪一种，链接的文字都是用 `[方括号]` 来标记。

要建立一个行内形式的链接，只要在方块括号后面马上接着括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如:

```html
This is [an example](http://example.com/ "Title") inline link. [This
link](http://example.net/) has no title attribute.
```

会产生:

```html
<p>
  This is <a href="http://example.com/" title="Title"> an example</a> inline
  link.
</p>

<p><a href="http://example.net/">This link</a> has no title attribute.</p>
```

如果你是要链接到同样主机的资源，你可以使用相对路径:

```md
See my [About](/about/) page for details.
```

参考形式的链接使用另外一个方括号接在链接文字的括号后面，而在第二个方括号里面要填入用以辨识链接的标签:

```md
This is [an example][id] reference-style link.
```

接着，在文件的任意处，你可以把这个标签的链接内容定义出来:

```md
[id]: http://example.com/ "Optional Title Here"
```

链接定义的形式为:

- 方括号，输入链接的标识 ID
- 冒号
- 一个以上的空白或 tab
- 链接的网址
- 选择性地添加 title 内容，可以用单引号、双引号或是括号包括

下面这三种链接的定义相同:

```md
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
```

**请注意:** 有一个已知的问题是 Markdown.pl 1.0.1 会忽略单引号包起来的链接 title。

链接网址也可以用方括号包起来:

```md
[id]: http://example.com/ "Optional Title Here"
```

你也可以把 title 属性放到下一行，也可以加一些缩进，网址太长的话，这样会比较好看:

```md
[id]: http://example.com/longish/path/to/resource/here "Optional Title Here"
```

网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。

链接辨识标签可以有字母、数字、空白和标点符号，但是并**不**区分大小写，因此下面两个链接是一样的:

```md
[link text][a]
[link text][a]
```

*预设的链接标签*功能让你可以省略指定链接标签，这种情形下，链接标签和链接文字会视为相同，要用预设链接标签只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成:

```md
[Google][]
```

然后定义链接内容:

```md
[google]: http://google.com/
```

由于链接文字可能包含空白，所以这种简化的标签内也可以包含多个文字:

```md
Visit [Daring Fireball][] for more information.
```

然后接着定义链接:

```md
[daring fireball]: http://daringfireball.net/
```

链接的定义可以放在文件中的任何一个地方，我比较偏好直接放在链接出现段落的后面，你也可以把它放在文件最后面，就像是注解一样。

下面是一个参考式链接的范例:

```md
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[3]: http://search.msn.com/ "MSN Search"
```

如果改成用链接名称的方式写:

```md
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/ "Google"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"
[msn]: http://search.msn.com/ "MSN Search"
```

上面两种写法都会产生下面的 HTML。

```html
<p>
  I get 10 times more traffic from
  <a href="http://google.com/" title="Google">Google</a> than from
  <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
  or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.
</p>
```

下面是用行内形式写的同样一段内容的 Markdown 文件，提供作为比较之用:

```md
I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
```

参考式的链接其实重点不在于它比较好写，而是它比较好读，比较一下上面的范例，使用参考式的文章本身只有 81 个字元，但是用行内形式的链接却会增加到 176 个字元，如果是用纯 HTML 格式来写，会有 234 个字元，在 HTML 格式中，标签比文字还要多。

使用 Markdown 的参考式链接，可以让文件更像是浏览器最后产生的结果，让你可以把一些标记相关的资讯移到段落文字之外，你就可以增加链接而不让文章的阅读感觉被打断。

### 强调

Markdown 使用星号 (`*`) 和底线 (`_`) 作为标记强调字词的符号，被 `*` 或 `_` 包围的字词会被转成用 `<em>` 标签包围，用两个 `*` 或 `_` 包起来的话，则会被转成 `<strong>`，例如:

```md
**double asterisks** (建议)

**double underscores** (建议)

_single asterisks_

_single underscores_
```

会转成:

```html
<em>single asterisks</em>

<em>single underscores</em>

<strong>double asterisks</strong>

<strong>double underscores</strong>
```

你可以随便用你喜欢的样式，唯一的限制是，你用什么符号开启标签，就要用什么符号结束。

强调也可以直接插在文字中间:

```md
un*frigging*believable
```

但是如果你的 `*` 和 `_` 两边都有空白的话，它们就只会被当成普通的符号。

如果要在文字前后直接插入普通的星号或底线，你可以用反斜线:

```md
\*this text is surrounded by literal asterisks\*
```

### 代码

如果要标记一小段行内代码，你可以用反引号把它包起来 (`` ` ``) ，例如:

```md
Use the `printf()` function.
```

会产生:

```md
<p>Use the <code>printf()</code> function.</p>
```

如果要在代码内插入反引号，你可以用多个反引号来开启和结束行内代码:

```md
``There is a literal backtick (`) here.``
```

这段语法会产生:

```html
<p><code>There is a literal backtick (`) here.</code></p>
```

代码码区段的起始和结束端都可以放入一个空白，起始端后面一个，结束端前面一个，这样你就可以在区段的一开始就插入反引号:

```md
A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
```

会产生:

```html
<p>A single backtick in a code span: <code>`</code></p>

<p>A backtick-delimited string in a code span: <code>`foo`</code></p>
```

在代码码区段内，`&` 和方括号都会被转成 HTML 实体，这样会比较容易插入 HTML 原始码，Markdown 会把下面这段:

```md
Please don't use any `<blink>` tags.
```

转为:

```html
<p>Please don't use any <code>&lt;blink&gt;</code> tags.</p>
```

你也可以这样写:

```md
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.
```

以产生:

```html
<p>
  <code>&amp;#8212;</code> is the decimal-encoded equivalent of
  <code>&amp;mdash;</code>.
</p>
```

### 图片

很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式: *行内* 和 *参考*。

行内图片的语法看起来像是:

```md
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```

详细叙述如下:

- 一个惊叹号 `!`
- 一个方括号，里面放上图片的替代文字
- 一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上
  选择性的 title 文字。

参考式的图片语法则长得像这样:

```md
![Alt text][id]
```

「id」是图片参考的名称，图片参考的定义方式则和链接参考一样:

```md
[id]: url/to/image "Optional title attribute"
```

到目前为止， Markdown 还没有办法指定图片的宽高，如果你需要的话，你可以使用普通的 `<img>` 标签。

### 其他文本样式

- 删除:`~~delete~~`
- 段落: 段落之间空一行
- 换行符: 一行结束时输入两个空格
