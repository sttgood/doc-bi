---
title: 安装MySQL
article: false
order: 1
---

以下是 **MySQL** 在 **Windows**、**Linux** 和 **macOS** 上的安装步骤：

---

## **1. Windows 安装 MySQL**

### **方法 1：使用 MySQL Installer**
1. **下载 MySQL Installer**  
   访问 [MySQL 官方下载页面](https://dev.mysql.com/downloads/installer/)，下载 MySQL Installer for Windows。

2. **运行安装程序**  
   双击下载的 `.msi` 文件，启动 MySQL Installer。

3. **选择安装类型**  
   - 选择 **Developer Default**（开发默认）或 **Server only**（仅安装服务器）。
   - 点击 **Next** 继续。

4. **安装依赖项**  
   安装程序会自动检查并安装所需的依赖项（如 Visual C++ Redistributable）。

5. **配置 MySQL 服务器**  
   - 设置 **Root 密码**。
   - 选择 **Authentication Method**（推荐使用强密码加密方式）。
   - 点击 **Next** 完成配置。

6. **启动 MySQL 服务**  
   安装完成后，MySQL 服务会自动启动。可以通过 **Windows 服务** 管理 MySQL 服务。

7. **验证安装**  
   打开命令提示符（CMD），输入以下命令：  
   ```bash
   mysql -u root -p
   ```
   输入 root 密码，如果成功进入 MySQL 命令行，说明安装成功。

---

### **方法 2：使用 ZIP 包手动安装**
1. **下载 MySQL ZIP 包**  
   访问 [MySQL 官方下载页面](https://dev.mysql.com/downloads/mysql/)，下载 MySQL Community Server 的 ZIP 包。

2. **解压 ZIP 包**  
   将 ZIP 包解压到目标目录，例如 `C:\mysql`。

3. **创建配置文件**  
   在解压目录下创建 `my.ini` 文件，内容如下：  
   ```ini
   [mysqld]
   basedir=C:/mysql
   datadir=C:/mysql/data
   port=3306
   ```

4. **初始化 MySQL**  
   打开命令提示符（CMD），进入 MySQL 的 `bin` 目录，运行以下命令：  
   ```bash
   mysqld --initialize --console
   ```
   记下生成的临时 root 密码。

5. **安装 MySQL 服务**  
   运行以下命令安装 MySQL 服务：  
   ```bash
   mysqld --install
   ```

6. **启动 MySQL 服务**  
   运行以下命令启动 MySQL 服务：  
   ```bash
   net start mysql
   ```

7. **登录 MySQL**  
   使用临时密码登录 MySQL，并修改 root 密码：  
   ```bash
   mysql -u root -p
   ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
   ```

---

## **2. Linux 安装 MySQL**

### **方法 1：使用包管理器**
#### **Ubuntu/Debian**
1. **更新包列表**  
   ```bash
   sudo apt update
   ```

2. **安装 MySQL**  
   ```bash
   sudo apt install mysql-server
   ```

3. **启动 MySQL 服务**  
   ```bash
   sudo systemctl start mysql
   ```

4. **设置开机自启动**  
   ```bash
   sudo systemctl enable mysql
   ```

5. **运行安全脚本**  
   ```bash
   sudo mysql_secure_installation
   ```
   按照提示设置 root 密码和其他安全选项。

6. **验证安装**  
   ```bash
   mysql -u root -p
   ```

#### **CentOS/RHEL**
1. **添加 MySQL 仓库**  
   访问 [MySQL 官方下载页面](https://dev.mysql.com/downloads/repo/yum/)，下载适合的 RPM 包。

2. **安装 MySQL**  
   ```bash
   sudo yum install mysql-server
   ```

3. **启动 MySQL 服务**  
   ```bash
   sudo systemctl start mysqld
   ```

4. **设置开机自启动**  
   ```bash
   sudo systemctl enable mysqld
   ```

5. **运行安全脚本**  
   ```bash
   sudo mysql_secure_installation
   ```

6. **验证安装**  
   ```bash
   mysql -u root -p
   ```

---

### **方法 2：使用二进制包**
1. **下载二进制包**  
   访问 [MySQL 官方下载页面](https://dev.mysql.com/downloads/mysql/)，下载适合的二进制包。

2. **解压并安装**  
   ```bash
   tar -xvf mysql-*.tar.gz
   sudo mv mysql-* /usr/local/mysql
   ```

3. **初始化 MySQL**  
   ```bash
   sudo /usr/local/mysql/bin/mysqld --initialize --user=mysql
   ```

4. **启动 MySQL 服务**  
   ```bash
   sudo /usr/local/mysql/bin/mysqld_safe --user=mysql &
   ```

5. **登录 MySQL**  
   ```bash
   /usr/local/mysql/bin/mysql -u root -p
   ```

---

## **3. macOS 安装 MySQL**

### **方法 1：使用 Homebrew**
1. **安装 Homebrew**  
   如果未安装 Homebrew，运行以下命令：  
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **安装 MySQL**  
   ```bash
   brew install mysql
   ```

3. **启动 MySQL 服务**  
   ```bash
   brew services start mysql
   ```

4. **运行安全脚本**  
   ```bash
   mysql_secure_installation
   ```

5. **验证安装**  
   ```bash
   mysql -u root -p
   ```

---

### **方法 2：使用 DMG 安装包**
1. **下载 DMG 包**  
   访问 [MySQL 官方下载页面](https://dev.mysql.com/downloads/mysql/)，下载 macOS 的 DMG 包。

2. **安装 MySQL**  
   双击 DMG 文件，按照提示完成安装。

3. **启动 MySQL 服务**  
   打开系统偏好设置，找到 MySQL，点击 **Start MySQL Server**。

4. **设置环境变量**  
   将 MySQL 添加到 PATH：  
   ```bash
   echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```

5. **验证安装**  
   ```bash
   mysql -u root -p
   ```

---

通过以上步骤，您可以在 **Windows**、**Linux** 和 **macOS** 上成功安装 MySQL！
