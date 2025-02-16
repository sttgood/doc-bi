---
title: npm version
article: false
order: 1
---

## 概要

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
alias: verison
```



## 配置

### `allow-same-version`

- 默认值：false
- 类型：布尔值

防止在使用 `npm version` 将新版本设置为与当前版本相同的值时引发错误。



### `commit-hooks`

- 默认值：true
- 类型：布尔值

使用 `npm version` 命令时运行 git commit hooks。



### `git-tag-version`

- 默认值：true
- 类型：布尔值

使用 `npm version` 命令时标记提交。将此设置为 false 会导致根本不进行任何提交。



### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。



### `preid`

- 默认值：""
- 类型：字符串

"预发布标识符" 用作 semver 的 "prerelease" 部分的前缀。就像 `1.2.0-rc.8` 中的 `rc`。



### `sign-git-tag`

- 默认值：false
- 类型：布尔值

如果设置为 true，则 `npm version` 命令将使用 `-s` 标记版本以添加签名。

请注意，git 要求你在 git 配置中设置 GPG 密钥才能正常工作。



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



### `workspaces-update`

- 默认值：true
- 类型：布尔值

如果设置为 true，npm cli 将在可能更改安装到 `node_modules` 文件夹的工作区的操作之后运行更新。



### `include-workspace-root`

- 默认值：false
- 类型：布尔值

为命令启用工作区时包括工作区根。

当为 false 时，通过 `workspace` 配置指定单个工作区，或通过 `workspaces` 标志指定所有工作区，将导致 npm 仅在指定的工作区上运行，而不是在根项目上运行。

此值不会导出到子进程的环境中。



## 描述

在包目录中运行此命令以提升版本并将新数据写回 `package.json`、`package-lock.json` 和 `npm-shrinkwrap.json`（如果存在）。

`newversion` 参数应该是有效的 semver 字符串、[semver.inc] 的有效第二个参数（`patch`、`minor`、`major`、`prepatch`、`preminor`、`premajor`、`prerelease` 之一）或 `from-git`。在第二种情况下，现有版本将在指定字段中增加 1。`from-git` 将尝试读取最新的 git 标签，并将其用作新的 npm 版本。

如果在 git repo 中运行，它还将创建一个版本提交和标签。此行为由 `git-tag-version` 控制（见下文），并且可以通过运行 `npm --no-git-tag-version version` 在命令行上禁用。如果工作目录不干净，它将失败，除非设置了 `-f` 或 `--force` 标志。

如果提供了 `-m` 或 [`--message` 配置] 选项，npm 将在创建版本提交时将其用作提交消息。如果 `message` 配置包含 `%s` 那么它将被替换为生成的版本号。例如：



```bash
npm version patch -m "Upgrade to %s for reasons"
```

如果设置了 [`sign-git-tag` 配置]，那么标签将使用 `-s` 标志对 git 进行签名。请注意，你必须在 git 配置中设置默认 GPG 密钥才能正常工作。例如：



```bash
$ npm config set sign-git-tag true$ npm version patch
You need a passphrase to unlock the secret key foruser: "isaacs  <i@izs.me>"2048-bit RSA key, ID 6C481CF6, created 2010-08-31
Enter passphrase:
```

如果 `preversion`、`version` 或 `postversion` 在 package.json 的 `scripts` 属性中，它们将作为运行 `npm version` 的一部分执行。

具体执行顺序如下：

1. 在我们开始之前检查以确保 git 工作目录是干净的。你的脚本可能会在以后的步骤中将文件添加到提交中。如果设置了 `--force` 标志，则跳过此步骤。
2. 运行 `preversion` 脚本。这些脚本可以访问 package.json 中的旧 `version`。一个典型的用途是在部署之前运行你的完整测试套件。你要添加到提交中的任何文件都应使用 `git add` 显式添加。
3. 根据要求（`patch`、`minor`、`major` 等）在 `package.json` 中撞击 `version`。
4. 运行 `version` 脚本。这些脚本可以访问 package.json 中的新 `version`（例如，它们可以将其合并到生成文件的文件头中）。同样，脚本应该使用 `git add` 显式地将生成的文件添加到提交中。
5. 提交并标记。
6. 运行 `postversion` 脚本。使用它来清理文件系统或自动推送提交和/或标签。

举个例子：



```json
{
  "scripts": {
    "preversion": "npm test",
    "version": "npm run build && git add -A dist",
    "postversion": "git push && git push --tags && rm -rf build/temp"
  }
}
```

这将运行你的所有测试并仅在它们通过时继续。然后运行你的 `build` 脚本，并将 `dist` 目录中的所有内容添加到提交中。提交后，它将新的提交和标签推送到服务器，并删除 `build/temp` 目录。

## 通义

`npm version` 是 npm（Node Package Manager）提供的一个命令，用于管理和更新项目的版本号。它不仅可以修改 `package.json` 文件中的版本字段，还可以创建新的 Git 标签和提交，以记录版本更改。以下是关于 `npm version` 的详细解释：

### 基本用法

#### 更新版本号
```bash
npm version <newversion>
```

这里的 `<newversion>` 可以是具体的版本号（如 `1.2.3`），也可以是语义化版本的增量类型（如 `patch`, `minor`, `major`）。`npm version` 会根据你指定的方式自动更新版本号。

### 版本增量类型

- **`patch`**: 仅修复错误时使用，增加补丁版本号（如从 `1.2.3` 到 `1.2.4`）。
  
  ```bash
  npm version patch
  ```

- **`minor`**: 添加新功能但保持向后兼容时使用，增加次要版本号（如从 `1.2.3` 到 `1.3.0`）。
  
  ```bash
  npm version minor
  ```

- **`major`**: 发布不兼容的 API 更改时使用，增加主版本号（如从 `1.2.3` 到 `2.0.0`）。
  
  ```bash
  npm version major
  ```

### 选项和参数

`npm version` 提供了多个选项来控制其行为：

#### 控制 Git 操作
- **`--no-git-tag-version`**: 不创建 Git 标签。
  
  ```bash
  npm version patch --no-git-tag-version
  ```

- **`--git-tag-version`**: 创建 Git 标签，默认开启。

- **`--force` 或 `-f`**: 强制执行版本更新，即使工作目录中有未提交的更改。
  
  ```bash
  npm version patch --force
  ```

- **`--message` 或 `-m`**: 自定义 Git 提交信息。默认信息格式为 `v<newversion>`。
  
  ```bash
  npm version patch -m "chore(release): %s"
  ```

#### 控制输出
- **`--json`**: 以 JSON 格式输出结果。
  
  ```bash
  npm version patch --json
  ```

#### 控制包范围
- **`--workspace=<workspace-name>`**: 在特定工作区中更新版本。
  
  ```bash
  npm version patch --workspace=my-workspace
  ```

- **`--workspaces`**: 在所有工作区中更新版本。
  
  ```bash
  npm version patch --workspaces
  ```

### 高级用法

#### 回滚版本
如果你不小心发布了错误版本，可以使用以下命令回滚到之前的版本：

```bash
npm version rollback
```

这将恢复到上一次发布的版本，并删除当前的 Git 标签。

#### 定制发布流程
你可以结合 `npm scripts` 和 `npm version` 来定制更复杂的发布流程。例如，在每次发布时运行测试、构建等任务：

```json
{
  "scripts": {
    "preversion": "npm test",
    "version": "npm run build",
    "postversion": "git push && git push --tags"
  }
}
```

在这个例子中：
- `preversion`: 在版本更新前运行测试。
- `version`: 在版本更新时运行构建脚本。
- `postversion`: 在版本更新后推送代码和标签到远程仓库。

### 示例

假设你正在管理一个 Node.js 项目，并且想要更新版本号：

1. **更新小版本号**：
   ```bash
   npm version minor
   ```

2. **更新补丁版本号并自定义提交信息**：
   ```bash
   npm version patch -m "fix: bump version to %s"
   ```

3. **在所有工作区中更新版本**：
   ```bash
   npm version patch --workspaces
   ```

4. **只更新特定工作区的版本**：
   ```bash
   npm version patch --workspace=my-workspace
   ```

5. **强制更新版本号，即使有未提交的更改**：
   ```bash
   npm version patch --force
   ```

6. **更新版本号但不创建 Git 标签**：
   ```bash
   npm version patch --no-git-tag-version
   ```

7. **以 JSON 格式输出版本更新信息**：
   ```bash
   npm version patch --json
   ```

### 注意事项

- **Git 状态**：确保你的工作目录干净，没有未提交的更改。否则，`npm version` 可能会失败或需要使用 `--force` 参数。
- **自动化发布**：考虑使用 CI/CD 工具（如 GitHub Actions, Travis CI）与 `npm version` 结合，实现自动化的版本管理和发布流程。
- **多包管理**：对于包含多个包的工作区项目，合理利用 `--workspace` 和 `--workspaces` 参数来管理各个包的版本。

### 总结

`npm version` 是一个强大的工具，它不仅简化了版本管理的过程，还通过集成 Git 操作帮助你更好地记录和追踪项目的发布历史。通过理解上述选项和参数，你可以更高效地管理和发布你的 npm 包，确保每个版本都能被准确地记录和追溯。无论是个人项目还是团队协作，掌握 `npm version` 都能显著提升开发效率和项目管理的质量。

:::
