const Products = require('../models/products');

const products = [];
    



exports.renderProducts = (req, res) => {
    Products.fetchProducts()
    .then(([rows,fieldData])=>{
        
        res.render('home',{products:rows});
    })
    .catch(err=>console.log(err));
};


exports.renderAddProducts = (req, res) => {
    res.render('add-product');
};

exports.postAddProducts = (req, res) => {
   const { productname, price, image } = req.body;
   const products = new Products(productname, price, image);
    products.postData().then(()=>{
        res.redirect('/');
        console.log(productname +' added successfully');
    }).catch(err=>console.log(err));

};


exports.renderEditProducts = (req, res) => {
    Products.fetchProductById(req.params.id)
    .then(([[productData],fieldData])=>{
        console.log(productData);
        res.render('edit-product',{product:productData});
    })
    .catch(err=>console.log(err));  
    
};

exports.editProduct = (req, res) => {
    const { productname, price, image } = req.body;
    const id = req.params.id;
    const products = new Products(productname, price, image);
        products.editData(id).then(()=>{
            res.redirect('/');
            console.log(productname +' updated successfully');
        }).catch(err=>console.log(err));
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Products.deleteProductById(id)
    .then(()=>{
        res.redirect('/');
        console.log('Product deleted successfully');
    })
    .catch(err=>console.log(err));
};