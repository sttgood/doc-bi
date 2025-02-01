---
title: npm init
article: false
order: 4
---

## 概要



```bash
npm init <package-spec> (same as `npx create-<package-spec>`)npm init <@scope> (same as `npx <@scope>/create`)
aliases: create, innit
```



## 描述

`npm init <initializer>` 可用于设置新的或现有的 npm 包。

在这种情况下，`initializer` 是一个名为 `create-<initializer>` 的 npm 包，它将由 [`npm-exec`](https://npm.nodejs.cn/cli/v11/commands/npm-exec) 安装，然后执行其主 bin —— 大概是创建或更新 `package.json` 并运行任何其他与初始化相关的操作。

init 命令转化为对应的 `npm exec` 操作如下：

- `npm init foo` -> `npm exec create-foo`
- `npm init @usr/foo` -> `npm exec @usr/create-foo`
- `npm init @usr` -> `npm exec @usr/create`
- `npm init @usr@2.0.0` -> `npm exec @usr/create@2.0.0`
- `npm init @usr/foo@2.0.0` -> `npm exec @usr/create-foo@2.0.0`

如果初始化器被省略（通过调用 `npm init`），init 将回退到旧的 init 行为。它会问你一堆问题，然后为你写一个 package.json。它将尝试根据现有字段、依赖和选择的选项进行合理的猜测。它是严格附加的，因此它将保留已设置的所有字段和值。你也可以使用 `-y`/`--yes` 完全跳过问卷。如果你通过 `--scope`，它将创建一个范围包。

注意：如果用户已经全局安装了 `create-<initializer>` 软件包，那么 `npm init` 将使用该软件包。如果你希望 npm 使用最新版本或其他特定版本，你必须指定它：

- `npm init foo@latest` # 从注册表中获取并运行最新的 `create-foo`
- `npm init foo@1.2.3` # 专门运行 `create-foo@1.2.3`



### 转发附加选项

任何附加选项都将直接传递给命令，因此 `npm init foo -- --hello` 将映射到 `npm exec -- create-foo --hello`。

为了更好地说明如何转发选项，这里有一个更完善的示例，显示传递给 npm cli 和 create package 的选项，以下两个命令是等效的：

- `npm init foo -y --registry=<url> -- --hello -a`
- `npm exec -y --registry=<url> -- create-foo --hello -a`



## 示例

使用 [`create-react-app`](https://npm.im/create-react-app) 创建一个新的基于 React 的项目：



```bash
$ npm init react-app ./my-react-app
```

使用 [`create-esm`](https://npm.im/create-esm) 创建一个新的 `esm` 兼容包：



```bash
$ mkdir my-esm-lib && cd my-esm-lib
$ npm init esm --yes
```

使用旧版 init 生成一个普通的旧 package.json：



```bash
$ mkdir my-npm-pkg && cd my-npm-pkg
$ git init
$ npm init
```

生成它而不让它问任何问题：



```bash
$ npm init -y
```



## 工作区支持

可以使用 `workspace` 配置选项在项目中创建新工作区。使用 `npm init -w <dir>` 时，cli 将创建所需的文件夹和样板，同时添加对项目 `package.json` `"workspaces": []` 属性的引用，以确保新生成的工作区正确设置。

给定一个没有工作区的项目，例如：



```bash
.
+-- package.json
```

你可以使用旧版 init 生成新工作区：



```bash
$ npm init -w packages/a
```

这将生成一个新文件夹和 `package.json` 文件，同时更新你的顶层 `package.json` 以添加对这个新工作区的引用：



```bash
.
+-- package.json
`-- packages
   `-- a
       `-- package.json
```

工作区 init 还支持 `npm init <initializer> -w <dir>` 语法，遵循本页初始描述部分前面解释的同一组规则。与前面使用 [`create-react-app`](https://npm.im/create-react-app) 创建新的基于 React 的项目的示例类似，以下语法将确保将新的 React 应用创建为项目中的嵌套工作区，并配置 `package.json` 以识别它：



```bash
npm init -w packages/my-react-app react-app .
```

这将确保按预期生成你的 React 应用，要牢记的一个重要考虑因素是 `npm exec` 将在为该工作区新创建的文件夹的上下文中运行，这就是为什么在此示例中初始化程序使用 初始化程序名称后跟一个点以表示该上下文中的当前目录，例如：`react-app .`：



```bash
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   `-- my-react-app
       +-- README
       +-- package.json
       `-- ...
```



## 配置

### [`init-author-name`](https://npm.nodejs.cn/cli/v11/commands/npm-init#init-author-name)

- 默认值：""
- 类型：字符串

默认情况下，应该使用值 `npm init` 作为包作者的名称。



### [`init-author-url`](https://npm.nodejs.cn/cli/v11/commands/npm-init#init-author-url)

- 默认值：""
- 类型："" 或网址

默认情况下，包作者的主页应使用值 `npm init`。



### [`init-license`](https://npm.nodejs.cn/cli/v11/commands/npm-init#init-license)

- 默认值："ISC"
- 类型：字符串

默认情况下，值 `npm init` 应用于包许可证。



### [`init-module`](https://npm.nodejs.cn/cli/v11/commands/npm-init#init-module)

- 默认值："~/.npm-init.js"
- 类型：路径

将由 `npm init` 命令加载的模块。有关详细信息



### [`init-version`](https://npm.nodejs.cn/cli/v11/commands/npm-init#init-version)

- 默认值："1.0.0"
- 类型：SemVer 字符串

如果 package.json 中尚未设置，`npm init` 应该默认使用的值作为包版本号。



### [`yes`](https://npm.nodejs.cn/cli/v11/commands/npm-init#yes)

- 默认值：null
- 类型：空值或布尔值

对 npm 可能在命令行上打印的任何提示自动回答 "yes"。



### [`force`](https://npm.nodejs.cn/cli/v11/commands/npm-init#force)

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



### [`scope`](https://npm.nodejs.cn/cli/v11/commands/npm-init#scope)

- 默认值：当前项目的范围（如果有）或 ""
- 类型：字符串

将操作与范围注册表的作用域相关联。

在登录或退出私有注册表时很有用：



```bash
# log in, linking the scope to the custom registrynpm login --scope=@mycorp --registry=https://registry.mycorp.com
# log out, removing the link and the auth tokennpm logout --scope=@mycorp
```

这将导致 `@mycorp` 映射到注册表，以便将来安装根据模式 `@mycorp/package` 指定的包。

这也将导致 `npm init` 创建一个范围包。



```bash
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```



### [`workspace`](https://npm.nodejs.cn/cli/v11/commands/npm-init#workspace)

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择该文件夹中的所有工作区）

为 `npm init` 命令设置时，可以将其设置为尚不存在的工作区的文件夹，以创建文件夹并将其设置为项目中的全新工作区。

此值不会导出到子进程的环境中。



### [`workspaces`](https://npm.nodejs.cn/cli/v11/commands/npm-init#workspaces)

- 默认值：null
- 类型：空值或布尔值

设置为 true 可在所有已配置工作区的上下文中运行该命令。

显式将此设置为 false 将导致像 `install` 这样的命令完全忽略工作区。未明确设置时：

- 在 `node_modules` 树上运行的命令（安装、更新等）会将工作区链接到 `node_modules` 文件夹。* 执行其他操作（测试、执行、发布等）的命令将在根项目上运行，除非在 `workspace` 配置中指定了一个或多个工作区。

此值不会导出到子进程的环境中。



### [`workspaces-update`](https://npm.nodejs.cn/cli/v11/commands/npm-init#workspaces-update)

- 默认值：true
- 类型：布尔值

如果设置为 true，npm cli 将在可能更改安装到 `node_modules` 文件夹的工作区的操作之后运行更新。



### [`include-workspace-root`](https://npm.nodejs.cn/cli/v11/commands/npm-init#include-workspace-root)

- 默认值：false
- 类型：布尔值

为命令启用工作区时包括工作区根。

当为 false 时，通过 `workspace` 配置指定单个工作区，或通过 `workspaces` 标志指定所有工作区，将导致 npm 仅在指定的工作区上运行，而不是在根项目上运行。

此值不会导出到子进程的环境中。
