---
title: npm pkg
article: false
dir:
  collapsible: true
  link: true
---

## 概要



```bash
npm pkg set <key>=<value> [<key>=<value> ...]
npm pkg get [<key> [<key> ...]]
npm pkg delete <key> [<key> ...]
npm pkg set [<array>[<index>].<key>=<value> ...]
npm pkg set [<array>[].<key>=<value> ...]
npm pkg fix
```



## 描述

自动管理 `package.json` 文件的命令。`npm pkg` 提供 3 个不同的子命令，允许你修改或检索 `package.json` 中给定对象键的值。

检索和设置字段的语法是在 `package.json` 中找到的嵌套对象属性的点分隔表示，它与 [`npm view`] 中用于从注册表清单中检索信息的表示法相同，你可以在下面找到有关如何使用它的更多示例.

返回值始终为 json 格式。

- `npm pkg get <field>`

  检索在 `package.json` 文件中定义的值 `key`。

  例如，为了检索当前包的名称，你可以运行：

  

  ```bash
  npm pkg get name
  ```

  也可以一次检索多个值：

  

  ```bash
  npm pkg get name version
  ```

  你可以通过用句点分隔子字段来查看子字段。要检索测试 `script` 值的值，你将运行以下命令：

  

  ```bash
  npm pkg get scripts.test
  ```

  对于数组字段，请求非数字字段将返回列表中对象的所有值。例如，要获取一个包的所有贡献者电子邮件，你可以运行：

  

  ```bash
  npm pkg get contributors.email
  ```

  你还可以在方括号中使用数字索引来专门选择数组字段中的项目。要获取列表中第一个贡献者的电子邮件地址，你可以运行：

  

  ```bash
  npm pkg get contributors[0].email
  ```

  对于复杂字段，你还可以在方括号中命名属性以专门选择子字段。这对导出对象特别有用：

  

  ```bash
  npm pkg get "exports[.].require"
  ```

- `npm pkg set <field>=<value>`

  根据 `field` 值在 `package.json` 中设置 `value`。保存到 `package.json` 文件时，使用在 `npm install` 和其他涉及 `package.json` 文件的 cli 命令期间使用的相同规则集，确保尊重现有缩进并可能在将值保存到文件之前应用一些验证。

  用于从包中检索值的相同语法也可用于定义新属性或覆盖现有属性，以下是如何使用点分隔语法编辑 `package.json` 文件的一些示例。

  在你的 `package.json` 中定义一个名为 `mynewcommand` 的新 bin，它指向一个文件 `cli.js`：

  

  ```bash
  npm pkg set bin.mynewcommand=cli.js
  ```

  一次设置多个字段也是可能的：

  

  ```bash
  npm pkg set description='Awesome package' engines.node='>=10'
  ```

  也可以添加到数组值，例如添加新的贡献者条目：

  

  ```bash
  npm pkg set contributors[0].name='Foo' contributors[0].email='foo@bar.ca'
  ```

  你还可以使用特殊的空括号表示法将项目附加到数组的末尾：

  

  ```bash
  npm pkg set contributors[].name='Foo' contributors[].name='Bar'
  ```

  在将值保存到 `package.json` 文件之前，也可以将值解析为 json，例如为了设置 `"private": true` 属性：

  

  ```bash
  npm pkg set private=true --json
  ```

  它还可以将值保存为数字：

  

  ```bash
  npm pkg set tap.timeout=60 --json
  ```

- `npm pkg delete <key>`

  从你的 `package.json` 中删除一个 `key`

  用于从包中设置值的相同语法也可用于删除现有值。例如，为了删除名为 build 的脚本：

  

  ```bash
  npm pkg delete scripts.build
  ```

- `npm pkg fix`

  自动更正 `package.json` 中的常见错误。npm 已经在 `publish` 期间执行了此操作，这会导致 `package.json` 文件的内容与 npm 在安装期间使用的清单之间存在细微（大部分无害）的差异。



## 工作区支持

你可以使用 [`workspace`] 或 [`workspaces`] 配置选项在已配置的工作区中设置/获取/删除项目。

例如，在项目的所有已配置工作区中设置 `funding` 值：



```bash
npm pkg set funding=https://example.com --ws
```

当使用 `npm pkg get` 从你配置的工作区中检索信息时，返回的结果将采用 json 格式，其中顶层键是每个工作区的名称，这些键的值将是从每个配置的工作区返回的结果值，例如：



```bash
npm pkg get name version --ws
{
  "a": {
    "name": "a",
    "version": "1.0.0"
  },
  "b": {
    "name": "b",
    "version": "1.0.0"
  }
}
```



## 配置



### `force`

- 默认值：false
- 类型：布尔值

删除了针对不幸的副作用、常见错误、不必要的性能下降和恶意输入的各种保护。

- 允许在全局安装中破坏非 npm 文件。
- 允许 `npm version` 命令在不干净的 git 存储库上工作。
- 允许使用 `npm cache clean` 删除缓存文件夹。
- 允许安装具有 `engines` 声明需要不同版本的 npm 的包。
- 允许安装具有 `engines` 声明需要不同版本 `node` 的包，即使启用了 `--engine-strict`。
- 允许 `npm audit fix` 安装超出你声明的依赖范围的模块（包括 SemVer 的主要更改）。
- 允许取消发布已发布包的所有版本。
- 允许在根项目中安装冲突的 peerDependencies。
- 在 `npm init` 时隐式设置 `--yes`。
- 允许破坏 `npm pkg` 中的现有值
- 允许取消发布整个包（不仅仅是单个版本）。

如果你对自己想要做什么没有明确的想法，强烈建议你不要使用此选项！



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
