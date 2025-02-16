---
title: npm link
article: false
dir:
  collapsible: false
  link: true
---

:::tabs

@tab 官方-DOC

## 概要

```bash
npm link <package-spec>
alias: ln
```

## 描述

这对于安装你自己的东西很方便，这样你就可以在它上面工作和迭代测试，而不必不断地重建。

包链接是一个两步过程。

首先，没有参数的包文件夹中的 `npm link` 将在全局文件夹 `{prefix}/lib/node_modules/<package>` 中创建一个符号链接，该符号链接链接到执行 `npm link` 命令的包。它还将封装中的任何垃圾箱链接到 `{prefix}/bin/{name}`。请注意，`npm link` 使用全局前缀（参见 `npm prefix -g` 的值）。

接下来，在某个其他位置，`npm link package-name` 将创建一个从全局安装的 `package-name` 到当前文件夹的 `node_modules/` 的符号链接。

请注意，`package-name` 取自 `package.json`，而不是目录名称。

包名称可以选择以范围为前缀。见 `scope`。范围必须以 @ 符号开头，后跟斜杠。

在为 `npm publish` 创建 tarball 时，如果链接包包含在 `bundleDependencies` 中，则通过解析符号链接，链接的包将 "snapshotted" 恢复到其当前状态。

例如：



```bash
cd ~/projects/node-redis    # go into the package directory
npm link                    # creates global link
cd ~/projects/node-bloggy   # go into some other package directory.
npm link redis              # link-install the package
```

现在，对 `~/projects/node-redis` 的任何更改都将反映在 `~/projects/node-bloggy/node_modules/node-redis/` 中。请注意，链接应该指向包名称，而不是该包的目录名称。

你也可以将这两个步骤合二为一。例如，以更短的方式执行上述用例：



```bash
cd ~/projects/node-bloggy  # go into the dir of your main project
npm link ../node-redis     # link the dir of your dependency
```

第二行相当于做：



```bash
(cd ../node-redis; npm link)
npm link redis
```

即它首先创建一个全局链接，然后将全局安装目标链接到你项目的 `node_modules` 文件夹中。

请注意，在这种情况下，你指的是目录名称 `node-redis`，而不是包名称 `redis`。

如果你的链接包有范围（参见 `scope`），你的链接命令必须包含该范围，例如

```bash
npm link @myorg/privatepackage
```

## 警告

请注意，默认情况下，以这种方式链接的包依赖不会保存到 `package.json`，假设目的是让链接代表常规的非链接依赖。否则，例如，如果你依赖 `redis@^3.0.1`，并运行 `npm link redis`，它将用 `file:../path/to/node-redis` 替换 `^3.0.1` 依赖，这可能是你不想要的！此外，如果你项目中的其他用户或开发者的文件夹设置与你的文件夹不完全相同，他们也会遇到问题。

如果要添加新的依赖作为链接，则应通过运行 `npm install <dep> --package-lock-only` 将其添加到相关元数据中。

如果要将 `file:` 引用保存在 `package.json` 和 `package-lock.json` 文件中，可以使用 `npm link <dep> --save` 来执行此操作。

## 工作区使用情况

`npm link <pkg> --workspace <name>` 将相关包链接为指定工作区的依赖。请注意，如果没有冲突的依赖，它实际上可能链接到父项目的 `node_modules` 文件夹。

`npm link --workspace <name>` 将创建到指定工作区的全局链接。

## 配置

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

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 文件夹。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`

### `install-strategy`

- 默认值："hoisted"
- 类型："hoisted"、"nested"、"shallow" 或 "linked"

设置在 node_modules 中安装包的策略。提升（默认）：在顶层安装非复制，并在目录结构中根据需要复制。nested:（以前的 --legacy-bundling）就地安装，无需提升。浅层（以前的 --global-style）只在顶层安装直接的 deps。linked:（实验）安装在 node_modules/.store 中，链接到位，未提升。



### `legacy-bundling`

- 默认值：false
- 类型：布尔值
- DEPRECATED:此选项已被 `--install-strategy=nested` 弃用

不要在 `node_modules` 中提升包安装，而是以与它们所依赖的方式相同的方式安装包。这可能会导致非常深的目录结构和重复的软件包安装，因为没有数据去重。设置 `--install-strategy=nested`。



### `global-style`

- 默认值：false
- 类型：布尔值
- DEPRECATED:此选项已被 `--install-strategy=shallow` 弃用

仅在顶层 `node_modules` 中安装直接依赖，但提升更深层次的依赖。设置 `--install-strategy=shallow`。



### `strict-peer-deps`

- 默认值：false
- 类型：布尔值

如果设置为 `true`，而 `--legacy-peer-deps` 没有设置，那么任何冲突的 `peerDependencies` 都将被视为安装失败，即使 npm 可以根据非对等依赖合理地猜测出适当的解决方案。

默认情况下，依赖图中的冲突 `peerDependencies` 将使用最近的非对等依赖规范来解决，即使这样做会导致某些包收到超出其包的 `peerDependencies` 对象中设置的范围的对等依赖。

当执行这样的覆盖时，会打印一条警告，解释冲突和涉及的包。如果设置了 `--strict-peer-deps`，则此警告被视为失败。



### `package-lock`

- 默认值：true
- 类型：布尔值

如果设置为 false，则安装时忽略 `package-lock.json` 文件。如果 `save` 为真，这也将阻止写入 `package-lock.json`。



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



### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



### `audit`

- 默认值：true
- 类型：布尔值

当 "true" 将审计报告与当前 npm 命令一起提交到默认注册表和为范围配置的所有注册表时。有关提交内容的详细信息，请参阅 `npm audit` 的文档。



### `bin-links`

- 默认值：true
- 类型：布尔值

告诉 npm 为包的可执行文件创建符号链接（或 Windows 上的 `.cmd` 垫片）。

设置为 false 使其不执行此操作。这可以用来解决某些文件系统不支持符号链接的事实，即使在表面上是 Unix 系统上也是如此。



### `fund`

- 默认值：true
- 类型：布尔值

当 "true" 在每个 `npm install` 的末尾显示消息时，确认正在寻找资金的依赖的数量。详见 `npm fund`。



### `dry-run`

- 默认值：false
- 类型：布尔值

表示你不希望 npm 进行任何更改，并且它应该只报告它会做的事情。这可以传递到任何修改本地安装的命令中，例如 `install`、`update`、`dedupe`、`uninstall` 以及 `pack` 和 `publish`。

注意：其他网络相关命令不支持此功能，例如 `dist-tags`、`owner` 等。



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



@tab AI-DOC

`npm link` 是 npm 提供的一个非常有用的命令，主要用于开发和测试本地包或模块。它允许你创建一个符号链接（symbolic link），将全局安装的包与本地项目关联起来，或者在两个本地项目之间建立链接。这种方式使得开发者可以在不实际发布包的情况下进行测试和调试，极大地提高了开发效率。

### 功能概述

`npm link` 主要用于以下几种场景：

1. **本地开发**：当你正在开发一个 npm 包时，可以使用 `npm link` 将该包链接到全局环境中，然后在其他项目中通过 `npm link <package-name>` 引用这个本地包。
2. **项目间依赖**：如果你有多个本地项目，并且这些项目之间存在依赖关系，你可以使用 `npm link` 在它们之间建立符号链接，从而实现快速迭代和测试。
3. **插件开发**：对于那些需要频繁更新并测试的插件或库，`npm link` 提供了一种便捷的方式来同步更改。

### 使用方法

#### 创建全局链接

首先，在你要开发的包所在的目录下运行 `npm link`，这会在全局环境中创建一个符号链接指向当前项目的文件夹：

```bash
cd /path/to/your/package
npm link
```

这条命令会做两件事：
- 它会在全局路径（通常是 `/usr/local/lib/node_modules` 或类似的路径）下创建一个符号链接，指向你的本地包。
- 它还会在你的包目录中创建一个 `.npm-link` 文件，记录下这次链接的信息。

#### 在另一个项目中引用本地包

接下来，在你需要使用这个本地包的另一个项目中，运行 `npm link <package-name>` 来引用它：

```bash
cd /path/to/another/project
npm link your-package-name
```

这条命令会在第二个项目的 `node_modules` 文件夹中创建一个符号链接，指向你之前创建的全局链接。这样，任何对本地包的更改都会立即反映在这个项目中，而无需重新安装或发布包。

#### 取消链接

当你不再需要这个链接时，可以通过以下命令取消链接：

- **取消全局链接**：在原包目录中运行 `npm unlink`，这将移除全局路径中的符号链接。
  
  ```bash
  cd /path/to/your/package
  npm link
  ```

- **取消项目中的链接**：在引用了本地包的项目中运行 `npm unlink <package-name>`，这将移除 `node_modules` 中的符号链接。
  
  ```bash
  cd /path/to/another/project
  npm unlink your-package-name
  ```

### 注意事项

- **版本控制**：确保不要将 `.npm-link` 文件提交到版本控制系统中，因为它只适用于本地开发环境。
- **依赖关系**：如果本地包本身也有依赖项，确保这些依赖项正确安装，以避免潜在的问题。
- **路径问题**：在 Windows 系统上，符号链接的行为可能有所不同，确保你了解操作系统特定的行为。
- **开发环境**：`npm link` 主要用于开发和测试阶段，不适合用于生产环境部署。
- **权限问题**：有时你可能会遇到权限问题，尤其是在全局路径上创建符号链接时，请确保你有足够的权限。

### 实际应用场景

1. **本地包开发**：当你正在开发一个新的 npm 包时，可以使用 `npm link` 快速测试和调试，而不需要每次修改后都发布新版本。
2. **多项目协作**：如果你有多个项目相互依赖，`npm link` 允许你在这些项目之间快速迭代和测试，而无需每次都重新安装依赖。
3. **插件和库开发**：对于那些需要频繁更新并测试的插件或库，`npm link` 提供了一种便捷的方式来同步更改，确保所有相关项目都能即时看到最新的代码。

### 示例

假设你有一个名为 `my-library` 的本地 npm 包，并且你想在一个名为 `my-app` 的应用中测试这个库：

1. **创建全局链接**：
   ```bash
   cd /path/to/my-library
   npm link
   ```

2. **在应用中引用本地库**：
   ```bash
   cd /path/to/my-app
   npm link my-library
   ```

3. **取消链接**：
   - **取消全局链接**：
     ```bash
     cd /path/to/my-library
     npm unlink
     ```
   - **取消应用中的链接**：
     ```bash
     cd /path/to/my-app
     npm unlink my-library
     ```

### 总结

`npm link` 是一个强大的工具，它帮助你在开发和测试阶段更高效地管理本地包和项目之间的依赖关系。通过合理利用这个命令，你可以显著提升开发效率，减少重复劳动，并确保项目的稳定性和一致性。无论是进行本地包开发还是多项目协作，掌握 `npm link` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm link` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来利用 `npm link` 的结果也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

@tab link vs install

`npm link` 和 `npm install` 是 npm 提供的两种不同的包管理方式，它们在用途、行为和应用场景上有显著的区别。理解这两者的差异可以帮助你更好地选择适合当前需求的工具。

### npm install

#### 功能概述
`npm install` 是最常用的命令之一，用于安装指定的 npm 包到当前项目的 `node_modules` 文件夹中。它会从 npm 注册表（或指定的其他源）下载并安装包及其依赖项，并更新 `package.json` 和 `package-lock.json` 文件以记录安装的版本信息。

#### 主要特点
- **全局 vs 本地**：默认情况下，`npm install` 安装的是本地依赖，即只在当前项目中可用。使用 `-g` 或 `--global` 参数可以进行全局安装。
- **版本控制**：`npm install` 会根据 `package.json` 中定义的版本范围来选择合适的版本安装，并且会在 `package-lock.json` 中锁定具体的版本号。
- **依赖解析**：自动解析并安装所有必要的依赖项，确保项目所需的整个依赖树都被正确设置。
- **缓存机制**：利用本地缓存来加速重复安装相同的包，减少网络请求。

#### 使用场景
- **常规开发**：当你要添加新的依赖项到项目中时，通常会使用 `npm install` 来安装这些依赖。
- **生产环境部署**：在构建和部署过程中，`npm install` 确保所有依赖项都被正确安装，以便应用程序能够正常运行。

### npm link

#### 功能概述
`npm link` 创建一个符号链接（symbolic link），将全局安装的包与本地项目关联起来，或者在两个本地项目之间建立链接。这种方式使得开发者可以在不实际发布包的情况下进行测试和调试。

#### 主要特点
- **符号链接**：`npm link` 在 `node_modules` 中创建一个指向本地文件系统的符号链接，而不是复制文件。
- **实时同步**：任何对本地包的更改都会立即反映在引用它的项目中，无需重新安装或发布包。
- **开发测试**：主要用于开发和测试阶段，不适合用于生产环境部署。
- **跨项目依赖**：允许你在多个本地项目之间快速迭代和测试，而不需要每次都重新安装依赖。

#### 使用场景
- **本地包开发**：当你正在开发一个新的 npm 包时，可以使用 `npm link` 快速测试和调试，而不需要每次修改后都发布新版本。
- **多项目协作**：如果你有多个项目相互依赖，`npm link` 允许你在这些项目之间快速迭代和测试，而无需每次都重新安装依赖。
- **插件和库开发**：对于那些需要频繁更新并测试的插件或库，`npm link` 提供了一种便捷的方式来同步更改，确保所有相关项目都能即时看到最新的代码。

### 区别对比

| 特性             | npm install                        | npm link                             |
| ---------------- | ---------------------------------- | ------------------------------------ |
| **安装方式**     | 下载并复制文件到 `node_modules`    | 创建符号链接                         |
| **版本控制**     | 根据 `package.json` 的版本范围安装 | 直接链接到本地文件系统中的特定版本   |
| **依赖解析**     | 自动解析并安装所有必要的依赖项     | 不会自动解析依赖项，依赖于链接包本身 |
| **适用场景**     | 生产环境部署、常规开发             | 开发和测试阶段                       |
| **实时更新**     | 需要重新安装才能反映更改           | 更改会立即反映在引用项目中           |
| **跨项目依赖**   | 每个项目独立安装依赖               | 可以在多个项目之间共享同一个本地包   |
| **全局 vs 本地** | 默认为本地安装，支持全局安装       | 默认为本地链接，支持全局链接         |

### 实际应用场景

1. **常规开发流程**：
   - 使用 `npm install` 添加和管理项目的依赖项。
   - 在生产环境中，`npm install` 确保所有依赖项都被正确安装。

2. **本地包开发**：
   - 使用 `npm link` 在开发本地 npm 包时，可以快速测试和调试。
   - 当你需要在多个项目之间共享和测试本地包时，`npm link` 提供了极大的便利。

3. **多项目协作**：
   - 如果你有多个项目相互依赖，`npm link` 允许你在这些项目之间快速迭代和测试，而无需每次都重新安装依赖。

4. **插件和库开发**：
   - 对于那些需要频繁更新并测试的插件或库，`npm link` 提供了一种便捷的方式来同步更改，确保所有相关项目都能即时看到最新的代码。

### 总结

`npm install` 和 `npm link` 各有其适用场景，选择哪一个取决于你的具体需求。`npm install` 更适合用于生产和常规开发，因为它提供了可靠的依赖管理和版本控制。而 `npm link` 则是开发和测试阶段的好帮手，特别是当你需要快速迭代和测试本地包或跨项目依赖时。通过合理利用这两个命令，你可以显著提升开发效率，确保项目的稳定性和一致性。

### 进一步阅读

如果你想要了解更多关于 `npm install` 和 `npm link` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化包管理和部署也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

:::
