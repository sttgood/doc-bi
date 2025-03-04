---
title: 连接MySQL服务器
article: false
order: 1
---

连接 MySQL 服务器是使用 MySQL 数据库的第一步。以下是连接 MySQL 服务器的详细说明，包括命令行工具和编程语言中的连接方式。

#### 1.1 使用 `mysql` 命令行客户端
MySQL 提供了 `mysql` 命令行工具，可以直接连接到 MySQL 服务器。

#### 语法：
```bash
mysql -h hostname -u username -p
```

#### 参数说明：
- `-h`：指定 MySQL 服务器的主机名或 IP 地址（默认是 `localhost`）。
- `-u`：指定 MySQL 用户名。
- `-P`：指定 MySQL 服务器的端口号（默认是 `3306`）。
- `-p`：提示输入密码。

#### 示例：
连接到本地的 MySQL 服务器，用户名为 `root`：
```bash
mysql -h localhost -u root -p
```

连接到远程 MySQL 服务器（IP 为 `192.168.1.100`，端口为 `3306`）：
```bash
mysql -h 192.168.1.100 -P 3306 -u root -p
```

#### 1.2 退出 MySQL 命令行客户端
在 MySQL 命令行中，输入以下命令退出：
```sql
exit;
```

