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






- Overview and philosophy
- Installation and setup
- Basic model definition
- Key features and strengths

### Prisma: The Schema-First Approach
  - Prisma follows a different approach and places the schema definition at the center of the database workflow. You can define your data model in a declarative schema file, and Prisma automatically generates a type-safe client tailored to your database structure




- Overview and philosophy
- Installation and setup
- Schema definition
- Key features and strengths

## Comparison

### Working with models and data

### Handling relationships

### Developer Experience

## When to choose which ORM

## Thoughts