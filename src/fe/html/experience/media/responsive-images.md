---
title: 响应式图片
description: 图片、音频、视屏等在html中的使用
article: false
order: 3
---

## 不同的尺寸

标准的 `img`元素传统上仅仅可以给浏览器指定唯一的资源文件。`srcset`和 `sizes`属性结合根据不同条件选择不同尺寸的图片

```html
<img
  srcset="图1.jpg 480w, 图2.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="图2.jpg"
  alt="这是一个响应式图片" />
```

::: details 代码解析

1. **`srcset` 属性**：提供了两个不同宽度的图片文件给浏览器选择。
   - `"elva-fairy-480w.jpg 480w"` 表示有一个宽度为480像素的图片。
   - `"elva-fairy-800w.jpg 800w"` 表示另一个宽度为800像素的图片。
2. **`sizes` 属性**：定义了一系列媒体条件（media conditions）和相应的宽度值，告诉浏览器在不同的视口宽度下应该为图片分配多少空间。
   - `(max-width: 600px) 480px` 表示如果视口宽度不超过600px，则图片应占用480px的宽度。
   - `800px` 是默认值，表示如果上述条件不满足（即视口宽度大于600px），则图片应占用800px的宽度。
3. **`src` 属性**：提供了一个默认的图片路径，当浏览器不支持 `srcset` 或 `sizes` 属性时，它将回退到加载这个属性指定的图片（`elva-fairy-800w.jpg`）。

:::

**`srcset`** 提供一系列不同分辨率或尺寸的图片给浏览器选择。每个图片后面跟随一个描述符，通常是以 `w` 结尾（表示图片宽度）或者 `x` 结尾（表示像素密度）

> 1. 一个**文件名**
>
> 2. 一个空格
>
> 3. **图片的固有宽度**（以像素为单位）（`480w`）。注意以 `w` 为单位，而非 `px`。图片的固有尺寸是它的真实大小。

**`sizes`** 定定义了一系列媒体条件（media conditions）和相应的宽度值，告诉浏览器在不同的视口宽度下应该为图片分配多少空间。这有助于浏览器决定从 `srcset` 中选择哪个图片来加载

> 1. 一个**媒体条件**（`(max-width:600px)`）“当视口的宽度小于等于 600px 时”。
>
> 2. 一个空格
>
> 3. 当媒体条件为真时，图像将填充的**插槽的宽度**（`480px`）

**备注：** 在 `sizes` 中，可以使用任何长度值。例如，与其提供绝对宽度（如 `480px`），不如提供相对于视口的宽度（如 `50vw`），但不能提供百分比。你也许已经注意到最后一个插槽的宽度是没有媒体条件的（当没有任何一个媒体条件为真时，它默认生效）。在浏览器成功匹配某一个媒体条件之后，剩下所有的条件都会被忽略，所以要注意媒体条件的顺序。



有了这些属性后，浏览器会：

1. 查看屏幕尺寸、像素密度、缩放级别、屏幕方向和网络速度。
2. 找出 `sizes` 列表中第一个为真的媒体条件。
3. 查看该媒体查询对应的插槽大小。
4. 加载 `srcset` 列表中引用的与插槽大小相同的图片，如果没有，则加载第一个大于所选插槽大小的图片。
5. 都不满足默认加载src图片

###  选择最合适的图片

- **图片宽度匹配度**：浏览器会选择宽度最接近但不小于计算出的显示区域宽度的图片。这是因为较小的图片会被拉伸，影响质量；而较大的图片虽然可能会被压缩，但仍然提供了足够的清晰度。
- **设备像素比率 (DPR)**：对于高DPI屏幕（如Retina显示屏），浏览器还会考虑设备的像素密度。例如，对于DPR为2的屏幕，浏览器可能会优先选择宽度两倍于计算宽度的图片，以确保图像清晰度。
- **网络状况和性能优化**：虽然不是标准化行为，但某些浏览器可能会根据用户的网络连接速度等因素进行优化，优先选择较小的图片以节省数据流量。

就是这样！所以在这里，如果支持响应式图片的浏览器以 480px 的视口来加载页面，那么 `(max-width: 600px)` 的媒体条件为真，因此 `480px` 的插槽会被选择，继而将加载 `elva-fairy-480w.jpg`，因为该图片的固有宽度（`480w`）最接近于插槽宽度。800px 的照片大小为 128KB，而 480px 版本仅有 63KB 大小——节省了 65KB。现在想象一下，如果这是一个有很多图片的页面。使用这种技术会节省移动端用户的大量带宽。

**备注：** 在桌面端浏览器测试上面的示例时，如果你把浏览器设到最小宽度，却没有加载更小的图片，请检查一下此时的视口是什么（你可以打开浏览器的 JavaScript 控制台，输入 `document.querySelector('html').clientWidth` 来获得近似视口宽度）。不同的浏览器设置了窗口可以缩小到的最小宽度，它可能比你想的更宽一点。使用移动端浏览器测试时，可以使用类似 Firefox 的 `about:debugging` 页这样的工具，使用桌面端开发者工具检查在移动端加载的页面。

要查看加载了哪些图像，你可以使用 Firefox 开发者工具的网络监视器标签或 Chrome 开发者工具的网络面板。对于 Chrome 浏览器，你可能还需要禁用缓存，以防止它选取已下载的图片。

不支持这些特性的旧版本浏览器，会忽略这些属性，它们直接越过并按常规加载 [`src`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#src) 属性引用的图像文件。

**备注：** 在上面链接的示例的 `head` 中，有一行代码 `<meta name="viewport" content="width=device-width">`：这行代码会强制让手机浏览器采用它们真实可视窗口的宽度来加载网页（有些手机浏览器会提供不真实的可视窗口宽度，用比真实视口更大的宽度加载网页，然后再缩小加载的页面，这样的做法会使得响应式图片或其他响应式设计失效）。

## 相同的尺寸，不同的分辨率

假如有一张图片，在不同屏幕分辨率下，以相同的实际尺寸显示。通过提供高分辨率版本的图片，可以在高分辨显示器上提供更好的用户体验。

为此，你可以使用 `srcset` 结合 x 描述符（一种更简单的语法），而不用 `sizes`，来让浏览器选择合适分辨率的图片。你可以参考这个示

```html
<img
  srcset="图-320w.jpg, 图-480w.jpg 1.5x, 图-640w.jpg 2x"
  src="图-640w.jpg"
  alt="这只一个图" />
```

请注意，即使图片仍然以相同的尺寸显示，但在高分辨率显示器下，可以看到等多细节。

结合CSS 

```
img {
  width: 320px;
}
```

在这种情况下，就不需要 `sizes` 属性——浏览器计算出正在显示的显示器的分辨率，然后显示 `srcset` 引用的最适合的图片。因此，如果访问页面的设备具有标准/低分辨率显示（用单个设备像素表示一个 CSS 像素），那么会加载 `图-320w.jpg`（1x 是默认值）。如果设备有高分辨率（用两个或更多的设备像素表示一个 CSS 像素），则会加载 `图-640w.jpg`。640px 图像的大小为 93KB，而 320px 图像的大小仅仅有 39KB。

### x描述符

`x` 描述符是用于 `<img>` 标签的 `srcset` 属性中的一种指示符，它指定了图片相对于标准分辨率的比例因子（即设备像素比率，DPR）。这个描述符帮助浏览器根据设备的屏幕分辨率选择最合适的图片版本，以确保在高DPI（如Retina显示屏）和标准DPI屏幕上都能提供最佳的视觉质量。

### 详细解释

1. **定义**：

   - `x` 描述符表示图片的分辨率比例，其中 `1x` 表示标准分辨率，`2x` 表示两倍分辨率，以此类推。例如，`2x` 意味着每个CSS像素对应2x2个物理像素，这通常用于高DPI屏幕（如Retina显示屏），以提供更清晰的图像。

2. **使用场景**：

   - 当用户访问网页时，浏览器会根据设备的实际DPR从 `srcset` 中选择最合适分辨率的图片。对于高DPI屏幕，浏览器可能会优先选择带有更高 `x` 值的图片；而对于标准DPI屏幕，则会选择较低 `x` 值的图片。

3. **语法示例**：

   

   ```html
   <img src="default.jpg"
        srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
        alt="Responsive Image" />
   ```

   在上述例子中：

   - `image-1x.jpg` 是为标准分辨率屏幕准备的。
   - `image-2x.jpg` 是为两倍分辨率屏幕（如iPhone Retina显示屏）准备的。
   - `image-3x.jpg` 是为三倍分辨率屏幕（如某些Android设备）准备的。

4. **选择逻辑**：

   - 浏览器会考虑当前设备的DPR以及图片将要占用的空间大小（由 `sizes` 属性定义），然后选择一个最接近且不低于所需分辨率的图片版本。例如，在DPR为2的情况下，如果计算出的图片宽度为600px，浏览器可能会选择宽度为1200px的 `2x` 图片。

5. **优势**：

   - 提升视觉质量：在高DPI屏幕上，`x` 描述符确保了图片不会显得模糊，提供了更加清晰锐利的显示效果。
   - 节省带宽：对于标准DPI屏幕，浏览器不会加载不必要的高分辨率图片，减少了数据传输量，加快了页面加载速度。

案例：

```html
<img src="logo.png"
     srcset="logo-1x.png 1x, logo-2x.png 2x, logo-3x.png 3x"
     alt="Company Logo" />
```

#### 情景1：标准DPI屏幕（DPR=1）

- 浏览器会选择 `logo-1x.png`，因为它是最适合标准分辨率屏幕的图片版本。

#### 情景2：高DPI屏幕（DPR=2）

- 浏览器会选择 `logo-2x.png`，因为它的分辨率适合两倍于标准分辨率的屏幕，能够提供更清晰的显示效果。

#### 情景3：超高DPI屏幕（DPR=3）

- 浏览器会选择 `logo-3x.png`，以确保在超高分辨率屏幕上也能保持最佳的图像质量。

### 总结

`x` 描述符是实现响应式图片加载的重要工具之一，特别是在处理不同设备的屏幕分辨率时。通过提供多个分辨率版本的图片，并使用 `x` 描述符来标记它们，开发者可以确保图片在各种设备上都能以最优的质量和性能展示。

## 美术设计

 `picture` `video` 和 `audio` 一样，`<picture>` 元素是包含多个 `source` 元素的容器，它提供了多个不同的资源供浏览器选择，然后还有至关重要的 `img`)元素。

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

> - `<source>` 包含 `media` 属性，这一属性包含一个媒体条件。如果视口的宽度为<= 799px 或更少，第一个 `<source>` 元素的图片就会显示。如果视窗的宽度是 >=800px ，就显示第二张图片。
>
> - `srcset` 包含图片路径。
>
>   注: 如`<img>` ，`<source>` 可以使用单个 `srcset` 属性引用多个图像。 `sizes` 属性可以通过一个 `<picture>` 元素提供多个图片，也可以给每个图片提供多分辨率的图片。
>
> - 在任何情况下，你都必须紧贴着 `</picture>` 前面提供一个 `<img>` 元素以及它的 `src` 和 `alt` 属性，否则不会有图片显示。当媒体条件都不为真的时候（你可以在这个例子中移除第二个 `<source>` 元素），它会显示默认图片；如果浏览器不支持 `<picture>` 元素，它可以作为后备方案。