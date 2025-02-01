---
title: pnpm-workpace.yaml
article: false
---

## pnpm-workspace.yaml

`pnpm-workspace.yaml` 定义了工作空间的**根目录**，并能够使你从工作空间中包含/排除目录。 默认情况下，包含所有子目录的所有包。

示例：

pnpm-workspace.yaml

```yaml
packages:
  # 指定根目录直接子目录中的包
  - 'my-app'
  # packages/ 直接子目录中的所有包
  - 'packages/*'
  # components/ 子目录中的所有包
  - 'components/**'
  # 排除测试目录中的包
  - '!**/test/**'
```



即使使用了自定义目录位置通配符，根软件包也总是被包含.

目录也在 `pnpm-workspace.yaml` 文件中定义。 有关详细信息，请参阅 [*Catalogs*](https://pnpm.io/zh/catalogs)。

pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'

catalog:
  chalk: ^4.1.2

catalogs:
  react16:
    react: ^16.7.0
    react-dom: ^16.7.0
  react17:
    react: ^17.10.0
    react-dom: ^17.10.0
```