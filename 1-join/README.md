# Ejercicio join

Usando la base de datos que creamos en los ejercicios de la semana pasada, selecciona todos los datos de los usuarios, incluida toda la información de su dirección.

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
PRIMARY KEY (id_usuario)
);
