---
title: 死锁
article: false
order: 4
---

**死锁（Deadlock）** 是指两个或多个事务相互等待对方释放资源，导致所有事务都无法继续执行的情况。死锁是数据库并发控制中的常见问题，需要通过合理的设计和处理来避免和解决。

---

## **1. 死锁的原因**
死锁通常由以下四个条件共同导致（称为死锁的四个必要条件）：
1. **互斥条件**: 资源一次只能被一个事务占用。
2. **占有并等待**: 事务持有资源并等待其他资源。
3. **非抢占条件**: 事务持有的资源不能被其他事务强制释放。
4. **循环等待**: 事务之间形成等待资源的循环链。

---

## **2. 死锁的示例**
假设有两个事务 `T1` 和 `T2`，分别操作两个资源 `A` 和 `B`：
```sql
-- 事务 T1
begin;
update accounts set balance = balance - 100 where id = 1;  -- 锁定资源 A
update accounts set balance = balance + 100 where id = 2;  -- 等待资源 B

-- 事务 T2
begin;
update accounts set balance = balance - 100 where id = 2;  -- 锁定资源 B
update accounts set balance = balance + 100 where id = 1;  -- 等待资源 A
```
- `T1` 持有 `A` 并等待 `B`，`T2` 持有 `B` 并等待 `A`，形成死锁。

---

## **3. 死锁的检测与处理**

### **(1) 死锁检测**
- **超时机制**: 如果事务等待资源的时间超过设定的阈值，则回滚该事务。
- **等待图（Wait-for Graph）**: 检测事务之间是否存在循环等待链。

### **(2) 死锁处理**
- **回滚事务**: 选择一个事务进行回滚，释放其占用的资源，打破死锁。
- **自动处理**: 大多数数据库管理系统（如 MySQL）会自动检测死锁并回滚其中一个事务。

---

## **4. 避免死锁的策略**

### **(1) 统一资源访问顺序**
- 所有事务按照相同的顺序访问资源，避免循环等待。
- **示例**:
  ```sql
  -- 事务 T1 和 T2 都先访问资源 A，再访问资源 B
  update accounts set balance = balance - 100 where id = 1;  -- 资源 A
  update accounts set balance = balance + 100 where id = 2;  -- 资源 B
  ```

### **(2) 减少事务持有资源的时间**
- 尽量缩短事务的执行时间，减少资源占用时间。
- **示例**:
  ```sql
  begin;
  -- 快速执行事务
  update accounts set balance = balance - 100 where id = 1;
  update accounts set balance = balance + 100 where id = 2;
  commit;
  ```

### **(3) 使用低隔离级别**
- 较低的隔离级别（如 `READ COMMITTED`）可以减少锁的竞争，降低死锁的概率。

### **(4) 避免长事务**
- 长事务更容易导致死锁，尽量将事务拆分为多个短事务。

### **(5) 使用锁超时机制**
- 设置锁的超时时间，如果事务等待锁的时间过长，则回滚事务。

---

## **5. 死锁的示例处理**

### **(1) MySQL 自动处理死锁**
MySQL 会自动检测死锁并回滚其中一个事务。
```sql
-- 事务 T1
begin;
update accounts set balance = balance - 100 where id = 1;  -- 锁定资源 A
update accounts set balance = balance + 100 where id = 2;  -- 等待资源 B

-- 事务 T2
begin;
update accounts set balance = balance - 100 where id = 2;  -- 锁定资源 B
update accounts set balance = balance + 100 where id = 1;  -- 等待资源 A

-- MySQL 检测到死锁，回滚其中一个事务
```

### **(2) 手动处理死锁**
如果应用程序检测到死锁，可以手动回滚事务。
```sql
-- 事务 T1
begin;
update accounts set balance = balance - 100 where id = 1;  -- 锁定资源 A
update accounts set balance = balance + 100 where id = 2;  -- 等待资源 B

-- 事务 T2
begin;
update accounts set balance = balance - 100 where id = 2;  -- 锁定资源 B
update accounts set balance = balance + 100 where id = 1;  -- 等待资源 A

-- 应用程序检测到死锁，手动回滚事务 T2
rollback;
```

---

## **6. 总结**
- **死锁的四个必要条件**: 互斥条件、占有并等待、非抢占条件、循环等待。
- **死锁的处理**: 检测死锁并回滚事务。
- **避免死锁的策略**: 统一资源访问顺序、减少事务持有资源的时间、使用低隔离级别、避免长事务、使用锁超时机制。

通过合理设计事务和资源访问策略，可以有效避免死锁的发生，确保数据库的并发性能和数据一致性！
