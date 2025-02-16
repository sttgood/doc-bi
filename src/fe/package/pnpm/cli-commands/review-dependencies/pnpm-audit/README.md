---
title: pnpm audit
article: false
dir:
  order: 1
  link: true
---



```bash
pnpm audit
```

检查已安装程序包的已知安全问题。

如果发现安全问题，请尝试通过 `pnpm update` 更新你的依赖项。 如果简单的更新不能解决所有问题，请使用 [overrides](https://pnpm.io/zh/package_json#pnpmoverrides) 强制使用不易受攻击的版本。 例如，如果 `lodash@<2.1.0` 易受攻击，可用这个 overrides 来强制使用 `lodash@^2.1.0`：

package.json

```json
{
    "pnpm": {
        "overrides": {
            "lodash@<2.1.0": "^2.1.0"
        }
    }
}
```



或者运行 `pnpm audit --fix`。

如果你想容忍一些不影响项目的漏洞，可以使用 [`pnpm.auditConfig.ignoreCves`](https://pnpm.io/zh/package_json#pnpmauditconfigignorecves) 设置。

## 配置项

### --audit-level \<severity\>

- 类型：**low**, **moderate**, **hig**, **critical**
- 默认值：**low**

仅打印严重性大于或等于 "severity" 的警告。

### --fix

强制将不易受攻击的版本，添加覆盖到 `package.json` 文件中。

### --json

以 JSON 格式输出审查报告。

### --dev, -D

仅审查开发依赖项。

### --prod, -P

仅审查生产依赖项。

### --no-optional

不审查 `optionalDependencies`。

### --ignore-registry-errors

如果注册源响应了非 200 状态码，则进程应以 0 退出。 所以只有当注册源真正成功响应发现的漏洞时，该进程才会执行失败。