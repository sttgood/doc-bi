---
title: 日期与时间类型
article: false
order: 3
---

## **1. 日期与时间类型概览**

| 类型        | 格式                  | 描述                                                         |
| ----------- | --------------------- | ------------------------------------------------------------ |
| `date`      | `yyyy-mm-dd`          | 仅存储日期，范围从 `1000-01-01` 到 `9999-12-31`。            |
| `time`      | `hh:mm:ss`            | 仅存储时间，范围从 `-838:59:59` 到 `838:59:59`。             |
| `datetime`  | `yyyy-mm-dd hh:mm:ss` | 存储日期和时间，范围从 `1000-01-01 00:00:00` 到 `9999-12-31 23:59:59`。 |
| `timestamp` | `yyyy-mm-dd hh:mm:ss` | 存储日期和时间，范围从 `1970-01-01 00:00:01` utc 到 `2038-01-19 03:14:07` utc。 |
| `year`      | `yyyy`                | 存储年份，支持 `1901` 到 `2155`。                            |

---

## **2. 各类型的详细说明**

### **(1) `date`**
- 仅存储日期，格式为 `yyyy-mm-dd`。
- 示例：
  ```sql
  create table events (
      event_id int primary key,
      event_date date
  );
  insert into events (event_id, event_date) values (1, '2023-10-05');
  ```

---

### **(2) `time`**
- 仅存储时间，格式为 `hh:mm:ss`。
- 支持负值，表示时间差。
- 示例：
  ```sql
  create table schedules (
      schedule_id int primary key,
      start_time time,
      end_time time
  );
  insert into schedules (schedule_id, start_time, end_time) values (1, '09:00:00', '17:00:00');
  ```

---

### **(3) `datetime`**
- 存储日期和时间，格式为 `yyyy-mm-dd hh:mm:ss`。
- 不受时区影响。
- 示例：
  ```sql
  create table logs (
      log_id int primary key,
      log_time datetime
  );
  insert into logs (log_id, log_time) values (1, '2023-10-05 14:30:00');
  ```

---

### **(4) `timestamp`**
- 存储日期和时间，格式为 `yyyy-mm-dd hh:mm:ss`。
- 受时区影响，存储时会转换为 utc，检索时会转换为当前时区。
- 范围较小，从 `1970-01-01 00:00:01` utc 到 `2038-01-19 03:14:07` utc。
- 示例：
  ```sql
  create table user_actions (
      action_id int primary key,
      action_time timestamp default current_timestamp
  );
  insert into user_actions (action_id) values (1);
  ```

---

### **(5) `year`**
- 存储年份，格式为 `yyyy`。
- 支持 2 位或 4 位年份（`yy` 或 `yyyy`），但 2 位年份已不推荐使用。
- 示例：
  ```sql
  create table cars (
      car_id int primary key,
      manufacture_year year
  );
  insert into cars (car_id, manufacture_year) values (1, 2023);
  ```

---

## **3. 常用日期与时间函数**

### **(1) 获取当前日期和时间**
- `now()`: 返回当前日期和时间（`datetime` 类型）。
  ```sql
  select now(); -- 2023-10-05 14:30:00
  ```
- `curdate()`: 返回当前日期（`date` 类型）。
  ```sql
  select curdate(); -- 2023-10-05
  ```
- `curtime()`: 返回当前时间（`time` 类型）。
  ```sql
  select curtime(); -- 14:30:00
  ```

---

### **(2) 提取日期或时间部分**
- `date()`: 提取日期部分。
  ```sql
  select date('2023-10-05 14:30:00'); -- 2023-10-05
  ```
- `time()`: 提取时间部分。
  ```sql
  select time('2023-10-05 14:30:00'); -- 14:30:00
  ```
- `year()`: 提取年份。
  ```sql
  select year('2023-10-05'); -- 2023
  ```
- `month()`: 提取月份。
  ```sql
  select month('2023-10-05'); -- 10
  ```
- `day()`: 提取日。
  ```sql
  select day('2023-10-05'); -- 5
  ```

---

### **(3) 日期与时间计算**
- `date_add()`: 添加时间间隔。
  ```sql
  select date_add('2023-10-05', interval 1 day); -- 2023-10-06
  ```
- `date_sub()`: 减去时间间隔。
  ```sql
  select date_sub('2023-10-05', interval 1 month); -- 2023-09-05
  ```
- `datediff()`: 计算两个日期的差值（天数）。
  ```sql
  select datediff('2023-10-05', '2023-10-01'); -- 4
  ```

---

### **(4) 格式化日期与时间**
- `date_format()`: 格式化日期和时间。
  ```sql
  select date_format(now(), '%y-%m-%d %h:%i:%s'); -- 2023-10-05 14:30:00
  ```

---

## **4. 示例应用**

### **(1) 创建表并插入数据**
```sql
create table orders (
    order_id int primary key,
    order_date date,
    order_time time,
    order_datetime datetime,
    order_timestamp timestamp default current_timestamp
);
insert into orders (order_id, order_date, order_time, order_datetime)
values (1, '2023-10-05', '14:30:00', '2023-10-05 14:30:00');
```

### **(2) 查询数据**
```sql
select * from orders;
```

### **(3) 查询今天的订单**
```sql
select * from orders where order_date = curdate();
```

### **(4) 查询过去 7 天的订单**
```sql
select * from orders where order_date >= date_sub(curdate(), interval 7 day);
```

---

## **5. 注意事项**
1. **`timestamp` 的时区问题**  
   `timestamp` 类型会受时区影响，而 `datetime` 不会。如果需要存储跨时区的时间，建议使用 `datetime`。

2. **`year` 类型的范围**  
   `year` 类型仅支持 `1901` 到 `2155` 的年份，超出范围会导致错误。

3. **日期与时间的格式化**  
   使用 `date_format()` 函数可以灵活地格式化日期和时间。

---

通过合理使用 mysql 的日期与时间类型，可以高效地存储和处理时间相关数据！
