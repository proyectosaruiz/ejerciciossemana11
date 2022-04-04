# Ejercicio update

Actualiza la tabla de usuarios para añadir una columna para la edad. A continuacion, rellena esa columna para los 5 usuarios que existen.

CREATE DATABASE ejercicio_hab;

USE ejercicio_hab;

CREATE TABLE usuarios (
id_usuario INT UNSIGNED AUTO_INCREMENT,
dni VARCHAR(11) UNIQUE NOT NULL,
tlf INT,
email VARCHAR(50) UNIQUE NOT NULL,
nombre VARCHAR(50) NOT NULL,
apellidos VARCHAR(100),
pais VARCHAR(50),
CP INT,
ciudad VARCHAR(50),
direccion VARCHAR(100),
edad INT,
PRIMARY KEY (id_usuario)
);

INSERT INTO usuarios (nombre, apellidos, email, tlf, dni, direccion, ciudad, CP, pais, edad) VALUES
("Irvin", "Lethem", "ilethem0@google.com.au", 993870144, "279948941-9", Indonesia", 83297, "98339 Loftsgordon Road", "Babakanbandung", "", 1),
("Kylie", "Mungan", "kmungan1@howstuffworks.com", 497494899, "748551874-7", "Philippines", 44455, "74641 Dwight Avenue", "Bilar","", 2),
("Yul","Dibbert", "ydibbert2@businesswire.com", 776631050, "215649413-4", "Indonesia", 62965, "9510 Milwaukee Street", "Sumberejo","", 3),
("Tamra", "Mc Gorley", "tmcgorley3@studiopress.com", 921948685, "617064473-7", "Norway", 54756, "8902 Doe Crossing Alley", "Steinkjer", "", 4),
("Elmira", "Imbrey", "eimbrey4@cpanel.net", 304168000, "178988896-4", "United States", 51471, "8616 Stephen Hill", "Charleston","", 5);
