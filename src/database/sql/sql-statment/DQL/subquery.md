---
title: 子查询
article: false
order: 7
---

**子查询**（Subquery）是指嵌套在其他 SQL 查询中的查询。子查询可以出现在 `SELECT`、`FROM`、`WHERE` 或 `HAVING` 子句中，用于实现更复杂的查询逻辑。以下是子查询的详细说明和示例：

---

## **1. 子查询的基本语法**
```sql
select column1, column2, ...
from table_name
where column_name operator (select column_name from table_name where condition);
```

- 子查询必须用括号 `()` 包裹。
- 子查询可以返回单个值、单行或多行数据。

---

## **2. 子查询的分类**
根据子查询返回的结果，可以分为以下类型：

### **(1) 标量子查询**
- 返回单个值（一行一列）。
- 通常用于 `SELECT`、`WHERE` 或 `HAVING` 子句中。

**示例**:
```sql
select name, (select avg(age) from users) as avg_age
from users;
```

---

### **(2) 行子查询**
- 返回单行数据（一行多列）。
- 通常用于 `WHERE` 子句中。

**示例**:
```sql
select * from users
where (age, city) = (select max(age), city from users where city = 'New York');
```

---

### **(3) 列子查询**
- 返回单列数据（多行一列）。
- 通常用于 `WHERE` 子句中，与 `IN`、`ANY`、`ALL` 等操作符结合使用。

**示例**:
```sql
select * from users
where age in (select age from employees where department = 'Sales');
```

---

### **(4) 表子查询**
- 返回多行多列数据。
- 通常用于 `FROM` 子句中，作为临时表。

**示例**:
```sql
select *
from (select name, age from users where age > 18) as adult_users;
```

---

## **3. 子查询的常见用法**

### **(1) 在 `WHERE` 子句中使用子查询**
**示例**: 查询年龄大于平均年龄的用户。
```sql
select * from users
where age > (select avg(age) from users);
```

---

### **(2) 在 `SELECT` 子句中使用子查询**
**示例**: 查询每个用户的年龄与平均年龄的差值。
```sql
select name, age, (select avg(age) from users) as avg_age, age - (select avg(age) from users) as age_diff
from users;
```

---

### **(3) 在 `FROM` 子句中使用子查询**
**示例**: 查询年龄大于 18 的用户，并按年龄排序。
```sql
select *
from (select * from users where age > 18) as adult_users
order by age desc;
```

---

### **(4) 在 `HAVING` 子句中使用子查询**
**示例**: 查询城市中用户数量大于平均用户数量的城市。
```sql
select city, count(*) as user_count
from users
group by city
having count(*) > (select avg(user_count) from (select count(*) as user_count from users group by city) as city_counts);
```

---

### **(5) 在 `IN` 子句中使用子查询**
**示例**: 查询在销售部门工作的用户。
```sql
select * from users
where id in (select user_id from employees where department = 'Sales');
```

---

### **(6) 在 `EXISTS` 子句中使用子查询**
**示例**: 查询有订单的用户。
```sql
select * from users
where exists (select 1 from orders where orders.user_id = users.id);
```

---

## **4. 子查询的性能优化**
1. **避免嵌套过深**: 子查询嵌套层数过多会影响性能，尽量简化查询逻辑。
2. **使用索引**: 在子查询的 `WHERE` 子句中使用索引列，可以提高查询效率。
3. **替代方案**: 在某些情况下，可以使用 `JOIN` 代替子查询，以提高性能。

---

## **5. 示例应用**

### **(1) 查询每个部门工资最高的员工**
```sql
select department, name, salary
from employees e1
where salary = (select max(salary) from employees e2 where e1.department = e2.department);
```

### **(2) 查询没有订单的用户**
```sql
select * from users
where id not in (select user_id from orders);
```

### **(3) 查询每个城市的用户数量**
```sql
select city, (select count(*) from users where users.city = cities.name) as user_count
from cities;
```

---

通过灵活使用子查询，可以实现复杂的查询逻辑，满足多样化的数据需求！
