CREATE DATABASE campeonatos;

SHOW DATABASES;

USE campeonatos;

CREATE TABLE IF NOT EXISTS equipo(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(30) NOT NULL,
patrocinador1 VARCHAR(15) NOT NULL,
patrocinador2 TEXT,
colorcamiseta1 VARCHAR(20) NOT NULL,
colorcamiseta2 VARCHAR(20) NOT NULL,
categoria ENUM('primera', 'segunda', 'segunda b') NOT NULL

);

CREATE TABLE IF NOT EXISTS jugador(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
dni VARCHAR(11) UNIQUE NOT NULL,
nombre VARCHAR(15) NOT NULL,
apellido1 VARCHAR(15) NOT NULL,
apellido2 VARCHAR (15),
telefono TEXT NOT NULL,
fecha_nac DATE NOT NULL,
calle VARCHAR(30) NOT NULL,
cp INT NOT NULL,
idEquipo INT UNSIGNED NOT NULL,
FOREIGN KEY (idEquipo) REFERENCES equipo (id)

);



CREATE TABLE IF NOT EXISTS partido(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
campo VARCHAR(15) NOT NULL,
resultado VARCHAR(20) UNIQUE NOT NULL,
incidencia TEXT,
goles VARCHAR(20) NOT NULL

);


CREATE TABLE IF NOT EXISTS equipo_juega_partido(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idPartido INT UNSIGNED NOT NULL,
FOREIGN KEY (idPartido) REFERENCES partido (id),
idEquipoLocal INT UNSIGNED NOT NULL,
FOREIGN KEY (idEquipoLocal) REFERENCES Equipo (id),
idEquipoVisitante INT UNSIGNED NOT NULL,
FOREIGN KEY (idEquipoVisitante) REFERENCES Equipo (id),
fecha_partido DATE NOT NULL

);

DROP TABLE IF EXISTS equipo_juega_partido;

DROP TABLE IF EXISTS partido;

DROP TABLE IF EXISTS jugador;

DROP TABLE IF EXISTS equipo;

INSERT INTO equipo (nombre, patrocinador1, patrocinador2, colorCamiseta1, colorCamiseta2, categoria)
VALUES ('Celta de Vigo', 'Abanca', null, 'celeste', 'verde', 'primera'),
('Real Madrid', 'Fly Emirates', 'Gaseosas Rodriguez', 'blanco', 'negro', 'primera'),
('Barcelona', 'Spotify', null, 'rojo azul', 'gris', 'primera'),
('Lugo', 'Abanca', null, 'blanco rojo', 'azul', 'segunda'),
('Noia', 'Abanca', null, 'blanco dorado', 'negro', 'primera'),
('Racing Ferrol', 'Santander', null, 'verde', 'rojo', 'segunda'),
('Celta de Vigo B', 'Abanca', null, 'celeste', 'verde', 'segunda b'),
('Deportivo de la Coruña', 'Abanca', null, 'blanco azul', 'verde', 'segunda b');


INSERT INTO jugador (dni, nombre, apellido1, apellido2, telefono, fecha_nac, calle, cp, idEquipo)
VALUES ('19292932-A', 'Alfredo', 'Lopez', 'Barrejo', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 1),
('11233932-S', 'Sofia', 'Yatusabeh', null, '123123123', '1958-12-20', 'Avenida de su corazon Nº4', '15000', 1),
('19214332-X', 'Girasol', 'Pipa', null, '123123123', '1989-05-31', 'Avenida de su corazon Nº4', '15000', 2),
('19766932-G', 'Cepeda', 'Santiago', 'Barrejo', '123123123', '1990-10-19', 'Avenida de su corazon Nº4', '15000', 3),
('12222932-H', 'Ruben', 'Linan', 'Kelly', '123123123', '2000-09-12', 'Avenida de su corazon Nº4', '15000', 3),
('88882932-B', 'Yago', 'Hehe', 'Palomita', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 3),
('19298652-F', 'Felipe', 'Gonzalez', 'Sos', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 4),
('19292225-S', 'C', 'Tangana', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 5),
('17656543-X', 'Tyson', 'Fury', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 6),
('13455522-X', 'Adriana', 'Ludus', 'Lago', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 7),
('66555335-L', 'Maria', 'Baiona', 'Cangas', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 8),
('76533332-B', 'Jose', 'Nuevo', 'lllllll', '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 4),
('54426633-S', 'Rocio', 'Valleja', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 6),
('76667774-F', 'Gepeto', 'Alfredo', null, '123123123', '1998-02-18', 'Avenida de su corazon Nº4', '15000', 7);


INSERT INTO partido (campo, resultado, incidencia, goles)
VALUES ('Bernabeu', '3-0', null, 3),
('Bernabeu', '2-3', null, 5),
('Camp Nou', '3-7', null, 10),
('Bernabeu', '3-1', null, 4),
('Santiago', '2-1', 'Hemos expulsado a 1 jugador', 3),
('Riazor', '0-0', '2 amarillas y 1 roja', 0),
('Riazor', '2-0', null, 2);


INSERT INTO equipo_juega_partido (idPartido, idEquipoLocal, idEquipoVisitante, fecha_partido)
VALUES (1, 2, 1, '2022-08-03 17:00:00'),
(2, 3, 4, '2022-08-06 19:00:00'),
(3, 2, 1, '2022-08-10 17:00:00'),
(4, 5, 6, '2022-10-28 14:00:00'),
(5, 3, 2, '2022-03-03 18:30:00'),
(6, 4, 1, '2022-12-10 22:30:00'),
(7, 6, 8, '2022-10-12 14:00:00');


/*1 */

SELECT * FROM equipo;

/* 2 */

SELECT nombre, dni, apellido1, fecha_nac
FROM jugador;

/* 3*/

SELECT
* FROM jugador ORDER BY apellido1 DESC;

/* 4 */

SELECT nombre, dni, apellido1, apellido2, fecha_nac
FROM jugador WHERE apellido2 IS NOT NULL ORDER BY fecha_nac;

/* 5 */

SELECT COUNT(*) as NumeroPartidos, campo
FROM partido
GROUP BY campo
HAVING campo = 'Bernabeu';


/* 6 */

SELECT MAX(goles)
FROM partido;

SELECT *
FROM partido
WHERE goles = (
	SELECT MAX(goles)
	FROM partido
);

/* 7 */

SELECT MIN(goles)
FROM partido;

SELECT *
FROM partido
WHERE goles = (
	SELECT MIN(goles) FROM partido
);




/* 8 */

SELECT AVG(goles)
FROM partido;


/* 9 */

SELECT *
FROM equipo
WHERE categoria = 'primera';


/* 10 */

SELECT *
FROM equipo
WHERE categoria IN ('primera', 'segunda b');

/* 11 */

SELECT *
FROM equipo
WHERE categoria NOT IN ('primera', 'segunda b');


/* 12 */
SET SQL_SAFE_UPDATES = 0; /*Cambiar el modo SAFE*/
UPDATE partido SET incidencia = 'Ha sido un partido tranquilo' WHERE incidencia IS NULL;

SELECT *
FROM partido;


/* 13 */

SELECT *
FROM jugador j INNER JOIN equipo e
	ON (j.idEquipo = e.id)
ORDER BY e.nombre;

SELECT eLocal.nombre, ejp.fecha_partido, eVisitante.nombre
FROM equipo eLocal INNER JOIN equipo_juega_partido ejp
	ON (eLocal.id = ejp.idEquipoLocal) INNER JOIN equipo eVisitante
		ON (eVisitante.id = ejp.idEquipoVisitante);
