---
title: JOIN
article: false
order: 6
---

`JOIN` 是 SQL 中用于将多个表中的数据组合在一起的语句。常见的 `JOIN` 类型包括 `INNER JOIN`、`LEFT JOIN`、`RIGHT JOIN` 和 `FULL JOIN`。以下是它们的详细说明和示例：

---

## **1. `INNER JOIN`**
### **描述**
返回两个表中满足连接条件的匹配行。

### **语法**
```sql
select columns
from table1
inner join table2 on table1.column = table2.column;
```

### **示例**
查询 `users` 表和 `orders` 表，获取每个用户的订单信息：
```sql
select users.name, orders.order_id
from users
inner join orders on users.id = orders.user_id;
```

---

## **2. `LEFT JOIN`**
### **描述**
返回左表中的所有行，即使右表中没有匹配的行。如果右表中没有匹配的行，则返回 `NULL`。

### **语法**
```sql
select columns
from table1
left join table2 on table1.column = table2.column;
```

### **示例**
查询 `users` 表和 `orders` 表，获取所有用户及其订单信息（即使没有订单）：
```sql
select users.name, orders.order_id
from users
left join orders on users.id = orders.user_id;
```

---

## **3. `RIGHT JOIN`**
### **描述**
返回右表中的所有行，即使左表中没有匹配的行。如果左表中没有匹配的行，则返回 `NULL`。

### **语法**
```sql
select columns
from table1
right join table2 on table1.column = table2.column;
```

### **示例**
查询 `users` 表和 `orders` 表，获取所有订单及其用户信息（即使没有用户）：
```sql
select users.name, orders.order_id
from users
right join orders on users.id = orders.user_id;
```

---

## **4. `FULL JOIN`**
### **描述**
返回左表和右表中的所有行。如果某一行在另一表中没有匹配的行，则返回 `NULL`。

### **语法**
```sql
select columns
from table1
full join table2 on table1.column = table2.column;
```

### **示例**
查询 `users` 表和 `orders` 表，获取所有用户和订单信息（即使没有匹配的行）：
```sql
select users.name, orders.order_id
from users
full join orders on users.id = orders.user_id;
```

---

## **5. `CROSS JOIN`**
### **描述**
返回两个表的笛卡尔积，即左表中的每一行与右表中的每一行组合。

### **语法**
```sql
select columns
from table1
cross join table2;
```

### **示例**
查询 `users` 表和 `products` 表，获取所有用户和产品的组合：
```sql
select users.name, products.product_name
from users
cross join products;
```

---

## **6. `SELF JOIN`**
### **描述**
将表与自身连接，通常用于查询表中的层次结构或关系。

### **语法**
```sql
select columns
from table1 t1
join table1 t2 on t1.column = t2.column;
```

### **示例**
查询 `employees` 表，获取每个员工及其经理的信息：
```sql
select e1.name as employee, e2.name as manager
from employees e1
join employees e2 on e1.manager_id = e2.id;
```

---

## **7. 多表连接**
可以连接多个表，只需在 `JOIN` 语句后继续添加 `JOIN`。

### **示例**
查询 `users`、`orders` 和 `products` 表，获取每个用户的订单及其产品信息：
```sql
select users.name, orders.order_id, products.product_name
from users
join orders on users.id = orders.user_id
join products on orders.product_id = products.id;
```

---

## **总结**
| 类型         | 描述                           | 示例                                                         |
| ------------ | ------------------------------ | ------------------------------------------------------------ |
| `INNER JOIN` | 返回匹配的行                   | `select * from users inner join orders on users.id = orders.user_id;` |
| `LEFT JOIN`  | 返回左表的所有行，右表匹配的行 | `select * from users left join orders on users.id = orders.user_id;` |
| `RIGHT JOIN` | 返回右表的所有行，左表匹配的行 | `select * from users right join orders on users.id = orders.user_id;` |
| `FULL JOIN`  | 返回两个表的所有行             | `select * from users full join orders on users.id = orders.user_id;` |
| `CROSS JOIN` | 返回两个表的笛卡尔积           | `select * from users cross join orders;`                     |
| `SELF JOIN`  | 将表与自身连接                 | `select * from employees e1 join employees e2 on e1.manager_id = e2.id;` |

通过灵活使用 `JOIN`，可以轻松地将多个表中的数据组合在一起，满足复杂的查询需求！
