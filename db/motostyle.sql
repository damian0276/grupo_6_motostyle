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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartproduct`
--

DROP TABLE IF EXISTS `cartproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` double(100,2) NOT NULL,
  `patenting` double(100,2) DEFAULT NULL,
  `forms` int(11) DEFAULT NULL,
  `totalPrice` double(100,2) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cartProduct_fk_0_userId` (`userId`),
  KEY `cartProduct_fk_0_productId` (`productId`),
  CONSTRAINT `cartProduct_fk_0_productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cartProduct_fk_0_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartproduct`
--

LOCK TABLES `cartproduct` WRITE;
/*!40000 ALTER TABLE `cartproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageproduct`
--

DROP TABLE IF EXISTS `imageproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imageproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imageId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `imageProduct_fk_0_imageId` (`imageId`),
  KEY `imageProduct_fk_0_productId` (`productId`),
  CONSTRAINT `imageProduct_fk_0_imageId` FOREIGN KEY (`imageId`) REFERENCES `images` (`id`),
  CONSTRAINT `imageProduct_fk_0_productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproduct`
--

LOCK TABLES `imageproduct` WRITE;
/*!40000 ALTER TABLE `imageproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `imageproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brandId` int(11) NOT NULL,
  `model` varchar(100) NOT NULL,
  `colorId` int(11) NOT NULL,
  `CC` varchar(100) NOT NULL,
  `brakes` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `coin` varchar(100) NOT NULL,
  `specification` varchar(1000) NOT NULL,
  `iva` int(11) NOT NULL,
  `gross` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_fk_0_brandId` (`brandId`),
  KEY `products_fk_0_colorId` (`colorId`),
  CONSTRAINT `products_fk_0_brandId` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_fk_0_colorId` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2020-08-08 18:59:54
