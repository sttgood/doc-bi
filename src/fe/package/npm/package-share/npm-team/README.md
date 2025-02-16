---
title: npm team
article: false
dir:
  collapsible: true
  link: true
---

:::tabs

@tab 官方-DOC

## 概要

```bash
npm team create <scope:team> [--otp <otpcode>]
npm team destroy <scope:team> [--otp <otpcode>]
npm team add <scope:team> <user> [--otp <otpcode>]
npm team rm <scope:team> <user> [--otp <otpcode>]
npm team ls <scope>|<scope:team>
```

注意：此命令对工作区无感知。



## 描述

用于管理组织中的团队，以及更改团队成员。不处理包的权限。

团队在对其进行操作时，必须始终完全符合他们所属的组织/范围，用冒号 (`:`) 分隔。也就是说，如果你在 `org` 组织中有 `newteam` 团队，则在这些命令中必须始终将该团队称为 `@org:newteam`。

如果你在 `auth-and-writes` 模式下启用了双重身份验证，则可以使用 `[--otp <otpcode>]` 提供来自身份验证器的代码。如果你不包括这个，那么你将被带到基于你的 `authtype` 的第二个因素流。

- create / destroy:创建一个新团队，或摧毁现有团队。注意：你不能删除 `developers` 团队，[了解更多。](https://npm.nodejs.cn/about-developers-team)

  以下是在 `org` 组织下创建新团队 `newteam` 的方法：

  

  ```bash
  npm team create @org:newteam
  ```

  你应该会看到一条确认消息，例如：`+@org:newteam` 新团队创建后。

- add:将用户添加到现有团队。

  将新用户 `username` 添加到 `org` 组织下名为 `newteam` 的团队：

  

  ```bash
  npm team add @org:newteam username
  ```

  成功后，你应该会看到一条消息：`username added to @org:newteam`

- rm:使用 `npm team rm`，你还可以从他们所属的团队中删除用户。

  这是从 `org` 组织中的 `newteam` 团队中删除用户 `username` 的示例：

  

  ```bash
  npm team rm @org:newteam username
  ```

  删除用户后，将显示一条确认消息：`username removed from @org:newteam`

- ls:如果对组织名称执行，将返回该组织下现有团队的列表。如果对团队执行，它将返回属于该特定团队的所有用户的列表。

  以下是如何列出来自名为 `org` 的组织的所有团队的示例：

  

  ```bash
  npm team ls @org
  ```

  列出名为 `newteam` 的团队的所有成员的示例：

  

  ```bash
  npm team ls @org:newteam
  ```



## 详情

`npm team` 始终直接在当前注册表上运行，可以使用 `--registry=<registry url>` 从命令行进行配置。

你必须是团队管理员才能在给定组织下创建团队和管理团队成员资格。列出团队和团队成员资格可由组织的任何成员完成。

团队管理员和组织成员的组织创建和管理是通过网站完成的，而不是 npm CLI。

要使用团队管理属于你组织的包的权限，请使用 `npm access` 命令授予或撤销适当的权限。



## 配置



### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。



### `parseable`

- 默认值：false
- 类型：布尔值

从写入标准输出的命令输出可解析的结果。对于 `npm search`，这将是制表符分隔的表格格式。



### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。

@tab AI-DOC

`npm team` 是 npm 提供的一组命令，用于管理和组织团队对 npm 包的访问权限。通过 `npm team` 命令，你可以创建团队、添加或移除团队成员、设置不同级别的访问权限等。这对于企业或组织来说非常有用，因为它可以帮助你更好地控制谁可以对包进行哪些操作，从而确保包的安全性和管理效率。

### 功能概述

`npm team` 的主要功能包括：

- **创建和管理团队**：创建新的团队，并对其进行管理。
- **添加和移除团队成员**：将用户添加到团队中，或从团队中移除用户。
- **设置访问权限**：为团队设置不同的访问级别（如读取、写入或管理员权限）。
- **查看团队信息**：列出团队成员及其权限，检查当前的团队结构。

### 使用方法

#### 创建团队

要创建一个新的团队，可以使用以下命令：

```bash
npm team create <scope>.<team>
```

例如，如果你想在 `@myorg` 作用域下创建一个名为 `developers` 的团队，可以运行：

```bash
npm team create @myorg.developers
```

#### 添加团队成员

要将用户添加到团队中，可以使用以下命令：

```bash
npm team add <scope>.<team> <username>
```

例如，要将用户 `alice` 添加到 `@myorg.developers` 团队，可以运行：

```bash
npm team add @myorg.developers alice
```

#### 移除团队成员

要从团队中移除用户，可以使用以下命令：

```bash
npm team rm <scope>.<team> <username>
```

例如，要从 `@myorg.developers` 团队中移除用户 `alice`，可以运行：

```bash
npm team rm @myorg.developers alice
```

#### 设置访问权限

要为团队设置访问权限，可以使用以下命令：

```bash
npm access grant <read-only|read-write|admin> <scope>:<package> <scope>.<team>
```

例如，要授予 `@myorg.developers` 团队对 `@myorg/my-package` 包的读写权限，可以运行：

```bash
npm access grant read-write @myorg/my-package @myorg.developers
```

#### 查看团队信息

要查看团队的详细信息，包括成员列表和权限设置，可以使用以下命令：

```bash
npm team ls <scope>.<team>
```

例如，要查看 `@myorg.developers` 团队的成员列表，可以运行：

```bash
npm team ls @myorg.developers
```

### 结合其他选项使用

你可以结合其他选项来进一步自定义 `npm team` 的行为：

- **`--json`**：以 JSON 格式输出结果，适用于自动化脚本或进一步处理。

  ```bash
  npm team ls @myorg.developers --json
  ```

- **`--registry`**：指定要使用的 npm 注册表。

  ```bash
  npm team create @myorg.developers --registry=https://your-registry-url.com
  ```

### 注意事项

- **需要登录**：要使用 `npm team` 命令，你需要先登录到 npm。可以通过 `npm login` 命令进行登录。
  
  ```bash
  npm login
  ```

- **网络连接**：`npm team` 需要访问互联网来获取和更新团队信息，请确保有稳定的网络连接。
- **权限问题**：确保你有足够的权限来创建团队、添加/移除成员以及设置访问权限。通常，只有具有管理员权限的用户才能执行这些操作。
- **作用域**：团队只能在私有作用域（scoped packages）下创建和管理。公共 npm 包不支持团队管理。

### 实际应用场景

1. **企业内部管理**：在一个企业或组织内，使用 `npm team` 可以帮助你更好地控制不同开发团队对私有 npm 包的访问权限。
2. **多团队协作**：如果有多个开发团队参与同一个项目，可以为每个团队创建独立的 npm 团队，并分配适当的权限。
3. **权限分层**：为不同的团队成员设置不同级别的访问权限，确保敏感操作仅限于授权人员。
4. **审计和审查**：通过团队管理功能，可以更容易地跟踪谁有权访问哪些包，便于审计和审查。

### 示例

假设你在一家公司工作，并且想要管理公司的 npm 包访问权限：

1. **创建团队**：
   ```bash
   npm team create @mycompany.developers
   ```

2. **添加团队成员**：
   ```bash
   npm team add @mycompany.developers alice
   npm team add @mycompany.developers bob
   ```

3. **设置访问权限**：
   ```bash
   npm access grant read-write @mycompany/my-private-package @mycompany.developers
   ```

4. **查看团队信息**：
   ```bash
   npm team ls @mycompany.developers
   ```

5. **移除团队成员**：
   ```bash
   npm team rm @mycompany.developers alice
   ```

6. **以 JSON 格式查看团队信息**：
   ```bash
   npm team ls @mycompany.developers --json
   ```

7. **指定注册表**：
   ```bash
   npm team create @mycompany.developers --registry=https://my-private-registry.com
   ```

### 总结

`npm team` 是一组非常有用的命令，它帮助你在 npm 上管理和组织团队对包的访问权限。通过合理利用这些命令，你可以显著提升包的安全性和管理效率，确保只有授权人员能够对包进行特定的操作。无论是进行企业内部管理还是多团队协作，掌握 `npm team` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm team` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化团队管理和包权限设置也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on npm-team](https://docs.npmjs.com/cli/v8/commands/npm-team)
- [Managing Teams and Access with npm](https://blog.logrocket.com/managing-teams-and-access-with-npm/)
- [Best Practices for Team Management in npm](https://www.freecodecamp.org/news/best-practices-for-team-management-in-npm/)

:::
