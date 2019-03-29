DROP DATABASE IF EXISTS heroes;

CREATE DATABASE IF NOT EXISTS heroes;
USE heroes;

CREATE TABLE listings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    listing_id INT DEFAULT 1
)

CREATE TABLE pics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    listing_id INT,
    FOREIGN KEY(listing_id)
      REFERENCES listings(id)
)
