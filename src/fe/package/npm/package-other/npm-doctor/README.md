---
title: npm dist-doctor
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm doctor [connection] [registry] [versions] [environment] [permissions] [cache]
```

注意：此命令对工作区无感知。

## 描述

`npm doctor` 运行一组检查以确保你的 npm 安装具有管理 JavaScript 包所需的内容。npm 主要是一个独立的工具，但它确实有一些必须满足的基本要求：

- Node.js 和 git 必须可由 npm 执行。
- 主 npm 注册表 `registry.npmjs.com` 或其他使用注册表 API 的服务可用。
- npm 使用的目录 `node_modules`（本地和全局）存在并且可以由当前用户写入。
- npm 缓存存在，并且其中的包 tarball 没有损坏。

如果所有这些都不能正常工作，npm 可能无法正常工作。很多问题往往是由于 npm 代码库之外的东西造成的，所以 `npm doctor` 确认 npm 安装处于良好状态。

此外，除此之外，由于使用旧版本的 npm，也有非常多的问题报告。由于 npm 在不断改进，运行 `npm@latest` 比旧版本更好。

`npm doctor` 验证你的环境中的以下项目，如果有任何建议的更改，它将显示它们。默认情况下，npm 运行所有这些检查。你可以通过将检查指定为额外参数来限制运行哪些检查。



### `Connecting to the registry`

默认情况下，npm 从主 npm 注册表 `registry.npmjs.org` 安装。`npm doctor` 命中注册表中的特殊连接测试端点。这也可以用 `npm ping` 检查。如果此检查失败，你可能正在使用需要配置的代理，或者可能需要与你的 IT 人员交谈以通过 HTTPS 访问 `registry.npmjs.org`。

此检查针对你配置的任何注册表进行（你可以通过运行 `npm config get registry` 查看它的内容），如果你使用的私有注册表不支持主注册表支持的 `/whoami` 端点，则此检查可能会失败.



### `Checking npm version`

虽然 Node.js 可能与特定版本的 npm 打包在一起，但 CLI 团队的政策是，我们建议所有用户尽可能运行 `npm@latest`。由于 CLI 由一小部分贡献者维护，因此只有一条开发线的资源，因此 npm 自己的长期支持版本通常只接收关键的安全和回归修复。该团队认为，最新测试的 npm 版本几乎总是可能是 npm 中功能最多且无缺陷的版本。



### `Checking node version`

对于大多数用户来说，在大多数情况下，最好的 Node 版本将是最新的长期支持  版本。那些想要访问新的 ECMAscript 功能或对 Node 标准库进行前沿更改的人可能正在运行更新的版本，并且由于企业变更控制策略，有些人可能需要运行旧版本的 Node。没关系！但总的来说，npm 团队建议大多数用户运行 Node.js LTS。



### `Checking configured npm registry`

你可能正在为你的项目或公司从私有包注册表安装。那太棒了！其他人可能会关注教程或 StackOverflow 问题，以解决你可能遇到的问题。有时，这可能需要更改你指向的注册表。`npm doctor` 的这一部分只是让你，也许是帮助你获得支持的人，知道你没有使用默认注册表。



### `Checking for git executable in PATH`

虽然它在 README 中有记录，但 npm 需要安装 Git 来完成它所做的许多事情可能并不明显。此外，在某些情况下（尤其是在 Windows 上），你可能将 Git 设置为无法通过 `PATH` 访问，以便 npm 可以找到它。此检查确保 Git 可用。



### 权限检查

- 你的缓存必须可由运行 npm 的用户读写。
- 全局包二进制文件必须可由运行 npm 的用户写入。
- 你的本地 `node_modules` 路径，如果你使用项目目录运行 `npm doctor`，则运行 npm 的用户必须是可读写的。



### 验证缓存包的校验和

发布 npm 包时，发布过程会生成一个校验和，npm 在安装时使用该校验和来验证包在传输过程中没有损坏。`npm doctor` 使用这些校验和来验证本地缓存中的包 tarball（你可以使用 `npm config get cache` 查看该缓存的位置）。如果你的缓存中有损坏的包，你可能应该运行 `npm cache clean -f` 并重置缓存。

## 配置

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。
