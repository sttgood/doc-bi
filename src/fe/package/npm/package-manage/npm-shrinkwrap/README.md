---
title: npm shrinkwrap
article: false
dir:
  collapsible: true
  link: true
---

:::tabs

@tab 官方-DOC

## 概要



```bash
npm shrinkwrap
```

注意：此命令对工作区无感知。

## 描述

此命令将 `package-lock.json` 重新用于可发布的 `npm-shrinkwrap.json` 或简单地创建一个新的。此命令创建和更新的文件将优先于任何其他现有或未来的 `package-lock.json` 文件。

@tab AI-DOC

`npm shrinkwrap` 是 npm 提供的一个命令，用于锁定项目的依赖关系树，确保在不同的环境中安装相同的依赖版本。它通过生成一个 `npm-shrinkwrap.json` 文件来实现这一点，该文件详细记录了项目中所有直接和间接依赖项的具体版本信息。这对于维护项目的稳定性和可重复性非常重要，特别是在团队协作和持续集成（CI）环境中。

### 功能概述

`npm shrinkwrap` 的主要目的是：

- **锁定依赖版本**：确保无论在哪里安装依赖项，都会使用完全相同的版本。
- **提高构建一致性**：在不同环境（开发、测试、生产）中获得一致的构建结果。
- **简化依赖管理**：通过详细的依赖树快照，更容易跟踪和管理依赖项的变化。

### 使用方法

#### 生成 `npm-shrinkwrap.json`

要在当前项目中生成 `npm-shrinkwrap.json` 文件，可以在项目根目录下运行以下命令：

```bash
npm shrinkwrap
```

这将执行以下操作：

1. 安装并解析所有的依赖项。
2. 创建或更新 `npm-shrinkwrap.json` 文件，记录每个依赖项及其子依赖项的具体版本。
3. 确保 `package.json` 和 `npm-shrinkwrap.json` 文件保持同步。

#### 更新 `npm-shrinkwrap.json`

如果你已经有一个 `npm-shrinkwrap.json` 文件，并且希望根据最新的 `package.json` 文件更新它，可以再次运行 `npm shrinkwrap` 命令：

```bash
npm shrinkwrap
```

这将重新计算依赖树，并更新 `npm-shrinkwrap.json` 文件中的版本信息。

#### 安装锁定的依赖

当你在一个新的环境中安装依赖时，npm 会优先读取 `npm-shrinkwrap.json` 文件（如果存在），而不是 `package.json`。这意味着即使 `package.json` 中定义了较宽泛的版本范围，实际安装的版本也会严格遵循 `npm-shrinkwrap.json` 中的记录。

```bash
npm install
```

### 注意事项

- **提交到版本控制系统**：确保将 `npm-shrinkwrap.json` 文件提交到版本控制系统（如 Git），以便所有开发者都能从中受益。
- **与 `package-lock.json` 的区别**：从 npm 5 开始，默认情况下会生成 `package-lock.json` 文件，它具有类似的功能。然而，`npm-shrinkwrap.json` 在某些情况下仍然有用，例如在旧版 npm 或者需要跨多个工具链的情况下。
- **升级依赖**：如果你想升级某个依赖项，你需要先更新 `package.json` 中的版本号，然后重新运行 `npm shrinkwrap` 来更新 `npm-shrinkwrap.json` 文件。
- **性能影响**：对于大型项目或包含大量依赖项的项目，`npm shrinkwrap` 可能需要一些时间来处理整个依赖树，请耐心等待。

### 实际应用场景

1. **团队协作**：确保团队中的每个成员都使用相同版本的依赖项，避免因版本差异导致的问题。
2. **持续集成/持续部署 (CI/CD)**：在 CI/CD 流程中使用 `npm-shrinkwrap.json` 可以确保每次构建的一致性，减少由于依赖版本变化带来的不确定性。
3. **发布稳定的包**：当你要发布一个稳定的 npm 包时，使用 `npm shrinkwrap` 可以确保所有用户都获得一致的依赖版本，从而提高包的可靠性。
4. **审计和审查**：为内部或外部审计提供详细的依赖项信息，便于审查和评估。

### 示例

假设你正在开发一个名为 `my-app` 的项目，并且想要确保所有依赖项的版本都被锁定：

1. **生成 `npm-shrinkwrap.json`**：
   ```bash
   cd /path/to/my-app
   npm shrinkwrap
   ```

2. **更新现有的 `npm-shrinkwrap.json`**：
   ```bash
   npm shrinkwrap
   ```

3. **安装锁定的依赖**：
   ```bash
   npm install
   ```

4. **提交 `npm-shrinkwrap.json` 到版本控制系统**：
   ```bash
   git add npm-shrinkwrap.json
   git commit -m "Lock down dependency versions with npm-shrinkwrap.json"
   ```

### 总结

`npm shrinkwrap` 是一个非常有用的工具，它帮助你在开发过程中锁定项目的依赖关系树，确保在不同环境中安装相同的依赖版本。通过合理利用这个命令，你可以显著提升项目的稳定性和一致性，确保能够顺利应对潜在的风险和挑战。无论是进行团队协作还是 CI/CD 流程，掌握 `npm shrinkwrap` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm shrinkwrap` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化依赖管理和构建过程也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on npm-shrinkwrap](https://docs.npmjs.com/cli/v8/commands/npm-shrinkwrap)
- [Understanding npm-shrinkwrap and package-lock.json](https://blog.logrocket.com/understanding-npm-shrinkwrap-package-lock-json/)
- [Managing Dependencies with npm-shrinkwrap](https://www.freecodecamp.org/news/managing-dependencies-with-npm-shrinkwrap/)

:::
