/* 1 */

CREATE DATABASE Poker;

show DATABASES;

USE Poker;

CREATE TABLE IF NOT EXISTS Jugador(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    DNI VARCHAR(10) UNIQUE NOT NULL,
    NOMBRE VARCHAR(20) NOT NULL,
    APELLIDO1 VARCHAR(20) NOT NULL,
    APELLIDO2 VARCHAR(20),
    TELEFONO TEXT NOT NULL,
    PAIS VARCHAR(20) NOT NULL,
    CP CHAR(5) NOT NULL,
    ADDRESS1 VARCHAR(30) NOT NULL,
    ADDRESS2 VARCHAR(30) NOT NULL
    );
    
    SELECT * FROM Jugador;
    ALTER TABLE Jugador ADD COLUMN EMAIL VARCHAR(30) NOT NULL;
    
    /* 2 */
    
    ALTER TABLE Jugador DROP COLUMN ADDRESS1;
    
	ALTER TABLE Jugador DROP COLUMN ADDRESS2;
    
    ALTER TABLE Jugador DROP COLUMN CP;
    
    CREATE TABLE IF NOT EXISTS Direcciones(
	ID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idJugador INT UNSIGNED NOT NULL,
    FOREIGN KEY (idJugador) REFERENCES Jugador(id),
	ADDRESS1 VARCHAR(30) NOT NULL,
    FOREIGN KEY (idJugador) REFERENCES Jugador(id),
    ADDRESS2 VARCHAR(30) NOT NULL,
	FOREIGN KEY (idJugador) REFERENCES Jugador(id),
    CP CHAR(5) NOT NULL
    );
    
ALTER TABLE Direcciones DROP COLUMN CP;

ALTER TABLE Direcciones ADD COLUMN CP CHAR(5) NOT NULL;

    
    /* 3 */
    
INSERT INTO Jugador (DNI, NOMBRE, APELLIDO1, APELLIDO2, TELEFONO, PAIS, EMAIL)

VALUES ('2798941-9','Irvin', 'Lethem','', '993870144', 'Indonesia', 'ilethem0@google.com.au'),
('7485514-7','Kylie', 'Mungan','', '497494899', 'Philippines', 'kmungan1@howstuffworks.com'),
('2156413-4','Yul', 'Dibbert','', '776631050', 'Indonesia', 'ydibbert2@businesswire.com'),
('6170673-7','Tamra', 'Mc Gorle','', '921948685', 'Norway', 'tmcgorley3@studiopress.com'),
('1789896-4','Elmira', 'Imbrey','', '304168000', 'United States', 'eimbrey4@cpanel.net');

SELECT * FROM Jugador;

INSERT INTO Direcciones (idJugador,ADDRESS1, ADDRESS2, CP)

VALUES ('1', '98339 Loftsgordon Road',' Babakanbandung', '83297'),
('2', '74641 Dwight Avenue',' Bilar', '44455'),
('3', '9510 Milwaukee Street',' Sumberejo', '62965'),
('4', '8902 Doe Crossing Alley',' Steinkjer', '54756'),
('5','8616 Stephen Hill',' Charleston', '51471');

SELECT * FROM Direcciones;

/* 4 te falta poner pais en la tabla direcciones*/

SELECT NOMBRE, APELLIDO1, TELEFONO FROM Jugador ORDER BY APELLIDO1;

SELECT count(id), PAIS FROM Jugador GROUP BY PAIS;

/* 5 */

SELECT d.*, j.NOMBRE FROM Jugador j INNER JOIN Direcciones d ON (d.idJugador = j.id);

/* 6 */

ALTER TABLE Jugador ADD COLUMN AGE CHAR(5);

UPDATE Jugador SET AGE ='30' WHERE id = 1;
UPDATE Jugador SET AGE ='20' WHERE id = 2;
UPDATE Jugador SET AGE ='25' WHERE id = 3;
UPDATE Jugador SET AGE ='90' WHERE id = 4;
UPDATE Jugador SET AGE ='40' WHERE id = 5;

SELECT * FROM Jugador;


/* 7 */

SELECT * FROM Jugador ORDER BY AGE LIMIT 2;

SELECT j.NOMBRE, j.AGE FROM Jugador j WHERE AGE = (SELECT MAX(AGE) FROM Jugador);


