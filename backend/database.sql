/* create the database */
DROP DATABASE IF EXISTS asg1;
CREATE DATABASE IF NOT EXISTS asg1;
USE asg1;

/* drop existing tables */
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS trip;
DROP TABLE IF EXISTS delivery;
DROP TABLE IF EXISTS services;

/* create new tables */
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flowers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    store_code INT NOT NULL,
    img_path VARCHAR(250) NOT NULL,
    name VARCHAR(50) NOT NULL,
    price FLOAT(10, 2) DEFAULT 0.0
);

CREATE TABLE car (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    img_path VARCHAR(250) NOT NULL,
    code INT NOT NULL,
    available TINYINT DEFAULT 1 /* 0 => not available
                                   1 => available */
);

CREATE TABLE trip (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    source VARCHAR(50) NOT NULL,
    destination VARCHAR(50) NOT NULL,
    distance FLOAT(10, 2) NOT NULL,
    price FLOAT(10, 2) DEFAULT 0.0,
    date DATETIME NOT NULL,
    car_id INT NOT NULL,
    user_id INT NOT NULL,

    FOREIGN KEY(car_id) REFERENCES car(id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE delivery (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_issued DATETIME NOT NULL,
    date_done DATETIME NOT NULL,
    total_price FLOAT(10, 2) NOT NULL,
    payment_code INT NOT NULL,
    car_id INT NOT NULL,
    user_id INT NOT NULL,
    flower_id INT NOT NULL,

    FOREIGN KEY(car_id) REFERENCES car(id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(flower_id) REFERENCES flowers(id) ON DELETE CASCADE
);

CREATE TABLE services (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    service_name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE review (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    description VARCHAR(4000),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

/* Insert initial data */

INSERT INTO flowers (store_code, img_path, name, price) VALUES
(1, 'images/flowers/spring.jpg', 'Spring Flower', 12.99),
(1, 'images/flowers/lotus.jpg', 'Lotus Flower', 22.99),
(1, 'images/flowers/roses.jpg', 'Rose', 15.99);

INSERT INTO car (name, model, img_path, code, available, year, price) VALUES
('BMW', 'BMW-x1', 'images/cars/bmw.jpg', 1, 1, "2021", 5),
('Audi', 'Audi-RS3', 'images/cars/audi.jpg', 1, 1, "2020", 3),
('Mercedes', 'CLS', 'images/cars/mercedes.jpg', 1, 1, "2019", 2);

INSERT INTO services (service_name, description) VALUES
('Ride', 'With our ride service you can get to where you want faster and safer'),
('Delivery', 'With our delivery service you can enjoy our finest choices of flower/coffee'),
('Ride & Delivery', 'With ride&delivery you can take a ride as well as pick your choice of items');