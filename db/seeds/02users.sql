DROP TABLE IF EXISTS `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `is_admin` varchar(255) default NULL,
  `phone_number` varchar(100) default NULL,
  `email` varchar(255) default NULL,
  `street_address` varchar(255) default NULL,
  `province` varchar(50) default NULL,
  `country` varchar(100) default NULL,
  `postal_code` varchar(10) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `myTable` (`name`,`is_admin`,`phone_number`,`email`,`street_address`,`province`,`country`,`postal_code`)
VALUES
  ("Charlotte Wolf","Yes","1-106-500-2531","pharetra.nam@outlook.com","506-3634 Aliquam Rd.","New Brunswick","Canada","E5J 8X8"),
  ("Jemima Sexton","Yes","(166) 984-4707","sapien.cras@outlook.ca","356-637 Magna. Street","Nunavut","Canada","J5N 6H8"),
  ("Colby Gillespie","No","(236) 358-7252","libero.morbi@aol.org","Ap #257-4435 Adipiscing Rd.","Newfoundland and Labrador","Canada","S5M 6J7"),
  ("Ima Harrington","No","1-805-317-9766","cum@icloud.ca","442-9131 Ac St.","Manitoba","Canada","T5E 3C7"),
  ("Ainsley Sullivan","Yes","(487) 527-2517","enim.etiam.gravida@yahoo.net","Ap #297-3709 Phasellus St.","Prince Edward Island","Canada","O6V 6Y2"),
  ("Halee Cruz","No","1-754-951-3313","ligula.aenean@outlook.edu","995-877 Aenean Rd.","Newfoundland and Labrador","Canada","38W 2Y7"),
  ("Minerva Boyd","Yes","1-261-714-1774","lacinia.orci.consectetuer@outlook.edu","418-5173 Pharetra. St.","Nunavut","Canada","n6M 6W8"),
  ("Elmo Lloyd","No","(436) 975-5480","ipsum.dolor@protonmail.org","Ap #151-1784 Egestas Road","British Columbia","Canada","67E 2J6"),
  ("Deacon Duran","Yes","(598) 228-9983","luctus.et@aol.org","Ap #523-5988 Condimentum Av.","Northwest Territories","Canada","T4B 1K2"),
  ("Finn Chapman","No","1-474-238-1816","lectus.cum@outlook.net","7088 Dapibus Road","Yukon","Canada","s9J 4E6");
INSERT INTO `myTable` (`name`,`is_admin`,`phone_number`,`email`,`street_address`,`province`,`country`,`postal_code`)
VALUES
  ("Zorita Griffin","Yes","(488) 641-6088","amet.orci@hotmail.couk","219-9463 Magna. Avenue","Nunavut","Canada","M9V 3T1"),
  ("Arsenio Bradford","No","1-944-704-4313","pellentesque.tincidunt.tempus@icloud.org","Ap #182-5359 Sit Road","Saskatchewan","Canada","A4Y 8R7"),
  ("Herman Hayes","Yes","(466) 435-7158","quam.quis@aol.net","Ap #883-1777 Nisi St.","Nunavut","Canada","56M 6X5"),
  ("Christopher Jarvis","Yes","(489) 498-7162","sodales.at@google.edu","Ap #292-2639 Leo Rd.","Nunavut","Canada","Y8N 6B9"),
  ("Forrest Reese","Yes","1-837-886-8248","mi.fringilla.mi@icloud.couk","617-8752 Cubilia Av.","Manitoba","Canada","L2X 4H1"),
  ("Patience Foster","No","1-281-893-1112","eleifend.nunc@icloud.com","290-4884 Arcu. Avenue","Prince Edward Island","Canada","U7M 2S9"),
  ("Carly Huffman","No","1-929-397-1733","phasellus@icloud.com","690-4694 Nulla. Rd.","Ontario","Canada","L2J 9G2"),
  ("Vladimir Johns","Yes","(556) 746-4287","risus.donec@protonmail.net","5697 In St.","Manitoba","Canada","36N 5G8"),
  ("Gemma Pitts","Yes","(835) 482-1880","cras.dolor.dolor@aol.com","Ap #791-8332 Aptent Ave","British Columbia","Canada","H1K 2Y8"),
  ("Cole Richardson","No","(865) 893-4167","aliquam.adipiscing.lobortis@aol.ca","9722 Feugiat. St.","Manitoba","Canada","Y6G 5C4");
INSERT INTO `myTable` (`name`,`is_admin`,`phone_number`,`email`,`street_address`,`province`,`country`,`postal_code`)
VALUES
  ("Hiroko Flores","No","1-216-565-2392","bibendum@hotmail.org","509-8175 Elit St.","Newfoundland and Labrador","Canada","v8X 0C8"),
  ("Fritz Ortega","Yes","1-184-294-4265","lectus.ante@hotmail.net","P.O. Box 246, 4844 Quis Avenue","Alberta","Canada","X2H 4X3"),
  ("Porter Cabrera","No","1-309-334-2258","aliquet.proin@google.couk","Ap #485-8148 Risus St.","Prince Edward Island","Canada","32E 9K0"),
  ("Jennifer Bradley","No","1-288-235-8183","arcu.sed@aol.org","527-6292 Vivamus St.","Nunavut","Canada","71Z 0L6"),
  ("Neve Ewing","Yes","(621) 343-5931","risus@outlook.org","Ap #967-1398 In St.","Nunavut","Canada","B5G 3B1"),
  ("Roary Meyers","No","(566) 341-1446","vitae.odio.sagittis@yahoo.org","Ap #391-7581 Vulputate St.","Alberta","Canada","B8X 6M5"),
  ("Josephine Larson","Yes","1-943-845-5163","mauris.blandit@icloud.edu","Ap #313-1307 Suspendisse St.","Saskatchewan","Canada","T7X 5Z2"),
  ("Jesse Gordon","Yes","1-456-908-9630","ut.tincidunt.vehicula@protonmail.ca","P.O. Box 201, 3759 Quisque St.","Newfoundland and Labrador","Canada","j8G 4S2"),
  ("Jada Franks","No","1-731-502-5887","ligula.aliquam@google.couk","153-4005 Et, St.","Prince Edward Island","Canada","E9X 8X2"),
  ("Eric Church","Yes","(838) 817-6655","non.egestas@icloud.org","510-4124 Eget Street","New Brunswick","Canada","B0R 9S1");
INSERT INTO `myTable` (`name`,`is_admin`,`phone_number`,`email`,`street_address`,`province`,`country`,`postal_code`)
VALUES
  ("Keefe Crane","No","1-676-457-4687","eget@aol.com","118-1364 Non, Road","Manitoba","Canada","P3H 3V7"),
  ("Dai Mcdonald","Yes","1-371-582-4285","est.mauris@aol.com","Ap #631-9287 Ornare Av.","New Brunswick","Canada","S3M 7J1"),
  ("Mason Alston","Yes","(498) 886-6958","tortor.at@yahoo.ca","395-3567 Est. Avenue","British Columbia","Canada","N8X 6J6"),
  ("Ray Flowers","No","1-166-686-0863","posuere.cubilia@protonmail.edu","Ap #818-3253 Lectus, St.","Nunavut","Canada","U2N 2T4"),
  ("Stella Branch","No","(238) 504-4137","sem@protonmail.edu","Ap #530-8804 Class Road","Yukon","Canada","K6B 9Z3"),
  ("Maya Hubbard","Yes","1-321-214-1428","placerat.augue.sed@icloud.ca","Ap #564-3614 Libero Rd.","Saskatchewan","Canada","Y3K 5W3"),
  ("Rashad Rollins","No","1-580-826-3650","fermentum.metus@google.edu","635-8552 Ipsum. Rd.","Nunavut","Canada","36E 3E1"),
  ("Camille Hicks","No","(608) 948-7426","lobortis@google.couk","296-5363 Non, St.","Newfoundland and Labrador","Canada","H3X 6Y2"),
  ("Lance Peters","Yes","(526) 436-0703","dolor.fusce@hotmail.net","549-9293 Nisi Rd.","British Columbia","Canada","24G 9B8"),
  ("Blossom Summers","Yes","1-757-775-3940","tellus.sem.mollis@yahoo.org","P.O. Box 354, 3211 Suspendisse St.","New Brunswick","Canada","52W 8V0");
