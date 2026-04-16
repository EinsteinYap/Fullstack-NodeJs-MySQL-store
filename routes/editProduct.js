const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const { renderEditProduct, editProduct } = require('../controllers/productController');
const { auth } = require('../middlewares/auth');

router.use(bodyParser.urlencoded());

router.get('/:id', auth,renderEditProduct);

router.post('/:id', auth, editProduct);

module.exports = router;