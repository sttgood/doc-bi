---
title: package.json
article: false
dir:
  link: true
---

## 描述

本文档是你需要了解的关于 package.json 文件中所需内容的全部内容。它必须是实际的 JSON，而不仅仅是 JavaScript 对象字面量。

本文档中描述的许多行为受到`config` 中描述的配置设置的影响。

## name

如果你打算发布你的包，你 package.json 中最重要的就是名称和版本字段，因为它们是必需的。名称和版本共同构成一个假定完全唯一的标识符。对包的更改应该与版本的更改一起出现。如果你不打算发布你的包，名称和版本字段是可选的。

名字就是你的东西的名字。

一些规则：

- 名称必须少于或等于 214 个字符。这包括范围包的范围。
- 范围包的名称可以以点或下划线开头。没有范围是不允许的。
- 新包的名称中不得包含大写字母。
- 该名称最终成为 URL、命令行参数和文件夹名称的一部分。因此，名称不能包含任何非 URL 安全字符。

一些技巧：

- 不要使用与核心 Node 模块相同的名称。
- 不要在名称中添加 "js" 或 "node"。假设它是 js，因为你正在编写 package.json 文件，并且你可以使用“[engines]”字段指定引擎。（见下文。）
- 该名称可能会作为参数传递给 require()，所以它应该是简短的，但也是合理的描述性的。
- 你可能需要检查 npm 注册表以查看是否已经存在该名称的内容，然后再过分依赖它。<https://www.npmjs.com/>

名称可以选择以范围为前缀，例如 `@myorg/mypackage`。有关详细信息，请参见 [`scope`]。

## version

如果你打算发布你的包，你 package.json 中最重要的就是名称和版本字段，因为它们是必需的。名称和版本共同构成一个假定完全唯一的标识符。对包的更改应该与版本的更改一起出现。如果你不打算发布你的包，名称和版本字段是可选的。

版本必须是 [node-semver] 可解析的，它与 npm 作为依赖打包在一起。（`npm install semver` 自己用。）

## description

在里面放一段描述。这是一个字符串。这有助于人们发现你的包，因为它在 `npm search` 中列出。

## keywords

把关键字放在里面。它是一个字符串数组。这有助于人们发现你的包，因为它在 `npm search` 中列出。

## homepage

项目主页的 URL。

示例：

```json
"homepage": "https://github.com/owner/project#readme"
```

## bugs

项目问题跟踪器的 URL 和/或应向其报告问题的电子邮件地址。这些对于遇到你的包问题的人很有帮助。

它应该如下所示：

```json
{
  "bugs": {
    "url": "https://github.com/owner/project/issues",
    "email": "project@hostname.com"
  }
}
```

你可以指定一个或两个值。如果你只想提供 URL，则可以将 "bugs" 的值指定为简单字符串而不是对象。

如果提供了 URL，`npm bugs` 命令将使用该 URL。

## license

你应该为你的包指定一个许可证，以便人们知道他们如何被允许使用它，以及你对其施加的任何限制。

如果你使用的是 BSD-2-Clause 或 MIT 等通用许可证，请为你正在使用的许可证添加当前的 SPDX 许可证标识符，如下所示：

```json
{
  "license": "BSD-3-Clause"
}
```

你可以检查 [SPDX 许可证 ID 的完整列表]。理想情况下，你应该选择一个获得 [OSI] 批准的产品。

如果你的包在多个通用许可下获得许可，请使用 [SPDX 许可证表达式语法版本 2.0 字符串]，如下所示：

```json
{
  "license": ""
}
```

如果你使用的许可证尚未分配 SPDX 标识符，或者如果你使用的是自定义许可证，请使用如下字符串值：

```json
{
  "license": "SEE LICENSE IN <filename>"
}
```

然后在包的顶层包含一个名为 `<filename>` 的文件。

一些旧包使用许可证对象或包含许可证对象数组的 "licenses" 属性：

```json
// Not valid metadata{  "license" : {    "type" : "ISC",    "url" : "https://opensource.org/licenses/ISC"  }}
// Not valid metadata{  "licenses" : [    {      "type": "MIT",      "url": "https://www.opensource.org/licenses/mit-license.php"    },    {      "type": "Apache-2.0",      "url": "https://opensource.org/licenses/apache2.0.php"    }  ]}
```

这些样式现在已被弃用。相反，请使用 SPDX 表达式，如下所示：

```json
{
  "license": "ISC"
}
```

```json
{
  "license": ""
}
```

最后，如果你不希望在任何条款下授予他人使用私有或未发布包的权利：

```json
{
  "license": "UNLICENSED"
}
```

还可以考虑设置 `"private": true` 以防止意外发布。

## 人物字段：作者、贡献者

"author" 是一个人。"contributors" 是一组人。"person" 是具有 "name" 字段以及可选的 "url" 和 "email" 的对象，如下所示：

```json
{
  "name": "Barney Rubble",
  "email": "b@rubble.com",
  "url": "http://barnyrubble.tumblr.com/"
}
```

或者你可以将所有内容缩短为一个字符串，npm 将为你解析它：

```json
{
  "author": "Barney Rubble <b@rubble.com> "
}
```

email 和 url 都是可选的。

npm 还使用你的 npm 用户信息设置顶层 "maintainers" 字段。

## funding

你可以指定一个包含 URL 的对象，该 URL 提供有关如何帮助资助你的软件包开发的最新信息、字符串 URL 或对象和字符串 URL 的数组：

```json
{
  "funding": {
    "type": "individual",
    "url": "http://example.com/donate"
  }
}
```

```json
{
  "funding": {
    "type": "patreon",
    "url": "https://www.patreon.com/my-account"
  }
}
```

```json
{
  "funding": "http://example.com/donate"
}
```

```json
{
  "funding": [
    {
      "type": "individual",
      "url": "http://example.com/donate"
    },
    "http://example.com/donateAlso",
    {
      "type": "patreon",
      "url": "https://www.patreon.com/my-account"
    }
  ]
}
```

用户可以使用 `npm fund` 子命令列出其项目的所有依赖的 `funding` URL，直接和间接。提供项目名称时，还可以使用快捷方式访问每个资助 URL，例如：`npm fund <projectname>`（当有多个 URL 时，将访问第一个）

## files

可选的 `files` 字段是一个文件模式数组，描述了当你的包作为依赖安装时要包含的条目。文件模式遵循与 `.gitignore` 类似的语法，但相反：包括文件、目录或 glob 模式（`*`、`**/*` 等）将使文件在打包时包含在 tarball 中。省略该字段将使其默认为 `["*"]`，这意味着它将包括所有文件。

一些特殊的文件和目录也被包含或排除，无论它们是否存在于 `files` 数组中（见下文）。

你还可以在包的根目录或子目录中提供 `.npmignore` 文件，这样可以防止包含文件。在你的包的根目录它不会覆盖 "files" 字段，但在子目录中它会。`.npmignore` 文件就像 `.gitignore` 一样工作。如果有 `.gitignore` 文件，而 `.npmignore` 缺失，则使用 `.gitignore` 的内容。

无论设置如何，始终包含某些文件：

- `package.json`
- `README`
- `LICENSE` / `LICENCE`
- "main" 字段中的文件
- "bin" 字段中的文件

`README` & `LICENSE` 可以有任何大小写和扩展名。

默认情况下，某些文件总是被忽略：

- `*.orig`
- `.*.swp`
- `.DS_Store`
- `._*`
- `.git`
- `.hg`
- `.lock-wscript`
- `.npmrc`
- `.svn`
- `.wafpickle-N`
- `CVS`
- `config.gypi`
- `node_modules`
- `npm-debug.log`
- `package-lock.json`（如果你希望发布，请使用 [`npm-shrinkwrap.json`]）
- `pnpm-lock.yaml`
- `yarn.lock`
- `bun.lockb`

如果包含在 `files` glob 中，则可以专门包含大多数这些被忽略的文件。例外情况是：

- `.git`
- `.npmrc`
- `node_modules`
- `package-lock.json`
- `pnpm-lock.yaml`
- `yarn.lock`
- `bun.lockb`

这些不能包括在内。

## exports

"exports" 为 "main" 提供了一种现代替代方案，允许定义多个入口点、在环境之间支持条件入口解析以及阻止除 "exports" 中定义的入口点之外的任何其他入口点。这种封装允许模块作者清楚地定义其包的公共接口。有关更多详细信息，请参阅 [node.js 包入口点文档]

## main

主要字段是模块 ID，它是程序的主要入口点。也就是说，如果你的包名为 `foo`，并且用户安装了它，然后执行 `require`，那么你的主模块的导出对象将被返回。

这应该是相对于包文件夹根目录的模块。

对于大多数模块来说，拥有一个主脚本是最有意义的，而其他的通常不多。

如果未设置 `main`，则默认为包根文件夹中的 `index.js`。

## browser

如果你的模块打算在客户端使用，则应使用浏览器字段而不是主字段。这有助于提示用户它可能依赖于 Node.js 模块中不可用的基础类型。（例如 `window`）

## bin

许多包都有一个或多个可执行文件，他们希望将它们安装到 PATH 中。npm 使这非常容易（事实上，它使用此功能来安装 "npm" 可执行文件。）

要使用它，请在 package.json 中提供一个 `bin` 字段，它是命令名称到本地文件名的映射。全局安装此软件包时，该文件将链接到全局 bins 目录中，或者将创建一个 cmd（Windows 命令文件）来执行 `bin` 字段中的指定文件，因此它可以由 `name` 或 `name.cmd` 运行（在 Windows PowerShell 上）。当此包作为依赖安装在另一个包中时，该文件将被链接到该包可以直接通过 `npm exec` 或通过 `npm run-script` 调用它们时在其他脚本中的名称可用的位置。

例如， myapp 可能有这个：

```json
{
  "bin": {
    "myapp": "bin/cli.js"
  }
}
```

因此，当你安装 myapp 时，如果是类 unix 的操作系统，它会创建一个从 `cli.js` 脚本到 `/usr/local/bin/myapp` 的符号链接，如果是 Windows，它通常会在 `C:\Users\{Username}\AppData\Roaming\npm\myapp.cmd` 创建一个运行 `cli.js` 脚本的 cmd 文件。

如果你有一个可执行文件，并且它的名称应该是包的名称，那么你可以将其作为字符串提供。例如：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "path/to/program"
}
```

将与此相同：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "path/to/program"
  }
}
```

请确保你在 `bin` 中引用的文件以 `#!/usr/bin/env node` 开头，否则脚本将在没有 node 可执行文件的情况下启动！

请注意，你还可以使用 [directories.bin] 设置可执行文件。

有关可执行文件的更多信息，请参见 [文件夹]。

## man

指定单个文件或文件名数组以供 `man` 程序查找。

如果只提供了一个文件，那么无论它的实际文件名如何，它都会被安装为 `man <pkgname>` 的结果。例如：

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}
```

将链接 `./man/doc.1` 文件，使其成为 `man foo` 的目标

如果文件名不以包名开头，那么它就是前缀。所以这：

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/bar.1"]
}
```

将创建文件来执行 `man foo` 和 `man foo-bar`。

Man 文件必须以数字结尾，如果被压缩，还可以选择 `.gz` 后缀。数字指示文件安装到哪个 man 部分。

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/foo.2"]
}
```

将为 `man foo` 和 `man 2 foo` 创建条目

## directories

CommonJS [包] 规范详细介绍了几种使用 `directories` 对象指示包结构的方法。如果你查看 [npm 的 package.json]，你会看到它包含 doc、lib 和 man 的目录。

将来，这些信息可能会以其他创造性的方式使用。

### directories.bin

如果在 `directories.bin` 中指定 `bin` 目录，则该文件夹中的所有文件都将被添加。

由于 `bin` 指令的工作方式，同时指定 `bin` 路径和设置 `directories.bin` 是错误的。如果要指定单个文件，请使用 `bin`，对于现有 `bin` 目录中的所有文件，请使用 `directories.bin`。

### directories.man

一个充满手册页的文件夹。Sugar 通过遍历文件夹生成一个 "man" 数组。

## repository

指定代码所在的位置。这对想要贡献的人很有帮助。如果 git repo 在 GitHub 上，那么 `npm repo` 命令将能够找到你。

像这样做：

```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/npm/cli.git"
  }
}
```

该 URL 应该是一个公开可用的（也许是只读的）URL，可以直接传递给 VCS 程序而无需任何修改。它不应该是你放入浏览器中的 html 项目页面的 URL。是给电脑用的。

对于 GitHub、GitHub gist、Bitbucket 或 GitLab 存储库，你可以使用与 `npm install` 相同的快捷方式语法：

```json
{  "repository": "npm/npm",
  "repository": "github:user/repo",
  "repository": "gist:11081aaa281",
  "repository": "bitbucket:user/repo",
  "repository": "gitlab:user/repo"}
```

如果你的包的 `package.json` 不在根目录中（例如，如果它是 monorepo 的一部分），你可以指定它所在的目录：

```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/npm/cli.git",
    "directory": "workspaces/libnpmpublish"
  }
}
```

## 脚本

"脚本" 属性是一个字典，其中包含在包生命周期中的不同时间运行的脚本命令。键是生命周期事件，值是要在该点运行的命令。

请参阅 [`scripts`] 以了解有关编写包脚本的更多信息。

## 配置

"配置" 对象可用于设置在升级后持续存在的包脚本中使用的配置参数。例如，如果一个包有以下内容：

```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

它还可以有一个引用 `npm_package_config_port` 环境变量的 "start" 命令。

## dependencies

依赖在一个简单的对象中指定，该对象将包名称映射到版本范围。版本范围是一个字符串，它具有一个或多个空格分隔的描述符。依赖也可以使用 tarball 或 git URL 来标识。

请不要将测试工具或转译器或其他 "development" 时间工具放入你的 `dependencies` 对象中。见下文 `devDependencies`。

有关指定版本范围的更多详细信息，请参阅 [semver]。

- `version` 必须与 `version` 完全匹配
- `>version` 必须大于 `version`
- `>=version` 等
- `<version`
- `<=version`
- `~version` "大约相当于版本" 见 [semver]
- `^version` "兼容版本" 见 [semver]
- `1.2.x` 1.2.0、1.2.1 等，但不是 1.3.0
- `http://...` 参见下面的 '作为依赖的 URL'
- `*` 匹配任何版本
- `""`（只是一个空字符串） 与 `*` 相同
- `version1 - version2` 与 `>=version1 <=version2` 相同。
- `range1 || range2` 如果满足 range1 或 range2 则通过。
- `git...` 参见下面的 '作为依赖的 Git URL'
- `user/repo` 参见下面的 'GitHub URL'
- `tag` 标记并发布为 `tag` 的特定版本参见 [`npm dist-tag`]
- `path/path/path` 参见下面的 [本地路径]
- `npm:@scope/pkg@version` 包的自定义别名 请参阅 [`package-spec`]

例如，这些都是有效的：

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl",
    "kpg": "npm:pkg@1.0.0"
  }
}
```

### 作为依赖的 URL

你可以指定一个 tarball URL 来代替版本范围。

此 tarball 将在安装时下载并本地安装到你的包中。

### 作为依赖的 Git URL

Git URL 的形式如下：

```bash
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

`<protocol>` 是 `git`、`git+ssh`、`git+http`、`git+https` 或 `git+file` 之一。

如果提供了 `#<commit-ish>`，它将用于准确克隆该提交。如果 commit-ish 的格式为 `#semver:<semver>`，`<semver>` 可以是任何有效的 semver 范围或确切版本，npm 将在远程存储库中查找与该范围匹配的任何标记或引用，就像它查找注册表依赖一样。如果既没有指定 `#<commit-ish>` 也没有指定 `#semver:<semver>`，则使用默认分支。

示例：

```bash
git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git#v1.0.27
```

从 `git` 存储库安装时，`package.json` 中某些字段的存在将导致 npm 认为它需要执行构建。为此，你的存储库将被克隆到一个临时目录中，安装其所有 deps，运行相关脚本，并打包并安装生成的目录。

如果你的 git 依赖使用 `workspaces`，或者如果存在以下任何脚本，则会发生此流程：

- `build`
- `prepare`
- `prepack`
- `preinstall`
- `install`
- `postinstall`

如果你的 git 存储库包含预构建的工件，你可能希望确保没有定义上述脚本，否则将为每次安装重新构建你的依赖。

### GitHub URL

从版本 1.1.65 开始，你可以将 GitHub URL 引用为 "foo"："user/foo-project"。与 git URL 一样，可以包含 `commit-ish` 后缀。例如：

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature\/branch"
  }
}
```

### 本地路径

从 2.0.0 版开始，你可以提供包含包的本地目录的路径。本地路径可以使用 `npm install -S` 或 `npm install --save` 保存，使用以下任何一种形式：

```bash
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

在这种情况下，它们将被规范化为相对路径并添加到你的 `package.json`。例如：

```json
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

此功能对于本地离线开发和创建需要 npm 安装（你不想访问外部服务器）的测试很有帮助，但在将包发布到公共注册表时不应使用。

注意：在这种情况下运行 `npm install` 时，本地路径链接的包不会安装自己的依赖。你必须从本地路径本身运行 `npm install`。

## devDependencies

如果有人计划在他们的程序中下载和使用你的模块，那么他们可能不想或不需要下载和构建你使用的外部测试或文档框架。

在这种情况下，最好将这些附加项映射到 `devDependencies` 对象中。

这些东西将在从包的根目录执行 `npm link` 或 `npm install` 时安装，并且可以像任何其他 npm 配置参数一样进行管理。有关该主题的更多信息，请参见 [`config`]。

对于非平台特定的构建步骤，例如将 CoffeeScript 或其他语言编译为 JavaScript，请使用 `prepare` 脚本来执行此操作，并将所需的包设置为 devDependency。

例如：

```json
{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepare": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

`prepare` 脚本将在发布之前运行，这样用户就可以使用该功能，而无需他们自己编译。在开发模式下（即本地运行 `npm install`），它也会运行这个脚本，这样你就可以轻松地测试它。

## peerDependencies

在某些情况下，你想表达你的包与宿主工具或库的兼容性，而不一定要做这个宿主的 `require`。这通常被称为插件。值得注意的是，你的模块可能会暴露主机文档所期望和指定的特定接口。

例如：

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

这确保你的包 `tea-latte` 只能与主机包 `tea` 的第二个主要版本一起安装。`npm install tea-latte` 可能会产生以下依赖图：

```bash
├── tea-latte@1.3.5
└── tea@2.2.0
```

在 npm 版本 3 到 6 中，`peerDependencies` 不会自动安装，如果在树中发现无效版本的对等依赖，则会触发警告。从 npm v7 开始，默认安装 peerDependencies。

如果无法正确解析树，则尝试安装另一个具有冲突要求的插件可能会导致错误。出于这个原因，请确保你的插件要求尽可能广泛，而不是将其锁定到特定的补丁版本。

假设主机符合 [semver]，只有主机包主要版本的更改会破坏你的插件。因此，如果你使用过每个 1.x 版本的主机包，请使用 `"^1.0"` 或 `"1.x"` 来表达这一点。如果你依赖 1.5.2 中引入的功能，请使用 `"^1.5.2"`。

## peerDependenciesMeta

`peerDependenciesMeta` 字段用于为 npm 提供有关如何使用对等依赖的更多信息。具体来说，它允许对等依赖标记为可选。Npm 不会自动安装可选的对等依赖。这使你可以集成各种主机包并与之交互，而无需安装所有主机包。

例如：

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x",
    "soy-milk": "1.2"
  },
  "peerDependenciesMeta": {
    "soy-milk": {
      "optional": true
    }
  }
}
```

## bundleDependencies

这定义了在发布包时将打包的包名称数组。

如果你需要在本地保存 npm 包或通过单个文件下载使它们可用，你可以通过在 `bundleDependencies` 数组中指定包名称并执行 `npm pack` 来将包打包在一个 tarball 文件中。

例如：

如果我们像这样定义一个 package.json：

```json
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundleDependencies": ["renderized", "super-streams"]
}
```

我们可以通过运行 `npm pack` 来获取 `awesome-web-framework-1.0.0.tgz` 文件。此文件包含依赖 `renderized` 和 `super-streams`，可以通过执行 `npm install awesome-web-framework-1.0.0.tgz` 将其安装到新项目中。请注意，包名称不包括任何版本，因为该信息在 `dependencies`.1 中指定。

如果这拼写为 `"bundledDependencies"`，那么也很荣幸。

或者，可以将 `"bundleDependencies"` 定义为布尔值。`true` 的值将打包所有依赖，`false` 的值将打包无。

## optionalDependencies

如果可以使用依赖，但如果找不到或无法安装，你希望 npm 继续，那么你可以将其放在 `optionalDependencies` 对象中。这是包名称到版本或 URL 的映射，就像 `dependencies` 对象一样。不同之处在于构建失败不会导致安装失败。运行 `npm install --omit=optional` 将阻止安装这些依赖。

处理缺乏依赖仍然是你的程序的责任。例如，像这样：

```js
try {  var foo = require;  var fooVersion = require.version;} catch  {  foo = null;}if ) {  foo = null;}
// .. then later in your program ..
if  {  foo.doFooThings();}
```

`optionalDependencies` 中的条目将覆盖 `dependencies` 中的同名条目，因此通常最好只放在一个位置。

## overrides

如果你需要对依赖的依赖进行特定更改，例如用已知安全问题替换依赖的版本，用 fork 替换现有依赖，或者确保在任何地方都使用相同版本的包，那么你可以添加一个覆盖。

覆盖提供了一种将依赖树中的包替换为另一个版本或完全替换为另一个包的方法。这些更改的范围可以根据需要具体或模糊。

仅在项目的根 `package.json` 文件中考虑覆盖。依赖树解析中不考虑已安装依赖（包括 [workspaces]）中的覆盖。已发布的包可以通过固定依赖或使用 [`npm-shrinkwrap.json`] 文件来决定其解决方案。

为了确保包 `foo` 始终安装为版本 `1.0.0`，无论你的依赖依赖什么版本：

```json
{
  "overrides": {
    "foo": "1.0.0"
  }
}
```

以上是简写符号，完整的对象形式可用于允许覆盖包本身以及包的子项。这将导致 `foo` 始终为 `1.0.0`，同时也使 `bar` 在 `foo` 以外的任何深度也成为 `1.0.0`：

```json
{
  "overrides": {
    "foo": {
      ".": "1.0.0",
      "bar": "1.0.0"
    }
  }
}
```

当它是包 `bar` 的子（或孙子，或曾孙等）时，仅将 `foo` 覆盖为 `1.0.0`：

```json
{
  "overrides": {
    "bar": {
      "foo": "1.0.0"
    }
  }
}
```

键可以嵌套到任意长度。仅当 `foo` 是 `bar` 的子级且仅当 `bar` 是 `baz` 的子级时才覆盖 `foo`：

```json
{
  "overrides": {
    "baz": {
      "bar": {
        "foo": "1.0.0"
      }
    }
  }
}
```

覆盖的键还可以包括版本或版本范围。将 `foo` 覆盖为 `1.0.0`，但仅当它是 `bar@2.0.0` 的子代时：

```json
{
  "overrides": {
    "bar@2.0.0": {
      "foo": "1.0.0"
    }
  }
}
```

你不能为你直接依赖的包设置覆盖，除非依赖和覆盖本身共享完全相同的规范。为了使这个限制更容易处理，覆盖也可以定义为对直接依赖的规范的引用，方法是在你希望版本匹配的包的名称前面加上 `$`。

```json
{
  "dependencies": {
    "foo": "^1.0.0"
  },
  "overrides": {
    // BAD, will throw an EOVERRIDE error
    // "foo": "^2.0.0"
    // GOOD, specs match so override is allowed
    // "foo": "^1.0.0"
    // BEST, the override is defined as a reference to the dependency
    "foo": "$foo",
    // the referenced package does not need to match the overridden one
    "bar": "$foo"
  }
}
```

## engines

你可以指定你的东西适用的 node 版本：

```json
{
  "engines": {
    "node": ">=0.10.3 <15"
  }
}
```

并且，与依赖一样，如果你不指定版本（或者如果你指定 "*" 作为版本），那么任何版本的 node 都可以。

你还可以使用 "engines" 字段来指定哪些版本的 npm 能够正确安装你的程序。例如：

```json
{
  "engines": {
    "npm": "~1.0.20"
  }
}
```

除非用户设置了 [`engine-strict` 配置] 标志，否则此字段仅是建议性的，并且只会在你的软件包作为依赖安装时产生警告。

## os

你可以指定你的模块将在哪些操作系统上运行：

```json
{
  "os": ["darwin", "linux"]
}
```

你也可以阻止而不是允许操作系统，只需在被阻止的操作系统前加上 '!'：

```json
{
  "os": ["!win32"]
}
```

主机操作系统由 `process.platform` 决定

它既可以阻止也可以允许一个项目，尽管没有任何好的理由这样做。

## cpu

如果你的代码仅在某些 cpu 架构上运行，你可以指定哪些。

```json
{
  "cpu": ["x64", "ia32"]
}
```

与 `os` 选项一样，你也可以阻止架构：

```json
{
  "cpu": ["!arm", "!mips"]
}
```

主机架构由 `process.arch` 决定

## libc

如果你的代码仅在某些版本的 libc 中运行或构建，你可以指定哪些版本。此字段仅在 `os` 为 `linux` 时适用。

```json
{
  "os": "linux",
  "libc": "glibc"
}
```

## devEngines

`devEngines` 字段可帮助在代码库上工作的工程师使用相同的工具。

你可以在 `package.json` 中指定 `devEngines` 属性，该属性将在 `install`、`ci` 和 `run` 命令之前运行。

> 注意：`engines` 和 `devEngines` 在对象形状上有所不同。它们的功能也大不相同。`engines` 旨在当依赖使用与其正在使用的项目不同的 npm 或节点版本时提醒用户，而 `devEngines` 用于提醒与项目源代码交互的人员。

`devEngines` 属性下支持的键为 `cpu`、`os`、`libc`、`runtime` 和 `packageManager`。每个属性都可以是一个对象或一个对象数组。对象必须包含 `name`，并且可以选择指定 `version` 和 `onFail`。`onFail` 可以是 `warn`、`error` 或 `ignore`，如果未定义，则与 `error` 具有相同的值。`npm` 将假定你正在使用 `node` 运行。以下是项目示例，如果环境不是 `node` 和 `npm`，则该项目将失败。如果将 `runtime.name` 或 `packageManager.name` 设置为任何其他字符串，它将在 npm CLI 中失败。

```json
{
  "devEngines": {
    "runtime": {
      "name": "node",
      "onFail": "error"
    },
    "packageManager": {
      "name": "npm",
      "onFail": "error"
    }
  }
}
```

## private

如果你在你的 package.json 中设置了 `"private": true`，那么 npm 将拒绝发布它。

这是一种防止意外发布私有存储库的方法。如果你想确保给定的包只发布到特定的注册表（例如，内部注册表），请使用下面描述的 `publishConfig` 字典在发布时覆盖 `registry` 配置参数。

## publishConfig

这是一组将在发布时使用的配置值。如果你想设置标签、注册表或访问权限，它会特别方便，这样你就可以确保给定的包没有被标记为 "latest"、发布到全局公共注册表或默认情况下作用域模块是私有的。

请参阅 [`config`] 以查看可以覆盖的配置选项列表。

## workspaces

可选的 `workspaces` 字段是一个文件模式数组，描述了安装客户端应该查找的本地文件系统中的位置，以查找需要符号链接到顶层 `node_modules` 文件夹的每个 [工作区]。

它可以描述要用作工作区的文件夹的直接路径，也可以定义将解析为这些相同文件夹的 glob。

在以下示例中，位于文件夹 `./packages` 内的所有文件夹都将被视为工作区，只要它们包含有效的 `package.json` 文件：

```json
{
  "name": "workspace-example",
  "workspaces": ["./packages/*"]
}
```

有关更多示例，请参见 [`workspaces`]。

## DEFAULT VALUES

npm 将根据包内容默认一些值。

- `"scripts": {"start": "node server.js"}`

  如果你的包根目录中有 `server.js` 文件，那么 npm 将默认 `start` 命令为 `node server.js`。

- `"scripts":{"install": "node-gyp rebuild"}`

  如果你的包的根目录中有一个 `binding.gyp` 文件并且你没有定义一个 `install` 或 `preinstall` 脚本，npm 将默认 `install` 命令使用 node-gyp 编译。

- `"contributors": [...]`

  如果你的包的根目录中有一个 `AUTHORS` 文件，npm 会将每一行视为 `Name <email>` 格式，其中 email 和 url 是可选的。以 `#` 开头或空白的行将被忽略。
