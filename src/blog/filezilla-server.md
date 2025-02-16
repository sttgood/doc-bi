---
title: filezilla-server教程
author: deepseek
isOriginal: true
date: 2025-2-5 15:28:00
category: 
  - 软件使用
article: true
timeline: true
---
filezilla server的使用方式
<!-- more -->

### **1. 下载与安装**

- 访问官网 [https://filezilla-project.org](https://filezilla-project.org/)，下载 **FileZilla Server** 版本。
- 运行安装程序，按默认选项完成安装。注意：
  - 安装类型选择 **Standard**（标准安装）。
  - 建议勾选 **"Start Server after setup completes"**（安装完成后启动服务）。

------

### **2. 启动管理界面**

- 安装完成后，会自动弹出 **FileZilla Server Interface** 连接窗口：
  - **Server Address**: `127.0.0.1`（默认本机地址）
  - **Port**: `14147`（默认管理端口）
  - **Password**: 首次使用留空，后续可设置管理员密码。
- 点击 **OK** 进入主界面。

------

### **3. 配置服务器**

#### **3.1 设置管理员密码（可选）**

- 菜单栏选择 **Edit → Settings**。
  - 左侧导航 **Admin Interface Settings** → 右侧勾选 **Change admin password**，输入密码保存。

#### **3.2 创建用户账号**

1. 菜单栏点击 **Edit → Users**。
2. 在 **General** 标签页，点击 **Add** 创建新用户。
   - 输入用户名（如 `ftpuser`），点击 **OK**。
3. 设置密码（可选）：
   - 勾选 **Password**，输入用户密码。
4. 设置共享目录：
   - 切换到 **Shared Folders** 标签页。
   - 点击 **Add** 添加用户根目录（如 `D:\ftp_files`）。
   - 设置目录权限（Read、Write、Delete 等）。

### **4. 配置防火墙与网络**

- **防火墙**：确保Windows防火墙允许 `FileZilla Server` 和 `FTP` 流量。

> 大部分问题都是防火墙引起的。暂时关闭防火墙试试。

- **被动模式（Passive Mode）配置**：
  1. 进入 **Edit → Settings**。
  2. 左侧选择 **Passive Mode Settings**。
  3. 勾选 **Use custom port range**（如 `50000-51000`），并确保路由器/防火墙转发这些端口。

### 5.相关介绍

1. **Passive Mode（被动模式）**
   - **FTP 数据传输模式**，由服务器动态分配端口供客户端连接。
   - 适用场景：客户端处于防火墙/NAT后（如家庭网络）。
   - 需配置端口范围（如 `50000-51000`），并在防火墙中开放。
2. **Active Mode（主动模式）**
   - 由服务器主动连接客户端指定端口传输数据。
   - 问题：客户端防火墙可能阻止外部连接，导致失败。
3. **SSL/TLS 加密**
   - 对 FTP 传输数据进行加密，防止信息被窃听。
   - 对应协议：**FTPS**（FTP over SSL）。需在服务器配置证书。
