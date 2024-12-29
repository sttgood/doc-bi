---
title: HTML布局
descripton: HTML布局常识
order: 2
article: false
---
页眉

通常横跨于整个页面顶部有一个大标题 和`/`或 一个标志。这是网站的主要一般信息，通常存在于所有网页。

导航栏

指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是标题栏的一部分，而不是独立的组件，但这并非绝对；还有人认为，两者独立可以提供更好的 [无障碍访问特性]，因为屏幕阅读器可以更清晰地分辨二者。

主内容

中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。

侧边栏

一些外围信息、链接、引用、广告等。通常与主内容相关（例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接），还可能存在其他的重复元素，如辅助导航系统。

页脚

横跨页面底部的狭长区域。和标题一样，页脚是放置公共信息（比如版权声明或联系方式）的，一般使用较小字体，且通常为次要内容。还可以通过提供快速访问链接来进行 SEO]。

为了实现语义化标记，HTML 提供了明确这些区段的专用标签，例如：

- `header`：页眉。
- `nav`：导航栏。
- `main`：主内容。主内容中还可以有各种子内容区段，可用[`article`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article)、[`section`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section) 和 [`div`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 等元素表示。
- `aside`：侧边栏，经常嵌套在 [`main`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main) 中。
- `footer`：页脚。

## HTML 布局元素细节

理解所有 HTML 区段元素具体含义是很有益处的，这一点将随着个人 web 开发经验的逐渐丰富日趋显现。更多细节请查阅 [HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。现在，你只需要理解以下主要元素的意义：

- [`main`](httpsmain://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main) 存放每个页面独有的内容。每个页面上只能用一次 `<main>`，且直接位于 [body`中。最好不要把它嵌套进其他元素。
- [`article`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) 包围的内容即一篇文章，与页面其他部分无关（比如一篇博文）。
- [`section`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section) 与 `<article>` 类似，但 `<section>` 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 [标题](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) 作为开头；也可以把一篇 `<article>` 分成若干部分并分别置于不同的 `<section>` 中，也可以把一个区段 `<section>` 分成若干部分并分别置于不同的 `<article>` 中，取决于上下文。
- [`aside`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside) 包含一些间接信息（术语条目、作者简介、相关链接，等等）。
- `header` 是简介形式的内容。如果它是 `body` 的子元素，那么就是网站的全局页眉。如果它是 `article`或`section` 的子元素，那么它是这些部分特有的页眉（此 `<header>` 非彼标题。
- [`nav`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav) 包含页面主导航功能。其中不应包含二级链接等内容。
- [`footer`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer) 包含了页面的页脚部分。

### 无语义元素

有时你会发现，对于一些要组织的项目或要包装的内容，现有的语义元素均不能很好对应。有时候你可能只想将一组元素作为一个单独的实体来修饰来响应单一的用 CSS 或 JavaScript。为了应对这种情况，HTML 提供了 `div` 和 `span` 元素。应配合使用 `class` 属性提供一些标签，使这些元素能易于查询。

[`span`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 是一个内联的（inline）无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。例如：

```html
<p>
  国王喝得酩酊大醉，在凌晨 1 点时才回到自己的房间，踉跄地走过门口。<span
    class="editor-note"
    >[编辑批注：此刻舞台灯光应变暗]</span
  >.
</p>
```

这里，“编辑批注”仅仅是对舞台剧导演提供额外指引；没有具体语义。对于视力正常的用户，CSS 应将批注内容与主内容稍微隔开一些。

`<div>` 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。


```html
<div class="shopping-cart">
  <h2>购物车</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>银耳环</strong></a
        >：$99.95.
      </p>
      <img src="../products/3333-0985/" alt="Silver earrings" />
    </li>
    <li>...</li>
  </ul>
  <p>售价：$237.89</p>
</div>
```

这里不应使用 `<aside>`，因为它和主内容并没有必要的联系（你想在任何地方都能看到它）。甚至不能用 `<section>` ，因为它也不是页面上主内容的一部分。所以在这种情况下就应使用 `<div>`，为满足无障碍使用特征，还应为购物车的标题设置一个可读标签。

**警告：**div 元素非常便利但容易被滥用。由于它们没有语义值，会使 HTML 代码变得混乱。要小心使用，只有在没有更好的语义方案时才选择它，而且要尽可能少用，否则文档的升级和维护工作会非常困难。

### 换行与水平分割线

有时会用到 [`br`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br) 和 [`hr`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr) 两个元素，需要介绍一下。

#### `<br>`：换行元素

`<br>` 可在段落中进行换行；`<br>` 是唯一能够生成多个短行结构（例如邮寄地址或诗歌）的元素。比如：

```html
<p>
  从前有个人叫小高<br />
  他说写 HTML 感觉最好<br />
  但他写的代码结构语义一团糟<br />
  他写的标签谁也懂不了。
</p>
```

没有 `<br>` 元素，这段会直接显示在长长的一行中（如前文所讲，[HTML 会忽略大部分空格](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html中的空白)）；使用 `<br>` 元素，才使得诗看上去像诗：

#### `<hr>`：主题性中断元素

`<hr>` 元素在文档中生成一条水平分割线，表示文本中主题的变化（例如话题或场景的改变）。一般就是一条水平的直线。例如：

```
<p>
  原来这唐僧是个慈悯的圣僧。他见行者哀告，却也回心转意道：“既如此说，且饶你这一次。再休无礼。如若仍前作恶，这咒语颠倒就念二十遍！”行者道：“三十遍也由你，只是我不打人了。”却才伏侍唐僧上马，又将摘来桃子奉上。唐僧在马上也吃了几个，权且充饥。
</p>
<hr />
<p>
  却说那妖精，脱命升空。原来行者那一棒不曾打杀妖精，妖精出神去了。他在那云端里，咬牙切齿，暗恨行者道：“几年只闻得讲他手段，今日果然话不虚传。那唐僧已此不认得我，将要吃饭。若低头闻一闻儿，我就一把捞住，却不是我的人了。不期被他走来，弄破我这勾当，又几乎被他打了一棒。若饶了这个和尚，诚然是劳而无功也。我还下去戏他一戏。”
</p>
```
