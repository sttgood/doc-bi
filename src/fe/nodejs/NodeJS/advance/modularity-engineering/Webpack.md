---
title: Webpack基础配置
article: false
order: 1
---
`Webpack` 是一个现代 JavaScript 应用程序的静态模块打包工具。它可以将多个模块（如 JavaScript、CSS、图片等）打包成一个或多个文件，并支持代码分割、懒加载、热更新等高级功能。以下是 `Webpack` 的详细配置解析。

---

### **1. 基本配置**

#### **安装 Webpack**
```bash
npm install --save-dev webpack webpack-cli
```

#### **配置文件**
在项目根目录下创建 `webpack.config.js` 文件：
```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出目录
  },
  mode: "development", // 开发模式
};
```

#### **运行 Webpack**
```bash
npx webpack
```

---

### **2. 常用配置项**

#### **1. 入口（entry）**
指定打包的入口文件。
```javascript
entry: "./src/index.js",
```

#### **2. 输出（output）**
指定打包后的文件名称和输出目录。
```javascript
output: {
  filename: "bundle.js",
  path: path.resolve(__dirname, "dist"),
},
```

#### **3. 模式（mode）**
指定打包模式，可选值：`development`、`production`、`none`。
```javascript
mode: "development",
```

#### **4. 加载器（loader）**
用于处理非 JavaScript 文件（如 CSS、图片等）。

**示例：处理 CSS 文件**
1. 安装 `css-loader` 和 `style-loader`：
   ```bash
   npm install --save-dev css-loader style-loader
   ```
2. 配置 `webpack.config.js`：
   ```javascript
   module.exports = {
     module: {
       rules: [
         {
           test: /\.css$/,
           use: ["style-loader", "css-loader"],
         },
       ],
     },
   };
   ```

#### **5. 插件（plugin）**
用于执行更复杂的任务（如生成 HTML 文件、压缩代码等）。

**示例：生成 HTML 文件**
1. 安装 `html-webpack-plugin`：
   ```bash
   npm install --save-dev html-webpack-plugin
   ```
2. 配置 `webpack.config.js`：
   ```javascript
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   
   module.exports = {
     plugins: [
       new HtmlWebpackPlugin({
         title: "My App",
         template: "./src/index.html",
       }),
     ],
   };
   ```

#### **6. 开发服务器（devServer）**
用于启动一个本地开发服务器，支持热更新。

**示例：配置开发服务器**
1. 安装 `webpack-dev-server`：
   ```bash
   npm install --save-dev webpack-dev-server
   ```
2. 配置 `webpack.config.js`：
   ```javascript
   module.exports = {
     devServer: {
       contentBase: "./dist",
       hot: true,
     },
   };
   ```
3. 运行开发服务器：
   ```bash
   npx webpack serve
   ```

---

### **3. 高级配置**

#### **1. 代码分割（Code Splitting）**
将代码拆分为多个文件，按需加载。

**示例：动态导入**
```javascript
import(/* webpackChunkName: "lodash" */ "lodash").then(({ default: _ }) => {
  console.log(_.join(["Hello", "webpack"], " "));
});
```

#### **2. 懒加载（Lazy Loading）**
延迟加载某些模块，减少初始加载时间。

**示例：懒加载模块**
```javascript
button.addEventListener("click", () => {
  import("./module").then((module) => {
    module.default();
  });
});
```

#### **3. 环境变量（Environment Variables）**
通过 `DefinePlugin` 定义全局变量。

**示例：定义环境变量**
```javascript
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
```

#### **4. 优化（Optimization）**
用于优化打包结果（如压缩代码、去除未使用代码等）。

**示例：压缩 JavaScript 代码**
```javascript
module.exports = {
  optimization: {
    minimize: true,
  },
};
```

---

### **4. 完整配置示例**

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  optimization: {
    minimize: true,
  },
};
```

---

### **5. 常见问题与解决方案**

#### **1. 打包速度慢**
- 问题：项目较大时，打包速度较慢。
- 解决方案：
  - 使用 `cache-loader` 或 `hard-source-webpack-plugin` 缓存构建结果。
  - 使用 `thread-loader` 多线程构建。

#### **2. 代码体积过大**
- 问题：打包后的文件体积过大。
- 解决方案：
  - 使用 `TerserPlugin` 压缩代码。
  - 使用 `SplitChunksPlugin` 拆分代码。

#### **3. 兼容性问题**
- 问题：打包后的代码在旧版浏览器中无法运行。
- 解决方案：
  - 使用 `Babel` 转译 ES6+ 代码。
  - 使用 `Polyfill` 填补缺失的特性。

---

### **6. 参考资料**

1. **官方文档**：
   - [Webpack Documentation](https://webpack.js.org/)
2. **教程**：
   - [Webpack 入门指南](https://webpack.docschina.org/guides/getting-started/)
3. **插件与加载器**：
   - [Awesome Webpack](https://github.com/webpack-contrib/awesome-webpack)

---

通过掌握 `Webpack` 的配置，您可以高效地构建和优化现代 JavaScript 应用程序，提升开发体验和性能。
