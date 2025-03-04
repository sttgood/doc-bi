---
title: 创建、删除触发器
article: false
order: 1
---

**触发器（Trigger）** 是一种特殊的存储过程，它在数据库中的特定事件（如 `INSERT`、`UPDATE`、`DELETE`）发生时自动执行。触发器通常用于实现数据完整性、审计日志、自动化任务等功能。以下是创建和删除触发器的详细说明和示例：

---

## **1. 创建触发器**

### **语法**
```sql
create trigger trigger_name
trigger_time trigger_event
on table_name
for each row
begin
    -- 触发器逻辑
end;
```

### **参数说明**
- **`trigger_name`**: 触发器的名称。
- **`trigger_time`**: 触发器的执行时间，可以是 `BEFORE` 或 `AFTER`。
- **`trigger_event`**: 触发事件，可以是 `INSERT`、`UPDATE` 或 `DELETE`。
- **`table_name`**: 触发器关联的表。
- **`for each row`**: 指定触发器对每一行数据执行。
- **`begin ... end`**: 触发器的主体逻辑。

### **示例**
创建一个触发器，在插入新用户时自动记录日志：
```sql
create trigger before_user_insert
before insert
on users
for each row
begin
    insert into user_logs (action, user_id, log_time)
    values ('INSERT', new.id, now());
end;
```

---

## **2. 删除触发器**

### **语法**
```sql
drop trigger if exists trigger_name;
```

### **示例**
删除 `before_user_insert` 触发器：
```sql
drop trigger if exists before_user_insert;
```

---

## **3. 触发器的类型**

### **(1) `BEFORE` 触发器**
- 在触发事件（如 `INSERT`、`UPDATE`、`DELETE`）之前执行。
- 可以修改即将插入或更新的数据。

### **(2) `AFTER` 触发器**
- 在触发事件（如 `INSERT`、`UPDATE`、`DELETE`）之后执行。
- 不能修改数据，通常用于记录日志或执行后续操作。

---

## **4. 触发器的使用场景**

### **(1) 数据完整性**
- 在插入或更新数据时，自动验证数据的有效性。

### **(2) 审计日志**
- 在数据变更时，自动记录操作日志。

### **(3) 自动化任务**
- 在数据变更时，自动执行某些任务（如更新相关表）。

---

## **5. 触发器的注意事项**

1. **性能影响**: 触发器会增加数据库的负担，尤其是在高频操作的表上。
2. **逻辑复杂性**: 触发器的逻辑应尽量简单，避免复杂的业务逻辑。
3. **调试困难**: 触发器的错误可能难以调试，建议在开发环境中充分测试。
4. **触发器嵌套**: 触发器可以嵌套调用，但应避免形成无限循环。

---

## **6. 触发器的示例应用**

### **(1) 数据完整性**
在插入用户时，自动验证邮箱格式：
```sql
create trigger before_user_insert
before insert
on users
for each row
begin
    if new.email not like '%@%.%' then
        signal sqlstate '45000' set message_text = 'Invalid email format';
    end if;
end;
```

### **(2) 审计日志**
在更新用户时，自动记录日志：
```sql
create trigger after_user_update
after update
on users
for each row
begin
    insert into user_logs (action, user_id, log_time)
    values ('UPDATE', old.id, now());
end;
```

### **(3) 自动化任务**
在删除用户时，自动删除相关订单：
```sql
create trigger after_user_delete
after delete
on users
for each row
begin
    delete from orders where user_id = old.id;
end;
```

---

通过合理使用触发器，可以实现数据完整性、审计日志、自动化任务等功能，提高数据库的自动化水平和数据安全性！
