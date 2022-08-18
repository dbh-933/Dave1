const getDB = require('./getDB')

require('dotenv').config();

async function main(){
    let connection;
    try{
        connection = await getDB();

        console.log('Conexión realizada');

        console.log('Eliminamos tablas');

        await connection.query('DROP TABLE IF EXISTS experiencia');
        await connection.query('DROP TABLE IF EXISTS empresa');
        await connection.query('DROP TABLE IF EXISTS usuario');

        console.log('TABLAS ELIMINADAS');

        console.log('CREANDO TABLAS');

        await connection.query( 
            `CREATE TABLE IF NOT EXISTS usuario (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(25) NOT NULL,
                apellido1 VARCHAR(25) NOT NULL,
                apellido2 VARCHAR(25),
                fecha_nac DATE,
                email VARCHAR(200) NOT NULL,
                password VARCHAR(250) NOT NULL,
                avatar VARCHAR(255),
                tipo ENUM('admin', 'normal') DEFAULT 'normal',
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`)

            await connection.query(
                `CREATE TABLE IF NOT EXISTS empresa (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    nombre VARCHAR(100) NOT NULL
                    )`
            )


            await connection.query(
                `CREATE TABLE IF NOT EXISTS experiencia (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    titulo VARCHAR(200) NOT NULL,
                    precio DECIMAL( 8, 2) NOT NULL,
                    descripcion TEXT,
                    localizacion VARCHAR(250),
                    idEmpresaOrganiza INT UNSIGNED NOT NULL,
                    FOREIGN KEY (idEmpresaOrganiza) REFERENCES empresa (id)
                    )`)

        console.log('tablas creadas');



        console.log('iNSERTANDO DATOS');

            await connection.query(
                `INSERT INTO usuario(nombre, apellido1, email, password, tipo)
                VALUES ('Administrador', 'Admin', 'administrador@gmail.com', '123', 'admin'),
                ('usuario1', 'normal', 'normal@gmail.com', '456', 'normal')
                `)

            await connection.query(
                `INSERT INTO empresa(nombre)
                VALUES ('Mediamarkt'),
                        ('Ikea')
                        `)

            await connection.query(
                `INSERT INTO experiencia(titulo, precio, descripcion, localizacion, idEmpresaorganiza)
                VALUES ('Lectura', '10.20', 'Lectura tranquila', 'Biblioteca Mercedes', '1'),
                ('futbol', '2000', null, 'Vigo', '1'),
                ('paseo kayak', '49.49', 'No te caigas', 'Seya', '2'),
                ('Escalada', '100', 'No tan tranquila', 'rocodromo', '2')
                `)

        console.log('DATOS INSERTADOS');



    }catch(error){

        console.error(error.message);

    }finally{
        if (connection) connection.release();
        process.exit();
    }
}

main();