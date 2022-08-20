const getDB = require("../../database/getDB");
const { generateError } = require("../../helper");

const ModifyUser = async (req,res,next) => {
    let connection;

    try {
        connection = await getDB();

        const {idUser }  = req.params

        const { nombre, apellido1, apellido2 } = req.body

        if (!nombre && !apellido1 && apellido2) {
            throw generateError('Tienes que modificar algo, sino ¿pa que tocas?')
        }
        
        const [user] = await connection.query(
            `SELECT nombre, apellido1, apellido2 FROM usuario WHERE id = ?`,
            [idUser]
        );

        await connection.query(
            `UPDATE usuario SET nombre = ?,
            apellido1 = ?,
            apellido2 = ?,
            WHERE id = ?`,
            [nombre || user[0].nombre, apellido1 || user[0].apellido1, apellido2 || user[o].apellido2, idUser,]

        );

        res.send({
            status: 'Ok',
            message: 'Usuario modificado con éxito'
        });
        
    } catch (error) {
        next(error);
        
    }finally{
        if (connection) connection.release();
    }

};

module.exports = ModifyUser;