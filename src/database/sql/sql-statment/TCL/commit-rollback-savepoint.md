---
title: COMMIT, ROLLBACK, SAVEPOINT 语句
article: false
order: 1
---

`COMMIT`、`ROLLBACK` 和 `SAVEPOINT` 是 SQL 中用于管理事务的语句。事务是一组原子性的 SQL 操作，要么全部成功，要么全部失败。以下是这些语句的详细说明和示例：

---

## **1. `COMMIT` 语句**
### **作用**
提交事务，将所有未保存的更改永久保存到数据库中。

### **语法**
```sql
commit;
```

### **示例**
```sql
begin;
update accounts set balance = balance - 100 where id = 1;
update accounts set balance = balance + 100 where id = 2;
commit;
```

---

## **2. `ROLLBACK` 语句**
### **作用**
回滚事务，撤销所有未提交的更改，恢复到事务开始前的状态。

### **语法**
```sql
rollback;
```

### **示例**
```sql
begin;
update accounts set balance = balance - 100 where id = 1;
update accounts set balance = balance + 100 where id = 2;
rollback;
```

---

## **3. `SAVEPOINT` 语句**
### **作用**
在事务中创建一个保存点，允许回滚到该保存点，而不是回滚整个事务。

### **语法**
```sql
savepoint savepoint_name;
```

### **回滚到保存点**
```sql
rollback to savepoint_name;
```

### **示例**
```sql
begin;
update accounts set balance = balance - 100 where id = 1;
savepoint sp1;
update accounts set balance = balance + 100 where id = 2;
rollback to sp1;
commit;
```

---

## **4. 事务管理示例**

### **(1) 简单事务**
```sql
begin;
update accounts set balance = balance - 100 where id = 1;
update accounts set balance = balance + 100 where id = 2;
commit;
```

### **(2) 事务回滚**
```sql
begin;
update accounts set balance = balance - 100 where id = 1;
update accounts set balance = balance + 100 where id = 2;
rollback;
```

### **(3) 保存点**
```sql
begin;
update accounts set balance = balance - 100 where id = 1;
savepoint sp1;
update accounts set balance = balance + 100 where id = 2;
rollback to sp1;
commit;
```

---

## **5. 注意事项**
1. **事务的原子性**: 事务中的所有操作要么全部成功，要么全部失败。
2. **事务的隔离性**: 事务在执行过程中，对其他事务是不可见的。
3. **事务的持久性**: 一旦事务提交，更改将永久保存到数据库中。
4. **事务的一致性**: 事务执行前后，数据库的状态必须保持一致。

---

通过合理使用 `COMMIT`、`ROLLBACK` 和 `SAVEPOINT`，可以确保数据库操作的安全性和一致性！
