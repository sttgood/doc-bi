---
title: pnpm deploy
article: false
dir:
  order: 11
  link: true
---

```bash
pnpm deploy
```

从工作空间部署软件包。 在部署期间，已部署软件包的文件将被复制到目标目录。 已部署包的所有依赖项，包括来自工作区的依赖项，都安装在目标目录的独立 `node_modules` 目录中。 目标目录将包含一个可移植包，可以无需其他步骤将其复制到服务器并执行。

使用方法：

```text
pnpm --filter=<deployed project name> deploy <target directory>
```



如果你在部署之前构建项目，也可以使用 `--prod` 选项跳过 `devDependencies` 安装。

```text
pnpm --filter=<deployed project name> --prod deploy <target directory>
```



在 Docker 镜像中的使用。 在你的 monorepo 中构建完所有内容后，在第二个镜像中执行此操作，该镜像使用你的 monorepo 基础镜像作为构建上下文或在额外的构建阶段：

```dockerfile
# syntax=docker/dockerfile:1.4

FROM workspace as pruned
RUN pnpm --filter <your package name> --prod deploy pruned

FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=pruned /app/pruned .

ENTRYPOINT ["node", "index.js"]
```



## 配置项

### --dev, -D

仅安装 `devDependencies`。

### --no-optional

不安装 `optionalDependencies`。

### --prod, -P

`devDependencies` 中的软件包将不会被安装。

### --filter <package_selector>

## 已部署项目中包含的文件

默认情况下，项目的所有文件都会在部署期间被复制，但这可以通过以下 *之一* 进行修改，并按顺序解决：

1. 项目的 `package.json` 可能包含一个“files”字段来列出应复制的文件和目录。
2. 如果应用程序目录中有一个 `.npmignore` 文件，那么这里列出的任何文件都会被忽略。
3. 如果应用程序目录中有一个 `.gitignore` 文件，那么这里列出的任何文件都会被忽略。