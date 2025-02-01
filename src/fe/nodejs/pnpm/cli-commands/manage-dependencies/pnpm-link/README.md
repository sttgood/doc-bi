---
title: pnpm link
article: false
dir:
  order: 5
  link: true
---

```
pnpm link
别名: ln
```

使当前本地包可在系统范围内或其他位置访问。

```text
pnpm link <dir|pkg name>
pnpm link
```



## 配置项

### `pnpm link <dir>`

将 `<dir>` 目录中的软件包链接到执行此命令的软件包的 `node_modules`。

> 例如，如果你在 `~/projects/foo` 下，并且执行 `pnpm link ../bar`，那么将在 `foo/node_modules/bar` 中创建指向 `bar` 的链接。

### `pnpm link`

将执行此命令的位置的包链接到全局 `node_modules`，这样它可以通过 `pnpm link <pkg>` 从另一个包中引用。 此外，如果软件包具有 `bin` 字段，则软件包的二进制文件将在系统范围内可用。

### `pnpm link <pkg>`

将指定的软件包 (`<pkg>`) 从全局的 `node_modules` 链接到执行此命令的软件包的`node_modules`。

## 用例

### 将已安装的软件包替换为本地版本

假设你有一个使用 `foo` 包的项目。 你想要对 `foo` 进行更改并在你的项目中测试它们。 在这种情况下，你可以使用 `pnpm link` 将 foo 的本地版本链接到你的项目。

```bash
cd ~/projects/foo
pnpm install # 安装 foo 的依赖
pnpm link # 全局链接 foo
cd ~/projects/my-project
pnpm link foo # 链接 foo 到 my-project
```



你也可以将软件包从一个目录链接到另一个目录，而不使用全局的 `node_modules` 目录：

```bash
cd ~/projects/foo
pnpm install # 安装 foo 的依赖
cd ~/projects/my-project
pnpm link ~/projects/foo # 链接 foo 到 my-project
```



### 全局添加二进制文件

如果你正在开发包含二进制文件的包，例如命令行工具，你可以使用 `pnpm link` 使二进制文件在整个系统范围内可用。 这与使用 `pnpm install -g foo` 相同，但它将使用 `foo` 的本地版本，而不是从注册源下载。

请记住，仅当包的 `package.json` 中有 `bin` 字段时，二进制文件才可用。

```bash
cd ~/projects/foo
pnpm install # 安装 foo 的依赖
pnpm link # 全局链接 foo
```



## `pnpm link` 和使用 `file:` 协议有什么区别？

当你使用 `pnpm link`时，链接的包是从源代码进行符号链接的。 你可以修改链接包的源代码，所做的更改将反映在你的项目中。 使用这种方法 pnpm 将不会安装链接包的依赖项，你必须在源代码中手动安装它们。 当你必须对链接包使用特定的包管理器时，这可能会很有用，例如，如果你想对链接包使用 npm ，但你的项目使用 pnpm。

当你在 `dependencies` 中使用 `file:` 协议时，被链接的软件包将硬链接到你的项目的 `node_modules` 中，你可以修改被链接软件包的源代码，并且这些修改将反映在你的项目中。 使用此方法，pnpm 还会安装链接包的依赖项，覆盖链接包的 `node_modules`。

提示

在处理 **peer dependencies（对等依赖）* 时，建议使用 `file:` 协议。 它更好地解决了项目依赖项中的对等依赖项，确保链接的依赖项正确使用主项目中指定的依赖项版本，从而实现更加一致和预期的行为。

| 功能                         | `pnpm link`                      | `file:` 协议                      |
| ---------------------------- | -------------------------------- | --------------------------------- |
| 符号链接/硬链接              | 符号链接                         | 硬链接                            |
| 反映源代码修改               | 是                               | 是                                |
| 安装链接包的依赖项           | 否（需要手动安装）               | 是（覆盖链接包的 `node_modules`） |
| 使用不同的包管理器来实现依赖 | 可以（例如，对链接的包使用 npm） | 不可以，它将使用 pnpm             |