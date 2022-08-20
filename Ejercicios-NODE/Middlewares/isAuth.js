const getDB = require("../database/getDB");
const jwt = require('jsonwebtoken');
const { generateError } = require("../helper");
require('dotenv').config();

const isAuth = async (req, res, next) => {

    let connection;
    try {
        connection = await getDB();

        const { authorization} = req.headers;

        if (!authorization){
            throw generateError('Es necesaria la cabecera de autorización', 401);
        }

        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET)
        } catch (error) {
            throw generateError('Es necesario iniciar sesión', 401)
        }

        const [user] = await connection.query(
            `SELECT * FROM usuario WHERE id = ? `,
            [tokenInfo.id]
            );

           if (user.length < 1){
            throw generateError('El token no es válido', 401);
           } 

           req.UserAuth = tokenInfo;

           next();
        
    } catch (error) {
        next(error);
        
    } finally{
        if (connection) connection.release();

    }
};

module.exports = isAuth;