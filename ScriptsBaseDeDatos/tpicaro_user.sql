-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: tpicaro
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `ciudad_id` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'valenish','Valentina','Morandini','123',5,NULL,NULL),(2,'asd','Mariana','Capde','1234',5,NULL,NULL),(3,'prueba','Maria','perez','$2b$10$EI50POVWKVWg8.NenB5s0O8B0jrW3yDP/QQWkKfkhnPF.oJc3MUk.',5,'2021-08-12 18:43:30','2021-08-12 18:43:30'),(6,'prueba2','Maria','Lopez','$2b$10$qFZzua57ZClyVQHpvzh1ZuM0PJuqIY6x1YmefBZAcsKOuxmSYO71e',2,'2021-08-12 19:13:29','2021-08-12 19:13:29'),(7,'vale123','Valentina','Morandini','$2b$10$YO7TJVXzlusfLLdxwXXVOOiTENHynkhfcA9pkrSzE6cYaOfICWfvS',2,'2021-08-13 03:19:33','2021-08-13 03:19:33'),(8,'juanchimoran','Juan Cruz','Morandini','$2b$10$AXyhVumNQ6DNHTEGdfAKfelXQSk8HO0ci9De1cTQZtWcbXyDfz4cq',1,'2021-08-13 13:50:41','2021-08-13 13:50:41'),(9,'nib123','Willy','Amaya','$2b$10$3wrHryBRZlAlh6hvER5GmOK/uJ77fptzODcf7i96ZV3K91SyEZnjW',1,'2021-08-13 15:47:07','2021-08-13 15:47:07');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-13 22:22:37
