---
title: 用法
article: false
order: 3
---

## CDN

cdn地址

安装和托管Mermaid

## **使用 npm 包**

要求：Node >= 16

:::tabs

@tab NPM

```
npm install mermaid
```

@tab Yarn

```
yarn add mermaid
```

@tab PNPM

```
pnpm add mermaid
```

:::

## **在网页上托管Mermaid**

在网页上集成 Mermaid 的最简单方法需要两个元素：

- 图形定义，位于标记为 `class=mermaid` 的 `<pre>` 标签内。

```html
<pre class="mermaid">
    graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
</pre>
```

- Mermaid js 脚本。添加使用 `script` 标签作为 ESM 导入。

```html
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
</script>
```

> 按照这些指示，mermaid 在页面加载时启动，（当页面加载时）它将使用 `class="mermaid"` 找到 `pre` 标签内的图形定义，并按照给定的定义以 SVG 形式返回图表。

```html
<!--案例-->
<!doctype html>
<html lang="en">
  <body>
    <pre class="mermaid">
  graph LR
      A --- B
      B-->C[fa:fa-ban forbidden]
      B-->D(fa:fa-spinner);
    </pre>
    <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    </script>
  </body>
</html>
```

:::warning

id 属性也被添加到没有 id 的 Mermaid 标签中。

Mermaid 可以在同一页面中加载多个图表。

> 尝试一下，将此代码保存为 HTML 并使用任何浏览器加载它。（除 Internet Explorer 外，请勿使用 Internet Explorer。）

:::

## 事件

> 启用节点中的点击事件和标签,必须首先清除 `securityLevel` 配置。`securityLevel` 设置解析图表的信任级别并限制单击功能。这是在 8.2 版本中作为安全改进引入的，旨在防止恶意使用。

## securityLevel

| 参数          | 描述               | 类型   | 是否必需 | 值                                         |
| :------------ | :----------------- | :----- | :------- | :----------------------------------------- |
| securityLevel | 解析图表的信任级别 | 字符串 | 可选     | 'sandbox'、'strict'、'loose'、'antiscript' |

- strict：

  （默认）文本中的 HTML 标记已编码，并且单击功能被禁用。

- antiscript：

  允许文本中的 HTML 标签（仅删除脚本元素）并启用单击功能。

- loose：

  允许文本中包含 HTML 标签，并启用单击功能。

- sandbox:

  在此安全级别下，所有渲染都在沙盒 iframe 中进行。这可以防止任何 JavaScript 在上下文中运行。这可能会阻碍图表的交互功能，例如脚本、时序图中的弹出窗口、到其他选项卡或目标的链接等。

::: info

这会更改 mermaid 的默认行为，以便在升级到 8.2 后，除非 `securityLevel` 没有更改，否则流程图中的标签将被编码为标签，并且单击将被禁用。**sandbox** 安全级别仍为测试版。

:::

> 如果你负责图表源安全，你可以将 `securityLevel` 设置为你选择的值。这允许点击和标签。要更改 `securityLevel`，你必须调用 `mermaid.initialize`：

```javascript
mermaid.initialize({
  securityLevel: 'loose',
});
```

### 标签超出范围

如果你使用通过 CSS 加载的动态加载字体，例如字体，mermaid 应该等待整个页面加载（dom + asset，特别是字体文件）。

```js
$(document).ready(function () {
  mermaid.initialize();
});
```

不这样做很可能会导致 Mermaid 渲染图的标签超出范围。mermaid 中的默认集成使用 window.load 事件来开始渲染。

如果你的页面正文中有其他字体，则可能会使用这些字体来代替 Mermaid 字体。在样式中指定字体是解决此问题的方法。

css

```
pre.mermaid {
  font-family: 'trebuchet ms', verdana, arial;
}
```

### 使用 `mermaid.run`

mermaid.run 是在 v10 中添加的，是处理更复杂集成的首选方式。默认情况下，当文档准备好时，将调用 `mermaid.run`，用 `class="mermaid"` 渲染所有元素。

你可以通过调用 `await mermaid.run(<config>)` 来自定义该行为。

`mermaid.initialize({startOnLoad: false})` 将阻止 `mermaid.run` 在加载后被自动调用。

使用 querySelector ".someOtherClass" 渲染所有元素

```js
mermaid.initialize({ startOnLoad: false });
await mermaid.run({
  querySelector: '.someOtherClass',
});
```

渲染作为数组传递的所有元素

```js
mermaid.initialize({ startOnLoad: false });
await mermaid.run({
  nodes: [document.getElementById('someId'), document.getElementById('anotherId')],
});
await mermaid.run({
  nodes: document.querySelectorAll('.yetAnotherClass'),
});
```

渲染所有 `.mermaid` 元素，同时抑制任何错误

```js
mermaid.initialize({ startOnLoad: false });
await mermaid.run({
  suppressErrors: true,
});
```

### 调用 `mermaid.init` - 已弃用

:::warning

mermaid.init 在 v10 中已弃用，并将在未来版本中删除。请改用 mermaid.run。

:::

默认情况下，当文档准备好时，会调用 `mermaid.init`，查找所有带有 `class="mermaid"` 的元素。如果你在加载 mermaid 后添加内容，或者需要对此行为进行更细粒度的控制，你可以使用以下命令自行调用 `init`：

- 配置对象
- 一些节点，如
  - 一个节点
  - 类似数组的节点
  - 或 W3C 选择器将找到你的节点

示例：

javascript

```
mermaid.init({ noteMargin: 10 }, '.someOtherClass');
```

或者没有配置对象，并且有 jQuery 选择：

javascript

```
mermaid.init(undefined, $('#someId .yetAnotherClass'));
```

## 与webpack一起使用

## API 使用

该 API 的主要思想是能够使用图形定义作为字符串来调用渲染函数。渲染函数将渲染图形并使用生成的 SVG 代码调用回调。通过这种方法，站点创建者可以从站点（可能从文本区域）获取图形定义，进行渲染并将图形放置在站点中的某个位置。

下面的示例显示了如何使用它的示例。该示例只是将生成的 SVG 记录到 JavaScript 控制台。

```html
<script type="module">
  import mermaid from './mermaid.esm.mjs';
  mermaid.initialize({ startOnLoad: false });

  // Example of using the render function
  const drawDiagram = async function () {
    element = document.querySelector('#graphDiv');
    const graphDefinition = 'graph TB\na-->b';
    const { svg } = await mermaid.render('graphDiv', graphDefinition);
    element.innerHTML = svg;
  };

  await drawDiagram();
</script>
```

要确定给定文本中存在的图表类型，你可以使用 `mermaid.detectType` 函数，如下例所示。

```html
<script type="module">
  import mermaid from './mermaid.esm.mjs';
  const graphDefinition = `sequenceDiagram
    Pumbaa->>Timon:I ate like a pig.
    Timon->>Pumbaa:Pumbaa, you ARE a pig.`;
  try {
    const type = mermaid.detectType(graphDefinition);
    console.log(type); // 'sequence'
  } catch (error) {
    // UnknownDiagramError
  }
</script>
```

### 绑定事件

有时，生成的图表还具有定义的交互，例如工具提示和单击事件。使用 API 时，必须在将图形插入 DOM 后添加这些事件。

下面的示例代码是 mermaid 使用 API 时所做操作的摘录。该示例展示了在使用 API 进行渲染时如何将事件绑定到 SVG。

```js
// Example of using the bindFunctions
const drawDiagram = async function () {
  element = document.querySelector('#graphDiv');
  const graphDefinition = 'graph TB\na-->b';
  const { svg, bindFunctions } = await mermaid.render('graphDiv', graphDefinition);
  element.innerHTML = svg;
  // This can also be written as `bindFunctions?.(element);` using the `?` shorthand.
  if (bindFunctions) {
    bindFunctions(element);
  }
};
```

1. 该图是使用渲染调用生成的。
2. 生成后，渲染函数调用提供的回调函数，在本例中称为 insertSvg。
3. 使用两个参数调用回调函数：生成的图形的 SVG 代码和一个函数。该函数在将 SVG 插入 DOM 后将事件绑定到 SVG。
4. 将 SVG 代码插入 DOM 中进行演示。
5. 调用绑定事件的绑定函数。

## 标记渲染器的示例

这是用于将文档从 Markdown 转换为 html 的渲染器，其中 html 中有 Mermaid 图。

```javascript
const renderer = new marked.Renderer();
renderer.code = function (code, language) {
  if (code.match(/^sequenceDiagram/) || code.match(/^graph/)) {
    return '<pre class="mermaid">' + code + '</pre>';
  } else {
    return '<pre><code>' + code + '</code></pre>';
  }
};
```

CoffeeScript 中的另一个示例也在生成的标记中包含 Mermaid 脚本标签。

```coffeescript
marked = require 'marked'

module.exports = (options) ->
  hasMermaid = false
  renderer = new marked.Renderer()
  renderer.defaultCode = renderer.code
  renderer.code = (code, language) ->
    if language is 'mermaid'
      html = ''
      if not hasMermaid
        hasMermaid = true
        html += '<script src="'+options.mermaidPath+'"></script>'
      html + '<pre class="mermaid">'+code+'</pre>'
    else
      @defaultCode(code, language)

  renderer
```

## 高级用法

### 无需渲染即可进行语法验证

`mermaid.parse(text, parseOptions)` 函数验证图形定义而不渲染图形。

函数 `mermaid.parse(text, parseOptions)` 采用文本字符串作为参数，如果定义遵循 mermaid 的语法，则返回 `{ diagramType: string }`。

如果定义无效，则当 `parseOptions.suppressErrors` 设置为 `true` 时，该函数返回 `false`。否则，它会抛出错误。

当 parse 函数抛出错误时，将调用 parseError 函数。如果 `parseOptions.suppressErrors` 设置为 `true`，则不会被调用。

可以重写此函数以便以应用特定的方式处理错误。

下面元代码中的代码示例说明了这是如何工作的：

```javascript
mermaid.parseError = function (err, hash) {
  displayErrorInGui(err);
};

const textFieldUpdated = async function () {
  const textStr = getTextFromFormField('code');

  if (await mermaid.parse(textStr)) {
    reRender(textStr);
  }
};

bindEventHandler('change', 'code', textFieldUpdated);
```

## 配置

你可以将所需的配置传递给 `mermaid.initialize` 调用。这是配置 mermaid 的首选方式。

```html
<script type="module">
  import mermaid from './mermaid.esm.mjs';
  let config = { startOnLoad: true, flowchart: { useMaxWidth: false, htmlLabels: true } };
  mermaid.initialize(config);
</script>
```

:::info

这是配置 mermaid 的首选方式。

:::

### 以下方法已被弃用，保留仅是为了向后兼容。

## 使用 Mermaid 对象

可以通过 Mermaid 对象设置一些配置。使用此方法支持的两个参数是：

- mermaid.startOnLoad
- mermaid.htmlLabels

javascript

```
mermaid.startOnLoad = true;
```

::: warning

这种设置配置的方式已被弃用。相反，首选方法是使用初始化方法。此功能仅用于向后兼容。

:::
