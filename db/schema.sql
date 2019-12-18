CREATE DATABASE  IF NOT EXISTS gadget_valley_db;

USE gadget_valley_db;

CREATE TABLE `user_address` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT  NOT NULL ,
  `uid` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) ,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
   FOREIGN KEY (uid) REFERENCES users(id)
) ;

CREATE TABLE `products` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `stock` varchar(255) NOT NULL DEFAULT '0',
  `price` double(11,2) NOT NULL DEFAULT '0.00'
);

CREATE TABLE `product_categories` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL ,
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL
);

CREATE TABLE `categories` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ;

CREATE TABLE `orders` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL ,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paymentmethod` varchar(255) NOT NULL
);

CREATE TABLE `order_items` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `oid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_quantity` varchar(255) NOT NULL
  );

CREATE TABLE `order_status` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL ,
  `oid` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `notes` varchar(255) NOT NULL
);