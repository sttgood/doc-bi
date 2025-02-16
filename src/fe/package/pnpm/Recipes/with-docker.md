---
title: 使用Docker
article: false
order: 4
---

## 使用 Docker

:::warning

在构建期间，不可能在 Docker 容器和主机文件系统之间创建引用链接或硬链接。 你可以做的下一个最佳操作是使用 BuildKit 缓存挂载在构建之间共享缓存。 或者，你可以使用 [podman](https://pnpm.io/zh/podman) ，因为它可以在构建期间挂载 Btrfs 卷。

:::

## 最小化 Docker 镜像大小和构建时间

- 使用小镜像，例如 `node:XX-slim`。
- 如果可能的话，利用多阶段是有意义的。
- 利用 BuildKit 缓存挂载功能。

### 示例 1：在 Docker 容器中构建包

由于 `devDependencies` 仅用于构建捆绑包，因此 `pnpm install --prod` 将成为独立于 `pnpm install` 和 `pnpm run build` 阶段，允许最后阶段仅复制之前阶段的必要文件，最小化最终镜像的尺寸。

.dockerignore

```text
node_modules
.git
.gitignore
*.md
dist
```

Dockerfile

```dockerfile
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 8000
CMD [ "pnpm", "start" ]
```

### 示例 2：在单存储库中构建多个 Docker 映像

假设你有一个包含 3 个软件包的单存储库：app1、app2 和 common，app1 和 app2 依赖于 common，但彼此不依赖。

你只想保存每个包的必要依赖项， `pnpm deploy` 可以帮助你仅复制必要的文件和包。

Structure of the monorepo

```text
./
├── Dockerfile
├── .dockerignore
├── .gitignore
├── packages/
│   ├── app1/
│   │   ├── dist/
│   │   ├── package.json
│   │   ├── src/
│   │   └── tsconfig.json
│   ├── app2/
│   │   ├── dist/
│   │   ├── package.json
│   │   ├── src/
│   │   └── tsconfig.json
│   └── common/
│       ├── dist/
│       ├── package.json
│       ├── src/
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'
```

.dockerignore

```text
node_modules
.git
.gitignore
*.md
dist
```

Dockerfile

```dockerfile
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=app1 --prod /prod/app1
RUN pnpm deploy --filter=app2 --prod /prod/app2

FROM base AS app1
COPY --from=build /prod/app1 /prod/app1
WORKDIR /prod/app1
EXPOSE 8000
CMD [ "pnpm", "start" ]

FROM base AS app2
COPY --from=build /prod/app2 /prod/app2
WORKDIR /prod/app2
EXPOSE 8001
CMD [ "pnpm", "start" ]
```

运行以下命令为 app1 和 app2 构建映像：

```sh
docker build . --target app1 --tag app1:latest
docker build . --target app2 --tag app2:latest
```

### 示例 3：在 CI/CD 上构建

在 CI 或 CD 环境中，BuildKit 缓存挂载可能不可用，因为 VM 或容器是短暂的，并且只有普通的 Docker 缓存才能起作用。

因此，替代方法是使用具有增量构建层的经典 Dockerfile，对于这种情况， `pnpm fetch` 是最佳选择，因为它只需要 `pnpm-lock.yaml` 文件，并且只有在更改依赖项时层缓存才会丢失。

Dockerfile

```dockerfile
FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod

COPY pnpm-lock.yaml /app
WORKDIR /app
RUN pnpm fetch --prod

COPY . /app
RUN pnpm run build

FROM base
COPY --from=prod /app/node_modules /app/node_modules
COPY --from=prod /app/dist /app/dist
EXPOSE 8000
CMD [ "pnpm", "start" ]
```
