const getDB = require("../../database/getDB");
const { generateError } = require("../../helper");

const GetUser = async (req, res, next) => {
    let connection;

    try{

        connection = await getDB();

        const { idUser } = req.params;

        const [user] = await connection.query(
            `SELECT * FROM usuario WHERE id = ?`,
            [idUser]
        );

        if (user.length < 1) {
            throw generateError('No existe el usuario seleccionado', 404); 
        };

        const userInfo = {
            id: user[0].id,
            name: user[0].nombre,
            lastname: user[0].apellido1,
            birthday: user[0].fecha_nac,
            email: user[0].email,
            type: user[0].tipo,
        };

        res.send({
            status: 'Ok',
            data: user[0],
        });

    }catch(error){

        next(error);

    }finally{
        if (connection) connection.release();
    }
};

module.exports = GetUser;