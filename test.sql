-- phpMyAdmin SQL Dump
-- version 3.4.5deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 07, 2012 at 02:11 PM
-- Server version: 5.1.58
-- PHP Version: 5.3.6-13ubuntu3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `extrabux`
--

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE IF NOT EXISTS `flights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `departure_city` varchar(100) NOT NULL,
  `arrival_city` varchar(100) NOT NULL,
  `departure_time` datetime NOT NULL,
  `arrival_time` datetime NOT NULL,
  `flight_number` int(11) NOT NULL,
  `routing` tinyint(4) NOT NULL,
  `first_class_price` int(11) NOT NULL,
  `economy_class_price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `flights`
--

INSERT INTO `flights` (`id`, `date`, `departure_city`, `arrival_city`, `departure_time`, `arrival_time`, `flight_number`, `routing`, `first_class_price`, `economy_class_price`) VALUES
(1, '2012-03-15', 'San Diego', 'Los Angelos', '2012-03-15 12:15:00', '2012-03-15 13:00:00', 12345, 0, 297, 87),
(2, '2012-03-15', 'San Diego', 'Denver', '2012-03-15 09:30:00', '2012-03-15 15:00:00', 987, 2, 450, 120),
(4, '2012-03-15', 'Los Angelos', 'Providence', '2012-03-15 08:00:00', '2012-03-15 18:15:00', 48, 2, 1017, 789),
(5, '2012-03-16', 'San Diego', 'Las Vegas', '2012-03-16 11:45:00', '2012-03-16 13:30:00', 0, 1, 450, 149),
(6, '2012-03-16', 'San Diego', 'Las Vegas', '2012-03-16 11:45:00', '2012-03-16 13:30:00', 123, 1, 450, 149),
(7, '2012-03-16', 'San Francisco', 'Chicago', '2012-03-16 11:25:00', '2012-03-16 16:20:00', 568, 0, 745, 350),
(8, '2012-03-16', 'San Diego', 'Atlanta', '2012-03-16 10:40:00', '2012-03-16 17:25:00', 336, 1, 1089, 533),
(9, '2012-03-17', 'Seattle', 'Minneapolis', '2012-03-17 14:10:00', '2012-03-17 17:35:00', 86, 0, 715, 249),
(10, '2012-03-17', 'Phoenix', 'Charlotte', '2012-03-17 09:15:00', '2012-03-17 18:00:00', 12, 1, 920, 553),
(11, '2012-03-18', 'Dallas', 'Boston', '2012-03-18 08:30:00', '2012-03-18 20:10:00', 411, 0, 1005, 540),
(12, '2012-03-18', 'Las Vegas', 'Washington D.C.', '2012-03-18 10:00:00', '2012-03-18 18:30:00', 147, 0, 960, 524),
(13, '2012-03-19', 'San Diego', 'Chicago', '2012-03-19 07:30:00', '2012-03-19 12:15:00', 620, 1, 745, 463),
(14, '2012-03-19', 'Phoenix', 'Newark', '2012-03-19 09:10:00', '2012-03-19 18:30:00', 11, 2, 1049, 615),
(15, '2012-03-19', 'San Francisco', 'Boston', '2012-03-19 07:30:00', '2012-03-19 20:50:00', 65, 1, 1089, 730),
(17, '2012-03-20', 'Honolulu', 'Juneau', '2012-03-20 10:35:00', '2012-03-20 20:25:00', 320, 0, 745, 463),
(18, '2012-03-20', 'Houston', 'Orlando', '2012-03-20 11:45:00', '2012-03-20 17:30:00', 5311, 0, 920, 590),
(19, '2012-03-20', 'Portland', 'Cleveland', '2012-03-20 09:30:00', '2012-03-20 17:45:00', 89, 1, 1017, 533),
(20, '2012-03-20', 'San Diego', 'Newark', '2012-03-20 09:50:00', '2012-03-20 18:30:00', 1011, 1, 989, 700),
(21, '2012-03-21', 'San Diego', 'Honolulu', '2012-03-21 08:00:00', '2012-03-21 20:40:00', 875, 0, 960, 620),
(22, '2012-03-21', 'Houston', 'Las Vegas', '2012-03-21 09:10:00', '2012-03-21 13:30:00', 2112, 0, 725, 220),
(23, '2012-03-21', 'New Orleans', 'Philadelphia', '2012-03-21 11:50:00', '2012-03-21 18:10:00', 13, 1, 745, 510);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
