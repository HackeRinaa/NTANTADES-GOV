CREATE DATABASE users_db;

USE users_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL,
    amka VARCHAR(11) NOT NULL UNIQUE,
    afm VARCHAR(9) NOT NULL UNIQUE,
    region VARCHAR(100),
    municipality VARCHAR(100),
    street VARCHAR(100),
    street_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
