CREATE DATABASE gadget_valley_db;

USE gadget_valley_db;

SHOW TABLES;

CREATE TABLE `gadgets` (
  `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gadgetname` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text,
  `price` double(11,2) NOT NULL DEFAULT '0.00',
  `status` int(1) NOT NULL DEFAULT '1'
);

CREATE TABLE `orders` (
  `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `order_number` varchar(255) NOT NULL,
  `gadgetname` varchar(255) NOT NULL,
  `tax` double(10,2) DEFAULT NULL,
  `total_amount` double(10,2) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `paid` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ;

CREATE TABLE `user_cart` (
  `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `gadgetid` int(11) DEFAULT NULL,
  `row_price` double(10,2) NOT NULL,
  `tax` double(10,2) NOT NULL DEFAULT '0.00'
) ;