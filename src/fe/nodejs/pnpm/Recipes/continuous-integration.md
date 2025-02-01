---
title: 持续集成
article: false
order: 2
---

## 持续集成

pnpm 可以很容易地用于各种持续集成系统。

注意

在所有本文提供的配置文件中，存储都被缓存了。 但是，这不是必需的，并且不能保证缓存存储将使安装速度变得更快。 因此，您不必在作业中缓存 pnpm 存储。

## Travis

在 [Travis CI](https://travis-ci.org/) 上，请将此添加到你的 `.travis.yml` 文件中以使用 pnpm 来安装你的依赖项：

.travis.yml

```yaml
cache:
  npm: false
  directories:
    - "~/.pnpm-store"
before_install:
  - corepack enable
  - corepack prepare pnpm@latest-10 --activate
  - pnpm config set store-dir ~/.pnpm-store
install:
  - pnpm install
```



## Semaphore

在 [Semapore] 上，请将此内容添加到 `.semaphore/semaphore.yml` 文件中以使用 pnpm 来安装和缓存你的依赖：

.semaphore/semaphore.yml

```yaml
version: v1.0
name: Semaphore CI pnpm 示例
agent:
  machine:
    type: e1-standard-2
    os_image: ubuntu1804
blocks:
  - name: 安装依赖
    task:
      jobs:
        - name: pnpm install
          commands:
            - corepack enable
            - corepack prepare pnpm@latest-10 --activate
            - checkout
            - cache restore node-$(checksum pnpm-lock.yaml)
            - pnpm install
            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)
```



## AppVeyor

在 [AppVeyor](https://www.appveyor.com/) 上，在你的 `appveyor.yml` 中添加这些来使用 pnpm 安装你的依赖项：

appveyor.yml

```yaml
install:
  - ps: Install-Product node $env:nodejs_version
  - corepack enable
  - corepack prepare pnpm@latest-10 --activate
  - pnpm install
```



## GitHub Actions

在 GitHub Actions 上，你可以像这样使用 pnpm 安装和缓存你的依赖项（属于 ·.github/workflows/NAME.yml·）：

.github/workflows/NAME.yml

```yaml
name: pnpm 示例工作流
on:
  push:

jobs:
  build:
    runs-on: ubuntu-22.04
    strategy:
      matrix:
        node-version: [20]
    steps:
    - uses: actions/checkout@v4
    - name: 安装 pnpm
      uses: pnpm/action-setup@v4
      with:
        version: 10
    - name: 使用 Nnode.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'pnpm'
    - name: 安装依赖
      run: pnpm install
```



## GitLab CI

在 Gitlab 上，你可以像这样使用 pnpm 来安装和缓存你的依赖项（在 `.gitlab-ci.yml` 中）：

.gitlab-ci.yml

```yaml
stages:
  - build

build:
  stage: build
  image: node:18.17.1
  before_script:
    - corepack enable
    - corepack prepare pnpm@latest-10 --activate
    - pnpm config set store-dir .pnpm-store
  script:
    - pnpm install # 安装依赖
  cache:
    key:
      files:
        - pnpm-lock.yaml
    paths:
      - .pnpm-store
```



## Bitbucket Pipelines

你可以使用 pnpm 来安装和缓存你的依赖项：

.bitbucket-pipelines.yml

```yaml
definitions:
  caches:
    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store

pipelines:
  pull-requests:
    "**":
      - step:
          name: 构建并测试
          image: node:18.17.1
          script:
            - corepack enable
            - corepack prepare pnpm@latest-10 --activate
            - pnpm install
            - pnpm run build # 替换为你自己的构建/测试/... 命令
          caches:
            - pnpm
```



## Azure Pipelines

在 Azure pipeline 中，你可以将以下内容添加到 `Azure-Pipelines.yml` 中，使用 pnpm 安装和缓存依赖项`:

azure-pipelines.yml

```yaml
variables:
  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store

steps:
  - task: Cache@2
    inputs:
      key: 'pnpm | "$(Agent.OS)" | pnpm-lock.yaml'
      path: $(pnpm_config_cache)
    displayName: pnpm 缓存

  - script: |
      corepack enable
      corepack prepare pnpm@latest-10 --activate
      pnpm config set store-dir $(pnpm_config_cache)
    displayName: pnpm 设置

  - script: |
      pnpm install
      pnpm run build
    displayName: pnpm 安装与构建
```



## CircleCI

在 CircleCI 中，你可以将以下内容添加到 `.circleci/config.yml` 中，使用 pnpm 安装和缓存依赖项`:

.circleci/config.yml

```yaml
version: 2.1

jobs:
  build: # 这可以是你选择的任何名称
    docker:
      - image: node:18
    resource_class: large
    parallelism: 10

    steps:
      - checkout
      - restore_cache:
          name: 恢复 pnpm 包缓存
          keys:
            - pnpm-packages-{{ checksum "pnpm-lock.yaml" }}
      - run:
          name: 安装 pnpm 包管理器
          command: |
            corepack enable
            corepack prepare pnpm@latest-10 --activate
            pnpm config set store-dir .pnpm-store
      - run:
          name: 安装依赖
          command: |
            pnpm install
      - save_cache:
          name: 存储 pnpm 包缓存
          key: pnpm-packages-{{ checksum "pnpm-lock.yaml" }}
          paths:
            - .pnpm-store
```



## Jenkins

你可以使用 pnpm 来安装和缓存你的依赖项：

```json
pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-10 --activate'
                sh 'pnpm install'
            }
        }
    }
}
```