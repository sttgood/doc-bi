---
title: npm stars
article: false
dir:
  collapsible: false
  link: true
---

:::tabs

@tab 官方-DOC

## 概要

```bash
npm stars [<user>]
```

注意：此命令对工作区无感知。

## 描述

如果你已为许多喜欢的的事物加注星标并想快速再次找到它们，则此命令可让你做到这一点。

你可能还想查看你朋友最喜欢的包，在这种情况下，你肯定会喜欢这个命令。

## 配置

### [`registry`](https://npm.nodejs.cn/cli/v11/commands/npm-stars#registry)

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。

@tab AI-DOC

`npm stars` 是 npm 提供的一个命令，允许用户管理他们在 npm 上标记为“星标”（star）的包。星标功能类似于 GitHub 的星标，它让用户可以快速找到他们感兴趣的、常用的或重要的包，方便以后参考和使用。通过 `npm stars` 命令，你可以列出你已星标的包、给包加星标或取消星标。

### 功能概述

`npm stars` 主要用于以下几种操作：

1. **列出已星标的包**：查看你已经标记为星标的 npm 包。
2. **给包加星标**：将一个 npm 包添加到你的星标列表中。
3. **取消包的星标**：从你的星标列表中移除某个 npm 包。
4. **查看其他用户的星标**：浏览其他 npm 用户星标的包。

### 使用方法

#### 列出已星标的包

要查看你已经标记为星标的 npm 包，可以在命令行中运行：

```bash
npm stars
```

这将列出所有你标记为星标的包及其版本信息。

#### 给包加星标

如果你想给某个 npm 包加星标，可以使用以下命令：

```bash
npm star <package-name>
```

例如，如果你想给 `lodash` 加星标，可以运行：

```bash
npm star lodash
```

#### 取消包的星标

如果你想取消某个 npm 包的星标，可以使用以下命令：

```bash
npm unstar <package-name>
```

例如，如果你想取消 `lodash` 的星标，可以运行：

```bash
npm unstar lodash
```

#### 查看其他用户的星标

如果你想查看其他 npm 用户星标的包，可以在命令后面加上用户名：

```bash
npm stars <username>
```

例如，要查看用户 `johndoe` 星标的包，可以运行：

```bash
npm stars johndoe
```

### 结合其他选项使用

你可以结合其他选项来进一步自定义 `npm stars` 的行为：

- **`--json`**：以 JSON 格式输出结果，适用于自动化脚本或进一步处理。

  ```bash
  npm stars --json
  ```

- **`--parseable`**：以更易于解析的格式输出结果，适用于脚本或其他程序处理。

  ```bash
  npm stars --parseable
  ```

- **`--long`**：显示更多详细信息，如每个包的描述。

  ```bash
  npm stars --long
  ```

### 注意事项

- **需要登录**：要使用 `npm stars` 命令，你需要先登录到 npm。可以通过 `npm login` 命令进行登录。
  
  ```bash
  npm login
  ```

- **网络连接**：`npm stars` 需要访问互联网来获取和更新星标信息，请确保有稳定的网络连接。
- **权限问题**：确保你有足够的权限来访问和管理自己的星标列表。

### 实际应用场景

1. **收藏常用包**：将你经常使用的 npm 包标记为星标，方便以后查找和引用。
2. **跟踪热门项目**：给一些热门或有趣的 npm 包加星标，随时关注它们的发展和更新。
3. **分享资源**：通过星标功能，你可以轻松地与其他开发者分享你发现的好工具和库。
4. **学习和研究**：星标一些高质量的开源项目，作为学习和研究的对象。

### 示例

假设你想管理和查看你自己的星标包，以及查看其他用户的星标包：

1. **列出你已星标的包**：
   ```bash
   npm stars
   ```

2. **给 `express` 加星标**：
   ```bash
   npm star express
   ```

3. **取消 `lodash` 的星标**：
   ```bash
   npm unstar lodash
   ```

4. **查看用户 `johndoe` 星标的包**：
   ```bash
   npm stars johndoe
   ```

5. **以 JSON 格式列出你已星标的包**：
   ```bash
   npm stars --json
   ```

6. **以更易于解析的格式列出你已星标的包**：
   ```bash
   npm stars --parseable
   ```

7. **显示更多详细信息**：
   ```bash
   npm stars --long
   ```

### 总结

`npm stars` 是一个简单但非常有用的命令，它帮助你管理和跟踪你在 npm 上感兴趣或常用的包。通过合理利用这个命令，你可以显著提升工作效率，确保能够顺利找到和使用所需的资源。无论是收藏常用包、跟踪热门项目还是分享资源，掌握 `npm stars` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm stars` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化包管理和开发工作流程也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on npm-stars](https://docs.npmjs.com/cli/v8/commands/npm-stars)
- [Managing Your Favorite Packages with npm Stars](https://blog.logrocket.com/managing-your-favorite-packages-with-npm-stars/)
- [Using npm Stars to Keep Track of Useful Packages](https://www.freecodecamp.org/news/using-npm-stars-to-keep-track-of-useful-packages/)

:::
