const expresss = require('express');
const router = expresss.Router();
const { deleteProduct } = require('../controllers/productController');

router.get('/:id',deleteProduct);

module.exports = router;