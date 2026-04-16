const bodyParser = require('body-parser');
const express = require('express');
const { renderAddProduct, postAddProduct } = require('../controllers/productController');
const { auth } = require('../middlewares/auth');
const router = express.Router();

router.use(bodyParser.urlencoded());

router.get('/', auth,renderAddProduct);

router.post('/', auth,postAddProduct);

module.exports = router;