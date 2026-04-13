const products = [
    {
        id: 1,
        productname:"Apple",
        price: 100,
        img:"apples.jpg"
    },
    {
        id: 2,
        productname:"Bananas",
        price: 50,
        img:"bananas.jpg"
    },
    {
        id: 3,
        productname:"Orange",
        price: 150,
        img:"orange.jpg"
    },
    {
        id: 4,
        productname:"Pineapple",
        price: 200,
        img:"pineapple.jpg"
    },
    {
        id: 5,  
        productname:"Strawberry",
        price: 250,
        img:"strawberry.jpg"
    }
];
// const products = [];
    



exports.renderProducts = (req, res) => {
    res.render('home',{products:products});
};


exports.renderAddProducts = (req, res) => {
    res.render('add-product');
};

exports.renderEditProducts = (req, res) => {
    res.render('edit-product',
        {
            product:products[--req.params.id]
        }
    );
};