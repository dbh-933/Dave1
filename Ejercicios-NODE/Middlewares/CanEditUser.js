const getDB = require("../database/getDB");
const { generateError } = require("../helper");

const CanEditUser = async (req, res, next) => {
    let connection;
    try {
        connection = await getDB();

        const { idUser } = req.params.idUser;

        const idReqUser = req.UserAuth.id;

        if (Number(idUser) !== idReqUser) {
            throw generateError('No eres el propietario del usuario que pretende editar', 401);
        }

        next();

    } catch (error) {
        next(error);
        
    }finally{
        if (connection) connection.release();
    }
};

module.exports = CanEditUser;