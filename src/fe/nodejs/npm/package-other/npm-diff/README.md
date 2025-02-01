---
title: npm diff
article: false
dir:
  collapsible: false
  link: true
---

:::tabs

@tab官网-DOC

## 概要

```bash
npm diff [...<paths>]
```

## 描述

与其对应的 `git diff` 类似，此命令将打印发布到 npm 注册表的包的文件差异补丁。

- `npm diff --diff=<spec-a> --diff=<spec-b>`

  使用注册表说明符比较两个包版本，例如：`npm diff --diff=pkg@1.0.0 --diff=pkg@^2.0.0`。也可以比较任何包的复刻，例如：`npm diff --diff=pkg@1.0.0 --diff=pkg-fork@1.0.0`。

  可以使用任何有效的规范，因此也可以比较目录或 git 存储库，例如：`npm diff --diff=pkg@latest --diff=./packages/pkg`

  这是一个比较注册表中名为 `abbrev` 的包的两个不同版本的示例：

  

  ```bash
  npm diff --diff=abbrev@1.1.0 --diff=abbrev@1.1.1
  ```

  成功后，输出如下所示：

  

  ```bash
  diff --git a/package.json b/package.json
  index v1.1.0..v1.1.1 100644
  --- a/package.json
  +++ b/package.json
  @@ -1,6 +1,6 @@
   {
     "name": "abbrev",
  -  "version": "1.1.0",
  +  "version": "1.1.1",
     "description": "Like ruby's abbrev module, but in js",
     "author": "Isaac Z. Schlueter <i@izs.me>",
     "main": "abbrev.js",
  ```

  鉴于 npm 规范的灵活性，你还可以像使用 `npm install` 时一样定位本地目录或 git repos：

  

  ```bash
  npm diff --diff=https://github.com/npm/libnpmdiff --diff=./local-path
  ```

  在上面的示例中，我们可以比较从 `github.com/npm/libnpmdiff` 的 git repo 安装的包的内容与包含有效包的 `./local-path` 的内容，例如原始包的修改副本。

- `npm diff`（在包目录中，无参数）：

  如果包发布到注册表，`npm diff` 将获取标记为 `latest` 的 tarball 版本（可以使用 `tag` 选项配置此值）并继续比较该 tarball 中存在的文件内容与本地文件中的当前文件系统。

  此工作流程为包作者提供了一种方便的方式，可以查看与该包的最新发布版本相比，哪些包跟踪文件已更改。

- `npm diff --diff=<pkg-name>`（在包目录中）：

  当使用单个包名（没有版本或标签说明符）作为参数时，`npm diff` 将以与 [`npm-outdated`] 类似的方式工作，并到达注册表以确定名为 `<pkg-name>` 的包的当前发布版本将满足其依赖声明的 semver -范围。一旦知道该特定版本，`npm diff` 将打印差异补丁，将在本地文件系统中找到的 `<pkg-name>` 的当前版本与注册表返回的特定版本进行比较。

  给定当前安装的名为 `abbrev` 的包：

  

  ```bash
  npm diff --diff=abbrev
  ```

  这将向注册表请求其最新版本，如果版本号不同，将打印一个比较当前安装的版本与新版本的差异输出。

- `npm diff --diff=<spec-a>`（在包目录中）：

  与仅使用单个包名称类似，如果你希望将已安装包的本地版本与 `<spec-a>` 中提供的特定版本/标签/semver-range 进行比较，也可以声明完整的注册表说明符版本。

  一个例子：假设 `pkg@1.0.0` 安装在当前的 `node_modules` 文件夹中，运行：

  

  ```bash
  npm diff --diff=pkg@2.0.0
  ```

  它实际上是 `npm diff --diff=pkg@1.0.0 --diff=pkg@2.0.0` 的别名。

- `npm diff --diff=<semver-a> [--diff=<semver-b>]`（在包目录中）：

  使用 `npm diff` 和 semver-valid 版本号是比较当前包的不同版本的简写。

  它需要从一个包目录运行，这样对于一个名为 `pkg` 的包来说，运行 `npm diff --diff=1.0.0 --diff=1.0.1` 与运行 `npm diff --diff=pkg@1.0.0 --diff=pkg@1.0.1` 是一样的。

  如果只提供了一个参数 `<version-a>`，那么当前本地文件系统将与该版本进行比较。

  这是一个比较当前项目目录的两个特定版本（发布到配置的注册表）的示例：

  

  ```bash
  npm diff --diff=1.0.0 --diff=1.1.0
  ```

请注意，标签名称不是有效的 `--diff` 参数值，如果你希望与已发布的标签进行比较，则必须使用 `pkg@tagname` 语法。



### 过滤文件

也可以使用文件名或 glob 模式匹配指定位置参数，以便将差异补丁的结果限制为给定包的文件子集，例如：



```bash
npm diff --diff=pkg@2 ./lib/ CHANGELOG.md
```

在上面的示例中，diff 输出只会打印位于文件夹 `./lib/` 中的文件的内容以及 `CHANGELOG.md` 文件中更改的代码行。

## 配置

### `diff`

- 默认值：
- 类型：字符串（可以设置多次）

定义要在 `npm diff` 中比较的参数。



### `diff-name-only`

- 默认值：false
- 类型：布尔值

使用 `npm diff` 时仅打印文件名。



### `diff-unified`

- 默认值：3
- 类型：数字

要在 `npm diff` 中打印的上下文行数。



### `diff-ignore-all-space`

- 默认值：false
- 类型：布尔值

比较 `npm diff` 中的行时忽略空格。



### `diff-no-prefix`

- 默认值：false
- 类型：布尔值

不要在 `npm diff` 输出中显示任何源或目标前缀。

注意：这会导致 `npm diff` 忽略 `--diff-src-prefix` 和 `--diff-dst-prefix` 配置。



### `diff-src-prefix`

- 默认值："a/"
- 类型：字符串

`npm diff` 输出中使用的源前缀。



### `diff-dst-prefix`

- 默认值："b/"
- 类型：字符串

`npm diff` 输出中使用的目标前缀。



### `diff-text`

- 默认值：false
- 类型：布尔值

将所有文件视为 `npm diff` 中的文本。



### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 [文件夹]。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`



### `tag`

- 默认值："latest"
- 类型：字符串

如果你让 npm 安装一个包并且没有告诉它一个特定的版本，那么它会安装指定的标签。

如果没有给出明确的标签，它是添加到 `npm dist-tag add` 命令中指定的 package@version 的标签。

当被 `npm diff` 命令使用时，这是用于获取 tarball 的标签，默认情况下将与本地文件进行比较。

如果在 `npm publish` 命令中使用，这是将添加到提交到注册表的包的标签。



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

@tab AI-DOC

`npm diff` 是 npm 提供的一个命令，用于比较本地安装的包和注册表中指定版本之间的差异。这个功能对于开发者来说非常有用，因为它可以帮助你快速识别出在不同版本之间代码或文件结构的变化，尤其是在升级依赖项时。以下是关于 `npm diff` 的详细解释：

### 功能概述

`npm diff` 命令可以用来比较以下几种情况下的差异：

- **本地安装的包与注册表中的某个版本**：查看本地安装的版本和注册表中另一个版本之间的差异。
- **两个注册表版本之间的差异**：直接比较注册表中两个不同版本之间的差异。
- **工作区（workspaces）之间的差异**：如果你使用的是多包项目结构，可以比较不同工作区之间的差异。

### 使用方法

#### 比较本地安装的包与注册表中的版本

要比较本地安装的包和注册表中的某个特定版本之间的差异，可以使用如下命令：

```bash
npm diff <package-name>@<version>
```

例如，如果你想比较本地安装的 `lodash` 和注册表中的 `4.17.21` 版本之间的差异，你可以运行：

```bash
npm diff lodash@4.17.21
```

这将显示本地安装的 `lodash` 和 `4.17.21` 版本之间的所有文件差异。

#### 比较两个注册表版本之间的差异

如果你想要直接比较注册表中两个不同版本之间的差异，可以在命令中指定两个版本号：

```bash
npm diff <package-name>@<version1> <package-name>@<version2>
```

例如，要比较 `lodash` 的 `4.17.20` 和 `4.17.21` 两个版本之间的差异，你可以运行：

```bash
npm diff lodash@4.17.20 lodash@4.17.21
```

#### 比较工作区之间的差异

对于使用工作区（workspaces）的多包项目，你可以比较不同工作区之间的差异：

```bash
npm diff --workspace=<workspace1> --workspace=<workspace2>
```

例如，要比较 `packages/a` 和 `packages/b` 两个工作区之间的差异，你可以运行：

```bash
npm diff --workspace=packages/a --workspace=packages/b
```

### 输出格式

`npm diff` 默认使用类似于 `diff` 工具的统一差异格式（unified diff format），它会显示每个文件的增删改内容。输出包括：

- **文件名**：显示哪些文件有变化。
- **行号**：指出具体哪一行发生了变化。
- **添加的行**：以 `+` 开头，表示新添加的内容。
- **删除的行**：以 `-` 开头，表示被删除的内容。
- **不变的行**：上下文中的未改变行，通常用於提供更多的背景信息。

### 结合其他选项使用

你可以结合其他选项来进一步自定义 `npm diff` 的行为：

- **`--silent`**：减少冗余输出，只显示必要的信息。
  
  ```bash
  npm diff lodash@4.17.21 --silent
  ```

- **`--json`**：以 JSON 格式输出差异信息，适用于自动化脚本或进一步处理。
  
  ```bash
  npm diff lodash@4.17.20 lodash@4.17.21 --json
  ```

- **`--patch`**：生成补丁文件，可以应用于其他环境中。
  
  ```bash
  npm diff lodash@4.17.20 lodash@4.17.21 --patch > patch.diff
  ```

### 注意事项

- **网络连接**：`npm diff` 需要访问 npm 注册表来获取远程版本的信息，因此确保你有稳定的网络连接。
- **权限问题**：如果涉及私有注册表，确保你有足够的权限来访问这些资源。
- **性能影响**：对于大型包或包含大量文件的包，`npm diff` 可能需要一些时间来计算差异，请耐心等待。

### 实际应用场景

1. **依赖升级**：在升级依赖项之前，使用 `npm diff` 查看即将引入的变化，评估潜在的影响。
2. **版本回滚**：当你需要从一个版本回滚到另一个版本时，`npm diff` 可以帮助你了解两者之间的区别。
3. **代码审查**：在团队协作中，使用 `npm diff` 来检查不同版本之间的变更，确保符合编码标准和安全要求。

### 示例

假设你要比较本地安装的 `express` 和注册表中的 `4.18.0` 版本之间的差异：

1. **比较本地安装的包与注册表中的版本**：
   ```bash
   npm diff express@4.18.0
   ```

2. **比较两个注册表版本之间的差异**：
   ```bash
   npm diff express@4.17.0 express@4.18.0
   ```

3. **比较工作区之间的差异**：
   ```bash
   npm diff --workspace=packages/server --workspace=packages/client
   ```

### 总结

`npm diff` 是一个非常有用的工具，它帮助你在不同的 npm 包版本之间进行详细的比较，从而更好地理解和管理依赖关系的变化。通过合理利用这个命令，你可以显著提升开发效率，确保项目的稳定性和安全性。无论是进行依赖升级还是版本回滚，掌握 `npm diff` 的使用都能让你更加自信和高效地管理你的 npm 资产。

### 进一步阅读

如果你想要了解更多关于 `npm diff` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来利用 `npm diff` 的结果也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

:::
