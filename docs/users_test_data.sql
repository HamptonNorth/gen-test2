-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.22-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table redmugapi.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `client_id` int(11) NOT NULL,
  `user_status` int(11) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` varchar(10) DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1279 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table redmugapi.users: ~9 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `display_name`, `email`, `client_id`, `user_status`, `last_login`, `role`) VALUES
	(1, 'Robert Collins', 'rcollins@redmug.co.uk', 1, 0, '2022-04-12 12:34:32', 'superuser'),
	(2, 'Kate Dobson', 'kdobson@redmug.dev', 2, 0, '2022-04-11 17:15:26', 'user'),
	(3, 'Frank Cooke', 'fcooke@redmug.dev', 2, 0, '2022-04-11 17:17:29', 'user'),
	(4, 'Bill Pearson', 'wjpearson@gmail.com', 2, 0, '2022-01-01 00:00:00', 'user'),
	(5, 'Richard Tate', 'richard.tate27@hotmail.com', 2, 0, '2022-01-01 00:00:00', 'user'),
	(100, 'Ben Collins', 'benlcollins@gmail.com', 1, 0, '2022-02-05 11:09:45', 'user'),
	(101, 'Peter Collins', 'collinsps1@gmail.com', 1, 0, '2022-02-05 11:10:58', 'user'),
	(102, 'John New', 'jnew@redmug.dev', 1, 0, '2022-03-01 00:00:00', 'users');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
