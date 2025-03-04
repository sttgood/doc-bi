---
title: HAVING 子句
article: false
order: 5
---

`HAVING` 子句是 SQL 中用于对分组后的结果进行过滤的关键字。它通常与 `GROUP BY` 子句一起使用，用于筛选聚合函数（如 `COUNT`、`SUM`、`AVG`、`MAX`、`MIN` 等）计算后的结果。以下是 `HAVING` 子句的详细说明和示例：

---

### 1. **基本语法**
```sql
select column1, column2, aggregate_function(column3)
from table_name
where condition
group by column1, column2
having aggregate_function(column3) condition;
```

#### 说明：
- `column1, column2`：用于分组的列。
- `aggregate_function(column3)`：对分组后的数据进行聚合计算。
- `where condition`：可选，用于在分组前过滤数据。
- `having condition`：用于在分组后过滤数据。

---

### 2. **HAVING 与 WHERE 的区别**
- `WHERE`：
  - 在分组前过滤数据。
  - 不能使用聚合函数。
- `HAVING`：
  - 在分组后过滤数据。
  - 可以使用聚合函数。

---

### 3. **示例**

#### 3.1 **基本用法**
假设有一个 `orders` 表，包含 `customer_id` 和 `amount` 列：
```sql
create table orders (
    order_id int auto_increment primary key,
    customer_id int,
    amount decimal(10, 2)
);

insert into orders (customer_id, amount)
values 
    (1, 100.00),
    (1, 200.00),
    (2, 150.00),
    (2, 250.00),
    (3, 300.00);
```

查询订单总金额大于 300 的客户：
```sql
select customer_id, sum(amount) as total_amount
from orders
group by customer_id
having total_amount > 300;
```

#### 结果：
| customer_id | total_amount |
| ----------- | ------------ |
| 2           | 400.00       |

---

#### 3.2 **结合 WHERE 使用**
查询 2023 年每个客户的订单总金额大于 300 的客户：
```sql
select customer_id, sum(amount) as total_amount
from orders
where year(order_date) = 2023
group by customer_id
having total_amount > 300;
```

---

#### 3.3 **使用多个聚合函数**
假设有一个 `sales` 表，包含 `year`, `month`, `product`, `revenue` 列：
```sql
create table sales (
    id int auto_increment primary key,
    year int,
    month int,
    product varchar(50),
    revenue decimal(10, 2)
);

insert into sales (year, month, product, revenue)
values 
    (2023, 1, 'A', 1000.00),
    (2023, 1, 'B', 1500.00),
    (2023, 2, 'A', 1200.00),
    (2023, 2, 'B', 1800.00),
    (2024, 1, 'A', 1100.00);
```

查询每年每月的总营收大于 1000 且订单数大于 1 的记录：
```sql
select year, month, sum(revenue) as total_revenue, count(*) as order_count
from sales
group by year, month
having total_revenue > 1000 and order_count > 1;
```

---

#### 3.4 **结合 ORDER BY 使用**
查询每个客户的总订单金额大于 300，并按金额降序排序：
```sql
select customer_id, sum(amount) as total_amount
from orders
group by customer_id
having total_amount > 300
order by total_amount desc;
```

#### 结果：
| customer_id | total_amount |
| ----------- | ------------ |
| 2           | 400.00       |

---

### 4. **注意事项**
- `HAVING` 子句必须与 `GROUP BY` 子句一起使用。
- `HAVING` 子句中可以使用聚合函数，但不能使用未在 `GROUP BY` 子句中列出的列。
- `HAVING` 子句的执行顺序在 `GROUP BY` 之后，`ORDER BY` 之前。

---

### 5. **综合示例**
以下是一个综合示例，展示如何在复杂查询中使用 `HAVING`：
```sql
select 
    year,
    month,
    product,
    sum(revenue) as total_revenue,
    count(*) as order_count
from sales
where year = 2023
group by year, month, product
having total_revenue > 1000 and order_count > 1
order by total_revenue desc;
```

---

通过掌握 `HAVING` 子句，您可以对分组后的数据进行灵活过滤，满足各种业务需求。
