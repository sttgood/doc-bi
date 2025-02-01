---
title: npm stop
article: false
dir:
  collapsible: true
  link: true
---

:::tabs

@tab 官方-DOC

## 概要

```bash
npm stop [-- <args>]
```

## 描述

这将运行在包的 "脚本" 对象的 "stop" 属性中指定的预定义命令。

与 [npm start] 不同，如果未定义 `"stop"` 属性，则不会运行默认脚本。

## 示例

```json
{
  "scripts": {
    "stop": "node bar.js"
  }
}
```

```bash
npm stop
> npm@x.x.x stop> node bar.js

```

## 配置

### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



### `script-shell`

- 默认值：'/bin/sh' 在 POSIX 系统上，'cmd.exe' 在 Windows 上
- 类型：空值或字符串

用于脚本的 shell 与 `npm exec`、`npm run` 和 `npm init <package-spec>` 命令一起运行。

@tab AI-DOC

`npm stop` 是 npm 提供的一个命令，用于停止正在运行的 npm 脚本或服务。这个命令主要用于执行 `package.json` 文件中定义的 `stop` 脚本，通常是为了优雅地关闭应用程序或服务。`npm stop` 在开发、测试和生产环境中都非常有用，因为它提供了一种标准化的方式来处理应用的停止过程。

### 功能概述

`npm stop` 的主要功能是：

- **执行 `stop` 脚本**：根据 `package.json` 中定义的 `scripts` 字段中的 `stop` 命令来执行相应的脚本。
- **优雅地关闭应用**：确保应用程序在停止之前完成所有必要的清理工作，如关闭数据库连接、保存状态等。
- **简化生命周期管理**：作为 npm 生命周期的一部分，`npm stop` 有助于实现一致的应用程序生命周期管理。

### 使用方法

#### 执行 `stop` 脚本

要在当前项目中执行 `stop` 脚本，可以在项目根目录下运行以下命令：

```bash
npm stop
```

这将查找 `package.json` 文件中的 `scripts` 字段，并执行与 `stop` 关键字关联的命令。

#### 定义 `stop` 脚本

你可以在 `package.json` 文件中定义一个 `stop` 脚本，以指定当 `npm stop` 被调用时应该执行的操作。例如：

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "stop": "pkill -f server.js && echo 'Server stopped.'"
  }
}
```

在这个例子中，`npm start` 会启动应用程序，而 `npm stop` 会使用 `pkill` 命令终止运行中的 `server.js` 进程，并输出一条确认消息。

### 结合其他选项使用

虽然 `npm stop` 本身相对简单，但它可以与其他 npm 命令和工具结合使用，以提高工作效率：

- **`npm start`**：用于启动应用程序，通常与 `npm stop` 配对使用。
  
  ```bash
  npm start
  ```

- **`npm restart`**：先执行 `npm stop`，然后执行 `npm start`，用于重启应用程序。
  
  ```bash
  npm restart
  ```

- **`npm run <script>`**：如果你有多个自定义脚本，可以使用 `npm run` 来执行特定的脚本。
  
  ```bash
  npm run custom-script
  ```

### 注意事项

- **网络连接**：虽然 `npm stop` 主要是在本地环境中执行命令，但如果你的应用依赖于远程资源（如数据库），请确保这些资源的连接能够正确关闭。
- **权限问题**：确保你有足够的权限来执行 `stop` 脚本中定义的命令，特别是在涉及系统进程管理时。
- **错误处理**：考虑在 `stop` 脚本中加入适当的错误处理逻辑，以应对可能的异常情况。
- **环境变量**：如果 `stop` 脚本需要访问环境变量，请确保这些变量已经正确设置。

### 实际应用场景

1. **开发环境**：在开发过程中，频繁启动和停止应用程序是很常见的操作。`npm stop` 提供了一种标准化的方式来处理这些操作，确保每次都能正确地关闭应用程序。
2. **测试环境**：在自动化测试流程中，`npm stop` 可以确保每次测试结束后，应用程序都被正确停止，避免资源泄露或冲突。
3. **生产环境**：在部署新版本或进行维护时，使用 `npm stop` 可以确保应用程序在停止前完成所有必要的清理工作，从而实现平滑过渡。
4. **持续集成/持续部署 (CI/CD)**：在 CI/CD 流程中，`npm stop` 和 `npm start` 经常一起使用，以确保每次构建都能正确启动和停止应用程序。

### 示例

假设你有一个简单的 Node.js 应用程序，并且希望使用 `npm stop` 来优雅地关闭它：

1. **定义 `start` 和 `stop` 脚本**：
   在 `package.json` 中添加如下脚本：

   ```json
   {
     "name": "my-app",
     "version": "1.0.0",
     "scripts": {
       "start": "node server.js",
       "stop": "pkill -f server.js && echo 'Server stopped.'"
     }
   }
   ```

2. **启动应用程序**：
   ```bash
   npm start
   ```

3. **停止应用程序**：
   ```bash
   npm stop
   ```

4. **重启应用程序**：
   ```bash
   npm restart
   ```

5. **查看所有脚本**：
   ```bash
   npm run
   ```

### 总结

`npm stop` 是一个非常有用的命令，它帮助你在开发、测试和生产环境中优雅地关闭应用程序或服务。通过合理利用这个命令，你可以显著提升应用程序的稳定性和一致性，确保每次都能正确地完成清理工作。无论是进行日常开发还是 CI/CD 流程，掌握 `npm stop` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm stop` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化应用程序生命周期管理也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on npm-stop](https://docs.npmjs.com/cli/v8/commands/npm-stop)
- [Understanding npm Lifecycle Scripts](https://blog.logrocket.com/understanding-npm-lifecycle-scripts/)
- [Managing Application Lifecycle with npm Scripts](https://www.freecodecamp.org/news/managing-application-lifecycle-with-npm-scripts/)

:::
