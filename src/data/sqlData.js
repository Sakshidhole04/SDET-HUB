export const sqlCourses = {
  basics: {
    title: "SQL Basics",
    icon: "🗄️",
    color: "#f59e0b",
    subtopics: [
      {
        id: 1,
        title: "Introduction to SQL",
        content: `## Introduction to SQL

**SQL (Structured Query Language)** is the standard language for managing and manipulating **relational databases**. It was developed by IBM in the 1970s and became an ANSI standard in 1986.

### Why SQL?
| Feature | Description |
|---------|-------------|
| Universal | Works across MySQL, PostgreSQL, Oracle, SQL Server |
| Declarative | Tell the DB *what* you want, not *how* to get it |
| Powerful | Filter, sort, join, aggregate millions of rows |
| SDET Essential | Database testing, test data setup/teardown |

### SQL Categories
| Category | Name | Commands |
|----------|------|----------|
| **DDL** | Data Definition Language | CREATE, ALTER, DROP, TRUNCATE |
| **DML** | Data Manipulation Language | INSERT, UPDATE, DELETE |
| **DQL** | Data Query Language | SELECT |
| **DCL** | Data Control Language | GRANT, REVOKE |
| **TCL** | Transaction Control Language | COMMIT, ROLLBACK, SAVEPOINT |

### Popular Databases
| Database | Type | Use Case |
|----------|------|----------|
| MySQL | Open source | Web applications |
| PostgreSQL | Open source | Complex queries, JSON |
| Oracle | Commercial | Enterprise |
| SQL Server | Microsoft | Windows environment |
| SQLite | Embedded | Mobile, local testing |

### RDBMS Concepts
\`\`\`
Database
└── Tables (like spreadsheets)
    ├── Columns (fields) — name, type, constraints
    └── Rows (records) — actual data

Relationships
├── One-to-One (user ↔ profile)
├── One-to-Many (customer → orders)
└── Many-to-Many (students ↔ courses)
\`\`\`

### SQL Syntax Rules
\`\`\`sql
-- This is a single-line comment

/* This is a
   multi-line comment */

-- Keywords are case-insensitive (but UPPERCASE by convention)
SELECT * FROM employees WHERE salary > 50000;

-- Semicolons end each statement
SELECT 1;
SELECT 2;
\`\`\`

### Data Types (MySQL)
| Type | Example | Notes |
|------|---------|-------|
| INT | \`42\` | Whole number |
| DECIMAL(10,2) | \`9999.99\` | Exact decimal |
| FLOAT | \`3.14\` | Approximate decimal |
| VARCHAR(255) | \`'Alice'\` | Variable-length string |
| CHAR(10) | \`'ABC'\` | Fixed-length string |
| TEXT | Long text | Up to 65,535 chars |
| DATE | \`'2024-01-15'\` | YYYY-MM-DD |
| DATETIME | \`'2024-01-15 10:30:00'\` | Date + Time |
| BOOLEAN | \`TRUE/FALSE\` | 0 or 1 |
| NULL | \`NULL\` | No value |`,
        exercises: [
          { title: "Install MySQL", description: "Install MySQL Community Server + MySQL Workbench, connect to localhost and run: SELECT VERSION();" },
          { title: "Identify data types", description: "For a Student table (ID, Name, Age, GPA, EnrollDate, IsActive): identify the best SQL data type for each column." }
        ]
      },
      {
        id: 2,
        title: "CREATE, DROP & ALTER",
        content: `## CREATE, DROP & ALTER

### CREATE DATABASE & TABLE
\`\`\`sql
-- Create database
CREATE DATABASE school;

-- Use database
USE school;

-- Create table with constraints
CREATE TABLE students (
    student_id   INT           PRIMARY KEY AUTO_INCREMENT,
    first_name   VARCHAR(50)   NOT NULL,
    last_name    VARCHAR(50)   NOT NULL,
    email        VARCHAR(100)  UNIQUE NOT NULL,
    date_of_birth DATE,
    gpa          DECIMAL(3, 2) DEFAULT 0.00,
    is_active    BOOLEAN       DEFAULT TRUE,
    created_at   DATETIME      DEFAULT CURRENT_TIMESTAMP
);

-- Create table with foreign key
CREATE TABLE courses (
    course_id   INT          PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    credits     INT          NOT NULL CHECK (credits BETWEEN 1 AND 6),
    teacher_id  INT,
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);
\`\`\`

### Constraints Summary
| Constraint | Description |
|------------|-------------|
| \`PRIMARY KEY\` | Unique + Not Null identifier |
| \`FOREIGN KEY\` | Links to another table |
| \`UNIQUE\` | No duplicate values |
| \`NOT NULL\` | Cannot be empty |
| \`DEFAULT\` | Default value if not specified |
| \`CHECK\` | Must satisfy a condition |
| \`AUTO_INCREMENT\` | Auto-generate sequential IDs |

### ALTER TABLE
\`\`\`sql
-- Add a column
ALTER TABLE students
ADD COLUMN phone VARCHAR(15);

-- Add column at specific position
ALTER TABLE students
ADD COLUMN middle_name VARCHAR(50) AFTER first_name;

-- Modify column type
ALTER TABLE students
MODIFY COLUMN phone VARCHAR(20) NOT NULL;

-- Rename column
ALTER TABLE students
RENAME COLUMN phone TO phone_number;

-- Drop column
ALTER TABLE students
DROP COLUMN middle_name;

-- Add index
ALTER TABLE students
ADD INDEX idx_email (email);

-- Add constraint
ALTER TABLE students
ADD CONSTRAINT chk_gpa CHECK (gpa BETWEEN 0.00 AND 4.00);
\`\`\`

### DROP & TRUNCATE
\`\`\`sql
-- Remove all data but keep structure
TRUNCATE TABLE students;  -- faster than DELETE

-- Remove table completely
DROP TABLE IF EXISTS students;

-- Remove database
DROP DATABASE IF EXISTS school;

-- Difference
-- DELETE: Removes rows one by one, can rollback, fires triggers
-- TRUNCATE: Removes all rows at once, cannot rollback easily, resets AUTO_INCREMENT
-- DROP: Removes table structure + data permanently
\`\`\``,
        exercises: [
          { title: "Create e-commerce schema", description: "Create tables: customers(id, name, email), products(id, name, price, stock), orders(id, customer_id, date)." },
          { title: "Alter a table", description: "Create a simple employees table, then add a department column, modify salary to DECIMAL(10,2), and add a constraint." }
        ]
      },
      {
        id: 3,
        title: "INSERT & SELECT",
        content: `## INSERT & SELECT

### INSERT INTO
\`\`\`sql
-- Insert single row (specify all columns)
INSERT INTO students (first_name, last_name, email, gpa)
VALUES ('Alice', 'Johnson', 'alice@email.com', 3.95);

-- Insert with default values (omit column with default)
INSERT INTO students (first_name, last_name, email)
VALUES ('Bob', 'Smith', 'bob@email.com');

-- Insert multiple rows at once (efficient!)
INSERT INTO students (first_name, last_name, email, gpa)
VALUES
    ('Charlie', 'Brown', 'charlie@email.com', 3.70),
    ('Diana', 'Prince', 'diana@email.com', 3.85),
    ('Eve', 'Wilson', 'eve@email.com', 3.60);

-- Insert from another table
INSERT INTO archive_students
SELECT * FROM students WHERE is_active = FALSE;
\`\`\`

### SELECT Basics
\`\`\`sql
-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT first_name, last_name, email FROM students;

-- Select with alias
SELECT
    first_name AS "First Name",
    last_name  AS "Last Name",
    gpa        AS "Grade Point Average"
FROM students;

-- Select with expression
SELECT
    first_name,
    last_name,
    gpa * 25 AS percentage_score,  -- computed column
    CONCAT(first_name, ' ', last_name) AS full_name
FROM students;

-- Select distinct values
SELECT DISTINCT gpa FROM students;

-- Select constant / calculation (no table)
SELECT 1 + 1 AS result;
SELECT NOW() AS current_time;
SELECT VERSION() AS db_version;
\`\`\`

### WHERE Clause — Filtering
\`\`\`sql
-- Basic comparison
SELECT * FROM students WHERE gpa > 3.5;
SELECT * FROM students WHERE first_name = 'Alice';
SELECT * FROM students WHERE is_active = TRUE;

-- Multiple conditions
SELECT * FROM students
WHERE gpa >= 3.0 AND is_active = TRUE;

SELECT * FROM students
WHERE gpa < 2.0 OR gpa > 3.9;

-- NOT condition
SELECT * FROM students WHERE NOT is_active = TRUE;
SELECT * FROM students WHERE gpa != 3.0;

-- Range
SELECT * FROM students WHERE gpa BETWEEN 3.0 AND 3.9;
SELECT * FROM students WHERE date_of_birth BETWEEN '2000-01-01' AND '2005-12-31';

-- List of values
SELECT * FROM students WHERE first_name IN ('Alice', 'Bob', 'Charlie');
SELECT * FROM students WHERE gpa NOT IN (3.0, 3.5, 4.0);

-- Pattern matching
SELECT * FROM students WHERE first_name LIKE 'A%';     -- starts with A
SELECT * FROM students WHERE email LIKE '%@gmail.com'; -- ends with @gmail.com
SELECT * FROM students WHERE first_name LIKE '_o_';    -- 3 chars, middle 'o'

-- NULL check
SELECT * FROM students WHERE phone_number IS NULL;
SELECT * FROM students WHERE phone_number IS NOT NULL;
\`\`\``,
        exercises: [
          { title: "Insert test data", description: "Insert 5 rows into a products table (id, name, category, price, stock). Then SELECT only products with price > 100." },
          { title: "Pattern search", description: "Write queries to find all employees whose email ends with @company.com and name starts with 'J'." }
        ]
      },
      {
        id: 4,
        title: "ORDER BY, LIMIT & DISTINCT",
        content: `## Sorting, Limiting & DISTINCT

### ORDER BY
\`\`\`sql
-- Sort ascending (default)
SELECT first_name, gpa
FROM students
ORDER BY gpa;

-- Sort descending
SELECT first_name, gpa
FROM students
ORDER BY gpa DESC;

-- Sort by multiple columns
SELECT first_name, last_name, gpa
FROM students
ORDER BY gpa DESC, last_name ASC;

-- Sort by column alias
SELECT
    CONCAT(first_name, ' ', last_name) AS full_name,
    gpa
FROM students
ORDER BY full_name;

-- Sort by column position (discouraged)
SELECT first_name, last_name, gpa
FROM students
ORDER BY 3 DESC;  -- 3rd column (gpa)
\`\`\`

### LIMIT & OFFSET (Pagination)
\`\`\`sql
-- Get top 5 students by GPA
SELECT first_name, gpa
FROM students
ORDER BY gpa DESC
LIMIT 5;

-- Pagination: page 2, 10 results per page
SELECT * FROM students
ORDER BY student_id
LIMIT 10 OFFSET 10;  -- skip first 10, take next 10

-- Shorthand: LIMIT offset, count
SELECT * FROM students LIMIT 20, 10;  -- skip 20, take 10

-- Get last N rows
SELECT * FROM students
ORDER BY student_id DESC
LIMIT 5;
\`\`\`

### DISTINCT
\`\`\`sql
-- Unique values only
SELECT DISTINCT gpa FROM students;

-- Unique combination of columns
SELECT DISTINCT first_name, last_name
FROM employees;

-- Count distinct
SELECT COUNT(DISTINCT department) AS num_departments
FROM employees;
\`\`\`

### Combining Everything
\`\`\`sql
-- Real-world query: top 10 active students with high GPA
SELECT
    CONCAT(first_name, ' ', last_name) AS name,
    email,
    gpa,
    CASE
        WHEN gpa >= 3.7 THEN 'Distinction'
        WHEN gpa >= 3.0 THEN 'Merit'
        ELSE 'Pass'
    END AS grade_category
FROM students
WHERE is_active = TRUE
    AND gpa IS NOT NULL
ORDER BY gpa DESC, last_name ASC
LIMIT 10;
\`\`\``,
        exercises: [
          { title: "Top products", description: "Write a query to find the top 5 most expensive products in each category, ordered by price DESC." },
          { title: "Paginated users", description: "Write queries to implement pagination: show users 11-20 sorted alphabetically by name." }
        ]
      }
    ]
  },
  dml: {
    title: "Data Manipulation",
    icon: "✏️",
    color: "#3b82f6",
    subtopics: [
      {
        id: 1,
        title: "UPDATE & DELETE",
        content: `## UPDATE & DELETE

### UPDATE
\`\`\`sql
-- Update single row
UPDATE students
SET gpa = 3.95
WHERE student_id = 1;

-- Update multiple columns
UPDATE students
SET
    gpa = 3.80,
    email = 'alice.new@email.com',
    is_active = TRUE
WHERE student_id = 1;

-- Update multiple rows matching condition
UPDATE students
SET is_active = FALSE
WHERE gpa < 2.0;

-- Update with expression
UPDATE products
SET price = price * 1.10   -- increase price by 10%
WHERE category = 'Electronics';

-- Update using subquery
UPDATE employees
SET salary = salary * 1.15
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE location = 'Mumbai'
);

-- Conditional update with CASE
UPDATE students
SET grade_category =
    CASE
        WHEN gpa >= 3.7 THEN 'Distinction'
        WHEN gpa >= 3.0 THEN 'Merit'
        WHEN gpa >= 2.0 THEN 'Pass'
        ELSE 'Fail'
    END;
\`\`\`

### DELETE
\`\`\`sql
-- Delete specific rows
DELETE FROM students WHERE student_id = 5;

-- Delete with condition
DELETE FROM students WHERE is_active = FALSE;

-- Delete with date condition
DELETE FROM logs WHERE created_at < '2023-01-01';

-- ⚠️ Delete ALL rows (dangerous! use TRUNCATE instead)
DELETE FROM temp_table;

-- Safe delete with LIMIT
DELETE FROM audit_logs
WHERE created_at < NOW() - INTERVAL 90 DAY
LIMIT 1000;  -- delete max 1000 rows at once
\`\`\`

### Safe UPDATE/DELETE Practice
\`\`\`sql
-- ALWAYS test your WHERE clause with SELECT first!

-- Step 1: Verify which rows will be affected
SELECT * FROM students WHERE gpa < 2.0;

-- Step 2: If looks correct, run UPDATE/DELETE
DELETE FROM students WHERE gpa < 2.0;

-- Use transactions for safety
START TRANSACTION;
UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;
-- Verify results
SELECT id, balance FROM accounts WHERE id IN (1, 2);
COMMIT;  -- or ROLLBACK; if something looks wrong
\`\`\``,
        exercises: [
          { title: "Price update", description: "Give a 20% discount to all products in the 'Clearance' category. Verify with SELECT before running UPDATE." },
          { title: "Archive and delete", description: "Copy all inactive users to an archive table, then delete them from the active users table." }
        ]
      },
      {
        id: 2,
        title: "Aggregate Functions",
        content: `## Aggregate Functions

Aggregate functions perform calculations on **groups of rows** and return a single value.

### Core Aggregate Functions
\`\`\`sql
-- Sample data: orders(order_id, customer_id, amount, status, created_at)

-- COUNT — number of rows
SELECT COUNT(*) AS total_orders FROM orders;
SELECT COUNT(amount) AS orders_with_amount FROM orders;  -- excludes NULL
SELECT COUNT(DISTINCT customer_id) AS unique_customers FROM orders;

-- SUM — total
SELECT SUM(amount) AS total_revenue FROM orders;
SELECT SUM(amount) AS completed_revenue
FROM orders WHERE status = 'completed';

-- AVG — average
SELECT AVG(amount) AS avg_order_value FROM orders;
SELECT ROUND(AVG(amount), 2) AS avg_rounded FROM orders;

-- MIN / MAX
SELECT MIN(amount) AS smallest_order FROM orders;
SELECT MAX(amount) AS largest_order FROM orders;

-- All together
SELECT
    COUNT(*)            AS total_orders,
    COUNT(DISTINCT customer_id) AS unique_customers,
    SUM(amount)         AS total_revenue,
    AVG(amount)         AS avg_order,
    MIN(amount)         AS min_order,
    MAX(amount)         AS max_order,
    MAX(created_at)     AS last_order_date
FROM orders
WHERE status = 'completed';
\`\`\`

### GROUP BY — Aggregate Per Group
\`\`\`sql
-- Revenue per customer
SELECT
    customer_id,
    COUNT(*) AS num_orders,
    SUM(amount) AS total_spent,
    AVG(amount) AS avg_order
FROM orders
GROUP BY customer_id
ORDER BY total_spent DESC;

-- Orders per day
SELECT
    DATE(created_at) AS order_date,
    COUNT(*) AS num_orders,
    SUM(amount) AS daily_revenue
FROM orders
GROUP BY DATE(created_at)
ORDER BY order_date;

-- Group by multiple columns
SELECT
    status,
    YEAR(created_at) AS year,
    COUNT(*) AS count,
    SUM(amount) AS revenue
FROM orders
GROUP BY status, YEAR(created_at)
ORDER BY year, revenue DESC;
\`\`\`

### HAVING — Filter Groups
\`\`\`sql
-- WHERE filters rows BEFORE grouping
-- HAVING filters groups AFTER grouping

-- Customers who spent more than ₹10,000
SELECT
    customer_id,
    SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING total_spent > 10000;

-- Customers with more than 5 orders AND total > 5000
SELECT
    customer_id,
    COUNT(*) AS num_orders,
    SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING num_orders > 5 AND total_spent > 5000;

-- Combined WHERE + HAVING
SELECT
    customer_id,
    COUNT(*) AS completed_orders
FROM orders
WHERE status = 'completed'    -- filter rows first
GROUP BY customer_id
HAVING completed_orders >= 3  -- then filter groups
ORDER BY completed_orders DESC;
\`\`\``,
        exercises: [
          { title: "Sales report", description: "Write a query showing monthly sales totals, average order value, and order count for the current year." },
          { title: "Top customers", description: "Find customers with more than 3 orders who have spent over ₹50,000 total." }
        ]
      }
    ]
  },
  joins: {
    title: "Joins & Relations",
    icon: "🔗",
    color: "#8b5cf6",
    subtopics: [
      {
        id: 1,
        title: "INNER JOIN",
        content: `## INNER JOIN

An INNER JOIN returns rows where there is a **match in both tables**.

### Setup — Sample Tables
\`\`\`sql
-- customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name        VARCHAR(100),
    email       VARCHAR(100),
    city        VARCHAR(50)
);

-- orders table
CREATE TABLE orders (
    order_id    INT PRIMARY KEY,
    customer_id INT,
    product     VARCHAR(100),
    amount      DECIMAL(10,2),
    order_date  DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES
(1, 'Alice', 'alice@email.com', 'Mumbai'),
(2, 'Bob',   'bob@email.com',   'Delhi'),
(3, 'Charlie','charlie@email.com','Pune'),
(4, 'Diana', 'diana@email.com', 'Bangalore');

INSERT INTO orders VALUES
(101, 1, 'Laptop',  75000, '2024-01-10'),
(102, 1, 'Mouse',    1500, '2024-01-15'),
(103, 2, 'Keyboard', 3000, '2024-02-01'),
(104, 3, 'Monitor', 25000, '2024-02-10');
-- Note: Diana (customer_id=4) has NO orders
\`\`\`

### INNER JOIN Syntax
\`\`\`sql
-- Only customers who HAVE orders (Diana excluded)
SELECT
    c.name,
    c.city,
    o.order_id,
    o.product,
    o.amount,
    o.order_date
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;

-- Result:
-- Alice  | Mumbai | 101 | Laptop   | 75000 | 2024-01-10
-- Alice  | Mumbai | 102 | Mouse    |  1500 | 2024-01-15
-- Bob    | Delhi  | 103 | Keyboard |  3000 | 2024-02-01
-- Charlie| Pune   | 104 | Monitor  | 25000 | 2024-02-10

-- With WHERE and ORDER BY
SELECT c.name, SUM(o.amount) AS total_spent
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2024-01-01'
GROUP BY c.customer_id, c.name
ORDER BY total_spent DESC;
\`\`\`

### Multiple Table JOIN
\`\`\`sql
-- orders → customers + products + delivery
SELECT
    o.order_id,
    c.name AS customer,
    p.product_name,
    p.category,
    o.quantity,
    (o.quantity * p.price) AS total,
    d.status AS delivery_status
FROM orders o
INNER JOIN customers c  ON o.customer_id  = c.customer_id
INNER JOIN products p   ON o.product_id   = p.product_id
INNER JOIN deliveries d ON o.order_id     = d.order_id
WHERE o.order_date = CURDATE();
\`\`\``,
        exercises: [
          { title: "Employee departments", description: "Join employees and departments tables to show employee name, salary, and department name for all employees." },
          { title: "Order items report", description: "Join orders, order_items, and products to show a detailed receipt with product names and line totals." }
        ]
      },
      {
        id: 2,
        title: "LEFT, RIGHT & FULL JOIN",
        content: `## LEFT, RIGHT & FULL OUTER JOIN

### LEFT JOIN — All from left table, matching from right
\`\`\`sql
-- ALL customers, even those with NO orders
SELECT
    c.name,
    c.city,
    o.order_id,
    o.product,
    o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
ORDER BY c.name;

-- Result (Diana appears with NULL order columns):
-- Alice   | Mumbai    | 101 | Laptop   | 75000
-- Alice   | Mumbai    | 102 | Mouse    |  1500
-- Bob     | Delhi     | 103 | Keyboard |  3000
-- Charlie | Pune      | 104 | Monitor  | 25000
-- Diana   | Bangalore | NULL| NULL     | NULL  ← No orders!

-- Find customers with NO orders (LEFT JOIN anti-pattern)
SELECT c.name, c.email
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
-- Diana

-- Count orders per customer (including 0 orders)
SELECT
    c.name,
    COUNT(o.order_id) AS total_orders,   -- COUNT ignores NULL
    COALESCE(SUM(o.amount), 0) AS total_spent  -- COALESCE replaces NULL with 0
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
ORDER BY total_spent DESC;
\`\`\`

### RIGHT JOIN
\`\`\`sql
-- All orders + customer info (less common, LEFT JOIN preferred)
SELECT
    c.name,
    o.order_id,
    o.product,
    o.amount
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;
-- Same data as LEFT JOIN with tables swapped
\`\`\`

### FULL OUTER JOIN (MySQL uses UNION)
\`\`\`sql
-- MySQL doesn't have FULL OUTER JOIN — use UNION of LEFT + RIGHT
SELECT c.name, o.order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id

UNION

SELECT c.name, o.order_id, o.amount
FROM customers c
RIGHT JOIN orders o ON c.customer_id = o.customer_id;
\`\`\`

### CROSS JOIN — Cartesian Product
\`\`\`sql
-- Every combination of rows (m×n rows)
-- Useful for generating combinations
SELECT
    sizes.size,
    colors.color,
    CONCAT(sizes.size, '-', colors.color) AS variant
FROM sizes
CROSS JOIN colors;
-- S-Red, S-Blue, M-Red, M-Blue, L-Red, L-Blue...
\`\`\``,
        exercises: [
          { title: "Find unassigned items", description: "Using LEFT JOIN, find all products that have never been ordered." },
          { title: "Employee-project matrix", description: "Show all employees and all projects. Show 'Assigned' if they work on it, NULL otherwise using LEFT JOIN." }
        ]
      },
      {
        id: 3,
        title: "Subqueries",
        content: `## Subqueries (Nested Queries)

A subquery is a **SELECT inside another SQL statement**.

### Subquery in WHERE
\`\`\`sql
-- Find employees earning above average salary
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Find customers who placed orders in January 2024
SELECT name, email
FROM customers
WHERE customer_id IN (
    SELECT DISTINCT customer_id
    FROM orders
    WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31'
);

-- Find products never ordered (NOT IN)
SELECT product_name, price
FROM products
WHERE product_id NOT IN (
    SELECT DISTINCT product_id FROM order_items
);
\`\`\`

### Subquery in FROM (Derived Table)
\`\`\`sql
-- Find customers whose total spending is above average
SELECT name, total_spent
FROM (
    SELECT c.customer_id, c.name, SUM(o.amount) AS total_spent
    FROM customers c
    INNER JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.name
) AS customer_totals
WHERE total_spent > (SELECT AVG(total_spent) FROM (
    SELECT SUM(amount) AS total_spent
    FROM orders
    GROUP BY customer_id
) AS totals);
\`\`\`

### EXISTS & NOT EXISTS
\`\`\`sql
-- EXISTS — check if subquery returns any rows (faster than IN for large datasets)
SELECT name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.customer_id
    AND o.amount > 10000
);

-- NOT EXISTS — customers with no high-value orders
SELECT name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.customer_id
    AND o.amount > 10000
);
\`\`\`

### Correlated Subquery
\`\`\`sql
-- Subquery that references outer query (runs once per row)
-- Find each employee's rank in their department
SELECT
    e.name,
    e.department,
    e.salary,
    (SELECT COUNT(*) FROM employees e2
     WHERE e2.department = e.department
     AND e2.salary > e.salary) + 1 AS salary_rank
FROM employees e
ORDER BY e.department, salary_rank;
\`\`\``,
        exercises: [
          { title: "Above average price", description: "Find all products priced above the average price of their own category using a correlated subquery." },
          { title: "VIP customers", description: "Find customers whose total spending puts them in the top 10% using a subquery." }
        ]
      }
    ]
  },
  advanced: {
    title: "Advanced SQL",
    icon: "⚡",
    color: "#ef4444",
    subtopics: [
      {
        id: 1,
        title: "String & Date Functions",
        content: `## String & Date Functions

### String Functions
\`\`\`sql
-- CONCAT — combine strings
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
SELECT CONCAT_WS(', ', city, state, country) AS address FROM locations;

-- UPPER / LOWER
SELECT UPPER(name), LOWER(email) FROM users;

-- LENGTH / CHAR_LENGTH
SELECT name, LENGTH(name) AS byte_len, CHAR_LENGTH(name) AS char_len FROM products;

-- SUBSTRING / SUBSTR
SELECT SUBSTRING('Hello World', 1, 5);   -- 'Hello' (1-indexed!)
SELECT SUBSTRING('Hello World', 7);       -- 'World'
SELECT SUBSTR(email, 1, INSTR(email,'@')-1) AS username FROM users;

-- TRIM / LTRIM / RTRIM
SELECT TRIM('  hello  ');          -- 'hello'
SELECT TRIM(LEADING '0' FROM '00123'); -- '123'

-- REPLACE
SELECT REPLACE(phone, '-', '') AS clean_phone FROM contacts;
SELECT REPLACE(description, 'old product', 'new product') FROM products;

-- LOCATE / INSTR — find position
SELECT LOCATE('@', 'alice@email.com');  -- 6
SELECT INSTR('alice@email.com', '@');   -- 6

-- LPAD / RPAD — padding
SELECT LPAD(order_id, 8, '0') AS formatted_id FROM orders;  -- 00000101

-- FORMAT — number formatting  
SELECT FORMAT(price, 2) AS formatted_price FROM products;   -- 1,234.56
\`\`\`

### Date & Time Functions
\`\`\`sql
-- Current date/time
SELECT NOW();           -- 2024-06-15 10:30:45
SELECT CURDATE();       -- 2024-06-15
SELECT CURTIME();       -- 10:30:45
SELECT UTC_TIMESTAMP(); -- UTC time

-- Extract parts
SELECT YEAR('2024-06-15');    -- 2024
SELECT MONTH('2024-06-15');   -- 6
SELECT DAY('2024-06-15');     -- 15
SELECT HOUR('10:30:45');      -- 10
SELECT DAYNAME('2024-06-15'); -- Saturday
SELECT MONTHNAME(NOW());      -- June
SELECT QUARTER(NOW());        -- 2
SELECT WEEK(NOW());           -- 24

-- Date arithmetic
SELECT DATE_ADD('2024-01-01', INTERVAL 30 DAY);  -- 2024-01-31
SELECT DATE_SUB(NOW(), INTERVAL 1 MONTH);
SELECT DATEDIFF('2024-12-31', '2024-01-01');      -- 365

-- Format date
SELECT DATE_FORMAT(NOW(), '%d-%m-%Y');     -- 15-06-2024
SELECT DATE_FORMAT(NOW(), '%W, %M %d, %Y'); -- Saturday, June 15, 2024

-- Practical examples
-- Orders from last 30 days
SELECT * FROM orders WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);

-- Customer age from birth date
SELECT name, TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) AS age FROM customers;
\`\`\``,
        exercises: [
          { title: "Name formatter", description: "Write a query that formats employee names as 'LAST, First' and their hire date as 'DD Mon YYYY'." },
          { title: "Monthly report", description: "Write a query showing order counts and revenue for each month of 2024 using date functions." }
        ]
      },
      {
        id: 2,
        title: "Indexes & Views",
        content: `## Indexes & Views

### Indexes — Speed Up Queries
\`\`\`sql
-- Indexes make SELECT faster but INSERT/UPDATE slightly slower

-- Create index
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_order_date ON orders(order_date);

-- Composite index (for queries filtering both columns)
CREATE INDEX idx_status_date ON orders(status, order_date);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_email_unique ON users(email);

-- View existing indexes
SHOW INDEXES FROM orders;

-- Drop index
DROP INDEX idx_email ON users;

-- EXPLAIN — analyze query performance
EXPLAIN SELECT * FROM orders WHERE order_date > '2024-01-01';
-- Look for: type=ALL (bad), type=ref (good), type=const (best)

-- When to use indexes:
-- ✅ Columns in WHERE, JOIN ON, ORDER BY, GROUP BY
-- ✅ Foreign key columns
-- ❌ Small tables (full scan is fine)
-- ❌ Columns with very low cardinality (like boolean)
-- ❌ Tables with frequent mass INSERT/UPDATE
\`\`\`

### Views — Virtual Tables
\`\`\`sql
-- Create a view (saved SELECT query)
CREATE VIEW active_customers AS
SELECT
    customer_id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    email,
    city,
    created_at
FROM customers
WHERE is_active = TRUE;

-- Use view like a table
SELECT * FROM active_customers WHERE city = 'Mumbai';
SELECT COUNT(*) FROM active_customers;

-- Create complex view for reporting
CREATE VIEW monthly_sales_summary AS
SELECT
    YEAR(order_date)  AS year,
    MONTH(order_date) AS month,
    MONTHNAME(order_date) AS month_name,
    COUNT(*)           AS total_orders,
    SUM(amount)        AS total_revenue,
    AVG(amount)        AS avg_order_value,
    MAX(amount)        AS largest_order
FROM orders
WHERE status = 'completed'
GROUP BY YEAR(order_date), MONTH(order_date);

SELECT * FROM monthly_sales_summary WHERE year = 2024 ORDER BY month;

-- Update view
CREATE OR REPLACE VIEW active_customers AS
SELECT customer_id, full_name, email FROM customers WHERE is_active = TRUE;

-- Drop view
DROP VIEW IF EXISTS active_customers;
\`\`\``,
        exercises: [
          { title: "Performance tuning", description: "Add appropriate indexes to a query that filters by status and order_date. Run EXPLAIN before and after." },
          { title: "Dashboard view", description: "Create a view 'sales_dashboard' showing product name, category, total sold quantity, and total revenue." }
        ]
      },
      {
        id: 3,
        title: "SQL for SDET — Testing",
        content: `## SQL for SDET — Database Testing

### Why SDETs Need SQL
As an SDET you need SQL for:
- **Test data setup** — INSERT records for test scenarios
- **Test data teardown** — DELETE test records after tests
- **Verification** — assert expected DB state after actions
- **Data-driven testing** — fetch test data from DB

### Common SDET SQL Patterns
\`\`\`sql
-- 1. VERIFY user was created after registration API call
SELECT COUNT(*) AS user_count
FROM users
WHERE email = 'testuser@test.com'
AND created_at >= NOW() - INTERVAL 1 MINUTE;
-- Assert: user_count = 1

-- 2. VERIFY order status after checkout
SELECT status, payment_status, total_amount
FROM orders
WHERE order_id = 12345;
-- Assert: status='confirmed', payment_status='paid'

-- 3. SETUP test data before test
INSERT INTO users (name, email, role, is_active)
VALUES ('Test User', 'testuser_${timestamp}@test.com', 'customer', TRUE);

SET @test_user_id = LAST_INSERT_ID();

-- 4. TEARDOWN after test
DELETE FROM order_items WHERE order_id IN (
    SELECT order_id FROM orders WHERE customer_id = @test_user_id
);
DELETE FROM orders WHERE customer_id = @test_user_id;
DELETE FROM users WHERE user_id = @test_user_id;

-- 5. CHECK for duplicate data
SELECT email, COUNT(*) AS count
FROM users
GROUP BY email
HAVING count > 1;

-- 6. VALIDATE foreign key integrity
SELECT o.order_id
FROM orders o
LEFT JOIN customers c ON o.customer_id = c.customer_id
WHERE c.customer_id IS NULL;  -- Should return 0 rows

-- 7. FIND data inconsistencies
SELECT order_id, SUM(line_total) AS items_total, total_amount
FROM order_items oi
JOIN orders o USING (order_id)
GROUP BY order_id, total_amount
HAVING ABS(items_total - total_amount) > 0.01;  -- rounding tolerance
\`\`\`

### Transactions in Testing
\`\`\`sql
-- Wrap test setup in transaction so it can be rolled back
START TRANSACTION;

-- Insert test data
INSERT INTO customers (name, email) VALUES ('Test Customer', 'test@test.com');
SET @cid = LAST_INSERT_ID();

INSERT INTO orders (customer_id, amount, status)
VALUES (@cid, 5000, 'pending');

-- Run your assertions here...
SELECT * FROM orders WHERE customer_id = @cid;

-- Rollback instead of cleanup queries
ROLLBACK;
-- All test data gone, DB in clean state

-- OR commit if you want to keep data
COMMIT;
\`\`\``,
        exercises: [
          { title: "Write test verification queries", description: "For a login API: write SQL to verify that last_login timestamp was updated and failed_attempts was reset to 0." },
          { title: "Data integrity check", description: "Write queries to verify: no duplicate emails in users table, all orders have valid customer_ids, no negative prices in products." }
        ]
      }
    ]
  }
};
