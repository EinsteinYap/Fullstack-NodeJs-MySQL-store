const  pool  = require("../utils/database")

module.exports = class Products {
    constructor(productname, price, image) {
        this.productname = productname;
        this.price = price;
        this.image = image;
    }
    
    static fetchProducts() {
        return pool.execute('SELECT * FROM products');
    }

    static fetchProductById(id) {
        return pool.execute('SELECT * FROM products WHERE id = ?', [id]);
    }

    static deleteProductById(id) {
        return pool.execute('DELETE FROM products WHERE id = ?', [id]);
    }
    postData() {
        return pool.execute('INSERT INTO products (productname, price, img) VALUES (?, ?, ?)', [this.productname, this.price, this.image]);
    }

    editData(id) {
        return pool.execute('UPDATE products SET productname = ?, price = ?, img = ? WHERE id = ?', [this.productname, this.price, this.image, id]);
    }
}
