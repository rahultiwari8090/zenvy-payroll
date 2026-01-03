create database zenvy_payroll;
use zenvy_payroll;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('HR', 'Employee') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  salary INT NOT NULL,
  designation VARCHAR(100),
  department VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE payroll (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT,
  basic_salary INT,
  days_present INT,
  net_salary INT,
  month VARCHAR(20),
  year INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);
INSERT INTO users (name, email, password, role)
VALUES
('HR Admin', 'hr@zenvy.com', '$2b$10$7CwQDRHxGep7QbbZpBf.eupb2WAeKSmNP7QXmIsE5iW55BYA4Y5Xy', 'HR'),
('Employee User', 'emp@zenvy.com', '$2b$10$7CwQDRHxGep7QbbZpBf.eupb2WAeKSmNP7QXmIsE5iW55BYA4Y5Xy', 'Employee');

INSERT INTO employees (user_id, salary, designation, department)
VALUES
(2, 45000, 'Software Engineer', 'IT');
SHOW TABLES;


select * from users;
select * from employees;

SELECT id, email, role, password FROM users;
UPDATE users
SET password = '$2b$10$3Mv.qNGt05V6f8w6xZhMrO8l13g.uCwQgpNMCzd3RlUKSwCerJpYy'
WHERE email = 'hr@zenvy.com';

SELECT email, password FROM users WHERE email = 'hr@zenvy.com';
SELECT email, password FROM users WHERE email = 'hr@zenvy.com';

SELECT * FROM payroll;
SELECT id, email, role FROM users;



