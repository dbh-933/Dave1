const getDB = require("../../database/getDB");
const { generateError } = require('../../helper');

const DeleteCompany = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idCompany } = req.params;

        const [company] = await connection.query(
            `SELECT * FROM empresa WHERE id = ?`,
            [idCompany]
        );

        if (company.length < 1) {
            throw generateError('La empresa seleccionada no existe', 404);
        }

        const [experiencias] = await connection.query(
            `SELECT id FROM experiencia WHERE idEmpresaOrganiza = ?`,
            [idCompany]
        );

        if (experiencias.length > 0) {
           
            for (let i = 0; i < experiencias.length; i++) {

                await connection.query(`DELETE FROM experiencia WHERE id = ?`, [
                    experiencias[i].id,
                ]);
            }
        }

        await connection.query(`DELETE FROM empresa WHERE id = ?`, [idCompany]);

        res.send({
            status: 'Ok',
            message: 'La empresa y todas sus experiencias han sido eliminadas.',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = DeleteCompany;
