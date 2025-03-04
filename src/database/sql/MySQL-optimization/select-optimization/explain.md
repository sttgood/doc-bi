---
title: EXPLAIN 语句
article: false
order: 1
---

**`EXPLAIN` 语句**是 MySQL 中用于分析查询执行计划的工具，通过 `EXPLAIN` 可以了解查询的执行过程，发现性能瓶颈并进行优化。以下是 `EXPLAIN` 语句的详细说明、使用方法和优化策略：

---

## **1. `EXPLAIN` 的作用**
- **分析查询执行计划**: 了解查询的执行顺序、使用的索引、扫描的行数等。
- **发现性能瓶颈**: 找出查询中性能较差的部分。
- **优化查询**: 根据 `EXPLAIN` 的结果调整查询或表结构。

---

## **2. `EXPLAIN` 的使用方法**

### **基本语法**
```sql
explain select * from table_name where condition;
```

### **输出字段说明**
| 字段            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| `id`            | 查询的标识符，表示查询中执行顺序的编号。                     |
| `select_type`   | 查询的类型，如 `SIMPLE`（简单查询）、`PRIMARY`（主查询）、`SUBQUERY`（子查询）等。 |
| `table`         | 查询涉及的表。                                               |
| `partitions`    | 查询涉及的分区。                                             |
| `type`          | 表的访问类型，如 `ALL`（全表扫描）、`index`（索引扫描）、`range`（范围扫描）等。 |
| `possible_keys` | 可能使用的索引。                                             |
| `key`           | 实际使用的索引。                                             |
| `key_len`       | 使用的索引长度。                                             |
| `ref`           | 与索引比较的列或常量。                                       |
| `rows`          | 预计扫描的行数。                                             |
| `filtered`      | 过滤后的行数占扫描行数的百分比。                             |
| `Extra`         | 额外信息，如 `Using where`（使用 WHERE 条件）、`Using index`（使用覆盖索引）等。 |

---

## **3. `EXPLAIN` 的优化策略**

### **(1) 优化 `type` 字段**
- **目标**: 避免 `ALL`（全表扫描），尽量使用 `index`（索引扫描）或 `range`（范围扫描）。
- **方法**:
  - 为查询条件列创建索引。
  - 优化查询条件，减少扫描范围。

### **(2) 优化 `key` 字段**
- **目标**: 确保查询使用了合适的索引。
- **方法**:
  - 检查 `possible_keys` 和 `key`，确保查询使用了最优索引。
  - 如果未使用索引，考虑添加或调整索引。

### **(3) 优化 `rows` 字段**
- **目标**: 减少扫描的行数。
- **方法**:
  - 优化查询条件，减少扫描范围。
  - 使用覆盖索引，避免访问表数据。

### **(4) 优化 `Extra` 字段**
- **目标**: 避免 `Using filesort`（文件排序）和 `Using temporary`（临时表）。
- **方法**:
  - 为排序和分组列创建索引。
  - 优化查询逻辑，避免临时表。

---

## **4. `EXPLAIN` 的示例**

### **(1) 简单查询**
```sql
explain select * from users where id = 1;
```

### **(2) 复杂查询**
```sql
explain select u.name, o.order_date
from users u
join orders o on u.id = o.user_id
where u.age > 18;
```

### **(3) 子查询**
```sql
explain select * from users
where id in (select user_id from orders where order_date >= '2023-01-01');
```

---

## **5. `EXPLAIN` 的最佳实践**

### **(1) 结合 `SHOW WARNINGS`**
- 使用 `EXPLAIN` 后，结合 `SHOW WARNINGS` 查看优化器的提示信息。
  ```sql
  explain select * from users where id = 1;
  show warnings;
  ```

### **(2) 使用 `EXPLAIN FORMAT=JSON`**
- 以 JSON 格式输出更详细的执行计划。
  ```sql
  explain format=json select * from users where id = 1;
  ```

### **(3) 监控查询性能**
- 使用 `EXPLAIN` 分析查询性能，结合 `SHOW STATUS` 监控查询的执行情况。

### **(4) 定期优化查询**
- 定期使用 `EXPLAIN` 分析慢查询，优化查询逻辑和表结构。

---

## **6. 总结**
通过合理使用 `EXPLAIN` 语句，可以分析查询的执行计划，发现性能瓶颈并进行优化。以下是 `EXPLAIN` 的核心要点：
- **分析执行计划**: 了解查询的执行顺序、使用的索引、扫描的行数等。
- **优化查询**: 根据 `EXPLAIN` 的结果调整查询或表结构。
- **监控性能**: 结合 `SHOW WARNINGS` 和 `SHOW STATUS` 监控查询性能。

通过遵循这些优化策略和最佳实践，可以设计出高效、可维护的数据库查询！
