const getDB = require("../../database/getDB");
const { generateError } = require('../../helper');

const NewCompany = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { nombre } = req.body;

        if (!nombre) {
            throw generateError(
                'Debes indicar al menos el nombre de la empresa',
                400
            );
        }

        if (nombre.length < 3) {
            throw generateError(
                'El nombre de la empresa debe tener más de 3 caracteres.',
                400
            );
        }

        await connection.query(
            `INSERT INTO empresa (nombre)
            VALUES (?)`,
            [nombre]
        );

        res.send({
            status: 'ok',
            message: 'Empresa insertada!',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = NewCompany;