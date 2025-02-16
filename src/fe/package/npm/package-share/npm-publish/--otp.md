---
title: --otp
article: false
---

`npm otp` 是 npm（Node Package Manager）提供的一个命令，主要用于处理一次性密码（One-Time Password, OTP）。OTP 通常与双因素认证（Two-Factor Authentication, 2FA）一起使用，以增强账户的安全性。当你启用了 2FA 后，在执行某些敏感操作（如发布新包或更改账户设置）时，npm 可能会要求你提供 OTP。

### 什么是 OTP？

一次性密码（OTP）是一次性的短代码，通常通过短信、电子邮件或专门的应用程序（如 Google Authenticator）生成。它用于验证用户身份，确保即使密码泄露，未经授权的人员也无法访问账户。

### 使用场景

启用 2FA 后，以下几种情况可能需要提供 OTP：

1. **发布新包**：当你尝试使用 `npm publish` 发布一个新的包或更新现有包时。
2. **修改账户信息**：例如更改密码、添加或移除团队成员等。
3. **执行其他敏感操作**：任何涉及账户安全或权限变更的操作。

### 如何使用 `npm otp`

#### 提供 OTP

如果你在执行上述敏感操作时被提示输入 OTP，可以使用 `npm otp` 命令来提供这个一次性密码。具体用法如下：

```bash
npm otp <otp-code>
```

这里的 `<otp-code>` 就是你从认证应用中获取的一次性密码。

#### 自动读取 OTP

对于自动化脚本或 CI/CD 流程，手动输入 OTP 可能不太方便。为此，npm 支持通过环境变量自动读取 OTP。你可以设置 `NPM_OTP` 环境变量，其值为当前的一次性密码。

例如，在 Linux/macOS 上：

```bash
export NPM_OTP=$(get-otp-from-somewhere)
npm publish
```

或者在 Windows 的 PowerShell 中：

```powershell
$env:NPM_OTP = $(Get-OtpFromSomewhere)
npm publish
```

这里假设 `get-otp-from-somewhere` 和 `Get-OtpFromSomewhere` 是你用来获取 OTP 的命令或函数。

#### 结合其他命令使用

你也可以直接在命令行中提供 OTP，而不需要事先设置环境变量。例如：

```bash
NPM_OTP=$(get-otp-from-somewhere) npm publish
```

这行命令会在执行 `npm publish` 之前临时设置 `NPM_OTP` 环境变量。

### 示例

假设你已经启用了 2FA，并且现在想要发布一个新的版本。以下是完整的步骤：

1. **生成 OTP**：打开你的认证应用程序（如 Google Authenticator），查看为你的 npm 账户生成的一次性密码。

2. **提供 OTP**：根据你的工作流程选择合适的方式提供 OTP。如果你是在终端中手动操作，可以直接运行：

   ```bash
   npm otp <your-otp-code>
   ```

   或者，如果你是在 CI/CD 管道中自动发布，可以通过环境变量传递 OTP：

   ```bash
   export NPM_OTP=<your-otp-code>
   npm publish
   ```

3. **完成操作**：一旦提供了正确的 OTP，npm 将继续执行你最初发起的操作（如发布新版本）。

### 注意事项

- **安全性**：确保 OTP 不会暴露给他人。不要将 OTP 硬编码到脚本中，而是尽量使用安全的方式来动态获取和传递 OTP。
- **时效性**：OTP 通常有较短的有效期（如 30 秒），因此你需要尽快完成相关操作。
- **备用方法**：如果因为某种原因无法获取 OTP（如手机不在身边），请确保你有其他的恢复选项，如备用邮箱或电话号码。
- **多平台支持**：不同的操作系统和 shell 环境可能有不同的方式来设置环境变量，请根据实际情况调整命令格式。

### 总结

`npm otp` 是一个重要的工具，它帮助你在启用 2FA 的情况下安全地管理 npm 账户和操作。通过正确使用 OTP，你可以显著提高账户的安全性，防止未授权访问和潜在的安全风险。无论是手动操作还是自动化流程，掌握如何有效地提供和管理 OTP 都是保护你 npm 资产的关键技能。
