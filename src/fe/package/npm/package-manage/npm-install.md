---
title: npm install
article: false
order: 1
---

## 概要

```bash
npm install [<package-spec> ...]
aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
```

## 描述

此命令安装一个包和它所依赖的任何包。如果包有一个包锁，或者一个 npm 收缩封装文件，或者一个 Yarn 锁文件，依赖的安装将由它驱动，遵循以下优先顺序：

- `npm-shrinkwrap.json`
- `package-lock.json`
- `yarn.lock`

package-lock.json 和 [`npm shrinkwrap`](https://npm.nodejs.cn/cli/v11/commands/npm-shrinkwrap)。

一个 `package` 是：

- a) 包含由 [`package.json`](https://npm.nodejs.cn/cli/v11/configuring-npm/package-json) 文件描述的程序的文件夹
- b) 一个 gzipped tarball，包含 (a)
- c) 解析为 (b) 的 url
- d) 在注册表上发布的 `<name>@<version>`（参见 [`registry`](https://npm.nodejs.cn/cli/v11/using-npm/registry)），带有 (c)
- e) 指向 (d) 的 `<name>@<tag>`（见 [`npm dist-tag`](https://npm.nodejs.cn/cli/v11/commands/npm-dist-tag)）
- f) 具有满足 (e) 的 "latest" 标签的 `<name>`
- g) 解决为 (a) 的 `<git remote url>`

即使你从不发布你的包，如果你只是想写一个 node 程序（a），你仍然可以获得使用 npm 的很多好处，也许你还想在打包后能够轻松地安装它成一个 tarball (b)。

- `npm install`（在包目录中，无参数）：

  将依赖安装到本地 `node_modules` 文件夹。

  在全局模式下（即，将 `-g` 或 `--global` 附加到命令中），它将当前包上下文（即当前工作目录）安装为全局包。

  默认情况下，`npm install` 将安装 [`package.json`](https://npm.nodejs.cn/cli/v11/configuring-npm/package-json) 中列为依赖的所有模块。

  使用 `--production` 标志（或者当 `NODE_ENV` 环境变量设置为 `production` 时），npm 将不会安装 `devDependencies` 中列出的模块。当 `NODE_ENV` 环境变量设置为 `production` 时，要安装 `dependencies` 和 `devDependencies` 中列出的所有模块，你可以使用 `--production=false`。

  > 注意：在向项目添加依赖时，`--production` 标志没有特殊含义。

- `npm install <folder>`：

  如果 `<folder>` 位于项目的根目录中，它的依赖将被安装，并且可能会像其他类型的依赖一样被提升到顶层 `node_modules`。如果 `<folder>` 位于项目根目录之外，npm 不会在目录 `<folder>` 中安装包依赖，但会创建到 `<folder>` 的符号链接。

  > 注意：如果你想从注册表安装目录的内容（如包）而不是创建链接，则需要使用 `--install-links` 选项。

  示例：

  ```bash
  npm install ../../other-package --install-links
  npm install ./sub-package
  ```

- `npm install <tarball file>`：

  安装位于文件系统上的包。注意：如果你只想将一个 dev 目录链接到你的 npm 根目录，你可以使用 [`npm link`](https://npm.nodejs.cn/cli/v11/commands/npm-link) 更容易地做到这一点。

  压缩包要求：

  - 文件名必须使用 `.tar`、`.tar.gz` 或 `.tgz` 作为扩展名。
  - 包内容应位于 tarball 内的子文件夹中（通常称为 `package/`）。npm 在安装包时剥离一个目录层（运行 `tar x --strip-components=1` 的等效项）。
  - 包必须包含具有 `name` 和 `version` 属性的 `package.json` 文件。

  示例：

  ```bash
  npm install ./package.tgz
  ```

- `npm install <tarball url>`：

  获取 tarball url，然后安装它。为了区分此选项和其他选项，参数必须以 "http://" 或 "https://" 开头

  示例：

  ```bash
  npm install https://github.com/indexzero/forever/tarball/v0.5.6
  ```

- `npm install [<@scope>/]<name>`：

  进行 `<name>@<tag>` 安装，其中 `<tag>` 是 "tag" 配置。（参见 [`config`](https://npm.nodejs.cn/cli/v11/using-npm/config#tag)。配置的默认值为 `latest`。）

  在大多数情况下，这将在 npm 注册表上安装标记为 `latest` 的模块版本。

  示例：

  ```bash
  npm install sax
  ```

  默认情况下，`npm install` 将任何指定的包保存到 `dependencies` 中。此外，你可以使用一些额外的标志来控制它们的保存位置和方式：

  - `-P, --save-prod`：包将出现在你的 `dependencies` 中。这是默认值，除非存在 `-D` 或 `-O`。
  - `-D, --save-dev`：包将出现在你的 `devDependencies` 中。
  - `--save-peer`：包将出现在你的 `peerDependencies` 中。
  - `-O, --save-optional`：包将出现在你的 `optionalDependencies` 中。
  - `--no-save`：防止保存到 `dependencies`。

  当使用上述任何选项将依赖保存到 package.json 时，还有两个额外的可选标志：

  - `-E, --save-exact`：保存的依赖将使用精确的版本进行配置，而不是使用 npm 的默认 semver 范围运算符。
  - `-B, --save-bundle`：保存的依赖也将添加到你的 `bundleDependencies` 列表中。

  此外，如果你有 `npm-shrinkwrap.json` 或 `package-lock.json`，那么它也会被更新。

  `<scope>` 是可选的。该包将从与指定范围关联的注册表中下载。如果没有注册表与给定范围关联，则假定为默认注册表。见 [`scope`](https://npm.nodejs.cn/cli/v11/using-npm/scope)。

  注意：如果你不在范围名称中包含 @ 符号，npm 会将其解释为 GitHub 存储库，请参见下文。范围名称后还必须跟一个斜杠。

  示例：

  ```bash
  npm install sax
  npm install githubname/reponame
  npm install @myorg/privatepackage
  npm install node-tap --save-dev
  npm install dtrace-provider --save-optional
  npm install readable-stream --save-exact
  npm install ansi-regex --save-bundle
  ```

- `npm install <alias>@npm:<name>`：

  在自定义别名下安装包。允许并排同名包的多个版本，更方便地导入具有其他长包的名称，并使用 git forks 替换或复刻的 npm 包作为替换。别名仅适用于你的项目，不会重命名传递依赖中的包。别名应遵循 [`validate-npm-package-name`](https://www.npmjs.com/package/validate-npm-package-name#naming-rules) 中规定的命名约定。

  示例：

  ```bash
  npm install my-react@npm:react
  npm install jquery2@npm:jquery@2
  npm install jquery3@npm:jquery@3
  npm install npa@npm:npm-package-arg
  ```

- `npm install [<@scope>/]<name>@<tag>`：

  安装指定标签引用的包的版本。如果该包的注册表数据中不存在该标记，则此操作将失败。

  示例：

  ```bash
  npm install sax@latest
  npm install @myorg/mypackage@latest
  ```

- `npm install [<@scope>/]<name>@<version>`：

  安装指定版本的包。如果版本尚未发布到注册表，这将失败。

  示例：

  ```bash
  npm install sax@0.1.1
  npm install @myorg/privatepackage@1.5.0
  ```

- `npm install [<@scope>/]<name>@<version range>`：

  安装与指定版本范围匹配的包版本。这将遵循 [`package.json`](https://npm.nodejs.cn/cli/v11/configuring-npm/package-json) 中描述的解决依赖的相同规则。

  请注意，大多数版本范围必须放在引号中，以便你的 shell 将其视为单个参数。

  示例：

  ```bash
  npm install sax@">=0.1.0 <0.2.0"
  npm install @myorg/privatepackage@"16 - 17"
  ```

- `npm install <git remote url>`：

  从托管的 git 提供程序安装包，并使用 `git` 克隆它。对于完整的 git 远程 URL，只会尝试该 URL。

  ```bash
  <protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
  ```

  `<protocol>` 是 `git`、`git+ssh`、`git+http`、`git+https` 或 `git+file` 之一。

  如果提供了 `#<commit-ish>`，它将用于准确克隆该提交。如果 commit-ish 的格式为 `#semver:<semver>`，`<semver>` 可以是任何有效的 semver 范围或确切版本，npm 将在远程存储库中查找与该范围匹配的任何标记或引用，就像它查找注册表依赖一样。如果既没有指定 `#<commit-ish>` 也没有指定 `#semver:<semver>`，则使用存储库的默认分支。

  如果存储库使用子模块，这些子模块也将被克隆。

  如果正在安装的包中包含 `prepare` 脚本，则会安装它的 `dependencies` 和 `devDependencies`，并在打包和安装包之前运行准备脚本。

  以下 git 环境变量被 npm 识别，并在运行 git 时添加到环境中：

  - `GIT_ASKPASS`
  - `GIT_EXEC_PATH`
  - `GIT_PROXY_COMMAND`
  - `GIT_SSH`
  - `GIT_SSH_COMMAND`
  - `GIT_SSL_CAINFO`
  - `GIT_SSL_NO_VERIFY`

  有关详细信息，请参阅 git 手册页。

  示例：

  ```bash
  npm install git+ssh://git@github.com:npm/cli.git#v1.0.27
  npm install git+ssh://git@github.com:npm/cli#pull/273
  npm install git+ssh://git@github.com:npm/cli#semver:^5.0
  npm install git+https://isaacs@github.com/npm/cli.git
  npm install git://github.com/npm/cli.git#v1.0.27
  GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install git+ssh://git@github.com:npm/cli.git
  ```

- `npm install <githubname>/<githubrepo>[#<commit-ish>]`：

- `npm install github:<githubname>/<githubrepo>[#<commit-ish>]`：

  通过尝试使用 `git` 克隆它，在 `https://github.com/githubname/githubrepo` 安装包。

  如果提供了 `#<commit-ish>`，它将用于准确克隆该提交。如果 commit-ish 的格式为 `#semver:<semver>`，`<semver>` 可以是任何有效的 semver 范围或确切版本，npm 将在远程存储库中查找与该范围匹配的任何标记或引用，就像它查找注册表依赖一样。如果既没有指定 `#<commit-ish>` 也没有指定 `#semver:<semver>`，则使用默认分支。

  与常规 git 依赖一样，如果包在安装完成之前有 `prepare` 脚本，则将安装 `dependencies` 和 `devDependencies`。

  示例：

  ```bash
  npm install mygithubuser/myproject
  npm install github:mygithubuser/myproject
  ```

- `npm install gist:[<githubname>/]<gistID>[#<commit-ish>|#semver:<semver>]`：

  通过尝试使用 `git` 克隆它，在 `https://gist.github.com/gistID` 安装包。与 gist 关联的 GitHub 用户名是可选的，不会保存在 `package.json` 中。

  与常规 git 依赖一样，如果包在安装完成之前有 `prepare` 脚本，则将安装 `dependencies` 和 `devDependencies`。

  示例：

  ```bash
  npm install gist:101a11beef
  ```

- `npm install bitbucket:<bitbucketname>/<bitbucketrepo>[#<commit-ish>]`：

  通过尝试使用 `git` 克隆它，在 `https://bitbucket.org/bitbucketname/bitbucketrepo` 安装包。

  如果提供了 `#<commit-ish>`，它将用于准确克隆该提交。如果 commit-ish 的格式为 `#semver:<semver>`，`<semver>` 可以是任何有效的 semver 范围或确切版本，npm 将在远程存储库中查找与该范围匹配的任何标记或引用，就像它查找注册表依赖一样。如果既没有指定 `#<commit-ish>` 也没有指定 `#semver:<semver>`，则使用 `master`。

  与常规 git 依赖一样，如果包在安装完成之前有 `prepare` 脚本，则将安装 `dependencies` 和 `devDependencies`。

  示例：

  ```bash
  npm install bitbucket:mybitbucketuser/myproject
  ```

- `npm install gitlab:<gitlabname>/<gitlabrepo>[#<commit-ish>]`：

  通过尝试使用 `git` 克隆它，在 `https://gitlab.com/gitlabname/gitlabrepo` 安装包。

  如果提供了 `#<commit-ish>`，它将用于准确克隆该提交。如果 commit-ish 的格式为 `#semver:<semver>`，`<semver>` 可以是任何有效的 semver 范围或确切版本，npm 将在远程存储库中查找与该范围匹配的任何标记或引用，就像它查找注册表依赖一样。如果既没有指定 `#<commit-ish>` 也没有指定 `#semver:<semver>`，则使用 `master`。

  与常规 git 依赖一样，如果包在安装完成之前有 `prepare` 脚本，则将安装 `dependencies` 和 `devDependencies`。

  示例：

  ```bash
  npm install gitlab:mygitlabuser/myproject
  npm install gitlab:myusr/myproj#semver:^5.0
  ```

你可以组合多个参数，甚至多种类型的参数。例如：

```bash
npm install sax@">=0.1.0 <0.2.0" bench supervisor
```

`--tag` 参数将适用于所有指定的安装目标。如果存在具有给定名称的标记，则标记的版本优先于较新的版本。

`--dry-run` 参数将以通常的方式报告在没有实际安装任何东西的情况下安装会完成的工作。

`--package-lock-only` 参数只会更新 `package-lock.json`，而不是检查 `node_modules` 和下载依赖。

`-f` 或 `--force` 参数将强制 npm 获取远程资源，即使磁盘上存在本地副本。

```bash
npm install sax --force
```

## 配置

请参阅 [`config`](https://npm.nodejs.cn/cli/v11/using-npm/config) 帮助文档。许多配置参数对安装有一些影响，因为这是 npm 所做的大部分工作。

这些是与安装相关的一些最常见的选项。

### `save`

- 默认值：`true` 除非在使用 `npm update` 时默认为 `false`
- 类型：布尔值

将已安装的包作为依赖保存到 `package.json` 文件中。

与 `npm rm` 命令一起使用时，从 `package.json` 中删除依赖。

如果设置为 `false`，也会阻止写入 `package-lock.json`。

### `save-exact`

- 默认值：false
- 类型：布尔值

保存到 package.json 的依赖将使用精确的版本进行配置，而不是使用 npm 的默认 semver 范围运算符。

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 [文件夹](https://npm.nodejs.cn/cli/v11/configuring-npm/folders)。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`

### `install-strategy`

- 默认值："hoisted"
- 类型："hoisted"、"nested"、"shallow" 或 "linked"

设置在 node_modules 中安装包的策略。提升（默认）：在顶层安装非复制，并在目录结构中根据需要复制。nested:（以前的 --legacy-bundling）就地安装，无需提升。浅层（以前的 --global-style）只在顶层安装直接的 deps。linked:（实验）安装在 node_modules/.store 中，链接到位，未提升。

### `legacy-bundling`、

- 默认值：false
- 类型：布尔值
- DEPRECATED:此选项已被 `--install-strategy=nested` 弃用

不要在 `node_modules` 中提升包安装，而是以与它们所依赖的方式相同的方式安装包。这可能会导致非常深的目录结构和重复的软件包安装，因为没有数据去重。设置 `--install-strategy=nested`。

### `global-style`

- 默认值：false
- 类型：布尔值
- DEPRECATED:此选项已被 `--install-strategy=shallow` 弃用

仅在顶层 `node_modules` 中安装直接依赖，但提升更深层次的依赖。设置 `--install-strategy=shallow`。

### `omit`

- 默认值：'dev' 如果 `NODE_ENV` 环境变量设置为 'production'，否则为空。
- 类型："dev"、"optional"、"peer"（可多次设置）

要从磁盘上的安装树中省略的依赖类型。

请注意，这些依赖仍会被解析并添加到 `package-lock.json` 或 `npm-shrinkwrap.json` 文件中。它们只是没有物理安装在磁盘上。

如果一个包类型同时出现在 `--include` 和 `--omit` 列表中，那么它将被包括在内。

如果生成的省略列表包含 `'dev'`，则 `NODE_ENV` 环境变量将针对所有生命周期脚本设置为 `'production'`。

### `include`

- 默认值：
- 类型："prod"、"dev"、"optional"、"peer"（可多次设置）

允许定义要安装的依赖类型的选项。

这是 `--omit=<type>` 的倒数。

`--include` 中指定的依赖类型将不会被忽略，无论命令行中指定省略/包含的顺序如何。

### `strict-peer-deps`

- 默认值：false
- 类型：布尔值

如果设置为 `true`，而 `--legacy-peer-deps` 没有设置，那么任何冲突的 `peerDependencies` 都将被视为安装失败，即使 npm 可以根据非对等依赖合理地猜测出适当的解决方案。

默认情况下，依赖图中的冲突 `peerDependencies` 将使用最近的非对等依赖规范来解决，即使这样做会导致某些包收到超出其包的 `peerDependencies` 对象中设置的范围的对等依赖。

当执行这样的覆盖时，会打印一条警告，解释冲突和涉及的包。如果设置了 `--strict-peer-deps`，则此警告被视为失败。

### `prefer-dedupe`

- 默认值：false
- 类型：布尔值

如果可能，最好对包进行数据去重，而不是选择更新版本的依赖。

### `package-lock`

- 默认值：true
- 类型：布尔值

如果设置为 false，则安装时忽略 `package-lock.json` 文件。如果 `save` 为真，这也将阻止写入 `package-lock.json`。

### `package-lock-only`

- 默认值：false
- 类型：布尔值

如果设置为 true，当前操作将只使用 `package-lock.json`，忽略 `node_modules`。

对于 `update`，这意味着只会更新 `package-lock.json`，而不是检查 `node_modules` 并下载依赖。

对于 `list`，这意味着输出将基于 `package-lock.json` 描述的树，而不是 `node_modules` 的内容。

### `foreground-scripts`

- 默认值：`false` 除非使用 `npm pack` 或 `npm publish` 时默认为 `true`
- 类型：布尔值

在前台进程中运行已安装包的所有构建脚本（即 `preinstall`、`install` 和 `postinstall`）脚本，与主 npm 进程共享标准输入、输出和错误。

请注意，这通常会使安装运行速度变慢，并且噪音更大，但对调试很有用。

### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。

### `audit`

- 默认值：true
- 类型：布尔值

当 "true" 将审计报告与当前 npm 命令一起提交到默认注册表和为范围配置的所有注册表时。有关提交内容的详细信息，请参阅 [`npm audit`](https://npm.nodejs.cn/cli/v11/commands/npm-audit) 的文档。

### `bin-links`

- 默认值：true
- 类型：布尔值

告诉 npm 为包的可执行文件创建符号链接（或 Windows 上的 `.cmd` 垫片）。

设置为 false 使其不执行此操作。这可以用来解决某些文件系统不支持符号链接的事实，即使在表面上是 Unix 系统上也是如此。

### `fund`

- 默认值：true
- 类型：布尔值

当 "true" 在每个 `npm install` 的末尾显示消息时，确认正在寻找资金的依赖的数量。详见 [`npm fund`](https://npm.nodejs.cn/cli/v11/commands/npm-fund)。

### `dry-run`

- 类型：布尔值

表示你不希望 npm 进行任何更改，并且它应该只报告它会做的事情。这可以传递到任何修改本地安装的命令中，例如 `install`、`update`、`dedupe`、`uninstall` 以及 `pack` 和 `publish`。

注意：其他网络相关命令不支持此功能，例如 `dist-tags`、`owner` 等。

### `cpu`

- 默认值：null
- 类型：空值或字符串

覆盖要安装的原生模块的 CPU 架构。可接受的值与 package.json 的 `cpu` 字段相同，该字段来自 `process.arch`。

### `os`

- 默认值：null
- 类型：空值或字符串

覆盖要安装的原生模块的操作系统。可接受的值与 package.json 的 `os` 字段相同，该字段来自 `process.platform`。

### `libc`

- 默认值：null
- 类型：空值或字符串

覆盖要安装的原生模块的 libc。可接受的值与 package.json 的 `libc` 字段相同

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

### `install-links`

- 默认值：false
- 类型：布尔值

设置文件时：协议依赖将作为常规依赖打包和安装，而不是创建符号链接。此选项对工作区没有影响。

## 算法

给定一个 `package{dep}` 结构：`A{B,C}, B{C}, C{D}`，npm install 算法产生：

```bash
A
+-- B
+-- C
+-- D
```

也就是说，从 B 到 C 的依赖通过 A 已经导致 C 安装在更高级别的事实来满足。D 仍然安装在顶层，因为它没有任何冲突。

对于 `A{B,C}, B{C,D@1}, C{D@2}`，此算法产生：

```bash
A
+-- B
+-- C
   `-- D@2
+-- D@1
```

因为 B 的 D@1 将安装在顶层，所以 C 现在必须为自己私下安装 D@2。该算法是确定性的，但如果请求以不同顺序安装两个依赖，则可能会生成不同的树。
