const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');

const paymentRouter = require('./app/StripePayment/router');

const app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


const port = process.env.port || 4000;

app.listen(port, err => {
    if(err) throw err;
    console.log(`server is running on port ${port}`)
})

app.use("/stripe-payment", paymentRouter)