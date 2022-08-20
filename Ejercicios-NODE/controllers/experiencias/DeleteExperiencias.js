const getDB = require("../../database/getDB");

const { generateError } = require('../../helper');

const DeleteExperiencia = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExperience } = req.params;

        const [experiencia] = await connection.query(
            `SELECT id FROM experiencia WHERE id = ?`,
            [idExperience]
        );

        if (experiencia.length < 1) {
            throw generateError(
                'La experiencia que intentas eliminar no existe',
                404
            );
        }

        await connection.query(`DELETE FROM experiencia WHERE id = ?`, [
            idExperience,
        ]);

        res.send({
            status: 'ok',
            message: 'Experiencia eliminada correctamente!',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = DeleteExperiencia;
