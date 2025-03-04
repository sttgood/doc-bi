---
title: 触发器的使用场景
article: false
order: 2
---

**触发器（Trigger）** 是一种特殊的存储过程，它在数据库中的特定事件（如 `INSERT`、`UPDATE`、`DELETE`）发生时自动执行。触发器通常用于实现复杂的业务逻辑、数据验证、审计日志等功能。以下是触发器的常见使用场景和示例：

---

## **1. 数据验证**
### **场景**
在插入或更新数据时，验证数据的合法性。

### **示例**
在插入 `orders` 表时，验证订单金额是否大于 0：
```sql
create trigger validate_order_amount
before insert on orders
for each row
begin
    if new.amount <= 0 then
        signal sqlstate '45000' set message_text = 'Order amount must be greater than 0';
    end if;
end;
```

---

## **2. 数据审计**
### **场景**
记录数据的变更历史，用于审计或追踪。

### **示例**
在 `employees` 表更新时，记录变更到 `audit_log` 表：
```sql
create trigger audit_employee_changes
after update on employees
for each row
begin
    insert into audit_log (table_name, action, old_value, new_value, change_time)
    values ('employees', 'update', old.salary, new.salary, now());
end;
```

---

## **3. 数据同步**
### **场景**
在一个表的数据变更时，自动更新另一个表的相关数据。

### **示例**
在 `orders` 表插入时，更新 `customers` 表中的订单总数：
```sql
create trigger update_customer_order_count
after insert on orders
for each row
begin
    update customers
    set order_count = order_count + 1
    where id = new.customer_id;
end;
```

---

## **4. 数据计算**
### **场景**
在数据变更时，自动计算并更新相关字段。

### **示例**
在 `order_items` 表插入时，更新 `orders` 表中的总金额：
```sql
create trigger update_order_total
after insert on order_items
for each row
begin
    update orders
    set total_amount = total_amount + new.quantity * new.price
    where id = new.order_id;
end;
```

---

## **5. 数据约束**
### **场景**
在数据变更时，强制实施复杂的业务规则。

### **示例**
在 `employees` 表插入时，确保经理的工资高于其下属：
```sql
create trigger enforce_manager_salary
before insert on employees
for each row
begin
    declare manager_salary decimal(10, 2);
    select salary into manager_salary from employees where id = new.manager_id;
    if new.salary >= manager_salary then
        signal sqlstate '45000' set message_text = 'Employee salary cannot be higher than manager salary';
    end if;
end;
```

---

## **6. 数据清理**
### **场景**
在数据变更时，自动清理相关数据。

### **示例**
在 `customers` 表删除时，删除其所有订单：
```sql
create trigger delete_customer_orders
after delete on customers
for each row
begin
    delete from orders where customer_id = old.id;
end;
```

---

## **7. 触发器类型**
### **(1) `BEFORE` 触发器**
在事件发生之前执行，通常用于数据验证或修改。

### **(2) `AFTER` 触发器**
在事件发生之后执行，通常用于数据审计或同步。

### **(3) `FOR EACH ROW` 触发器**
对每一行数据触发一次。

### **(4) `FOR EACH STATEMENT` 触发器**
对每条 SQL 语句触发一次。

---

## **8. 触发器的注意事项**
1. **性能影响**: 触发器会增加数据库的开销，尤其是在高频操作的表上。
2. **调试困难**: 触发器的逻辑可能隐藏在数据库中，调试和维护较困难。
3. **避免递归**: 触发器的操作可能会触发其他触发器，导致递归调用。
4. **事务管理**: 触发器中的操作与触发事件在同一个事务中，失败时会回滚整个事务。

---

## **9. 触发器的示例**

### **(1) 创建触发器**
```sql
create trigger update_order_total
after insert on order_items
for each row
begin
    update orders
    set total_amount = total_amount + new.quantity * new.price
    where id = new.order_id;
end;
```

### **(2) 删除触发器**
```sql
drop trigger if exists update_order_total;
```

---

通过合理使用触发器，可以实现复杂的业务逻辑和数据管理功能，但需要注意其性能影响和维护成本！
