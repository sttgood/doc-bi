---
title: ip
article: false
order: 
---

`ip`命令是Linux系统中用于显示或操作路由、设备、策略路由和隧道等网络参数的一个功能强大的网络配置工具。它属于`iproute2`套件的一部分，提供了比传统`ifconfig`命令更强大和灵活的功能。以下是`ip`命令的详细解释：

### 一、基本格式

```bash
bash复制代码

ip [OPTIONS] OBJECT {COMMAND | help}
```

- **OPTIONS**：选项，用于指定命令的行为或输出格式。
- **OBJECT**：操作对象，如`link`（网络设备）、`address`（设备上的协议地址）、`route`（路由表条目）等。
- **COMMAND**：对指定的操作对象执行的操作命令，如`show`（显示）、`add`（添加）、`del`（删除）等。

### 二、常用选项

- **-V 或 --version**：显示`ip`命令的版本信息。
- **-s 或 --stats 或 --statistics**：输出更详细的信息。
- **-f <协议> 或 -family <协议>**：指定协议类型，如`inet`（IPv4）、`inet6`（IPv6）等。
- **-r**：在显示主机时，不使用IP地址，而使用主机的域名。
- **-4**：指定使用IPv4协议。
- **-6**：指定使用IPv6协议。
- **-0**：输出信息时，每条记录输出一行，即使内容较多也不换行显示。

### 三、常用操作对象及命令

1. **address（设备上的协议地址）**

   - **功能**：用于显示和配置网络接口信息的重要命令。

   - 常用命令

     ：

     - `ip addr show`：显示设备上的协议地址配置，如IP地址、子网掩码、广播地址等。
     - `ip addr add [IP地址/子网掩码] dev [网络接口]`：为指定网络接口添加一个IP地址。
     - `ip addr del [IP地址/子网掩码] dev [网络接口]`：从指定网络接口删除一个IP地址。

2. **link（网络设备）**

   - **功能**：用于管理网络接口的链路层设置。

   - 常用命令

     ：

     - `ip link show`：显示网络设备的状态信息，如接口名称、类型、状态、MTU、队列长度等。
     - `ip link set [网络接口] up`：启用指定网络接口。
     - `ip link set [网络接口] down`：禁用指定网络接口。
     - `ip link add`：添加网络接口。
     - `ip link del`：删除网络接口。

3. **route（路由表条目）**

   - **功能**：ip命令支持复杂的路由配置，包括静态路由、默认路由、策略路由等。

   - 常用命令

     ：

     - `ip route show`：显示路由表信息，包括目的网络、网关、接口等。
     - `ip route add [目标网络] via [网关IP] dev [网络接口]`：添加新的路由条目。
     - `ip route del [目标网络]`：删除指定的路由条目。
     - `ip route replace`：替换默认路由或静态路由。

4. **rule（策略路由管理）**

   - **功能**：策略路由允许基于源地址、目的地址或其他标准来选择不同的路由。

   - 常用命令

     ：

     - `ip rule show`：显示当前策略路由规则。
     - 添加、删除策略路由规则的命令格式类似`ip rule add`和`ip rule del`，具体参数需根据实际需求配置。

5. **neigh（ARP缓存管理）**

   - **功能**：ARP（地址解析协议）负责将IP地址映射到MAC地址。ARP缓存是存储最近通信过的IP地址和对应的MAC地址的地方。

   - 常用命令

     ：

     - 显示ARP缓存中的条目。
     - `ip neigh add [IP地址] lladdr [MAC地址] dev [网络接口]`：手动添加ARP缓存条目。
     - `ip neigh del [IP地址]`：删除ARP缓存条目。

6. **tunnel（隧道管理）**

   - **功能**：隧道技术允许在不同网络之间建立直接的通信路径，即使这些网络之间没有直接的物理连接。

   - 常用命令

     ：

     - `ip tunnel add [隧道名称] mode [隧道类型] remote [远程IP] local [本地IP] dev [网络接口]`：添加隧道。
     - 删除隧道的命令格式为`ip tunnel del [隧道名称]`。
     - `ip tunnel show`：显示当前隧道配置。

7. **monitor（监视和调试）**

   - **功能**：ip命令提供了监视网络设备和路由表状态变化的功能，这对于调试网络问题非常有用。

### 四、使用示例

1. **显示所有网络接口的信息**

   ```bash
   bash复制代码
   
   ip a
   ```

   或

   ```bash
   bash复制代码
   
   ip address show
   ```

2. **启用网络接口eth0**

   ```bash
   bash复制代码
   
   ip link set dev eth0 up
   ```

3. **为网络接口eth0添加IP地址**

   ```bash
   bash复制代码
   
   ip addr add 192.168.1.100/24 dev eth0
   ```

4. **删除网络接口eth0上的IP地址**

   ```bash
   bash复制代码
   
   ip addr del 192.168.1.100/24 dev eth0
   ```

5. **显示路由表信息**

   ```bash
   bash复制代码
   
   ip route show
   ```

   或

   ```bash
   bash复制代码
   
   ip r
   ```

6. **添加新的路由条目**

   ```bash
   bash复制代码
   
   ip route add 192.168.2.0/24 via 192.168.1.1 dev eth0
   ```

7. **删除指定的路由条目**

   ```bash
   bash复制代码
   
   ip route del 192.168.2.0/24 via 192.168.1.1 dev eth0
   ```

### 五、注意事项

- 在使用`ip`命令时，必须指定相应的操作对象和操作命令。
- `ip`命令提供了丰富的选项和参数，可以根据实际需求进行灵活配置。
- 对于一些复杂的网络配置，建议参考官方文档或相关网络教程以获取更详细的指导。

综上所述，`ip`命令是Linux系统中一个功能强大的网络配置工具，通过合理使用其各种选项和参数，可以高效地管理和配置网络。