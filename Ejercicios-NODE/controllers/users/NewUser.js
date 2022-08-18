const getDB = require("../../database/getDB");
const { generateError } = require("../../helper");
const bcrypt = require('bcrypt');

const NewUser = async (req, res, next) => {
    let connection;

    try {

       connection =  await getDB();

       const { name, lastname1, lastname2, birthday, email, password } = req.body;

       if (!name || !lastname1 || !email || !password) {
        throw generateError('Faltan campos por completar', 400);
       };

       const [user] = await connection.query(
        `SELECT * FROM usuario WHERE email = ?`,
        [email]
       );

       if (user.length > 0) {
        throw generateError('Ya existe un usuario registrado con ese email', 409);
       };


       const HashedPassword = await bcrypt.hash(password, 10);

       await connection.query(
       `INSERT INTO usuario(nombre, apellido1, apellido2, fecha_nac, email, password)
       VALUES (?, ?, ?, ?, ?, ?)`,
       [name, lastname1, lastname2, birthday, email, HashedPassword]
       );

       res.send({
        status: 'Ok',
        message: 'Usuario introducido con éxito'
        })

    }catch(error){

        next(error);

    }finally{
        if(connection) connection.release();

    }

};

module.exports = NewUser;