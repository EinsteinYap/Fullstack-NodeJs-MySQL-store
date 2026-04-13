const express = require('express');
const router = express.Router();
const { renderAddProducts } = require('../controllers/productController');
router.get('/',renderAddProducts);
router.post('/add-product', (req, res) => {
    const { productname, price, img } = req.body;
    const newProduct = {
        productname,
        price,
        img
    };
    products.push(newProduct);
    res.redirect('/');
});

module.exports = router;