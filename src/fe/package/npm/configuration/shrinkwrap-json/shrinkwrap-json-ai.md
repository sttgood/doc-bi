---
title: shrinkwrap.json-ai
article: false
---

`npm-shrinkwrap.json` 文件是 npm（Node Package Manager）曾经提供的一种锁定依赖关系的方法，它类似于 `package-lock.json`，但在某些方面有所不同。从 npm 5.0 开始，默认使用 `package-lock.json`，但 `npm-shrinkwrap.json` 仍然可以在特定场景下使用。本文将详细解释 `npm-shrinkwrap.json` 的功能、用途及其与 `package-lock.json` 的区别。

### 功能概述

`npm-shrinkwrap.json` 文件的主要功能包括：

- **锁定依赖版本**：确保无论在哪里安装依赖项，都会使用完全相同的版本。
- **提高构建一致性**：在不同的开发环境、测试环境和生产环境中获得一致的构建结果。
- **简化依赖管理**：通过详细的依赖树快照，更容易跟踪和管理依赖项的变化。
- **优化安装性能**：通过缓存和并行下载加速依赖项的安装过程。
- **安全性**：包含每个包的完整性校验值（如 SHA-512），防止恶意软件或篡改。

### 文件结构

一个典型的 `npm-shrinkwrap.json` 文件通常包含以下字段：

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": {
      "version": "4.17.1",
      "from": "express@^4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7L...",
      "dependencies": {
        "accepts": {
          "version": "1.3.7",
          "from": "accepts@~1.3.7",
          "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
          "integrity": "sha512-AJRrmNRLaTq6aiQfjzeV3dPIOfC7ZnQmFmDg+4iWrnnI..."
        },
        // 更多依赖项...
      }
    },
    "lodash": {
      "version": "4.17.21",
      "from": "lodash@^4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaJRu8MSYNyl2rR5j+k/Mazc/bNNEn/PappfS..."
    }
  }
}
```

#### 关键字段解释

- **`name` 和 `version`**：项目的名称和版本号。
- **`dependencies`**：列出了顶层依赖项的具体信息，如版本、来源、解析后的包 URL 和完整性校验值，并递归地列出所有子依赖项。

### 使用方法

#### 生成 `npm-shrinkwrap.json`

你可以通过运行 `npm shrinkwrap` 命令来创建 `npm-shrinkwrap.json` 文件。这会根据当前的依赖关系生成一个锁定文件，并将其保存到项目根目录下：

```bash
npm shrinkwrap
```

该命令还会更新 `package.json` 中的 `dependencies` 字段，以反映最新的依赖版本。

#### 更新 `npm-shrinkwrap.json`

如果你修改了 `package.json` 中的依赖项或版本范围，可以通过再次运行 `npm shrinkwrap` 来更新 `npm-shrinkwrap.json` 文件：

```bash
npm shrinkwrap
```

这将重新计算整个依赖树，并更新锁定文件中的版本信息。

#### 安装锁定的依赖

当你在一个新的环境中安装依赖时，npm 会优先读取 `npm-shrinkwrap.json` 文件（如果存在），而不是 `package.json`。这意味着即使 `package.json` 中定义了较宽泛的版本范围，实际安装的版本也会严格遵循 `npm-shrinkwrap.json` 中的记录：

```bash
npm install
```

#### 删除 `npm-shrinkwrap.json`

如果你想删除 `npm-shrinkwrap.json` 文件并重新生成它，可以先手动删除该文件，然后再次运行 `npm install` 或 `npm shrinkwrap`：

```bash
rm npm-shrinkwrap.json
npm install
```

或者直接运行 `npm shrinkwrap` 来重新生成一个新的锁定文件。

### 注意事项

- **提交到版本控制系统**：确保将 `npm-shrinkwrap.json` 文件提交到版本控制系统（如 Git），以便所有开发者都能从中受益。
- **与 `package-lock.json` 的区别**：虽然两者都有类似的功能，但从 npm 5 开始，默认情况下会生成 `package-lock.json`。如果你希望使用 `npm-shrinkwrap.json`，则需要显式地运行 `npm shrinkwrap` 命令。
- **升级依赖**：如果你想升级某个依赖项，你需要先更新 `package.json` 中的版本号，然后重新运行 `npm shrinkwrap` 来更新锁定文件。
- **避免手动编辑**：尽量避免手动编辑 `npm-shrinkwrap.json` 文件，因为它是自动生成的。任何更改都应通过 `npm shrinkwrap` 或其他相关命令进行。
- **性能影响**：对于大型项目或包含大量依赖项的项目，`npm install` 可能需要一些时间来处理整个依赖树，请耐心等待。

### 实际应用场景

1. **团队协作**：确保团队中的每个成员都使用相同版本的依赖项，避免因版本差异导致的问题。
2. **持续集成/持续部署 (CI/CD)**：在 CI/CD 流程中使用 `npm-shrinkwrap.json` 可以确保每次构建的一致性，减少由于依赖版本变化带来的不确定性。
3. **发布稳定的包**：当你要发布一个稳定的 npm 包时，使用 `npm-shrinkwrap.json` 可以确保所有用户都获得一致的依赖版本，从而提高包的可靠性。
4. **审计和审查**：为内部或外部审计提供详细的依赖项信息，便于审查和评估。

### `npm-shrinkwrap.json` vs `package-lock.json`

| 特性                   | npm-shrinkwrap.json                         | package-lock.json                                  |
| ---------------------- | ------------------------------------------- | -------------------------------------------------- |
| **主要用途**           | 锁定依赖关系，特别适用于跨多个工具链的情况  | 锁定依赖关系，确保安装的依赖版本一致               |
| **生成时机**           | 显式通过 `npm shrinkwrap` 命令生成          | 自动由 npm 生成，通常是在第一次 `npm install` 之后 |
| **适用范围**           | 主要用于旧版 npm 或者需要跨多个工具链的情况 | 现代 npm 默认使用的锁定文件                        |
| **优先级**             | 如果存在，则优先于 `package-lock.json`      | 在没有 `npm-shrinkwrap.json` 时使用                |
| **提交到版本控制系统** | 推荐提交，确保团队成员和 CI/CD 流程的一致性 | 推荐提交，确保团队成员和 CI/CD 流程的一致性        |

### 示例

假设你正在开发一个名为 `my-app` 的项目，并且希望确保所有依赖项的版本都被锁定：

1. **初始化项目**：
   ```bash
   npm init -y
   ```

2. **添加依赖**：
   安装 Express 并将其添加到 `dependencies` 中：
   ```bash
   npm install express
   ```

3. **生成 `npm-shrinkwrap.json`**：
   运行 `npm shrinkwrap` 来创建锁定文件：
   ```bash
   npm shrinkwrap
   ```

4. **查看 `npm-shrinkwrap.json`**：
   检查生成的 `npm-shrinkwrap.json` 文件，确保它包含了所有依赖项的具体版本信息。

5. **更新依赖**：
   更新 Express 到最新版本：
   ```bash
   npm update express
   npm shrinkwrap
   ```

6. **提交 `npm-shrinkwrap.json` 到版本控制系统**：
   ```bash
   git add npm-shrinkwrap.json
   git commit -m "Lock down dependency versions with npm-shrinkwrap.json"
   ```

7. **在新环境中安装依赖**：
   在另一个环境中克隆仓库并安装依赖：
   ```bash
   git clone https://github.com/username/my-app.git
   cd my-app
   npm install
   ```

### 总结

`npm-shrinkwrap.json` 是一个非常有用的文件，它帮助你在开发过程中锁定项目的依赖关系树，确保在不同环境中安装相同的依赖版本。尽管现代 npm 默认使用 `package-lock.json`，但在某些情况下，特别是当你需要跨多个工具链或使用旧版 npm 时，`npm-shrinkwrap.json` 仍然是一个重要的工具。理解这两者的区别和协同工作方式，可以帮助开发者更好地管理项目，提升开发效率和项目质量。

### 进一步阅读

如果你想要了解更多关于 `npm-shrinkwrap.json` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化依赖管理和构建过程也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on npm-shrinkwrap](https://docs.npmjs.com/cli/v8/commands/npm-shrinkwrap)
- [Understanding npm-shrinkwrap.json and Its Benefits](https://blog.logrocket.com/understanding-npm-shrinkwrap-json-and-its-benefits/)
- [Managing Dependencies with npm-shrinkwrap.json](https://www.freecodecamp.org/news/managing-dependencies-with-npm-shrinkwrap-json/)
