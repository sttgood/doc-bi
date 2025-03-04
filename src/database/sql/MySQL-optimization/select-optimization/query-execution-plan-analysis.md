---
title: 查询执行计划分析
article: false
order: 2
---

**查询执行计划分析**是数据库性能优化的核心环节，通过分析查询的执行计划，可以了解查询的执行过程，发现性能瓶颈并进行优化。以下是查询执行计划分析的详细步骤、工具和优化策略：

---

## **1. 查询执行计划的基本概念**

### **什么是查询执行计划？**
查询执行计划是数据库优化器为执行 SQL 查询生成的步骤和操作顺序。它描述了数据库如何访问表、使用索引、连接表等。

### **为什么分析执行计划？**
- 了解查询的执行过程。
- 发现查询的性能瓶颈（如全表扫描、未使用索引等）。
- 优化查询性能。

---

## **2. 获取查询执行计划**

### **(1) 使用 `EXPLAIN` 命令**
```sql
explain select * from users where id = 1;
```

### **(2) 使用 `EXPLAIN FORMAT=JSON` 命令**
```sql
explain format=json select * from users where id = 1;
```

### **(3) 使用 `EXPLAIN ANALYZE` 命令（MySQL 8.0+）**
```sql
explain analyze select * from users where id = 1;
```

---

## **3. 执行计划的关键字段**

| 字段              | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| **id**            | 查询的标识符，表示查询的执行顺序。                           |
| **select_type**   | 查询的类型（如 `SIMPLE`、`PRIMARY`、`SUBQUERY` 等）。        |
| **table**         | 查询涉及的表名。                                             |
| **type**          | 访问类型（如 `ALL`、`index`、`range`、`ref`、`eq_ref`、`const` 等）。 |
| **possible_keys** | 可能使用的索引。                                             |
| **key**           | 实际使用的索引。                                             |
| **key_len**       | 使用的索引长度。                                             |
| **ref**           | 与索引比较的列或常量。                                       |
| **rows**          | 估计扫描的行数。                                             |
| **Extra**         | 附加信息（如 `Using where`、`Using index`、`Using temporary` 等）。 |

---

## **4. 执行计划的访问类型（`type`）**

| 访问类型   | 描述                               |
| ---------- | ---------------------------------- |
| **ALL**    | 全表扫描，性能最差。               |
| **index**  | 全索引扫描，性能较差。             |
| **range**  | 索引范围扫描，性能较好。           |
| **ref**    | 使用非唯一索引查找，性能较好。     |
| **eq_ref** | 使用唯一索引查找，性能最好。       |
| **const**  | 使用主键或唯一索引查找，性能最好。 |

---

## **5. 执行计划的附加信息（`Extra`）**

| 附加信息              | 描述                                       |
| --------------------- | ------------------------------------------ |
| **Using where**       | 使用 `WHERE` 条件过滤数据。                |
| **Using index**       | 使用覆盖索引，无需访问表数据。             |
| **Using temporary**   | 使用临时表，通常用于排序或分组。           |
| **Using filesort**    | 使用文件排序，通常用于未使用索引的排序。   |
| **Using join buffer** | 使用连接缓冲区，通常用于未使用索引的连接。 |

---

## **6. 查询执行计划分析的步骤**

### **(1) 查看执行计划**
使用 `EXPLAIN` 或 `EXPLAIN ANALYZE` 命令获取查询的执行计划。

### **(2) 分析访问类型**
- 检查 `type` 字段，确保查询使用了最佳访问类型（如 `ref`、`eq_ref`、`const`）。
- 避免全表扫描（`ALL`）和全索引扫描（`index`）。

### **(3) 检查索引使用**
- 检查 `possible_keys` 和 `key` 字段，确保查询使用了合适的索引。
- 如果未使用索引，考虑添加索引或优化查询。

### **(4) 检查扫描行数**
- 检查 `rows` 字段，确保扫描的行数尽可能少。
- 如果扫描行数过多，考虑优化查询或添加索引。

### **(5) 检查附加信息**
- 检查 `Extra` 字段，避免出现 `Using temporary` 和 `Using filesort`。
- 如果出现 `Using filesort`，考虑为排序字段添加索引。

---

## **7. 查询执行计划优化的策略**

### **(1) 添加索引**
- 为查询条件列、连接列和排序列添加索引。
- 使用复合索引优化多列查询。

### **(2) 优化查询条件**
- 避免在 `WHERE` 条件中使用函数或表达式。
- 使用 `IN` 或 `BETWEEN` 代替多个 `OR` 条件。

### **(3) 避免全表扫描**
- 确保查询使用了索引，避免全表扫描。
- 如果必须全表扫描，考虑优化表结构或查询逻辑。

### **(4) 使用覆盖索引**
- 确保查询使用了覆盖索引，避免访问表数据。
- 使用 `EXPLAIN` 检查 `Extra` 字段是否出现 `Using index`。

### **(5) 优化排序和分组**
- 为排序和分组字段添加索引。
- 避免在排序和分组中使用未索引的字段。

---

## **8. 查询执行计划分析的工具**

### **(1) `EXPLAIN` 命令**
- 用于分析查询的执行计划。
- 示例：
  ```sql
  explain select * from users where id = 1;
  ```

### **(2) `EXPLAIN ANALYZE` 命令**
- 用于分析查询的实际执行情况（MySQL 8.0+）。
- 示例：
  ```sql
  explain analyze select * from users where id = 1;
  ```

### **(3) `mysqldumpslow` 工具**
- 用于分析慢查询日志。
- 示例：
  ```bash
  mysqldumpslow /var/log/mysql/slow.log
  ```

### **(4) `pt-query-digest` 工具**
- 用于分析慢查询日志和查询执行计划。
- 示例：
  ```bash
  pt-query-digest /var/log/mysql/slow.log
  ```

---

## **9. 查询执行计划分析的示例**

### **(1) 示例查询**
```sql
select * from orders where user_id = 1 order by order_date desc;
```

### **(2) 执行计划分析**
```sql
explain select * from orders where user_id = 1 order by order_date desc;
```

### **(3) 优化建议**
- 为 `user_id` 和 `order_date` 列添加复合索引：
  ```sql
  create index idx_user_order on orders (user_id, order_date);
  ```

---

## **10. 总结**
通过分析查询执行计划，可以了解查询的执行过程，发现性能瓶颈并进行优化。以下是查询执行计划分析的核心要点：
- **获取执行计划**: 使用 `EXPLAIN` 或 `EXPLAIN ANALYZE` 命令。
- **分析访问类型**: 确保查询使用了最佳访问类型。
- **检查索引使用**: 确保查询使用了合适的索引。
- **优化查询条件**: 避免在 `WHERE` 条件中使用函数或表达式。
- **使用覆盖索引**: 确保查询使用了覆盖索引。

通过遵循这些优化策略和最佳实践，可以显著提高数据库的查询性能！
