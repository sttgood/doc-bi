---
title: 配置文件
article: false
dir:
  order: 9999
  link: true
---

`package.json`、`package-lock.json` 和 `npm-shrinkwrap.json` 是 npm（Node Package Manager）项目中用于管理和锁定依赖关系的三个重要文件。每个文件都有其独特的作用和适用场景，理解它们之间的区别对于有效地管理 Node.js 项目至关重要。

### package.json

**功能概述**

- **项目元数据**：如名称、版本、描述、作者、许可证等。
- **依赖管理**：列出项目所需的依赖包及其版本范围（例如 `^1.2.3` 或 `~1.2.3`），允许一定范围内的版本更新。
- **脚本命令**：定义可执行的 npm 脚本，简化开发和构建流程。
- **入口点**：指定项目的主文件或模块。
- **构建工具配置**：支持如 Babel、Webpack 等构建工具的配置。
- **测试框架集成**：集成 Mocha、Jest 等测试框架，方便进行单元测试和集成测试。
- **Git 仓库信息**：关联项目的 Git 仓库地址，便于版本管理和协作开发。

**作用**

- `package.json` 是项目的描述文件，它定义了项目的结构、依赖关系和其他元数据。
- 它为开发者提供了一个标准化的方式来管理项目的生命周期。
- 当运行 `npm install` 时，npm 会根据 `package.json` 中的依赖项安装对应的包。

### package-lock.json

**功能概述**

- **锁定依赖版本**：确保无论在哪里安装依赖项，都会使用完全相同的版本。
- **提高构建一致性**：在不同的开发环境、测试环境和生产环境中获得一致的构建结果。
- **简化依赖管理**：通过详细的依赖树快照，更容易跟踪和管理依赖项的变化。
- **优化安装性能**：通过缓存和并行下载加速依赖项的安装过程。
- **安全性**：包含每个包的完整性校验值（如 SHA-512），防止恶意软件或篡改。

**作用**

- `package-lock.json` 是一个锁定文件，它记录了项目中所有直接和间接依赖项的确切版本信息、解析后的包 URL 和完整性校验值。
- 它提供了更精细的控制，确保每次安装依赖时都使用相同的具体版本，避免由于依赖版本变化带来的不确定性。
- 当运行 `npm install` 时，npm 会优先读取 `package-lock.json` 文件（如果存在），以确保安装的依赖版本与之前的一致。

### npm-shrinkwrap.json

**功能概述**

- **锁定依赖版本**：确保无论在哪里安装依赖项，都会使用完全相同的版本。
- **提高构建一致性**：在不同的开发环境、测试环境和生产环境中获得一致的构建结果。
- **简化依赖管理**：通过详细的依赖树快照，更容易跟踪和管理依赖项的变化。
- **跨工具链支持**：特别适用于需要跨多个工具链或旧版 npm 的情况。
- **安全性**：包含每个包的完整性校验值（如 SHA-512），防止恶意软件或篡改。

**作用**

- `npm-shrinkwrap.json` 是一个锁定文件，它类似于 `package-lock.json`，但在某些方面有所不同。主要用于旧版 npm 或者需要跨多个工具链的情况下。
- 如果存在 `npm-shrinkwrap.json` 文件，npm 会优先使用它而不是 `package-lock.json`。
- 你可以通过运行 `npm shrinkwrap` 命令来创建或更新这个文件。

### 主要区别

| 特性                      | package.json                                      | package-lock.json                                               | npm-shrinkwrap.json                                       |
|---------------------------|--------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------|
| **主要用途**               | 描述项目的基本信息和依赖关系                     | 锁定项目的依赖关系，确保安装的依赖版本一致                       | 锁定依赖关系，特别适用于跨多个工具链的情况                |
| **版本范围**               | 可以指定宽泛的版本范围（如 ^1.2.3 或 ~1.2.3）    | 记录确切的版本号，确保安装时使用相同的版本                       | 记录确切的版本号，确保安装时使用相同的版本                |
| **依赖树细节**             | 不包含详细的依赖树                               | 包含完整的依赖树，包括所有直接和间接依赖及其子依赖               | 包含完整的依赖树，包括所有直接和间接依赖及其子依赖         |
| **生成时机**               | 手动创建或通过 `npm init` 生成                   | 自动由 npm 生成，通常是在第一次 `npm install` 之后               | 显式通过 `npm shrinkwrap` 命令生成                         |
| **适用范围**               | 所有 npm 项目                                    | 现代 npm 默认使用的锁定文件                                     | 主要用于旧版 npm 或者需要跨多个工具链的情况                |
| **优先级**                 | 最低，作为基础                                   | 如果没有 `npm-shrinkwrap.json`，则使用                          | 如果存在，则优先于 `package-lock.json`                    |
| **提交到版本控制系统**     | 必须提交，是项目的基础                           | 推荐提交，确保团队成员和 CI/CD 流程的一致性                      | 推荐提交，确保团队成员和 CI/CD 流程的一致性                |
| **手动编辑**               | 可以手动编辑                                     | 尽量避免手动编辑，因为它是自动生成的                             | 尽量避免手动编辑，因为它是自动生成的                       |
| **安装依赖时的行为**       | 根据定义的版本范围安装最新的兼容版本             | 严格遵循文件中记录的版本，确保安装的依赖版本一致                 | 严格遵循文件中记录的版本，确保安装的依赖版本一致           |

### 实际应用场景

#### package.json

- **项目初始化**：当你开始一个新的 Node.js 项目时，`package.json` 提供了一个标准化的方式来进行初始设置。
- **依赖管理**：通过明确列出所有依赖项及其版本范围，确保不同环境中的一致性。
- **自动化任务**：定义常用的任务脚本（如启动服务器、运行测试），简化开发和部署过程。
- **文档化项目信息**：记录项目的基本信息（如名称、版本、作者），有助于其他开发者理解和使用你的代码。

#### package-lock.json

- **团队协作**：确保团队中的每个成员都使用相同版本的依赖项，避免因版本差异导致的问题。
- **持续集成/持续部署 (CI/CD)**：在 CI/CD 流程中使用 `package-lock.json` 可以确保每次构建的一致性，减少由于依赖版本变化带来的不确定性。
- **发布稳定的包**：当你要发布一个稳定的 npm 包时，使用 `package-lock.json` 可以确保所有用户都获得一致的依赖版本，从而提高包的可靠性。
- **审计和审查**：为内部或外部审计提供详细的依赖项信息，便于审查和评估。

#### npm-shrinkwrap.json

- **团队协作**：确保团队中的每个成员都使用相同版本的依赖项，避免因版本差异导致的问题。
- **持续集成/持续部署 (CI/CD)**：在 CI/CD 流程中使用 `npm-shrinkwrap.json` 可以确保每次构建的一致性，减少由于依赖版本变化带来的不确定性。
- **发布稳定的包**：当你要发布一个稳定的 npm 包时，使用 `npm-shrinkwrap.json` 可以确保所有用户都获得一致的依赖版本，从而提高包的可靠性。
- **跨工具链支持**：如果你的项目需要与其他工具链一起工作，或者你正在使用旧版 npm，`npm-shrinkwrap.json` 提供了额外的支持和灵活性。

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

3. **查看 `package.json` 和 `package-lock.json`**：
   检查生成的 `package.json` 文件，确保它包含了所有依赖项的版本范围；检查 `package-lock.json` 文件，确保它包含了所有依赖项的具体版本信息。

4. **生成 `npm-shrinkwrap.json`**：
   运行 `npm shrinkwrap` 来创建锁定文件：

   ```bash
   npm shrinkwrap
   ```

5. **更新依赖**：
   更新 Express 到最新版本：

   ```bash
   npm update express
   npm shrinkwrap
   ```

6. **提交 `package.json` 和 `npm-shrinkwrap.json` 到版本控制系统**：

   ```bash
   git add package.json npm-shrinkwrap.json
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

`package.json`、`package-lock.json` 和 `npm-shrinkwrap.json` 各有其独特的作用，共同确保 Node.js 项目的依赖管理和构建过程既灵活又稳定。`package.json` 提供了项目的描述和依赖关系的基本信息，而 `package-lock.json` 和 `npm-shrinkwrap.json` 则进一步锁定了这些依赖的具体版本，确保了一致性和可重复性。理解这三者的区别和协同工作方式，可以帮助开发者更好地管理项目，提升开发效率和项目质量。

### 进一步阅读

如果你想要了解更多关于这三个文件的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化依赖管理和构建过程也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [NPM Official Documentation on package-lock.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json)
- [NPM Official Documentation on npm-shrinkwrap](https://docs.npmjs.com/cli/v8/commands/npm-shrinkwrap)
- [Understanding and Using package.json in Node.js Projects](https://blog.logrocket.com/understanding-and-using-package-json-in-node-js-projects/)
- [Managing Dependencies with package-lock.json](https://www.freecodecamp.org/news/managing-dependencies-with-package-lock-json/)
- [Understanding npm-shrinkwrap.json and Its Benefits](https://blog.logrocket.com/understanding-npm-shrinkwrap-json-and-its-benefits/)
