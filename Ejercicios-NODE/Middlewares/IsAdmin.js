
const getDB = require('../database/getDB');

const { generateError } = require('../helper');

const IsAdmin = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const idReqUser = req.UserAuth.id;

        const [user] = await connection.query(
            `SELECT tipo FROM usuario WHERE id = ?`,
            [idReqUser]
        );

        if (user[0].tipo !== 'admin') {
            throw generateError('No eres un usuario administrador', 401);
        }

        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = IsAdmin;