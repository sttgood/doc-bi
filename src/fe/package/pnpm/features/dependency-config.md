---
title: 配置依赖
article: false
---

## 配置依赖项

配置依赖项在所有其他类型的依赖项之前安装（在“dependencies”、“devDependencies”、“optionalDependencies”之前）。

配置依赖项不能具有其自己的依赖项或生命周期脚本。 应该使用精确的版本和完整性校验来添加它们。 示例：

```json
{
  "pnpm": {
    "configDependencies": {
      "my-configs": "1.0.0+sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw=="
    }
  }
}
```