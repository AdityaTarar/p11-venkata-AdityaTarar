## Question 1: Normalization

Consider the following unnormalized table for a bookstore database:

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.

### Answer :

1NF (First Normal Form):
In 1NF, we ensure that each column contains atomic (indivisible) values and eliminate any repeating groups. To achieve this, we create separate tables for entities. The primary key for the new table should be a unique identifier.

2NF (Second Normal Form):
To achieve 2NF, we need to identify the primary key(s) and eliminate partial dependencies. In this case, the Book ID can serve as the primary key for the Books table, and there are no partial dependencies, so we are already in 2NF.

3NF (Third Normal Form):
To achieve 3NF, we need to remove transitive dependencies. There are no transitive dependencies in this case, so we are already in 3NF.

## [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
| ----------- | ------------- | ---------- | ---------- | ------------ | ---------- | ---------- | ------ |
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

### Step-by-Step Guidelines:

### Step 1: First Normal Form (1NF)

Ensure each column contains atomic values.
Eliminate repeating groups.
Result: The table should not contain any repeating groups.

### Step 2: Second Normal Form (2NF)

Identify the primary key(s).
Eliminate partial dependencies.
Result: The table should be in 2NF with separate tables for each entity and its attributes.

### Step 3: Third Normal Form (3NF)

Remove transitive dependencies.
Result: The table should be in 3NF with separate tables for each relationship.

### Step 4: Fourth Normal Form (4NF)

Remove multi-valued dependencies.
Result: The table should be in 4NF with separate tables for independent multi-valued attributes.

### Step 5: Fifth Normal Form (5NF) [If Applicable]

Apply 5NF if the database has complex multi-valued relationships.
In some cases, 5NF may not be necessary, as it applies to certain complex databases. If 5NF is applicable, it usually deals with cases of lossless-join decompositions.

Note: The normalization process may involve additional steps and considerations depending on the complexity of the original table and the specific database design. Always aim to minimize redundancy, improve data integrity, and optimize the structure of the database.

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

### Answer :

Primary Key (PK): A primary key is a unique identifier for each record (row) in a table. It ensures that each row has a distinct and identifiable value. Primary keys are used to enforce data integrity and establish relationships between tables. In most cases, a primary key is a single column, but it can also be a composite key made up of multiple columns.

Foreign Key (FK): A foreign key is a field or a set of fields in one table that is used to establish a link between the data in two tables. It creates a relationship between tables by referencing the primary key of another table. This relationship helps maintain referential integrity, ensuring that data in the related tables remains consistent.

The relationship between tables is established when a foreign key in one table references the primary key of another table. This relationship can be of various types:

- One-to-One (1:1): Each record in the first table is associated with exactly one record in the second table, and vice versa.
  One-to-Many (1:N): Each record in the first table can be associated with multiple records in the second table, but each record in the second table is associated with only one record in the first table.
- Many-to-One (N:1): The reverse of a one-to-many relationship, where many records in the first table can be associated with one record in the second table.
- Many-to-Many (N:N): Many records in the first table can be associated with many records in the second table.
  Foreign keys ensure data integrity by preventing actions that would violate the established relationships, such as deleting a record in the parent table if it is referenced by a child table.

## Question 4: Explain the ACID properties in the context of database transactions.

### Answer:

- Atomicity: Ensures that a transaction is either fully completed or fully undone, avoiding partial changes to the database in case of errors.

- Consistency: Guarantees that transactions maintain data integrity and adhere to integrity constraints, ensuring a valid database state.

- Isolation: Manages concurrent transactions, ensuring they don't interfere with each other and defining isolation levels to control visibility of intermediate states.

- Durability: Ensures that committed data is permanent, surviving system failures, and allowing the database to recover to a consistent state.

## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

### Answer:

Indexing in a database is a data structure that enhances the speed of data retrieval operations on tables. It works by creating a separate data structure, known as an index, that stores a subset of the table's data in a highly organized and searchable format. This index consists of keys and pointers to the actual data records. When you perform a query that involves a column included in the index, the database engine can quickly locate the relevant data using the index rather than scanning the entire table.

## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

- Concurrency control is a fundamental concept in multi-user database systems that ensures data consistency and integrity when multiple users or transactions concurrently access and modify the same database. In such environments, it's crucial to manage concurrent operations to prevent conflicts and maintain the reliability of the data. Here's how concurrency control works:

- Isolation of Transactions: Concurrency control mechanisms isolate transactions from each other, ensuring that each transaction appears to execute in isolation, even though they may be running concurrently. This isolation prevents interference and maintains data consistency.

- Locking: Locks are used to control access to data items (e.g., rows, records, or tables) within the database. When a transaction wants to read or modify a data item, it requests a lock. Locks can be of various types, including shared locks (for read-only access) and exclusive locks (for write access). Locks prevent conflicting operations from occurring simultaneously.

- Deadlock Detection and Resolution: Concurrency control systems include mechanisms to detect and resolve deadlocks, which occur when two or more transactions are unable to proceed because they are each waiting for a resource held by the other(s). Deadlocks can lead to system gridlock, where no transaction can make progress.

## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

**Database sharding** is a database architecture and partitioning technique used to horizontally divide a large database into smaller, more manageable pieces called "shards." Each shard is essentially a separate database with its own subset of data and is hosted on a separate server or cluster of servers. Sharding is primarily used to address scalability and performance challenges in large and high-traffic database systems.

Here are a couple of real-time examples of where, why, and how database sharding is used:

**1. E-commerce Platforms:**

- **Why Sharding is Used:** E-commerce platforms often have vast amounts of product data, user information, and transaction records. As these platforms grow, their databases can become massive and experience increased read and write traffic.
- **How Sharding is Implemented:** Sharding allows e-commerce platforms to partition their databases based on criteria such as product categories, geographic regions, or user IDs. Each shard handles a specific portion of the data. For example, one shard might manage product data for electronics, while another shard handles clothing. This distribution spreads the load, improving query performance and ensuring the system can handle heavy traffic during peak shopping seasons.

**2. Social Media Networks:**

- **Why Sharding is Used:** Social media networks like Facebook, Twitter, and Instagram have billions of users generating a massive volume of data daily. To provide a responsive and scalable user experience, these platforms must distribute and manage their data efficiently.
- **How Sharding is Implemented:** Sharding in social media networks is often based on user IDs or geographic regions. Each shard contains user profiles, posts, and interactions for a subset of users. This enables the system to distribute the load across multiple servers or data centers. For example, all user data for users with IDs starting with 1-100,000 could be stored in one shard, and the data for users with IDs starting with 100,001-200,000 could be in another shard.

**3. Online Gaming:**

- **Why Sharding is Used:** Massively multiplayer online games (MMOGs) require real-time interactions and data updates for thousands or even millions of players simultaneously. These games generate vast amounts of game state and user data.
- **How Sharding is Implemented:** Sharding in online gaming separates game worlds or regions into different shards. Each shard represents a unique game environment or map with its own set of players. For example, a popular MMORPG might shard its game world by regions (e.g., North America, Europe, Asia), ensuring that players in one region do not interact with players in another unless they explicitly choose to. This keeps the game responsive and reduces latency.

**4. SaaS (Software as a Service) Applications:**

- **Why Sharding is Used:** SaaS providers serve multiple customers who store their data in shared databases. To maintain data isolation, security, and performance, sharding is used to separate customer data.
- **How Sharding is Implemented:** Sharding for SaaS applications can be done based on customer accounts or tenants. Each shard contains the data for a specific customer or tenant. This ensures that one customer's data is logically and physically separated from others. It also allows the SaaS provider to allocate resources and scale each shard independently based on customer demand.

In all these examples, database sharding is used to distribute data, balance workloads, improve performance, and enhance scalability while ensuring data integrity and reliability. It allows organizations to efficiently manage their databases as they grow in size and complexity, supporting applications and services with high demands for data storage and retrieval.
