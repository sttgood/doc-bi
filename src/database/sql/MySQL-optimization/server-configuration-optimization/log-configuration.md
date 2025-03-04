---
title: 日志配置（slow_query_log 等）
article: false
order: 3
---

**日志配置**是数据库优化的重要环节，通过合理配置日志，可以监控数据库性能、排查问题和优化查询。以下是 MySQL 中常见日志的配置和优化策略：

---

## **1. 慢查询日志（Slow Query Log）**

### **作用**
记录执行时间超过指定阈值的查询，用于分析和优化慢查询。

### **配置**
```sql
-- 启用慢查询日志
set global slow_query_log = 'ON';

-- 设置慢查询日志文件路径
set global slow_query_log_file = '/var/log/mysql/slow.log';

-- 设置慢查询阈值（单位：秒）
set global long_query_time = 1;

-- 记录未使用索引的查询
set global log_queries_not_using_indexes = 'ON';
```

### **优化策略**
1. **分析慢查询日志**: 使用 `mysqldumpslow` 或 `pt-query-digest` 工具分析慢查询日志。
2. **优化慢查询**: 为慢查询添加索引、重写查询或调整表结构。
3. **定期清理日志**: 定期清理慢查询日志，避免日志文件过大。

---

## **2. 通用查询日志（General Query Log）**

### **作用**
记录所有执行的查询，用于审计和调试。

### **配置**
```sql
-- 启用通用查询日志
set global general_log = 'ON';

-- 设置通用查询日志文件路径
set global general_log_file = '/var/log/mysql/general.log';
```

### **优化策略**
1. **限制日志大小**: 定期清理通用查询日志，避免日志文件过大。
2. **选择性启用**: 通用查询日志会记录所有查询，对性能有一定影响，建议在调试时启用。

---

## **3. 错误日志（Error Log）**

### **作用**
记录 MySQL 服务器的错误信息，用于排查问题。

### **配置**
```sql
-- 设置错误日志文件路径
set global log_error = '/var/log/mysql/error.log';
```

### **优化策略**
1. **监控错误日志**: 定期检查错误日志，及时发现和解决问题。
2. **限制日志大小**: 定期清理错误日志，避免日志文件过大。

---

## **4. 二进制日志（Binary Log）**

### **作用**
记录所有对数据库的修改操作，用于数据恢复和复制。

### **配置**
```sql
-- 启用二进制日志
set global log_bin = 'ON';

-- 设置二进制日志文件路径
set global log_bin_basename = '/var/log/mysql/binlog';

-- 设置二进制日志格式（ROW、STATEMENT、MIXED）
set global binlog_format = 'ROW';
```

### **优化策略**
1. **定期清理日志**: 使用 `PURGE BINARY LOGS` 命令清理旧的二进制日志。
2. **优化日志格式**: 根据需求选择合适的日志格式（如 `ROW` 格式更适合数据恢复）。

---

## **5. 中继日志（Relay Log）**

### **作用**
在主从复制中，从服务器记录从主服务器接收的二进制日志。

### **配置**
```sql
-- 设置中继日志文件路径
set global relay_log = '/var/log/mysql/relaylog';
```

### **优化策略**
1. **定期清理日志**: 使用 `PURGE RELAY LOGS` 命令清理旧的中继日志。
2. **监控复制延迟**: 定期检查中继日志，确保主从复制正常。

---

## **6. 日志配置的最佳实践**

### **(1) 合理配置日志路径**
- 将日志文件存储在独立的磁盘分区，避免影响数据库性能。
- 确保日志文件路径有足够的写入权限。

### **(2) 定期清理日志**
- 定期清理日志文件，避免日志文件过大占用磁盘空间。
- 使用日志轮换工具（如 `logrotate`）管理日志文件。

### **(3) 选择性启用日志**
- 根据需求选择性启用日志，避免不必要的性能开销。
- 在调试或排查问题时启用通用查询日志。

### **(4) 监控日志**
- 使用监控工具（如 `Zabbix`、`Prometheus`）监控日志文件，及时发现和解决问题。

---

## **7. 日志配置的示例**

### **(1) 慢查询日志配置**
```sql
set global slow_query_log = 'ON';
set global slow_query_log_file = '/var/log/mysql/slow.log';
set global long_query_time = 1;
set global log_queries_not_using_indexes = 'ON';
```

### **(2) 通用查询日志配置**
```sql
set global general_log = 'ON';
set global general_log_file = '/var/log/mysql/general.log';
```

### **(3) 错误日志配置**
```sql
set global log_error = '/var/log/mysql/error.log';
```

### **(4) 二进制日志配置**
```sql
set global log_bin = 'ON';
set global log_bin_basename = '/var/log/mysql/binlog';
set global binlog_format = 'ROW';
```

### **(5) 中继日志配置**
```sql
set global relay_log = '/var/log/mysql/relaylog';
```

---

## **8. 总结**
通过合理配置日志，可以监控数据库性能、排查问题和优化查询。以下是日志配置的核心要点：
- **慢查询日志**: 记录执行时间超过指定阈值的查询，用于优化慢查询。
- **通用查询日志**: 记录所有执行的查询，用于审计和调试。
- **错误日志**: 记录 MySQL 服务器的错误信息，用于排查问题。
- **二进制日志**: 记录所有对数据库的修改操作，用于数据恢复和复制。
- **中继日志**: 在主从复制中，记录从主服务器接收的二进制日志。

通过遵循这些优化策略和最佳实践，可以设计出高效、可维护的数据库日志配置！
