---
title: npm sbom
article: false
dir:
  collapsible: true
  link: true
---

:::tabs

@tab 官方-DOC

## 概要

```bash
npm sbom
```



## 描述

`npm sbom` 命令生成软件物料清单 ，列出当前项目的依赖。SBOM 可以以 [SPDX] 或 [CycloneDX] 格式生成。



## CycloneDX SBOM 示例



```json
{
  "$schema": "http://cyclonedx.org/schema/bom-1.5.schema.json",
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "serialNumber": "urn:uuid:09f55116-97e1-49cf-b3b8-44d0207e7730",
  "version": 1,
  "metadata": {
    "timestamp": "2023-09-01T00:00:00.001Z",
    "lifecycles": [
      {
        "phase": "build"
      }
    ],
    "tools": [
      {
        "vendor": "npm",
        "name": "cli",
        "version": "10.1.0"
      }
    ],
    "component": {
      "bom-ref": "simple@1.0.0",
      "type": "library",
      "name": "simple",
      "version": "1.0.0",
      "scope": "required",
      "author": "John Doe",
      "description": "simple react app",
      "purl": "pkg:npm/simple@1.0.0",
      "properties": [
        {
          "name": "cdx:npm:package:path",
          "value": ""
        }
      ],
      "externalReferences": [],
      "licenses": [
        {
          "license": {
            "id": "MIT"
          }
        }
      ]
    }
  },
  "components": [
    {
      "bom-ref": "lodash@4.17.21",
      "type": "library",
      "name": "lodash",
      "version": "4.17.21",
      "scope": "required",
      "author": "John-David Dalton",
      "description": "Lodash modular utilities.",
      "purl": "pkg:npm/lodash@4.17.21",
      "properties": [
        {
          "name": "cdx:npm:package:path",
          "value": "node_modules/lodash"
        }
      ],
      "externalReferences": [
        {
          "type": "distribution",
          "url": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz"
        },
        {
          "type": "vcs",
          "url": "git+https://github.com/lodash/lodash.git"
        },
        {
          "type": "website",
          "url": "https://lodash.com/"
        },
        {
          "type": "issue-tracker",
          "url": "https://github.com/lodash/lodash/issues"
        }
      ],
      "hashes": [
        {
          "alg": "SHA-512",
          "content": "bf690311ee7b95e713ba568322e3533f2dd1cb880b189e99d4edef13592b81764daec43e2c54c61d5c558dc5cfb35ecb85b65519e74026ff17675b6f8f916f4a"
        }
      ],
      "licenses": [
        {
          "license": {
            "id": "MIT"
          }
        }
      ]
    }
  ],
  "dependencies": [
    {
      "ref": "simple@1.0.0",
      "dependsOn": ["lodash@4.17.21"]
    },
    {
      "ref": "lodash@4.17.21",
      "dependsOn": []
    }
  ]
}
```

## SPDX SBOM 示例

```json
{
  "spdxVersion": "SPDX-2.3",
  "dataLicense": "CC0-1.0",
  "SPDXID": "SPDXRef-DOCUMENT",
  "name": "simple@1.0.0",
  "documentNamespace": "http://spdx.org/spdxdocs/simple-1.0.0-bf81090e-8bbc-459d-bec9-abeb794e096a",
  "creationInfo": {
    "created": "2023-09-01T00:00:00.001Z",
    "creators": ["Tool: npm/cli-10.1.0"]
  },
  "documentDescribes": ["SPDXRef-Package-simple-1.0.0"],
  "packages": [
    {
      "name": "simple",
      "SPDXID": "SPDXRef-Package-simple-1.0.0",
      "versionInfo": "1.0.0",
      "packageFileName": "",
      "description": "simple react app",
      "primaryPackagePurpose": "LIBRARY",
      "downloadLocation": "NOASSERTION",
      "filesAnalyzed": false,
      "homepage": "NOASSERTION",
      "licenseDeclared": "MIT",
      "externalRefs": [
        {
          "referenceCategory": "PACKAGE-MANAGER",
          "referenceType": "purl",
          "referenceLocator": "pkg:npm/simple@1.0.0"
        }
      ]
    },
    {
      "name": "lodash",
      "SPDXID": "SPDXRef-Package-lodash-4.17.21",
      "versionInfo": "4.17.21",
      "packageFileName": "node_modules/lodash",
      "description": "Lodash modular utilities.",
      "downloadLocation": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "filesAnalyzed": false,
      "homepage": "https://lodash.com/",
      "licenseDeclared": "MIT",
      "externalRefs": [
        {
          "referenceCategory": "PACKAGE-MANAGER",
          "referenceType": "purl",
          "referenceLocator": "pkg:npm/lodash@4.17.21"
        }
      ],
      "checksums": [
        {
          "algorithm": "SHA512",
          "checksumValue": "bf690311ee7b95e713ba568322e3533f2dd1cb880b189e99d4edef13592b81764daec43e2c54c61d5c558dc5cfb35ecb85b65519e74026ff17675b6f8f916f4a"
        }
      ]
    }
  ],
  "relationships": [
    {
      "spdxElementId": "SPDXRef-DOCUMENT",
      "relatedSpdxElement": "SPDXRef-Package-simple-1.0.0",
      "relationshipType": "DESCRIBES"
    },
    {
      "spdxElementId": "SPDXRef-Package-simple-1.0.0",
      "relatedSpdxElement": "SPDXRef-Package-lodash-4.17.21",
      "relationshipType": "DEPENDS_ON"
    }
  ]
}
```

## 仅包锁定模式

如果启用了 package-lock-only，则仅加载包锁（或收缩封装）中的信息。这意味着依赖的 package.json 文件中的信息将不会包含在结果集中（例如描述、主页、引擎）。

## 配置

### `omit`

- 默认值：'dev' 如果 `NODE_ENV` 环境变量设置为 'production'，否则为空。
- 类型："dev"、"optional"、"peer"（可多次设置）

要从磁盘上的安装树中省略的依赖类型。

请注意，这些依赖仍会被解析并添加到 `package-lock.json` 或 `npm-shrinkwrap.json` 文件中。它们只是没有物理安装在磁盘上。

如果一个包类型同时出现在 `--include` 和 `--omit` 列表中，那么它将被包括在内。

如果生成的省略列表包含 `'dev'`，则 `NODE_ENV` 环境变量将针对所有生命周期脚本设置为 `'production'`。



### `package-lock-only`

- 默认值：false
- 类型：布尔值

如果设置为 true，当前操作将只使用 `package-lock.json`，忽略 `node_modules`。

对于 `update`，这意味着只会更新 `package-lock.json`，而不是检查 `node_modules` 并下载依赖。

对于 `list`，这意味着输出将基于 `package-lock.json` 描述的树，而不是 `node_modules` 的内容。



### `sbom-format`

- 默认值：null
- 类型："cyclonedx" 或 "spdx"

生成 SBOM 时使用的 SBOM 格式。



### `sbom-type`

- 默认值："库"
- 类型："库"、"应用" 或 "框架"

生成的 SBOM 描述的包类型。对于 SPDX，这是 `primaryPackagePurpose` 字段的值。对于 CycloneDX，这是 `type` 字段的值。



### `workspace`

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择该文件夹中的所有工作区）

为 `npm init` 命令设置时，可以将其设置为尚不存在的工作区的文件夹，以创建文件夹并将其设置为项目中的全新工作区。

此值不会导出到子进程的环境中。



### `workspaces`

- 默认值：null
- 类型：空值或布尔值

设置为 true 可在所有已配置工作区的上下文中运行该命令。

显式将此设置为 false 将导致像 `install` 这样的命令完全忽略工作区。未明确设置时：

- 在 `node_modules` 树上运行的命令（安装、更新等）会将工作区链接到 `node_modules` 文件夹。* 执行其他操作（测试、执行、发布等）的命令将在根项目上运行，除非在 `workspace` 配置中指定了一个或多个工作区。

此值不会导出到子进程的环境中。

@tab AI-DOC

`npm sbom` 是 npm 提供的一个命令，用于生成软件物料清单（Software Bill of Materials, SBOM）。SBOM 是一种正式的、可机读的文档，它列出了软件组件及其依赖关系，旨在提高软件供应链的安全性和透明度。通过 `npm sbom` 命令，开发者可以轻松地为他们的项目生成 SBOM 文件，从而更好地管理和跟踪项目的依赖项。

### 功能概述

SBOM 的主要目的是提供一个详细的列表，列出软件中使用的所有组件、库和依赖项，包括直接和间接依赖项。这对于确保软件供应链的安全性非常重要，因为它可以帮助识别潜在的风险点，并在发现漏洞时快速采取行动。`npm sbom` 命令使得生成这种清单变得简单且高效。

### 使用方法

#### 生成 SBOM 文件

要为当前项目生成 SBOM 文件，可以在项目根目录下运行以下命令：

```bash
npm sbom
```

这将根据项目的 `package.json` 和 `node_modules` 文件夹中的信息，生成一个 SBOM 文件。默认情况下，该文件将以 CycloneDX 或 SPDX 格式保存到当前目录。

#### 指定输出格式

`npm sbom` 支持多种输出格式，包括 CycloneDX 和 SPDX。你可以通过 `--format` 参数指定所需的格式：

- **CycloneDX**：这是默认格式，适用于大多数场景。
  
  ```bash
  npm sbom --format=cyclonedx
  ```

- **SPDX**：另一种常用的格式，适用于需要符合 SPDX 规范的情况。
  
  ```bash
  npm sbom --format=spdx
  ```

#### 指定输出路径

你可以通过 `--output` 参数指定生成的 SBOM 文件的保存位置和名称：

```bash
npm sbom --output=path/to/output-file.json
```

#### 结合其他选项使用

你可以结合其他选项来进一步自定义 `npm sbom` 的行为：

- **`--registries`**：指定哪些注册表应该被包含在 SBOM 中。
  
  ```bash
  npm sbom --registries=npm,github
  ```

- **`--exclude-dev`**：排除开发依赖项，只包含生产环境中的依赖项。
  
  ```bash
  npm sbom --exclude-dev
  ```

- **`--json`**：以 JSON 格式输出详细信息，适用于自动化脚本或进一步处理。
  
  ```bash
  npm sbom --json
  ```

### 注意事项

- **网络连接**：`npm sbom` 可能需要访问互联网来获取包的元数据，请确保有稳定的网络连接。
- **权限问题**：对于私有包或受限访问的仓库，确保你有足够的权限来获取相关信息。
- **性能影响**：对于大型项目或包含大量依赖项的项目，`npm sbom` 可能需要一些时间来生成完整的 SBOM 文件，请耐心等待。
- **持续集成/持续部署 (CI/CD)**：建议在 CI/CD 流程中集成 `npm sbom`，以确保每次构建时都能生成最新的 SBOM 文件。

### 实际应用场景

1. **供应链安全**：通过生成 SBOM 文件，确保所有使用的组件都是可信的，并能够快速响应已知漏洞。
2. **合规性要求**：满足某些行业标准或法规要求，如 NIST SP 800-161、ISO/IEC 29147 等，这些标准要求提供详细的软件成分清单。
3. **审计和审查**：为内部或外部审计提供详细的依赖项信息，便于审查和评估。
4. **风险管理**：识别和管理第三方依赖项带来的风险，确保软件供应链的安全性和稳定性。

### 示例

假设你要为当前项目生成一个 SBOM 文件，并将其保存为 `sbom.json`，同时只包含生产环境中的依赖项：

```bash
npm sbom --exclude-dev --output=sbom.json
```

或者，如果你想生成一个特定格式的 SBOM 文件：

```bash
npm sbom --format=cyclonedx --output=sbom.cdx.json
```

### 总结

`npm sbom` 是一个非常有用的工具，它帮助你在开发过程中生成软件物料清单（SBOM），从而提高软件供应链的安全性和透明度。通过合理利用这个命令，你可以显著提升项目的安全性，确保能够顺利应对潜在的风险和挑战。无论是进行供应链安全分析还是满足合规性要求，掌握 `npm sbom` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm sbom` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化 SBOM 生成过程也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on SBOM](https://docs.npmjs.com/cli/v8/commands/npm-sbom)
- [CycloneDX Specification](https://cyclonedx.org/)
- [SPDX Specification](https://spdx.dev/specifications/)
- [Understanding Software Bill of Materials (SBOM)](https://www.cisa.gov/uscert/ncas/current-activity/2021/06/02/software-bill-materials-sbom-explainer)

:::
