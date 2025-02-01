---
title: --workplaces
article: false
---

`npm publish` 的 `--workspace` 参数用于指定要发布的特定工作区（workspace）。工作区是 npm 支持的一种多包项目结构，允许你在单个 Git 仓库中管理多个 npm 包。这对于大型项目或微服务架构非常有用，因为它可以简化依赖管理和发布流程。

### 工作区简介

工作区通常通过 `package.json` 文件中的 `workspaces` 字段来定义。这个字段指定了包含各个子包的目录路径。例如：

```json
{
  "name": "my-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

在这个例子中，`packages` 目录下的所有文件夹都被视为独立的工作区。

### 使用 `--workspace` 参数

#### 发布特定工作区

如果你有一个包含多个工作区的项目，并且只想发布其中一个工作区的包，可以使用 `--workspace` 参数来指定该工作区。例如：

```bash
npm publish --workspace=@myscope/my-package
```

这里的 `@myscope/my-package` 是你想要发布的具体工作区的名称。

#### 发布多个工作区

如果你想一次发布多个工作区，可以传递多个 `--workspace` 参数：

```bash
npm publish --workspace=@myscope/package-a --workspace=@myscope/package-b
```

或者，你可以使用通配符来匹配一组工作区：

```bash
npm publish --workspace="packages/*"
```

这将尝试发布 `packages` 目录下的所有工作区。

#### 发布所有工作区

如果你想发布所有的工作区，可以使用 `--workspaces` 参数（注意是没有 `-` 的复数形式）：

```bash
npm publish --workspaces
```

这将遍历所有定义为工作区的目录，并尝试发布其中的每个包。

### 注意事项

- **版本控制**：确保你要发布的工作区中的 `package.json` 文件正确设置了版本号，并且遵循语义化版本控制（SemVer）。
- **依赖关系**：检查工作区之间的依赖关系，确保没有循环依赖或其他可能导致问题的情况。
- **权限和访问控制**：如果你在组织范围内工作，确保你有权限发布这些工作区，并且已经正确配置了访问控制。
- **标签和访问权限**：你可以结合 `--tag` 和 `--access` 等参数来为工作区设置标签和访问权限。

### 实际应用场景

1. **多包发布**：在一个单一的命令中发布多个相关联的包，简化发布流程。
2. **分阶段发布**：根据需要选择性地发布某些工作区，而不影响其他部分。
3. **团队协作**：允许多个开发者同时在不同的工作区上工作，然后按需发布各自的成果。

### 示例

假设你有一个名为 `my-monorepo` 的项目，它包含两个工作区 `@myscope/package-a` 和 `@myscope/package-b`，并且你想发布 `@myscope/package-a`：

1. **发布特定工作区**：

   ```bash
   npm publish --workspace=@myscope/package-a
   ```

2. **发布所有工作区**：

   ```bash
   npm publish --workspaces
   ```

3. **发布带有特定标签的工作区**：

   ```bash
   npm publish --workspace=@myscope/package-a --tag=beta
   ```

4. **发布多个工作区**：

   ```bash
   npm publish --workspace=@myscope/package-a --workspace=@myscope/package-b
   ```

5. **使用通配符发布一组工作区**：

   ```bash
   npm publish --workspace="packages/*"
   ```

### 总结

`npm publish --workspace` 参数是一个强大的工具，它帮助你在多包项目结构中更灵活地管理和发布各个工作区。通过合理利用这个参数，你可以显著提升开发效率，简化发布流程，并更好地组织复杂的项目。无论是进行分阶段发布还是支持多条开发线，掌握 `npm publish --workspace` 的使用都能让你更加自信和高效地管理你的 npm 资产。同时，在团队协作和组织管理中，正确配置工作区可以有效促进项目的顺利推进。
