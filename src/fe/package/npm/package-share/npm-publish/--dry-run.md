---
title: --dry-run
article: false
---

`npm publish` 的 `--dry-run` 参数允许你在不实际执行发布操作的情况下模拟发布过程。这在你想要测试发布流程、验证配置或确保所有事情都按预期工作时非常有用。通过这种方式，你可以提前发现潜在的问题，而不会对 npm 注册表产生任何实际影响。

### 使用 `npm publish --dry-run`

当你添加 `--dry-run` 参数到 `npm publish` 命令时，npm 会模拟整个发布过程，包括检查依赖项、验证包信息等，但最终不会将包上传到 npm 注册表。此外，它还会输出详细的日志信息，帮助你了解如果真正执行发布会发生什么。

#### 示例命令

```bash
npm publish --dry-run
```

### 输出解释

执行 `npm publish --dry-run` 后，npm 通常会输出类似以下的信息：

- **包名和版本**：显示即将发布的包的名称和版本号。
- **文件列表**：列出将要包含在发布中的文件。
- **依赖项**：展示包的所有依赖项及其版本。
- **警告和错误**：如果有任何问题（如缺少必要的字段），npm 会在这里报告。

#### 示例输出

```text
+ my-package@1.0.0
added 1 package from 1 contributor in 2.357s
```

注意，这里并没有真正发布 `my-package`，只是展示了如果执行发布命令会发生什么。

### 结合其他选项使用

`--dry-run` 可以与其他 `npm publish` 选项一起使用，以增强其功能。例如：

- **`--access`**：即使是在 `--dry-run` 模式下，也可以看到访问权限设置的效果。
  
  ```bash
  npm publish --dry-run --access=public
  ```

- **`--loglevel=verbose`**：获取更详细的日志信息，有助于调试和理解命令的具体行为。
  
  ```bash
  npm publish --dry-run --loglevel=verbose
  ```

- **`--otp`**：如果你启用了双因素认证（2FA），可以在 `--dry-run` 中测试 OTP 的提供方式。
  
  ```bash
  npm publish --dry-run --otp=123456
  ```

### 注意事项

- **并非所有行为都能完全模拟**：虽然 `--dry-run` 提供了很好的预览功能，但它并不能捕捉到所有可能的影响。例如，某些复杂的依赖关系链或服务器端验证逻辑可能无法在 `--dry-run` 中准确反映出来。
- **环境差异**：由于网络状况、缓存状态等因素，`--dry-run` 的结果可能与实际执行时略有不同。因此，在最终决定执行发布命令之前，请始终仔细审查 `--dry-run` 的输出。
- **标签和访问权限**：你可以结合 `--tag` 和 `--access` 等参数来测试不同的发布场景，比如发布带有特定标签的私有包。

### 实际应用场景

1. **验证发布前的准备工作**：确保所有文件都正确包含，依赖项没有遗漏，以及包信息（如 `package.json`）是完整的。
2. **团队协作中的代码审查**：在提交代码之前，团队成员可以运行 `npm publish --dry-run` 来确认发布内容无误。
3. **CI/CD 流程中的集成测试**：作为持续集成的一部分，自动运行 `npm publish --dry-run` 可以帮助捕获发布过程中可能出现的问题。

### 总结

`npm publish --dry-run` 是一个非常有用的工具，它可以帮助你在执行可能具有破坏性的发布操作之前，安全地评估命令的效果。无论是安装新的依赖项、更新现有依赖还是发布新版本，使用 `--dry-run` 都能显著降低风险并提高工作效率。掌握这个参数，可以使你在管理项目的发布流程时更加自信和高效。通过合理利用 `--dry-run`，你可以确保所有的发布活动都是经过充分测试和验证的，从而减少意外情况的发生。
