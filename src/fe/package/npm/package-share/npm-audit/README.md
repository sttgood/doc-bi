---
title: npm audit
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm audit [fix|signatures]
```

## 描述

audit 命令将项目中配置的依赖的描述提交到默认注册表，并要求报告已知漏洞。如果发现任何漏洞，则将计算影响和适当的补救措施。如果提供了 `fix` 参数，则补救措施将应用于包树。

如果没有发现漏洞，该命令将以 0 退出代码退出。

请注意，某些漏洞无法自动修复，需要人工干预或审查。另请注意，由于 `npm audit fix` 在引擎盖下运行一个成熟的 `npm install`，适用于安装程序的所有配置也将适用于 `npm install` - 所以像 `npm audit fix --package-lock-only` 这样的东西将按预期工作。

默认情况下，如果发现任何漏洞，审计命令将以非零代码退出。在 CI 环境中包含 `--audit-level` 参数以指定将导致命令失败的最低漏洞级别可能很有用。此选项不过滤报告输出，它只是更改命令的失败阈值。

## 包锁

默认情况下，npm 需要包锁或收缩封装才能运行审核。你可以使用 `--no-package-lock` 绕过包锁，但请注意每次运行的结果可能会有所不同，因为 npm 每次都会重新构建依赖树。

## 审计签名

为了确保你从公共 npm 注册表或任何支持签名的注册表下载的包的完整性，你可以使用 npm CLI 验证下载包的注册表签名。

可以使用以下 `audit` 命令验证注册表签名：

```bash
$ npm audit signatures
```

`audit signatures` 命令还将验证下载包的来源证明。由于出处证明是一项新功能，因此随着时间的推移，安全功能可能会添加到证明格式中（或更改）。为了确保你始终能够验证证明签名，请检查你是否正在运行最新版本的 npm CLI。请注意，这通常意味着更新 npm 超出 Node.js 附带的版本。

如果遵循以下约定，npm CLI 支持任何注册表提供的注册表签名和签名密钥：

1. 签名在 `dist` 对象中每个已发布版本的包的 `packument` 中提供：



```json
"dist":{
  "..omitted..": "..omitted..",
  "signatures": [{
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "sig": "a312b9c3cb4a1b693e8ebac5ee1ca9cc01f2661c14391917dcb111517f72370809..."
  }]
}
```

查看来自公共 npm 注册表的签名包的 [示例](https://registry.npmjs.org/light-cycle/1.4.3)。

`sig` 是使用以下模板生成的：`${package.name}@${package.version}:${package.dist.integrity}` 和 `keyid` 必须匹配以下公共签名密钥之一。

1. 公共签名密钥在 `registry-host.tld/-/npm/v1/keys` 以以下格式提供：



```bash
{
  "keys": [{
    "expires": null,
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "keytype": "ecdsa-sha2-nistp256",
    "scheme": "ecdsa-sha2-nistp256",
    "key": "{{B64_PUBLIC_KEY}}"
  }]
}
```

键响应：

- `expires`：null 或简化的扩展 [ISO 8601 格式](https://en.wikipedia.org/wiki/ISO_8601)：`YYYY-MM-DDTHH:mm:ss.sssZ`
- `keydid`：公钥的 sha256 指纹
- `keytype`：npm CLI 当前仅支持 `ecdsa-sha2-nistp256`
- `scheme`：npm CLI 当前仅支持 `ecdsa-sha2-nistp256`
- `key`：base64 编码的公钥

