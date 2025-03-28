# Object Relational Mapping in Javascript: Comparing Sequelize and Prisma

An ORM is a programming technique used to interact with databases using object-oriented programming (OOP) principles. It provides a high level abstraction to interact with relational databases (PostgreSQL, MySQL, or SQLite) by representing tables as objects in your code

ORMs allow developers to perform CRUD operations (Create, Read, Update, Delete) on the database by use of objects, instead of writing raw SQL queries. This makes the development process smoother and less error prone

## Benefits of using an ORM

### Simplicity and Developer Experience
- ORMs take away the complexities of SQL queries and allows developers to interact with databses using familiar programming paradigms. This leads to a faster development process and reduced learning curves and especially benefits developers who arent SQL experts



### Portability and SQL Dialect Handling
  - ORMs typically support multiple database systems. This means you can switch from SQLite during development to PostgreSQL in production with minimal code changes. Your application becomes database-agnostic, as the ORM handles the translation of your code to the appropriate SQL dialect.


### Security and Maintainability
  - Many ORMs automatically handle SQL injection prevention by properly sanitizing inputs and using parameterized queries. It is a built in protection that helps developers avoid common security errors that can occur when writing raw SQL.
  - With an ORM your data access logic follows a consistent pattern throughout your application. Changes to database schema can be managed in one place, opposed to finding and updating raw SQL queries throughout your codebase.


## Popular Javascript ORMs: Two Different Approaches

In the JavaScript ecosystem, two of the most popular ORMs are Sequelize and Prisma. They represent two fundamentally different approaches to database interaction: the Active Record pattern vs. the Schema-First approach.

### Sequelize: The Active Record Approach
  - Sequelize follows the Active Record pattern similar to Ruby on Rails' Active Record. In this pattern models are defined as classes that correspond directly to the database tables and include methods for database operations

```js  
  // Installation
  // npm install sequelize pg pg-hstore

  // Connection setup
  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = new Sequelize('postgres://user:pass@localhost:5432/dbname');

  // Model definition
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  // Using the model
  async function createUser() {
    await sequelize.sync(); // Creates the table if it doesn't exist
    const user = await User.create({
      firstName: 'Peter',
      lastName: 'Doe',
      email: 'peter@example.com'
    });
    console.log('User created:', user.toJSON());
  }

```


- Key features and strengths:
  - Familiar pattern for developeres coming from Ruby on Rails
  - Extensive documentation and mature ecosystem
  - Flexible query interface with support for complex operations
  - Built in validation and hooks
  - Support for all major relational databases

### Prisma: The Schema-First Approach
  - Prisma follows a different approach and places the schema definition at the center of the database workflow. You can define your data model in a declarative schema file, and Prisma automatically generates a type-safe client tailored to your database structure

```js
  // Installation
  npm install prisma @prisma/client
  npx prisma init

  // Schema definition in prisma/schema.prisma
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }

  generator client {
    provider = "prisma-client-js"
  }

  model User {
    id        Int      @id @default(autoincrement())
    firstName String
    lastName  String?
    email     String   @unique
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }

```
```js
// Using the generated client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser() {
  const user = await prisma.user.create({
    data: {
      firstName: 'Peter',
      lastName: 'Doe',
      email: 'peter@example.com'
    }
  });
  console.log('User created:', user);
}

```

- Key features and strengths:
  - Type-safe database client with autocompletion in modern IDEs
  - Schema migrations through Prisma Migrate
  - Declarative data modeling with clear relation definitions
  - Good TypeScript support
  - Powerful query API

## Comparison

### Working with models and data
  - Sequelize requires you to define models programmatically using JavaScript objects

```js
  // CRUD operations with Sequelize
  // Create
  const newUser = await User.create({ firstName: 'Jane', email: 'jane@example.com' });

  // Read
  const allUsers = await User.findAll();
  const user = await User.findByPk(1);
  const filteredUsers = await User.findAll({
    where: {
      lastName: 'Doe'
    }
  });

  // Update
  await User.update({ lastName: 'Smith' }, { where: { id: 1 } });
  // or
  user.lastName = 'Smith';
  await user.save();

  // Delete
  await User.destroy({ where: { id: 1 } });

 ``` 

  - Prisma takes a more declarative approach with its schema file. Once you define your schema and generate the client, you get strongly-typed operations

```js
  // CRUD operations with Prisma
  // Create
  const newUser = await prisma.user.create({
    data: { firstName: 'Jane', email: 'jane@example.com' }
  });

  // Read
  const allUsers = await prisma.user.findMany();
  const user = await prisma.user.findUnique({ where: { id: 1 } });
  const filteredUsers = await prisma.user.findMany({
    where: { lastName: 'Doe' }
  });

  // Update
  await prisma.user.update({
    where: { id: 1 },
    data: { lastName: 'Smith' }
  });

  // Delete
  await prisma.user.delete({ where: { id: 1 } });

```

### Handling relationships
  - Sequelize defines relationships between models using related methods
```js
  // Define models
  const User = sequelize.define('User', { /* fields */ });
  const Post = sequelize.define('Post', { /* fields */ });

  // Define relationships
  User.hasMany(Post);
  Post.belongsTo(User);

  // Query with relationships
  const userWithPosts = await User.findByPk(1, {
    include: Post
  });

  // Create related records
  const user = await User.findByPk(1);
  const post = await user.createPost({ title: 'My First Post' });

  ```

  - Prisma defines relationships in the schema file, mkaing them explicit and type-safe

```md
  model User {
    id    Int     @id @default(autoincrement())
    posts Post[]
  }

  model Post {
    id       Int    @id @default(autoincrement())
    title    String
    author   User   @relation(fields: [authorId], references: [id])
    authorId Int
  }

```
```js
  // Query with relationships
  const userWithPosts = await prisma.user.findUnique({
    where: { id: 1 },
    include: { posts: true }
  });

  // Create related records
  const userWithPost = await prisma.user.create({
    data: {
      firstName: 'Peter',
      email: 'peter@example.com',
      posts: {
        create: { title: 'My First Post' }
      }
    }
  });

```
### Developer Experience
  - Sequelize offers:
    - 

  - Prisma offers:
    - 

## When to choose which ORM
- Sequelize
  - If you prefer the Active Record pattern
  - Require maximum flexibility with complex queries
  - Working with legacy databases with complex relationships
  - Comfortable with a more imperative programming style
  - Already have experience with Ruby on Rails or similar framework

- Prisma
  - If you prioritize type safety and developer experience
  - Prefer a declarative schema definition
  - Want excellent TypeScript integration
  - Starting a new project without legacy database contraints
  - Value clear separation between schema and data access code

## Thoughts
Both Sequelize and Prisma offer powerful solutions for database access in JavaScript applications, but with different approaches. Sequelize follows the traditional Active Record pattern that Rails developers might find familiar, while Prisma offers a more modern schema-first approach with excellent TypeScript support.

Your choice should depend on your team's experience, project requirements, and programming style preferences. For new TypeScript projects, Prisma's type safety and developer experience make it a great choice. For complex existing databases or teams with Active Record experience, Sequelize's flexibility might be more valuable.

No matter which ORM you choose, using one will improve your productivity compared to writing raw SQL queries, while making your code more maintainable and portable across different database systems.

