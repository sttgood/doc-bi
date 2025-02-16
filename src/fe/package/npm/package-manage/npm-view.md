---
title: npm view
article: false
order: 7
---

## 概要

```bash
npm view [<package-spec>] [<field>[.subfield]...]
aliases: info, show, v
```



## 描述

此命令显示有关包的数据并将其打印到标准输出。

例如，要从注册表中查看有关 `connect` 包的信息，你可以运行：



```bash
npm view connect
```

如果未指定，则默认版本为 `"latest"`。

可以在包描述符之后指定字段名称。例如，要显示 `0.3.5` 版本的 `ronn` 包的依赖，你可以执行以下操作：

```bash
npm view ronn@0.3.5 dependencies
```

默认情况下，`npm view` 显示有关当前项目上下文的数据（通过查找 `package.json`）。要显示当前项目的字段数据，请使用文件路径（即 `.`）：

```bash
npm view . dependencies
```

你可以通过用句点分隔子字段来查看子字段。要查看最新版本 `npm` 的 git 存储库 URL，你将运行以下命令：

```bash
npm view npm repository.url
```

这使得使用一些 shell 脚本可以轻松查看有关依赖的信息。例如，要查看 `ronn` 所依赖的 `opts` 版本的所有数据，可以这样写：

```bash
npm view opts@$
```

对于数组字段，请求非数字字段将返回列表中对象的所有值。例如，要获取 `express` 包的所有贡献者电子邮件地址，你可以运行：

```bash
npm view express contributors.email
```

你还可以在方括号中使用数字索引来专门选择数组字段中的项目。要获取列表中第一个贡献者的电子邮件地址，你可以运行：

```bash
npm view express contributors[0].email
```

如果你要查询的字段值是对象的属性，你应该运行：

```bash
npm view express time'[4.8.0]'
```

可以指定多个字段，并且将一个接一个地打印。例如，要获取所有贡献者名称和电子邮件地址，你可以这样做：

```bash
npm view express contributors.name contributors.email
```

"人" 字段如果显示为对象，则显示为字符串。因此，例如，这将以缩短的字符串格式显示 `npm` 贡献者的列表。（有关这方面的更多信息，请参见 [`package.json`]。）

```bash
npm view npm contributors
```

如果提供了版本范围，则将为包的每个匹配版本打印数据。这将显示每个匹配的 `yui3` 版本需要哪个版本的 `jsdom`：

```bash
npm view yui3@'>0.5.4' dependencies.jsdom
```

要显示 `connect` 包版本历史，你可以这样做：

```bash
npm view connect versions
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



### `workspaces`

- 默认值：null
- 类型：空值或布尔值

设置为 true 可在所有已配置工作区的上下文中运行该命令。

显式将此设置为 false 将导致像 `install` 这样的命令完全忽略工作区。未明确设置时：

- 在 `node_modules` 树上运行的命令（安装、更新等）会将工作区链接到 `node_modules` 文件夹。* 执行其他操作（测试、执行、发布等）的命令将在根项目上运行，除非在 `workspace` 配置中指定了一个或多个工作区。

此值不会导出到子进程的环境中。



### `include-workspace-root`

- 默认值：false
- 类型：布尔值

为命令启用工作区时包括工作区根。

当为 false 时，通过 `workspace` 配置指定单个工作区，或通过 `workspaces` 标志指定所有工作区，将导致 npm 仅在指定的工作区上运行，而不是在根项目上运行。

此值不会导出到子进程的环境中。



## 输出

如果仅输出单个版本的单个字符串字段，则不会对其进行着色或引用，以将输出通过管道传输到另一个命令。如果该字段是一个对象，它将作为 JavaScript 对象字面量输出。

如果给出 `--json` 标志，则输出字段将为 JSON。

如果版本范围匹配多个版本，则每个打印的值都将以其适用的版本为前缀。

如果请求多个字段，则每个字段都以字段名称为前缀。
