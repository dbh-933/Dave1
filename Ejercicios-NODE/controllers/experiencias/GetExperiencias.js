const getDB = require("../../database/getDB");

const GetExperiencias = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { search, maxPrice, direction, order } = req.query; 

        const validOrderOptions = ['titulo', 'precio', 'localizacion'];

        const validDirectionOption = ['ASC', 'DESC'];

        const orderBy = validOrderOptions.includes(order) ? order : 'precio';

        const orderDirection = validDirectionOption.includes(direction)
            ? direction
            : 'DESC';

        let consulta = 'SELECT * FROM experiencia';

        if (search) {
            consulta += ' WHERE titulo LIKE ?';
        }

        if (maxPrice) {
            consulta += ' AND precio < ?';
        }

        [consulta] = await connection.query(
            consulta + ` ORDER BY ${orderBy} ${orderDirection}`,
            [`%${search}%`, maxPrice]
        );

        res.send({
            status: 'ok',
            data: consulta,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = GetExperiencias;
