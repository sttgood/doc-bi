---
title: pnpm publish
article: false
dir:
  order: 2
  link: true
---

```bash
pnpm publish
```

发布一个包到注册源。

```bash
pnpm [-r] publish [<tarball|folder>] [--tag <tag>]
     [--access <public|restricted>] [options]
```



当在一个 [工作空间](https://pnpm.io/zh/wokspaces.md) 内发布软件包时，工作空间根目录的 LICENSE 文件将和软件包一起打包（除非软件包有自己的许可证）。

你可以在发布之前使用 `package.json` 中的 [publishConfig](https://pnpm.io/zh/package_json#publishconfig) 字段覆盖某些字段。 你还可以使用 [`publishConfig.directory`](https://pnpm.io/zh/package_json#publishconfigdirectory) 自定义发布的子目录（通常在使用第三方构建工具时）。

递归运行此命令时（`pnpm -r publish`），pnpm 将发布所有版本尚未发布到注册源的软件包。

## 配置项

### --recursive, -r

从工作空间发布所有包。

### --json

以 JSON 格式显示信息。

### --tag <tag>

使用给定的` tag `发布` package `。 默认情况下， 在执行 `pnpm publish` 时会更新 latest 标签。

示例：

```sh
# 在 foo 包目录中
pnpm publish --tag next
# 在你想用 foo 的 next 版本的项目中
pnpm add foo@next
```



### --access <public|restricted>

告知注册源所发布的包是公开的还是受限制的。

### --no-git-checks

不检查当前的分支是否为发布分支、分支是否干净和是否与远程同步。

### --publish-branch \<branch\>

- 默认值：**master** 和 **main**
- 类型：**字符串**

用于发布最新更改的仓库的主分支。

### --force

尝试发布包，即使其当前版本已在注册源中找到。

### --report-summary

将已发布的包列表保存到 `pnpm-publish-summary.json`。 当使用其他工具来报告已发布包的列表时很有用。

`pnpm-publish-summary.json` 文件的示例：

```json
{
  "publishedPackages": [
    {
      "name": "foo",
      "version": "1.0.0"
    },
    {
      "name": "bar",
      "version": "2.0.0"
    }
  ]
}
```



### --dry-run

执行发布包的所有流程，但不会把包发布到注册源上。

### --otp

当发布包需要双因素身份验证（2FA）时，此选项可以指定一个一次性密码。

### --filter <package_selector>

## 配置

你还可以在 `.npmrc` 文件中设置 `git-checks` 和 `publish-branch` 选项。

示例：

.npmrc

```ini
git-checks=false
publish-branch=production
```

## 生命周期

- `prepublishOnly`
- `prepublish`
- `prepack`
- `prepare`
- `postpack`
- `publish`
- `postpublish`