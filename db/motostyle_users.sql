CREATE DATABASE  IF NOT EXISTS `motostyle` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `motostyle`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: motostyle
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `dni` varchar(45) DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `profile` tinyint(2) DEFAULT 1,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `adress` varchar(45) DEFAULT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'China','Fernandes','chinafernandess@gmail.com',NULL,'$2a$10$T14dnJfBsfYTXiLJo4kvIuxB/Of80JyATuon.d.BY67or2WMf4v5a','avatar-1596552826812.jpg',1,'2020-08-04 14:53:46','2020-08-04 14:53:46',NULL,NULL,NULL),(2,'Vanesa','asdasdadasd','asdadd@asdsa.com',NULL,'$2a$10$ceV3dYbJKwUoSzJ3XQZIDe4TCdF1ZTja5JHlPlK5soMnN8C5h5OJC','avatar-1596600664641.jpg',1,'2020-08-05 04:11:04','2020-08-05 04:11:04',NULL,NULL,NULL),(3,'Vanesa','Fernandes','vanesafernandes@gmail.com',NULL,'$2a$10$TtJFlmS1MtP.7hJqN9YtA..UlqB61mBe/ci6OK3VY/fnJQShSz6i6','avatar-1596713451144.jpg',1,'2020-08-06 11:30:51','2020-08-06 11:30:51',NULL,NULL,NULL),(4,'Damian','Loria','damian0276@gmail.com',NULL,'$2a$10$Wki5k4Qm0SCSgN099fzs9eyIsjRj6J5SiO8nHukG5d6n6ItQtdiOC','avatar-1596761715971.jpg',1,'2020-08-07 00:55:16','2020-08-07 00:55:16',NULL,NULL,NULL),(5,'Leandro','Corbalan','leke@digitalhouse.com',NULL,'$2a$10$KDW9DKXi3Fem.e57p2VuD.aDZXOOFpTN0naWmgVEjEi/XuIGryeNy','avatar-1596762352149.jpg',1,'2020-08-07 01:05:52','2020-08-07 01:05:52',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-06 22:09:28
