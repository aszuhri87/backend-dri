const express = require('express')

const router = express.Router()

const CustomerController = require('../app/controller/customer.controller')

/**
 * @openapi
 * /customer:
 *  get:
 *     tags:
 *     - Customer
 *     summary: Get all Customer
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get('/customer',  CustomerController.get)

/**
 * @openapi
 * /customer:
 *  post:
 *     tags:
 *     - Customer
 *     summary: create Customer
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
 *               type: string
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post('/customer',  CustomerController.post)

module.exports = router