const express = require('express')

const router = express.Router()

const TransactionController = require('../app/controller/transaction.controller')

/**
 * @openapi
 * /transaction/{search}/{order_by}:
 *  get:
 *     tags:
 *     - Transaction
 *     summary: Get all transaction
 *     parameters:
 *     - name: search
 *       in: path
 *       description: search price or menu
 *       required: false
 *     - name: order_by
 *       in: query
 *       schema: 
 *         type: string,
 *         enum: [ asc, desc]
 *       description: ordering by customer name
 *       required: false
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get('/transaction/:search/:order_by',  TransactionController.get)

/**
 * @openapi
 * /transaction:
 *  post:
 *     tags:
 *     - Transaction
 *     summary: create Transaction
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - customer_id
 *            properties:
 *              customer_id:
 *               type: integer
 *              menu:
 *               type: string
 *              qty:
 *               type: integer
 *              price:
 *               type: string
 *              payment:
 *               type: string
 *              total:
 *               type: integer
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post('/transaction',  TransactionController.post)

module.exports = router