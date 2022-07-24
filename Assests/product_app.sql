-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 24, 2022 at 09:06 AM
-- Server version: 5.7.38-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `order_amount` int(11) NOT NULL,
  `order_placed_date` bigint(20) DEFAULT NULL,
  `order_delivery_date` bigint(20) DEFAULT NULL,
  `payment_mode` int(11) NOT NULL DEFAULT '0',
  `order_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `product_id`, `order_quantity`, `order_amount`, `order_placed_date`, `order_delivery_date`, `payment_mode`, `order_status`) VALUES
(2, 1, 3, 1, 10, 1658579162, 1659183962924, 1, 1),
(3, 1, 3, 2, 20, 1658579187, 1659183987583, 1, 1),
(4, 1, 1, 10, 1000, 1658579483, 1659184283796, 1, 1),
(5, 1, 2, 1, 10000, 1658579483, 1659184283804, 1, 1),
(6, 1, 4, 1, 1000, 1658579483, 1659184283813, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_type` int(11) NOT NULL,
  `product_image_url` text,
  `product_quantity` int(11) NOT NULL,
  `product_status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `product_type`, `product_image_url`, `product_quantity`, `product_status`, `created_at`) VALUES
(1, 'Soap', 100, 1, '', 0, 1, '2022-07-23 07:33:50'),
(2, 'Mobile', 10000, 2, '', 10, 1, '2022-07-23 07:33:50'),
(3, 'Brush', 10, 1, '', 0, 1, '2022-07-23 07:33:53'),
(4, 'Earphones', 1000, 2, '', 2, 1, '2022-07-23 07:33:53');

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `product_detail_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`product_detail_id`, `seller_id`, `product_id`, `product_description`, `created_at`) VALUES
(1, 1, 1, 'Ayurvedic and vegan free body wash.\r\n', '2022-07-23 09:11:07'),
(2, 2, 2, '16 MP camera , 8GB RAM', '2022-07-23 09:12:03');

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `seller_id` int(11) NOT NULL,
  `seller_name` varchar(250) NOT NULL,
  `seller_phone` int(11) NOT NULL,
  `seller_status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`seller_id`, `seller_name`, `seller_phone`, `seller_status`, `created_at`) VALUES
(1, 'Mohan Lal', 987654321, 1, '2022-07-23 09:06:51'),
(2, 'Jaideep', 987651234, 1, '2022-07-23 09:06:51'),
(3, 'Magesh', 987654321, 1, '2022-07-23 09:06:54'),
(4, 'Ram', 987651234, 1, '2022-07-23 09:06:54');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `address` text,
  `phone_number` int(10) DEFAULT NULL,
  `email_id` varchar(200) NOT NULL,
  `access_token` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `user_inventory` json DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `address`, `phone_number`, `email_id`, `access_token`, `password`, `user_inventory`, `created_at`, `status`) VALUES
(1, 'sanjaykmrmpl_88', '', 0, 'sanjaykmrmpl@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NTg1NjEyNTN9.-4hhTGfzeMtMX0lo-Jg-6V5FddlBhpcR4aYvDcnXKyg', '$2b$10$Xx7kbeyczFq.uxkjSO1rROFMySJOHCmEtuFrWzsOmL7nAdMABq1si', '{\"inventory\": [1]}', '2022-07-23 06:38:12', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_inventory`
--

CREATE TABLE `user_inventory` (
  `inventory_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_inventory`
--

INSERT INTO `user_inventory` (`inventory_id`, `user_id`, `product_id`, `product_quantity`, `status`, `created_at`) VALUES
(1, 1, 1, 10, 1, '2022-07-23 13:51:28'),
(2, 2, 1, 1, 1, '2022-07-23 13:51:41'),
(3, 1, 2, 2, 1, '2022-07-23 13:51:44'),
(4, 1, 4, 1, 1, '2022-07-23 08:53:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`product_detail_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`seller_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_inventory`
--
ALTER TABLE `user_inventory`
  ADD PRIMARY KEY (`inventory_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `product_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `seller_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_inventory`
--
ALTER TABLE `user_inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_details`
--
ALTER TABLE `product_details`
  ADD CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
