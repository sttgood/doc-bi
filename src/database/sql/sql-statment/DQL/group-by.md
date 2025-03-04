---
title: GROUP BY 子句
article: false
order: 4
---

`GROUP BY` 子句是 SQL 中用于对查询结果进行分组的关键字。它通常与聚合函数（如 `COUNT`、`SUM`、`AVG`、`MAX`、`MIN` 等）一起使用，以便对每个分组的数据进行汇总或计算。以下是 `GROUP BY` 子句的详细说明和示例：

---

### 1. **基本语法**
```sql
select column1, column2, aggregate_function(column3)
from table_name
where condition
group by column1, column2;
```

#### 说明：
- `column1, column2`：用于分组的列。
- `aggregate_function(column3)`：对分组后的数据进行聚合计算。
- `where condition`：可选，用于过滤数据。

---

### 2. **常用聚合函数**
- `COUNT()`：计算行数。
- `SUM()`：计算总和。
- `AVG()`：计算平均值。
- `MAX()`：获取最大值。
- `MIN()`：获取最小值。

---

### 3. **示例**

#### 3.1 **基本分组**
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

查询每个客户的订单总金额：
```sql
select customer_id, sum(amount) as total_amount
from orders
group by customer_id;
```

#### 结果：
| customer_id | total_amount |
| ----------- | ------------ |
| 1           | 300.00       |
| 2           | 400.00       |
| 3           | 300.00       |

---

#### 3.2 **分组后过滤**
使用 `HAVING` 子句对分组后的结果进行过滤。

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

#### 3.3 **多列分组**
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

查询每年每月的总营收：
```sql
select year, month, sum(revenue) as total_revenue
from sales
group by year, month;
```

#### 结果：
| year | month | total_revenue |
| ---- | ----- | ------------- |
| 2023 | 1     | 2500.00       |
| 2023 | 2     | 3000.00       |
| 2024 | 1     | 1100.00       |

---

#### 3.4 **分组后排序**
使用 `ORDER BY` 对分组后的结果进行排序。

查询每个客户的总订单金额，并按金额降序排序：
```sql
select customer_id, sum(amount) as total_amount
from orders
group by customer_id
order by total_amount desc;
```

#### 结果：
| customer_id | total_amount |
| ----------- | ------------ |
| 2           | 400.00       |
| 1           | 300.00       |
| 3           | 300.00       |

---

### 4. **注意事项**
- **分组列**：`GROUP BY` 子句中列出的列必须出现在 `SELECT` 子句中，除非它们是聚合函数的参数。
- `HAVING` 与 `WHERE` 的区别：
  - `WHERE` 在分组前过滤数据。
  - `HAVING` 在分组后过滤数据。
- **NULL 值**：如果分组列包含 `NULL` 值，则所有 `NULL` 值会被分到同一组。

---

### 5. **综合示例**
以下是一个综合示例，展示如何在复杂查询中使用 `GROUP BY`：
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
having total_revenue > 1000
order by total_revenue desc;
```

#### 结果：
| year | month | product | total_revenue | order_count |
| ---- | ----- | ------- | ------------- | ----------- |
| 2023 | 2     | B       | 1800.00       | 1           |
| 2023 | 2     | A       | 1200.00       | 1           |
| 2023 | 1     | B       | 1500.00       | 1           |

---

通过掌握 `GROUP BY` 子句，您可以对数据进行灵活的分组和汇总，满足各种业务需求。
