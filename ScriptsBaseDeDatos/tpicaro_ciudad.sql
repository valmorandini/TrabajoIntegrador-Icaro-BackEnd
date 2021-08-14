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
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudad` (
  `ciudad_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `pais_id` int NOT NULL,
  PRIMARY KEY (`ciudad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,'La Plata',1),(2,'San Fernando del Valle de Catamarca',1),(3,'Resistencia',1),(4,'Rawson',1),(5,'Córdoba',1),(6,'Corrientes',1),(7,'Paraná',1),(8,'Formosa',1),(9,'San Salvador de Jujuy',1),(10,'Santa Rosa',1),(11,'La Rioja',1),(12,'Mendoza',1),(13,'Posadas',1),(14,'Neuquén',1),(15,'Viedma',1),(16,'Salta',1),(17,'San Juan',1),(18,'San Luis',1),(19,'Río Gallegos',1),(20,'Santa Fe',1),(21,'Santiago del Estero',1),(22,'Ushuaia',1),(23,'San Miguel de Tucumán',1),(24,'Trinidad',2),(25,'Sucre',2),(26,'Ciudad de Cochabamba',2),(27,'Nuestra Señora de La Paz',2),(28,'Ciudad de Oruro',2),(29,'Cobija',2),(30,'Villa Imperial de Potosí',2),(31,'Santa Cruz de al Sierra',2),(32,'Ciudad de Tarija',2),(33,'Rio Branco',3),(34,'Maceió',3),(35,'Macapá',3),(36,'Manaus',3),(37,'Salvador',3),(38,'Fortaleza',3),(39,'Vitória',3),(40,'Goiânia',3),(41,'São Luís',3),(42,'Cuiabá',3),(43,'Campo Grande',3),(44,'Belo Horizonte',3),(45,'Belém',3),(46,'João Pessoa',3),(47,'Curitiba',3),(48,'Recife',3),(49,'Teresina',3),(50,'Rio de Janeiro',3),(51,'Natal',3),(52,'Porto Alegre',3),(53,'Porto Velho',3),(54,'Boa Vista',3),(55,'Florianópolis',3),(56,'São Paulo',3),(57,'Aracaju',3),(58,'Palmas',3),(59,'Brasilia',3),(60,'Arica',4),(61,'Iquique',4),(62,'Antofagasta',4),(63,'Copiapó',4),(64,'La Serena',4),(65,'Valparaíso',4),(66,'Santiago',4),(67,'Rancagua',4),(68,'Talca',4),(69,'Concepción',4),(70,'Temuco',4),(71,'Valdivia',4),(72,'Puerto Montt',4),(73,'Coyhaique',4),(74,'Punta Arenas',4),(75,'Leticia',5),(76,'Medellín',5),(77,'Arauca',5),(78,'Barranquilla',5),(79,'Bogotá',5),(80,'Cartagena de Indias',5),(81,'Tunja',5),(82,'Manizales',5),(83,'Florencia',5),(84,'Yopal',5),(85,'Popayán',5),(86,'Valledupar',5),(87,'Quibdó',5),(88,'Montería',5),(89,'Bogotá',5),(90,'Inírida',5),(91,'San José del Guaviare',5),(92,'Neiva',5),(93,'Riohacha',5),(94,'Santa Marta',5),(95,'Villavicencio',5),(96,'Pasto',5),(97,'San José de Cúcuta',5),(98,'Mocoa',5),(99,'Armenia',5),(100,'Pereira',5),(101,'San Andrés',5),(102,'Bucaramanga',5),(103,'Sincelejo',5),(104,'Ibagué',5),(105,'Cali',5),(106,'Mitú',5),(107,'Puerto Carreño',5),(108,'Cuenca',6),(109,'Guaranda',6),(110,'Azogues',6),(111,'Tulcán',6),(112,'Riobamba',6),(113,'Latacunga',6),(114,'Machala',6),(115,'Esmeraldas',6),(116,'Puerto Baquerizo Moreno',6),(117,'Guayaquil',6),(118,'Ibarra',6),(119,'Loja',6),(120,'Babahoyo',6),(121,'Portoviejo',6),(122,'Macas',6),(123,'Tena',6),(124,'Puerto Francisco de Orellana',6),(125,'Puyo',6),(126,'Quito',6),(127,'Santa Elena',6),(128,'Santo Domingo de los Colorados',6),(129,'Nueva Loja',6),(130,'Ambato',6),(131,'Zamora',6),(132,'Asunción',7),(133,'Concepción',7),(134,'San Pedro de Ycuamandiyú',7),(135,'Caacupé',7),(136,'Villarrica',7),(137,'Coronel Oviedo',7),(138,'Caazapá',7),(139,'Encarnación',7),(140,'San Juan Bautista',7),(141,'Paraguarí',7),(142,'Ciudad del Este',7),(143,'Areguá',7),(144,'Pilar',7),(145,'Pedro Juan Caballero',7),(146,'Salto del Guairá',7),(147,'Villa Hayes',7),(148,'Filadelfia',7),(149,'Fuerte Olimpo',7),(150,'Chachapoyas',8),(151,'Huaraz',8),(152,'Abancay',8),(153,'Arequipa',8),(154,'Ayacucho',8),(155,'Cajamarca',8),(156,'Callao',8),(157,'Cuzco',8),(158,'Huancavelica',8),(159,'Huánuco',8),(160,'Ica',8),(161,'Huancayo',8),(162,'Trujillo',8),(163,'Chiclayo',8),(164,'Lima',8),(165,'Huacho',8),(166,'Iquitos',8),(167,'Puerto Maldonado',8),(168,'Moquegua',8),(169,'Cerro de Pasco',8),(170,'Piura',8),(171,'Puno',8),(172,'Moyobamba',8),(173,'Tacna',8),(174,'Tumbes',8),(175,'Pucallpa',8),(176,'Artigas',9),(177,'Canelones',9),(178,'Melo',9),(179,'Colonia del Sacramento',9),(180,'Durazno',9),(181,'Trinidad',9),(182,'Florida',9),(183,'Minas',9),(184,'Maldonado',9),(185,'Montevideo',9),(186,'Paysandú',9),(187,'Fray Bentos',9),(188,'Rivera',9),(189,'Rocha',9),(190,'Salto',9),(191,'San José de Mayo',9),(192,'Mercedes',9),(193,'Tacuarembó',9),(194,'Treinta y Tres',9),(195,'Puerto Ayacucho',10),(196,'Barcelona',10),(197,'San Fernando de Apure',10),(198,'Maracay',10),(199,'Barinas',10),(200,'Ciudad Bolívar',10),(201,'Valencia',10),(202,'San Carlos',10),(203,'Tucupita',10),(204,'Caracas',10),(205,'Coro',10),(206,'San Juan de Los Morros',10),(207,'Barquisimeto',10),(208,'Mérida',10),(209,'Los Teques',10),(210,'Maturín',10),(211,'La Asunción',10),(212,'Guanare',10),(213,'Cumaná',10),(214,'San Cristóbal',10),(215,'Trujillo',10),(216,'La Guaira',10),(217,'San Felipe',10),(218,'Maracaibo',10),(219,'Gran Roque',10);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
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
