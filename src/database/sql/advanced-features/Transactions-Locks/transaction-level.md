---
title: 事务的隔离级别
article: false
order: 2
---

**事务的隔离级别**定义了事务在并发执行时的可见性和行为。不同的隔离级别会影响事务的并发性能和数据一致性。MySQL 支持以下四种隔离级别：

---

## **1. 事务隔离级别概述**

| 隔离级别             | 脏读（Dirty Read） | 不可重复读（Non-Repeatable Read） | 幻读（Phantom Read） |
| -------------------- | ------------------ | --------------------------------- | -------------------- |
| **READ UNCOMMITTED** | 可能               | 可能                              | 可能                 |
| **READ COMMITTED**   | 不可能             | 可能                              | 可能                 |
| **REPEATABLE READ**  | 不可能             | 不可能                            | 可能                 |
| **SERIALIZABLE**     | 不可能             | 不可能                            | 不可能               |

---

## **2. 事务隔离级别的详细说明**

### **(1) READ UNCOMMITTED（读未提交）**
- **描述**: 最低的隔离级别，事务可以读取其他事务未提交的数据。
- **问题**:
  - **脏读**: 可能读取到未提交的数据，导致数据不一致。
- **适用场景**: 对数据一致性要求不高的场景。

### **(2) READ COMMITTED（读已提交）**
- **描述**: 事务只能读取其他事务已提交的数据。
- **问题**:
  - **不可重复读**: 同一事务中多次读取同一数据，可能会得到不同的结果。
- **适用场景**: 大多数数据库的默认隔离级别。

### **(3) REPEATABLE READ（可重复读）**
- **描述**: 同一事务中多次读取同一数据，结果一致。
- **问题**:
  - **幻读**: 同一事务中多次查询同一范围的数据，可能会得到不同的结果。
- **适用场景**: MySQL 的默认隔离级别。

### **(4) SERIALIZABLE（串行化）**
- **描述**: 最高的隔离级别，事务串行执行，完全避免并发问题。
- **问题**:
  - **性能低**: 事务串行执行，并发性能差。
- **适用场景**: 对数据一致性要求极高的场景。

---

## **3. 设置事务隔离级别**

### **(1) 查看当前隔离级别**
```sql
select @@transaction_isolation;
```

### **(2) 设置会话隔离级别**
```sql
set session transaction isolation level read committed;
```

### **(3) 设置全局隔离级别**
```sql
set global transaction isolation level repeatable read;
```

---

## **4. 事务隔离级别的影响**

### **(1) 脏读（Dirty Read）**
- **描述**: 事务读取了其他事务未提交的数据。
- **示例**:
  ```sql
  -- 事务 1
  begin;
  update users set balance = balance - 100 where id = 1;
  
  -- 事务 2
  begin;
  select balance from users where id = 1;  -- 可能读取到未提交的数据
  ```

### **(2) 不可重复读（Non-Repeatable Read）**
- **描述**: 同一事务中多次读取同一数据，结果不一致。
- **示例**:
  ```sql
  -- 事务 1
  begin;
  select balance from users where id = 1;  -- 第一次读取
  
  -- 事务 2
  begin;
  update users set balance = balance - 100 where id = 1;
  commit;
  
  -- 事务 1
  select balance from users where id = 1;  -- 第二次读取，结果不一致
  ```

### **(3) 幻读（Phantom Read）**
- **描述**: 同一事务中多次查询同一范围的数据，结果不一致。
- **示例**:
  ```sql
  -- 事务 1
  begin;
  select * from users where balance > 1000;  -- 第一次查询
  
  -- 事务 2
  begin;
  insert into users (name, balance) values ('John', 1500);
  commit;
  
  -- 事务 1
  select * from users where balance > 1000;  -- 第二次查询，结果不一致
  ```

---

## **5. 选择合适的事务隔离级别**
- **数据一致性要求高**: 使用 `SERIALIZABLE`。
- **并发性能要求高**: 使用 `READ COMMITTED` 或 `REPEATABLE READ`。
- **默认选择**: MySQL 默认使用 `REPEATABLE READ`。

---

通过合理设置事务隔离级别，可以平衡数据一致性和并发性能，确保数据库的安全性和高效性！
