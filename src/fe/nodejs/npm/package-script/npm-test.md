---
title: npm test
article: false
order: 2
---

::: tabs 

@tab 官方-DOC

## 概要

```bash
npm test [-- <args>]
aliases: tst, t
```

## 描述

这将运行在包的 `"scripts"` 对象的 `"test"` 属性中指定的预定义命令。

## 示例

```json
{
  "scripts": {
    "test": "node test.js"
  }
}
```



```bash
npm test> npm@x.x.x test> node test.js
(test.js output would be here)
```

## 配置

### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



### `script-shell`

- 默认值：'/bin/sh' 在 POSIX 系统上，'cmd.exe' 在 Windows 上
- 类型：空值或字符串

用于脚本的 shell 与 `npm exec`、`npm run` 和 `npm init <package-spec>` 命令一起运行。

@tab AI-DOC

## AI-DOC

`npm test` 是 npm（Node Package Manager）提供的一个命令，用于执行 `package.json` 文件中定义的测试脚本。它在软件开发过程中扮演着至关重要的角色，确保代码的质量和稳定性。以下是关于 `npm test` 的详细解释：

### 基本用法

#### 执行测试
```bash
npm test
```

默认情况下，`npm test` 会查找 `package.json` 文件中的 `scripts` 字段，并执行名为 `test` 的脚本。如果没有定义 `test` 脚本，默认行为是运行 `node test.js`。

### `package.json` 中的 `test` 脚本

在 `package.json` 文件中，`scripts` 字段可以包含多个自定义脚本，其中 `test` 脚本是最常用的之一。例如：

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "test": "jest"
  }
}
```

在这个例子中，`npm test` 将会执行 `jest` 命令来运行测试套件。

### 自定义测试命令

你可以根据项目的需要自定义 `test` 脚本。以下是一些常见的用例：

- **使用特定的测试框架**：
  
  ```json
  "test": "mocha ./tests/**/*.spec.js"
  ```
  
- **添加环境变量**：
  
  ```json
  "test": "NODE_ENV=test mocha ./tests/**/*.spec.js"
  ```
  
- **使用其他工具或运行时**：
  ```json
  "test": "nyc --reporter=lcov mocha ./tests/**/*.spec.js"
  ```
  这里使用了 `nyc` 来进行代码覆盖率分析。

- **组合多个命令**：
  ```json
  "test": "npm run lint && mocha ./tests/**/*.spec.js"
  ```
  在运行测试之前先执行代码风格检查。

- **使用调试工具**：
  ```json
  "test": "node --inspect-brk node_modules/.bin/mocha ./tests/**/*.spec.js"
  ```

- **并行执行多个测试套件**：
  ```json
  "test": "concurrently \"npm run test:unit\" \"npm run test:integration\""
  ```

### 生命周期事件

`npm test` 可以与生命周期事件结合使用，以便在测试前或测试后执行额外的任务。常见的生命周期事件包括：

- **`pretest`**: 在 `npm test` 执行之前运行。
- **`posttest`**: 在 `npm test` 执行之后运行。

例如，你可以在运行测试之前构建项目或清理缓存：

```json
{
  "scripts": {
    "pretest": "npm run build",
    "test": "jest",
    "posttest": "npm run cleanup"
  }
}
```

### 测试框架和工具

选择合适的测试框架和工具对于编写高效、可靠的测试非常重要。一些流行的 JavaScript 测试框架和工具包括：

- **Jest**: Facebook 开发的测试框架，支持快照测试、模拟函数等特性。
- **Mocha**: 灵活的测试框架，常与 Chai 或 Sinon 结合使用。
- **Jasmine**: 类似于 Mocha 的 BDD/TDD 测试框架。
- **AVA**: 并行测试运行器，专注于速度和简洁性。
- **Karma**: Web 测试运行器，适用于浏览器端测试。
- **Cypress**: 现代前端测试工具，支持 E2E 测试。
- **Tape**: 简单的 TAP 输出测试框架。
- **Tap**: 测试任意协议（TAP）输出格式的测试工具。

### 示例

假设你在管理一个基于 Node.js 的应用程序，并且想要配置和运行测试：

1. **基本测试**：
   ```bash
   npm test
   ```

2. **自定义测试命令**：
   ```json
   {
     "scripts": {
       "test": "jest --coverage"
     }
   }
   ```
   使用 Jest 运行测试，并生成代码覆盖率报告。

3. **添加环境变量**：
   ```json
   {
     "scripts": {
       "test": "NODE_ENV=test jest"
     }
   }
   ```

4. **组合多个命令**：
   ```json
   {
     "scripts": {
       "lint": "eslint .",
       "test": "npm run lint && jest"
     }
   }
   ```

5. **使用调试工具**：
   ```json
   {
     "scripts": {
       "test": "node --inspect-brk node_modules/.bin/jest"
     }
   }
   ```

6. **生命周期事件**：
   ```json
   {
     "scripts": {
       "pretest": "npm run build",
       "test": "jest",
       "posttest": "npm run cleanup"
     }
   }
   ```

7. **并行执行多个测试套件**：
   ```json
   {
     "scripts": {
       "test:unit": "jest --runInBand ./tests/unit",
       "test:integration": "jest --runInBand ./tests/integration",
       "test": "concurrently \"npm run test:unit\" \"npm run test:integration\""
     }
   }
   ```

### 注意事项

- **确保 `test` 脚本存在**：如果你没有在 `package.json` 中定义 `test` 脚本，`npm test` 会尝试执行 `node test.js`。如果这也不是你要运行的测试文件，则需要显式地定义 `test` 脚本。
- **环境配置**：对于不同的测试环境（如单元测试、集成测试、E2E 测试），建议使用不同的配置。可以通过环境变量或 `.env` 文件来区分不同环境下的配置。
- **依赖安装**：在运行 `npm test` 之前，请确保所有依赖项都已正确安装（通过 `npm install`）。否则，可能会遇到缺少模块的问题。
- **持续集成**：将 `npm test` 集成到 CI/CD 流程中，确保每次提交代码时都能自动运行测试，保持代码库的健康状态。
- **代码覆盖率**：考虑使用代码覆盖率工具（如 `nyc` 或内置在某些测试框架中的工具）来确保测试充分覆盖你的代码。

### 总结

`npm test` 是一个强大的命令，它不仅简化了测试的执行过程，还允许开发者灵活地定制测试行为。通过理解如何在 `package.json` 中定义 `test` 脚本以及如何结合生命周期事件，你可以更高效地管理和优化你的测试流程。无论是简单的单元测试还是复杂的多步骤测试套件，掌握 `npm test` 都能显著提升你的工作效率和代码质量。

:::
