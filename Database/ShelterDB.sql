CREATE TABLE `shelter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `addressLine1` varchar(45) DEFAULT NULL,
  `addressLine2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `postalCode` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastName` varchar(45) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `idShelter` int NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`idShelter`) REFERENCES `shelter` (`id`)
) ENGINE = InnoDB;

CREATE TABLE `module`(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`description` text,
	`addedDate` date,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB;

CREATE TABLE `moduleContent`(
   	`idModule` int NOT NULL,
	`idReading` int DEFAULT NULL,
	`idQuiz` int DEFAULT NULL,
	`idVideo` int NOT NULL,
	PRIMARY KEY(`idModule`, `idVideo`),
	FOREIGN KEY (`idModule`) REFERENCES `module` (`id`),
	FOREIGN KEY (`idReading`) REFERENCES `reading` (`id`),
	FOREIGN KEY (`idQuiz`) REFERENCES `quiz` (`id`),
	FOREIGN KEY (`idVideo`) REFERENCES `video` (`id`)
)ENGINE = InnoDB;

CREATE TABLE `reading`(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) DEFAULT NULL,
	`content` text DEFAULT NULL,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB;

CREATE TABLE `video`(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) DEFAULT NULL,
	`filePath` varchar(255) DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `quizMultipleChoice`(
	`id` int NOT NULL AUTO_INCREMENT,
	`choice1` text,
	`choice2` text,
	`choice3` text,
	`choice4` text,	
	PRIMARY KEY(`id`)
) ENGINE = InnoDB;

CREATE TABLE `quizAnswer`(
	`id` int NOT NULL AUTO_INCREMENT,
	`answer` text,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB;

CREATE TABLE `quizQuestion`(
	`id` int NOT NULL AUTO_INCREMENT,
	`idMC` int,
	`idAnswer` int,
	PRIMARY KEY(`id`),
	FOREIGN KEY (`idMC`) REFERENCES `quizMultipleChoice` (`id`),
	FOREIGN KEY (`idAnswer`) REFERENCES `quizAnswer` (`id`)
) ENGINE = InnoDB;

CREATE TABLE `quiz`(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(45/255) DEFAULT NULL,
	`idQQ` int,
	PRIMARY KEY(`id`),
	FOREIGN KEY (`idQQ`) REFERENCES `quizQuestion` (`id`)
) ENGINE = InnoDB;