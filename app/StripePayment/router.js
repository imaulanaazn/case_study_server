const express = require('express')
const router = express.Router();
const {proccedPayment} = require('./controller');

router.post('/create-checkout-session', proccedPayment)

module.exports = router;