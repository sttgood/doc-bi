---
title: --access
article: false
---

`npm access` 是 npm（Node Package Manager）提供的一个命令，用于管理和设置发布到 npm 注册表中的包的访问权限。这对于私有包、团队协作以及控制谁可以安装和使用你的包非常重要。以下是关于 `npm access` 的详细解释：

### 访问权限类型

npm 支持两种主要的访问权限类型：

1. **Public（公共）**：任何人都可以从 npm 安装该包。
2. **Restricted（受限/私有）**：只有你或你指定的用户才能安装该包。

对于私有包，你需要订阅 npm 的付费服务（如 npm Pro 或 npm Orgs），因为免费账户不允许发布私有包。

### 命令用法

#### 设置默认访问权限

你可以通过 `npm access` 命令来设置包的默认访问权限。这通常在第一次发布包之前进行配置。

```bash
npm access public
npm access restricted
```

- **`npm access public`**: 将当前包设置为公共访问。
- **`npm access restricted`**: 将当前包设置为私有访问。

#### 查看当前包的访问权限

要查看当前包的访问权限设置，可以运行以下命令：

```bash
npm access ls-packages
```

这将列出所有你拥有的包及其对应的访问权限。

#### 设置特定版本的访问权限

如果你想为某个特定版本设置访问权限，可以在发布时使用 `--access` 选项：

```bash
npm publish --access=public
npm publish --access=restricted
```

这确保了即使你更改了默认访问权限，特定版本的访问权限也不会受到影响。

### 团队协作与组织管理

如果你在一个团队中工作或者使用 npm 组织（Orgs），还可以更精细地控制访问权限。npm 组织允许你创建团队，并为每个团队分配不同的访问级别。

#### 添加团队成员

首先，你需要将开发者添加到你的组织中：

```bash
npm team add <org>:<team> <user>
```

例如：

```bash
npm team add myorg:developers alice
```

这将用户 `alice` 添加到了 `myorg` 组织的 `developers` 团队中。

#### 分配访问权限给团队

然后，你可以为团队分配对特定包的访问权限：

```bash
npm access grant read-write <org>:<team> <package-name>
npm access grant read-only <org>:<team> <package-name>
```

例如：

```bash
npm access grant read-write myorg:developers my-private-package
```

这使得 `developers` 团队中的所有成员都拥有对 `my-private-package` 的读写权限。

#### 查看团队权限

要查看某个团队的权限设置，可以运行以下命令：

```bash
npm access ls-collaborators <package-name>
```

这将显示所有对该包具有访问权限的用户和团队及其权限级别。

### 注意事项

- **私有包费用**：发布私有包需要订阅 npm 的付费服务。请确保你已经注册了适当的计划。
- **权限继承**：如果你是组织的所有者或管理员，默认情况下你会自动获得对所有私有包的完全访问权限。
- **安全考虑**：谨慎设置访问权限，特别是对于包含敏感信息或商业逻辑的包。确保只授权必要的人员访问这些包。
- **标签与访问权限**：虽然标签（tags）和访问权限都可以用来区分不同版本，但它们的功能不同。标签主要用于版本控制，而访问权限则用于限制谁可以安装和使用包。

### 示例

假设你在管理一个名为 `my-private-package` 的私有包，并且想要为团队中的开发人员提供访问权限：

1. **发布私有包**：

   ```bash
   npm publish --access=restricted
   ```

2. **添加团队成员**：

   ```bash
   npm team add myorg:developers alice
   npm team add myorg:developers bob
   ```

3. **授予团队读写权限**：

   ```bash
   npm access grant read-write myorg:developers my-private-package
   ```

4. **查看权限设置**：

   ```bash
   npm access ls-collaborators my-private-package
   ```

5. **设置默认访问权限为私有**（可选）：

   ```bash
   npm access restricted
   ```

### 总结

`npm access` 提供了一套强大的工具来管理和设置包的访问权限，确保你的代码能够安全地共享给正确的人。无论是个人项目还是企业级应用，合理利用这些功能都能帮助你更好地保护知识产权并促进团队协作。掌握 `npm access` 的使用方法，可以让你更加灵活地控制包的可见性和分发策略。
