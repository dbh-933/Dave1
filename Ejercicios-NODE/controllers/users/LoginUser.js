const getDB = require('../../database/getDB');
const { generateError } = require('../../helper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const LoginUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

     
        const { email, password } = req.body;


        if (!email || !password) {
            throw generateError(
                'Debes indicar los campos email y contraseña.',
                400
            ); 
        }


        const [user] = await connection.query(
        `SELECT id, email, password FROM usuario WHERE email = ?`,
            [email]
        );

        /* Otra manera de ver que la contraseña coincide con la de la base de datos*/

        let isValid;
            if (user.length > 0) {
            isValid = await bcrypt.compare(password, user[0].password);
        }

        if (user.length < 1 || !isValid) {
            throw generateError('Email o contraseña incorrectos.', 400);
        }

        
        const tokenInfo = {
            id: user[0].id,
        };

        /* Crear el token IMPORTANTE*/
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '30d',
        });

     
        res.send({
            status: 'Ok',
            authToken: token,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = LoginUser;