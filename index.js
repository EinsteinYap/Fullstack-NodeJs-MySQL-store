const express = require('express');
const app = express();
const home = require('./routes/home')
const addProduct = require('./routes/addProduct');
const editProduct = require('./routes/editProduct');
const port = 3000;


app.set('view engine','ejs')
app.set('views','views')

app.use('/',home);
app.use('/add-product', addProduct);
app.use('/edit-product',editProduct);

app.use(express.static(__dirname));

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
