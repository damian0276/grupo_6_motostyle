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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Yamaha',NULL,NULL,NULL),(2,'Honda',NULL,NULL,NULL),(3,'BMW',NULL,NULL,NULL),(4,'Mercedes Benz',NULL,NULL,NULL),(5,'Kawasaki',NULL,NULL,NULL),(6,'Ducati',NULL,NULL,NULL),(7,'KTM',NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Rojo',NULL,NULL,NULL),(2,'Negro',NULL,NULL,NULL),(3,'Azul',NULL,NULL,NULL),(4,'Gris',NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproduct`
--

LOCK TABLES `imageproduct` WRITE;
/*!40000 ALTER TABLE `imageproduct` DISABLE KEYS */;
INSERT INTO `imageproduct` VALUES (101,125,20,'2020-08-21 22:31:28','2020-08-21 22:31:28',NULL),(102,127,20,'2020-08-21 22:31:28','2020-08-21 22:31:28',NULL),(104,128,20,'2020-08-21 22:31:28','2020-08-21 22:31:28',NULL),(110,135,20,'2020-08-21 22:45:42','2020-08-21 22:45:42',NULL),(111,134,20,'2020-08-21 22:45:42','2020-08-21 22:45:42',NULL),(141,186,31,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(142,187,31,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(143,188,31,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(144,189,31,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(145,190,31,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(146,191,32,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(147,192,32,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(148,193,32,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(149,194,32,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(150,195,32,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(151,196,6,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(152,197,6,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(153,198,6,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(154,199,6,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(155,200,6,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(166,211,33,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(167,213,33,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(168,214,33,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(169,215,33,'2020-09-04 03:44:45','2020-09-04 03:44:45',NULL),(170,212,33,'2020-09-04 03:44:45','2020-09-04 03:44:45',NULL);
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
  `coverImage` int(11) NOT NULL DEFAULT 0,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=216 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (76,'moto-1598041485588.jpg',0,'2020-08-21 20:24:45','2020-08-21 20:24:45',NULL),(87,'moto-1598043861638.jpg',0,'2020-08-21 21:04:21','2020-08-21 21:04:21',NULL),(102,'moto-1598044679387.jpg',0,'2020-08-21 21:17:59','2020-08-21 21:17:59',NULL),(112,'moto-1598045003339.jpg',0,'2020-08-21 21:23:23','2020-08-21 21:23:23',NULL),(125,'moto-1598049087887.jpg',1,'2020-08-21 22:31:27','2020-08-21 22:31:27',NULL),(127,'moto-1598049087911.jpg',0,'2020-08-21 22:31:27','2020-08-21 22:31:27',NULL),(128,'moto-1598049087919.jpg',0,'2020-08-21 22:31:27','2020-08-21 22:31:27',NULL),(134,'moto-1598049942162.jpg',0,'2020-08-21 22:45:42','2020-08-21 22:45:42',NULL),(135,'moto-1598049942172.jpg',0,'2020-08-21 22:45:42','2020-08-21 22:45:42',NULL),(145,'moto-1598051409128.jpg',0,'2020-08-21 23:10:09','2020-08-21 23:10:09',NULL),(185,'moto-1598938039435.jpg',0,'2020-09-01 05:27:19','2020-09-01 05:27:19',NULL),(186,'moto-49qnmnil1598938598526.jpg',1,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(187,'moto-8q9jkceg1598938598526.jpg',0,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(188,'moto-fl6zurnm1598938598526.jpg',0,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(189,'moto-nv36q20s1598938598526.jpg',0,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(190,'moto-ngd72muq1598938598542.jpg',0,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(191,'moto-r6qdwtl61598938711347.jpg',1,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(192,'moto-uzm79wu31598938711362.jpg',0,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(193,'moto-qqzmygkl1598938711362.jpg',0,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(194,'moto-h77lqjud1598938711362.jpg',0,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(195,'moto-24ffh5xu1598938711362.jpg',0,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(196,'moto-bjb23xcf1599170590262.jpg',1,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(197,'moto-m36yf7fd1599170590292.jpg',0,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(198,'moto-lu4lbwst1599170590278.jpg',0,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(199,'moto-8xhdrkh81599170590299.jpg',0,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(200,'moto-ecqt3dny1599170590311.jpg',0,'2020-09-03 22:03:10','2020-09-03 22:03:10',NULL),(211,'moto-tkxcfazu1599191084336.jpg',0,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(212,'moto-0mmfiou91599191084333.jpg',1,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(213,'moto-rqgsryf41599191084346.jpg',0,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(214,'moto-ec2kp3681599191084344.jpg',0,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL),(215,'moto-29exjlmf1599191084349.jpg',0,'2020-09-04 03:44:44','2020-09-04 03:44:44',NULL);
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
  `cc` varchar(100) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (6,1,'Tracer 900',2,'1500','Doble disco',15,'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd','u$s','asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',21,150000,'2020-08-20 02:29:59','2020-09-03 22:03:10',NULL),(20,1,'YBR',1,'1500','Disco delantero',2,'afasfasf','$','asfasfasf',21,150000,'2020-08-21 22:31:27','2020-08-21 22:45:42',NULL),(31,2,'Cg titan',3,'900','Disco delantero',11,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee','u$s','aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',21,60000,'2020-09-01 05:36:38','2020-09-01 05:36:38',NULL),(32,4,'Rouser',1,'1900','Disco delantero y trasero',11,'ggggggggggggggggggggggggggggggggggggggggggggggggggggg','€','yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',21,50000,'2020-09-01 05:38:31','2020-09-01 05:38:31',NULL),(33,1,'cgtitan',2,'900','Disco delantero',11,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','$','aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',21,150000,'2020-09-04 03:09:48','2020-09-04 03:44:44',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'Leandro','Corbalan','lekeandro@gmail.com',NULL,'$2a$10$tFp3cTo0CcMxM1BW9nri/OCrIs0feTyE/C5nOJioBddv2NnUUrdha','avatar-1599168428480.jpg',9,'2020-09-03 21:27:08','2020-09-03 21:27:08',NULL,NULL,NULL);
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

-- Dump completed on 2020-09-04  1:10:56
