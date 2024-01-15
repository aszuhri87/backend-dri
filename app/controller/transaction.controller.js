const db = require('../../config/database')

const get = async (req, res) => {
    try {
        var search = req.params.search;
        var order_by = req.params.order_by;

        if (!order_by){
            order_by = 'ASC'
        }

        if (!search){
            search = '';
        }

        var query = `
        SELECT
            c.id,
            c.name,
            JSONB_AGG(
                JSONB_BUILD_OBJECT(
                    'transaction_id', t.id,
                    'menu', t.menu,
                    'price', t.price,
                    'qty', t.qty,
                    'payment', t.payment,
                    'total', t.total,
                    'created_at', t.created_at
                )
                ORDER BY t.created_at DESC
            ) as transaction
            FROM
                customer c
            LEFT JOIN
                transaction t ON c.id = t.customer_id
            WHERE t.menu ILIKE '%${search}%' OR t.price ILIKE '%${search}%'
            GROUP BY
                c.id, c.name
            ORDER BY
                c.name ${order_by};
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
            INSERT INTO transaction (menu, qty, price, payment, total, customer_id)
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING id;
        `;

        var values = [req.menu, req.qty, req.price, req.payment, req.total, req.customer_id];

        var result = await db.query(query_post, values);
        res.status(200).send({ message: 'Success', data: result.rows[0] });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error'});
    }
}

module.exports = {
    post, get
}