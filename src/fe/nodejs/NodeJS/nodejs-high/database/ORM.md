---
title: ORM
article: false
order: 5
---

**ORM（Object-Relational Mapping，对象关系映射）** 是一种将关系型数据库中的表映射为程序中的对象的技术。通过 ORM，开发者可以使用面向对象的方式操作数据库，而无需直接编写 SQL 查询。ORM 工具提供了抽象层，简化了数据库操作，提高了开发效率。

---

### **1. ORM 的核心概念**

#### **1.1 表映射为类**
数据库中的表被映射为程序中的类，表中的每一行数据对应类的一个实例。

#### **1.2 字段映射为属性**
表中的字段被映射为类的属性。

#### **1.3 关系映射**
表之间的关系（如一对一、一对多、多对多）被映射为类之间的关系。

---

### **2. 常用的 ORM 工具**

#### **2.1 Sequelize**
- **支持的数据库**：MySQL、PostgreSQL、SQLite、SQL Server。
- **特点**：功能强大，支持事务、关联、钩子等。

#### **2.2 TypeORM**
- **支持的数据库**：MySQL、PostgreSQL、SQLite、SQL Server、MongoDB 等。
- **特点**：支持 TypeScript，支持装饰器语法。

#### **2.3 Knex.js**
- **支持的数据库**：MySQL、PostgreSQL、SQLite、SQL Server。
- **特点**：SQL 查询构建器，可以与 ORM 结合使用。

---

### **3. 使用 Sequelize 操作 MySQL**

#### **3.1 安装 Sequelize**
```bash
npm install sequelize mysql2
```

#### **3.2 连接数据库**
```javascript
const { Sequelize } = require('sequelize');

// 创建 Sequelize 实例
const sequelize = new Sequelize('mydatabase', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// 测试连接
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
```

#### **3.3 定义模型**
```javascript
const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    }
});

// 同步模型到数据库
sequelize.sync()
    .then(() => {
        console.log('Models synchronized successfully.');
    })
    .catch(err => {
        console.error('Error synchronizing models:', err);
    });
```

#### **3.4 操作数据**
```javascript
// 插入数据
User.create({ name: 'John Doe', email: 'john@example.com' })
    .then(user => {
        console.log('User created:', user.toJSON());
    })
    .catch(err => {
        console.error('Error creating user:', err);
    });

// 查询数据
User.findAll()
    .then(users => {
        console.log('Users:', users.map(user => user.toJSON()));
    })
    .catch(err => {
        console.error('Error fetching users:', err);
    });
```

---

### **4. 使用 TypeORM 操作 PostgreSQL**

#### **4.1 安装 TypeORM**
```bash
npm install typeorm reflect-metadata pg
```

#### **4.2 配置 TypeORM**
在项目根目录下创建 `ormconfig.json` 文件。

```json
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "password",
    "database": "mydatabase",
    "entities": ["src/entity/**/*.ts"],
    "synchronize": true
}
```

#### **4.3 定义实体**
```typescript
// src/entity/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;
}
```

#### **4.4 操作数据**
```typescript
import { createConnection } from 'typeorm';
import { User } from './src/entity/User';

createConnection().then(async connection => {
    const user = new User();
    user.name = 'John Doe';
    user.email = 'john@example.com';

    // 插入数据
    await connection.manager.save(user);
    console.log('User saved:', user);

    // 查询数据
    const users = await connection.manager.find(User);
    console.log('Users:', users);
}).catch(err => {
    console.error('Error:', err);
});
```

---

### **5. ORM 的优缺点**

#### **5.1 优点**
- **简化数据库操作**：通过对象操作数据库，无需编写复杂的 SQL 查询。
- **提高开发效率**：提供统一的 API，减少重复代码。
- **跨数据库兼容**：部分 ORM 支持多种数据库，便于迁移。

#### **5.2 缺点**
- **性能开销**：ORM 可能会引入额外的性能开销。
- **学习曲线**：需要学习 ORM 的 API 和概念。
- **灵活性受限**：某些复杂查询可能难以通过 ORM 实现。

---

### **6. 总结**
- **ORM** 是将关系型数据库映射为对象的技术，简化了数据库操作。
- 常用的 ORM 工具包括 Sequelize、TypeORM 和 Knex.js。
- ORM 提供了抽象层，提高了开发效率，但可能带来性能开销。
- 根据项目需求选择合适的 ORM 工具，可以显著提升开发效率和代码质量。

掌握 ORM 的使用，可以更高效地操作数据库，专注于业务逻辑的实现。
