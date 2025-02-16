---
title: yum
article: false
order: 
---

yum（Yellowdog Updater, Modified）是一个在基于RPM的Linux发行版中使用的高级包管理工具，它提供了完整的操作系统软件包管理功能，包括检索、查看信息、安装、更新和删除软件包等。以下是yum命令的详细解释：

### 一、yum的基本语法

yum命令的基本语法为：`yum [options] [command] [package ...]`

- **options**：可选参数，用于修改yum命令的行为。
- **command**：要执行的命令，如install（安装）、update（更新）、remove（删除）等。
- **package**：要安装、更新或卸载的软件包名称。

### 二、yum的常用选项

yum命令提供了许多选项，以下是一些常用的选项：

- `-h`或`--help`：显示帮助信息并退出。
- `-y`或`--assumeyes`：自动回答“是”以确认所有提示。
- `-q`或`--quiet`：静默模式，减少输出信息。
- `-v`或`--verbose`：详细模式，增加输出信息。
- `--nogpgcheck`：跳过GPG签名检查。
- `--disablerepo=repo_id`：禁用特定的仓库。
- `--enablerepo=repo_id`：启用特定的仓库。
- `--exclude=package_name`：排除某些软件包不进行操作。
- `--showduplicates`：显示所有版本的软件包。
- `--skip-broken`：跳过损坏的依赖关系并继续执行。
- `--downloadonly`：仅下载软件包而不安装。

### 三、yum的常用命令

1. **安装软件包**

使用`yum install package_name`命令可以安装指定的软件包。例如，要安装httpd（Apache HTTP服务器）软件包，可以运行：`sudo yum install httpd`。

1. **更新软件包**

- 使用`yum update`命令可以更新系统上已安装的所有软件包。
- 如果要更新特定的软件包（如httpd），可以指定软件包名：`sudo yum update httpd`。

1. **卸载软件包**

使用`yum remove package_name`命令可以卸载指定的软件包。例如，要卸载httpd软件包，可以运行：`sudo yum remove httpd`。

1. **搜索软件包**

使用`yum search keyword`命令可以在软件仓库中搜索包含特定关键字的软件包。例如，要搜索与“httpd”相关的软件包，可以运行：`yum search httpd`。

1. **列出软件包**

- 使用`yum list`命令可以列出所有可用或已安装的软件包。
- 要列出所有已安装的软件包，可以使用`yum list installed`。
- 要查找特定软件包（如httpd）是否已安装，可以使用`yum list installed | grep httpd`命令。

1. **显示软件包信息**

使用`yum info package_name`命令可以显示指定软件包的详细信息，包括版本、描述、依赖关系等。例如，要查看httpd软件包的信息，可以运行：`yum info httpd`。

1. **清理yum缓存**

使用`yum clean`命令可以清理yum缓存。例如，要清理所有缓存文件，可以运行：`sudo yum clean all`。

1. **软件包组管理**

yum还支持软件包组（groups）的管理，这些组是相关的软件包的集合。常用的软件包组管理命令包括：

- `yum grouplist`：列出所有可用的软件组。
- `yum groupinfo "Group Name"`：显示指定软件组的详细信息。
- `yum groupinstall "Group Name"`：安装指定的软件组。
- `yum groupremove "Group Name"`：卸载指定的软件组。

### 四、yum的工作原理

yum的工作原理是从一个或多个仓库（repository）中检索包信息，并使用这些信息来构建一个可用的依赖关系树。然后，yum根据这个依赖关系树来安装、升级或删除软件包。yum能够自动解决依赖关系，并能够并行下载多个包以加快安装速度。

### 五、注意事项

- 大多数yum操作需要超级用户权限，通常通过sudo来执行这些命令。
- yum需要网络连接来访问远程仓库。
- 在使用yum之前，请确保/etc/yum.repos.d/目录下的仓库配置文件正确无误。
- yum的操作日志通常保存在/var/log/yum.log中。

综上所述，yum是一个功能强大的软件包管理工具，它使得Linux系统的软件包管理变得更加简单和高效。