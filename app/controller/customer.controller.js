const db = require('../../config/database')

const get = async (req, res) => {
    try {
        var query = `
            SELECT * FROM customer ORDER BY name ASC;
        `

        var customer = await db.query(query);
        res.status(200).json({ message: 'Success', data: customer.rows });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error'});
        
    }
}

const post = async (req, res) => {
    try {
        var req = req.body;

        var query_post = `
            INSERT INTO customer (name)
            VALUES ($1)
            RETURNING id;
        `;

        var values = [req.name];

        var result = await db.query(query_post, values);

        res.status(200).json({ message: 'Success', data: result.rows[0] });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error'});
    }
}

module.exports = {
    post, get
}