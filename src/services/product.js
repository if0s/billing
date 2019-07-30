const { pool } = require('./db');

exports.getProducts = async () => {
    try {
        const query = 'SELECT * FROM products'
        const dbres = await pool.query(query)
        return dbres.rows
    } catch (err) {
        console.log(err.stack)
        return
    }
}