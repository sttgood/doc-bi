---
title: npm explain
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm explain <package-spec>
alias: why
```

## 描述

此命令将打印导致在当前项目中安装给定包的依赖链。

如果提供了一个或多个包规范，则只有与其中一个说明符匹配的包才会解释它们的关系。

包规范还可以引用 `./node_modules` 中的文件夹

例如，在 npm 的源代码树中运行 `npm explain glob` 将显示：



```bash
glob@7.1.6node_modules/glob  glob@"^7.1.4" from the root project
glob@7.1.1 devnode_modules/tacks/node_modules/glob  glob@"^7.0.5" from rimraf@2.6.2  node_modules/tacks/node_modules/rimraf    rimraf@"^2.6.2" from tacks@1.3.0    node_modules/tacks      dev tacks@"^1.3.0" from the root project
```

要仅解释驻留在特定文件夹中的包，请将其作为参数传递给命令。当试图弄清楚为什么要复制给定的依赖以满足项目中冲突的版本要求时，这可能很有用。



```bash
$ npm explain node_modules/nyc/node_modules/find-up
find-up@3.0.0 dev
node_modules/nyc/node_modules/find-up
  find-up@"^3.0.0" from nyc@14.1.1
  node_modules/nyc
    nyc@"^14.1.1" from tap@14.10.8
    node_modules/tap
      dev tap@"^14.10.8" from the root project
```

## 配置

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。



### `workspace`

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择该文件夹中的所有工作区）

为 `npm init` 命令设置时，可以将其设置为尚不存在的工作区的文件夹，以创建文件夹并将其设置为项目中的全新工作区。

此值不会导出到子进程的环境中。
