const express = require('express');
const router = express.Router();
const { renderEditProducts } = require('../controllers/productController');
router.get('/:id',renderEditProducts);
router.put('/edit-product:id', (req, res) => {
    const { productname, price, img } = req.body;
    const updatedProduct = {
        productname,
        price,
        img
    };
    // Here you would typically update the product in your database
    // For this example, we'll just log the updated product and redirect to the home page
    console.log('Updated Product:', updatedProduct);
    res.redirect('/');
});

module.exports = router;