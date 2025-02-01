---
title: --include-workspace-root
article: false
---

`npm publish` 的 `--include-workspace-root` 参数允许你在发布工作区（workspaces）时同时发布根项目的包。这在你有一个包含多个子包的单体仓库（monorepo），并且希望将根项目本身作为一个独立的 npm 包发布时非常有用。

### 什么是根项目

在一个使用工作区的工作流中，根项目指的是包含 `package.json` 文件的最顶层目录。这个文件通常定义了整个多包项目的元数据和配置，并可能包含一些共享的脚本或依赖项。然而，默认情况下，`npm publish --workspaces` 只会发布定义为工作区的子包，而不会发布根项目本身。

### 使用 `--include-workspace-root` 参数

当你想要发布所有工作区的同时也发布根项目，可以使用 `--include-workspace-root` 参数。这个参数告诉 npm 不仅要发布所有定义为工作区的子包，还要尝试发布根项目。

#### 发布所有工作区及根项目

```bash
npm publish --workspaces --include-workspace-root
```

这条命令将会：

1. 遍历所有定义为工作区的目录，并尝试发布其中的每个包。
2. 尝试发布根项目的包（如果根项目的 `package.json` 中有适当的配置）。

#### 注意事项

- **根项目配置**：确保根项目的 `package.json` 文件正确设置了必要的字段，如 `name`、`version` 和 `main` 等。否则，npm 可能无法成功发布根项目。
- **版本控制**：确保根项目和所有工作区中的 `package.json` 文件都正确设置了版本号，并且遵循语义化版本控制（SemVer）。
- **依赖关系**：检查根项目与工作区之间的依赖关系，确保没有循环依赖或其他可能导致问题的情况。
- **权限和访问控制**：如果你在组织范围内工作，确保你有权限发布这些包，并且已经正确配置了访问控制。
- **唯一性**：确保根项目的包名在整个 npm 注册表中是唯一的，以避免命名冲突。

### 结合其他选项使用

你可以将 `--include-workspace-root` 与其他发布选项结合使用，以实现更复杂的发布场景。例如：

- **标签**：为发布的包设置标签。
  
  ```bash
  npm publish --workspaces --include-workspace-root --tag=beta
  ```

- **访问权限**：设置发布的包是公共还是私有的。
  
  ```bash
  npm publish --workspaces --include-workspace-root --access=public
  ```

- **一次性密码 (OTP)**：如果你启用了双因素认证（2FA），可以在发布时提供 OTP。
  
  ```bash
  npm publish --workspaces --include-workspace-root --otp=123456
  ```

- **模拟发布**：使用 `--dry-run` 参数来模拟发布过程而不实际发布。
  
  ```bash
  npm publish --workspaces --include-workspace-root --dry-run
  ```

### 实际应用场景

1. **统一发布流程**：在一个单一的命令中发布所有工作区以及根项目，简化发布流程。
2. **分阶段发布**：根据需要选择性地发布某些工作区和根项目，而不影响其他部分。
3. **团队协作**：允许多个开发者同时在不同的工作区和根项目上工作，然后按需发布各自的成果。

### 示例

假设你有一个名为 `my-monorepo` 的项目，它包含两个工作区 `@myscope/package-a` 和 `@myscope/package-b`，并且你想发布这两个工作区以及根项目：

1. **发布所有工作区及根项目**：
   ```bash
   npm publish --workspaces --include-workspace-root
   ```

2. **发布带有特定标签的所有工作区及根项目**：
   ```bash
   npm publish --workspaces --include-workspace-root --tag=beta
   ```

3. **发布多个工作区及根项目**：
   ```bash
   npm publish --workspace=@myscope/package-a --workspace=@myscope/package-b --include-workspace-root
   ```

### 总结

`npm publish --include-workspace-root` 参数是一个强大的工具，它帮助你在多包项目结构中更灵活地管理和发布各个工作区及其根项目。通过合理利用这个参数，你可以显著提升开发效率，简化发布流程，并更好地组织复杂的项目。无论是进行分阶段发布还是支持多条开发线，掌握 `npm publish --include-workspace-root` 的使用都能让你更加自信和高效地管理你的 npm 资产。同时，在团队协作和组织管理中，正确配置工作区和根项目可以有效促进项目的顺利推进。

### 注意

请确保在使用 `--include-workspace-root` 参数之前，仔细检查根项目的配置和依赖关系，以避免潜在的问题。此外，考虑到根项目通常是整个多包项目的入口点，它的发布可能会对所有子包产生广泛的影响，因此务必谨慎操作。
