---
title: os
article: false
order: 7
---

**Node.js 的 `os` 模块** 是用于与操作系统交互的核心模块。它提供了获取系统信息（如 CPU、内存、网络接口等）的方法，是开发系统工具和监控应用的重要工具。

---

### **1. 引入 `os` 模块**
```javascript
const os = require('os');
```

---

### **2. `os` 模块的常用方法**

#### **2.1 获取系统信息**

| 方法            | 描述                                           |
| --------------- | ---------------------------------------------- |
| `os.arch()`     | 返回操作系统 CPU 架构（如 `x64`）。            |
| `os.platform()` | 返回操作系统平台（如 `linux`、`win32`）。      |
| `os.type()`     | 返回操作系统类型（如 `Linux`、`Windows_NT`）。 |
| `os.release()`  | 返回操作系统版本。                             |
| `os.version()`  | 返回操作系统的内核版本（Node.js >= 13.0.0）。  |

```javascript
console.log(os.arch()); // 输出: x64
console.log(os.platform()); // 输出: linux
console.log(os.type()); // 输出: Linux
console.log(os.release()); // 输出: 5.4.0-42-generic
console.log(os.version()); // 输出: #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020
```

#### **2.2 获取 CPU 信息**

| 方法           | 描述                                  |
| -------------- | ------------------------------------- |
| `os.cpus()`    | 返回 CPU 核心信息。                   |
| `os.loadavg()` | 返回系统的平均负载（1、5、15 分钟）。 |

```javascript
console.log(os.cpus());
// 输出:
// [
//   {
//     model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
//     speed: 2600,
//     times: { user: 252020, nice: 0, sys: 30340, idle: 1070356870, irq: 0 }
//   },
//   ...
// ]

console.log(os.loadavg()); // 输出: [ 0.12, 0.34, 0.56 ]
```

#### **2.3 获取内存信息**

| 方法            | 描述                       |
| --------------- | -------------------------- |
| `os.totalmem()` | 返回系统总内存（字节）。   |
| `os.freemem()`  | 返回系统空闲内存（字节）。 |

```javascript
console.log(os.totalmem()); // 输出: 17179869184 (16 GB)
console.log(os.freemem()); // 输出: 8589934592 (8 GB)
```

#### **2.4 获取网络信息**

| 方法                     | 描述               |
| ------------------------ | ------------------ |
| `os.networkInterfaces()` | 返回网络接口信息。 |

```javascript
console.log(os.networkInterfaces());
// 输出:
// {
//   lo: [
//     {
//       address: '127.0.0.1',
//       netmask: '255.0.0.0',
//       family: 'IPv4',
//       mac: '00:00:00:00:00:00',
//       internal: true
//     }
//   ],
//   eth0: [
//     {
//       address: '192.168.1.100',
//       netmask: '255.255.255.0',
//       family: 'IPv4',
//       mac: '01:02:03:04:05:06',
//       internal: false
//     }
//   ]
// }
```

#### **2.5 获取用户信息**

| 方法                     | 描述                     |
| ------------------------ | ------------------------ |
| `os.userInfo([options])` | 返回当前用户信息。       |
| `os.homedir()`           | 返回当前用户的主目录。   |
| `os.tmpdir()`            | 返回系统的临时文件目录。 |

```javascript
console.log(os.userInfo());
// 输出:
// {
//   uid: 1000,
//   gid: 1000,
//   username: 'user',
//   homedir: '/home/user',
//   shell: '/bin/bash'
// }

console.log(os.homedir()); // 输出: /home/user
console.log(os.tmpdir()); // 输出: /tmp
```

#### **2.6 获取系统运行时间**

| 方法          | 描述                     |
| ------------- | ------------------------ |
| `os.uptime()` | 返回系统运行时间（秒）。 |

```javascript
console.log(os.uptime()); // 输出: 123456 (秒)
```

#### **2.7 获取换行符和路径分隔符**

| 方法           | 描述                                     |
| -------------- | ---------------------------------------- |
| `os.EOL`       | 返回操作系统的换行符（`\n` 或 `\r\n`）。 |
| `os.constants` | 返回操作系统常量（如信号、错误码等）。   |

```javascript
console.log(os.EOL); // 在 Linux 上输出: \n，在 Windows 上输出: \r\n
console.log(os.constants.signals); // 输出: { SIGHUP: 1, SIGINT: 2, ... }
```

---

### **3. 示例：监控系统资源**
```javascript
const os = require('os');

// 获取 CPU 使用率
function getCpuUsage() {
    const cpus = os.cpus();
    let user = 0, sys = 0, idle = 0;

    cpus.forEach(cpu => {
        user += cpu.times.user;
        sys += cpu.times.sys;
        idle += cpu.times.idle;
    });

    const total = user + sys + idle;
    return {
        user: (user / total) * 100,
        sys: (sys / total) * 100,
        idle: (idle / total) * 100
    };
}

// 获取内存使用率
function getMemoryUsage() {
    const total = os.totalmem();
    const free = os.freemem();
    return {
        total: (total / 1024 / 1024).toFixed(2) + ' MB',
        free: (free / 1024 / 1024).toFixed(2) + ' MB',
        usage: ((1 - free / total) * 100).toFixed(2) + ' %'
    };
}

console.log('CPU Usage:', getCpuUsage());
console.log('Memory Usage:', getMemoryUsage());
```

---

### **4. 总结**
- `os` 模块是 Node.js 中与操作系统交互的核心工具。
- 提供了获取 CPU、内存、网络、用户信息等方法。
- 适用于系统监控、资源管理、工具开发等场景。
- 掌握 `os` 模块的使用，可以更好地理解和控制系统资源，提升应用的性能和稳定性。
