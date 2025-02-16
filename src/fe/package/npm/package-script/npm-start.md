---
title: npm start
article: false
order: 1
---

## 官网-DOC

## 概要

```bash
npm start [-- <args>]
```

## 描述

- 如果 `"scripts"` 对象没有定义 `"start"` 属性，npm 将运行 `node server.js`。请注意，这与使用 `node .` 调用时运行包的 `"main"` 属性中指定的文件的默认 node 行为不同。从 `npm@2.0.0` 开始，你可以在执行脚本时使用自定义参数。有关详细信息，请参阅 [`npm run-script`](https://npm.nodejs.cn/cli/v11/commands/npm-run-script)。

## 例

```json
{
  "scripts": {
    "start": "node foo.js"
  }
}
```



```bash
npm start
> npm@x.x.x start> node foo.js
(foo.js output would be here)
```



## 配置

### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



### [`script-shell`](https://npm.nodejs.cn/cli/v11/commands/npm-start#script-shell)

- 默认值：'/bin/sh' 在 POSIX 系统上，'cmd.exe' 在 Windows 上
- 类型：空值或字符串

用于脚本的 shell 与 `npm exec`、`npm run` 和 `npm init <package-spec>` 命令一起运行。

## AI-DOC

`npm start` 是 npm（Node Package Manager）提供的一个命令，用于启动应用程序。它通常用于运行 `package.json` 文件中定义的 `start` 脚本。这个命令是开发者日常工作中最常用的命令之一，尤其是在开发和测试期间。以下是关于 `npm start` 的详细解释：

### 基本用法

#### 启动应用程序

```
npm start
```

默认情况下，`npm start` 会查找 `package.json` 文件中的 `scripts` 字段，并执行名为 `start` 的脚本。如果没有定义 `start` 脚本，npm 会尝试执行 `node server.js`。

### `package.json` 中的 `start` 脚本

在 `package.json` 文件中，`scripts` 字段可以包含多个自定义脚本，其中 `start` 脚本是最常用的一个。例如：

```
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node ./bin/www"
  }
}
```

在这个例子中，`npm start` 将会执行 `node ./bin/www` 命令来启动应用程序。

### 自定义启动命令

你可以根据项目的需要自定义 `start` 脚本。以下是一些常见的用例：

- **使用特定的 Node.js 版本**：

  ```
  "start": "npx node@14 ./bin/www"
  ```

- **添加环境变量**：

  ```
  "start": "NODE_ENV=production node ./bin/www"
  ```

- **使用其他运行时或工具**：

  ```
  "start": "babel-node src/index.js"
  ```

- **组合多个命令**：

  ```
  "start": "npm run build && node dist/server.js"
  ```

- **使用调试工具**：

  ```
  "start": "node --inspect ./bin/www"
  ```

### 生命周期事件

`npm start` 可以与生命周期事件结合使用，以便在启动前或启动后执行额外的任务。常见的生命周期事件包括：

- **`prestart`**: 在 `npm start` 执行之前运行。
- **`poststart`**: 在 `npm start` 执行之后运行。

例如，你可以在启动之前构建项目：

```
{
  "scripts": {
    "prestart": "npm run build",
    "start": "node ./bin/www"
  }
}
```

### 示例

假设你在管理一个基于 Express 的 Node.js 应用程序：

1. **基本启动**：

   ```
   npm start
   ```

2. **自定义启动命令**：

   ```
   {
     "scripts": {
       "start": "nodemon ./bin/www"
     }
   }
   ```

   使用 `nodemon` 来自动重启服务器，当文件发生变化时。

3. **添加环境变量**：

   ```
   {
     "scripts": {
       "start": "NODE_ENV=development node ./bin/www"
     }
   }
   ```

4. **组合多个命令**：

   ```
   {
     "scripts": {
       "build": "webpack --config webpack.config.js",
       "start": "npm run build && node dist/server.js"
     }
   }
   ```

5. **使用调试工具**：

   ```
   {
     "scripts": {
       "start": "node --inspect ./bin/www"
     }
   }
   ```

6. **生命周期事件**：

   ```
   {
     "scripts": {
       "prestart": "npm run lint",
       "start": "node ./bin/www"
     }
   }
   ```

### 注意事项

- **确保 `start` 脚本存在**：如果你没有在 `package.json` 中定义 `start` 脚本，`npm start` 会尝试执行 `node server.js`。如果这也不是你要启动的应用程序入口点，则需要显式地定义 `start` 脚本。
- **环境配置**：对于生产环境和开发环境，建议使用不同的配置。可以通过环境变量或 `.env` 文件来区分不同环境下的配置。
- **错误处理**：确保你的 `start` 脚本能够正确处理可能发生的错误，避免应用崩溃或行为异常。
- **依赖安装**：在运行 `npm start` 之前，请确保所有依赖项都已正确安装（通过 `npm install`）。否则，可能会遇到缺少模块的问题。

### 总结

`npm start` 是一个非常方便的命令，它简化了应用程序的启动过程，并允许开发者灵活地定制启动行为。通过理解如何在 `package.json` 中定义 `start` 脚本以及如何结合生命周期事件，你可以更高效地管理和优化你的开发流程。无论是简单的脚本还是复杂的多步骤启动过程，掌握 `npm start` 都能显著提升你的工作效率。
