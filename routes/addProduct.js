const bodyParser = require('body-parser');
const express = require('express');
const { renderAddProducts,postAddProducts } = require('../controllers/productController');
const router = express.Router();

router.use(bodyParser.urlencoded());

router.get('/',renderAddProducts);
router.post('/',postAddProducts);

module.exports = router;