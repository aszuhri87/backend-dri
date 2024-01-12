require('dotenv').config()

const bodyParser = require('body-parser')

var express = require('express')
var app = express()

const db = require('./config/database')
const swaggerDocs = require("./swagger");

swaggerDocs.swagger(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const customerRouter = require('./routes/customer')
const transactionRouter = require('./routes/transaction')

app.use('/', transactionRouter)
app.use('/', customerRouter)

app.get('/', async(req, res) => {
    res.status(200).send({'data': 'welcome'})
});


app.listen(process.env.APP_PORT, () => {
    console.log(`listening on port ${process.env.APP_PORT}!`)
})


module.exports = app;