const express = require('express');
const router = express.Router();
const { renderEditProducts,editProduct } = require('../controllers/productController');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded());
router.get('/:id',renderEditProducts);



router.post('/:id',editProduct);
module.exports = router;