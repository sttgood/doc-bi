---
title: 初始配置与启动
article: false
order: 2
---

在安装 MySQL 后，需要进行初始配置和启动。以下是详细步骤：

---

## **1. 初始配置**

### **运行安全脚本**
MySQL 提供了一个安全配置脚本 `mysql_secure_installation`，用于设置 root 密码、删除匿名用户、禁止远程 root 登录等。

1. **运行脚本**  
   在终端或命令提示符中运行以下命令：  
   ```bash
   sudo mysql_secure_installation
   ```

2. **设置 root 密码**  
   按照提示输入 root 密码。

3. **删除匿名用户**  
   是否删除匿名用户？输入 `Y`。

4. **禁止远程 root 登录**  
   是否禁止远程 root 登录？输入 `Y`。

5. **删除测试数据库**  
   是否删除测试数据库？输入 `Y`。

6. **重新加载权限表**  
   是否重新加载权限表？输入 `Y`。

---

### **手动配置**
如果需要手动配置 MySQL，可以编辑 MySQL 的配置文件。

1. **找到配置文件**  
   - **Linux/macOS**: `/etc/my.cnf` 或 `/etc/mysql/my.cnf`  
   - **Windows**: `C:\ProgramData\MySQL\MySQL Server X.X\my.ini`

2. **编辑配置文件**  
   使用文本编辑器打开配置文件，添加或修改以下内容：  
   ```ini
   [mysqld]
   bind-address = 0.0.0.0       # 允许所有 IP 访问
   max_connections = 200        # 最大连接数
   character-set-server = utf8mb4  # 设置默认字符集
   collation-server = utf8mb4_unicode_ci
   
   [client]
   default-character-set = utf8mb4
   ```

3. **保存并重启 MySQL**  
   保存文件后，重启 MySQL 服务使配置生效。

---

## **2. 启动 MySQL 服务**

### **Linux/macOS**
1. **启动服务**  
   ```bash
   sudo systemctl start mysql
   ```

2. **设置开机自启动**  
   ```bash
   sudo systemctl enable mysql
   ```

3. **检查服务状态**  
   ```bash
   sudo systemctl status mysql
   ```

---

### **Windows**
1. **启动服务**  
   打开命令提示符（管理员权限），运行以下命令：  
   ```bash
   net start mysql
   ```

2. **停止服务**  
   ```bash
   net stop mysql
   ```

3. **检查服务状态**  
   打开任务管理器，查看 MySQL 服务是否正在运行。

---

## **3. 登录 MySQL**
1. **使用 root 用户登录**  
   在终端或命令提示符中运行以下命令：  
   ```bash
   mysql -u root -p
   ```

2. **输入密码**  
   输入之前设置的 root 密码。

3. **验证登录**  
   如果成功进入 MySQL 命令行，说明 MySQL 已正确安装和启动。

---

## **4. 创建新用户和数据库**
1. **创建数据库**  
   ```sql
   CREATE DATABASE mydatabase;
   ```

2. **创建用户**  
   
   ```sql
   CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
   ```
   
3. **授予权限**  
   ```sql
   GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **验证用户**  
   使用新用户登录 MySQL：  
   ```bash
   mysql -u myuser -p
   ```

---

## **5. 远程访问配置**
1. **修改绑定地址**  
   编辑 MySQL 配置文件，将 `bind-address` 改为 `0.0.0.0`：  
   ```ini
   bind-address = 0.0.0.0
   ```

2. **创建远程用户**  
   ```sql
   CREATE USER 'remoteuser'@'%' IDENTIFIED BY 'remotepassword';
   GRANT ALL PRIVILEGES ON *.* TO 'remoteuser'@'%';
   FLUSH PRIVILEGES;
   ```

3. **开放防火墙端口**  
   确保防火墙允许 MySQL 端口（默认 3306）：  
   ```bash
   sudo ufw allow 3306
   ```

4. **重启 MySQL 服务**  
   ```bash
   sudo systemctl restart mysql
   ```

---

## **6. 常见问题**
1. **忘记 root 密码**  
   - 停止 MySQL 服务。  
   - 启动 MySQL 时跳过权限检查：  
     ```bash
     mysqld_safe --skip-grant-tables &
     ```
   - 使用 root 登录并修改密码：  
     ```sql
     UPDATE mysql.user SET authentication_string=PASSWORD('new_password') WHERE User='root';
     FLUSH PRIVILEGES;
     ```
   - 重启 MySQL 服务。

2. **无法启动 MySQL**  
   - 检查日志文件（通常位于 `/var/log/mysql/error.log` 或 MySQL 安装目录下的 `data` 文件夹）。  
   - 确保端口 3306 未被占用。

---

通过以上步骤，您可以完成 MySQL 的初始配置和启动，并确保其正常运行！
