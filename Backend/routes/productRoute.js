const express = require('express');
const productController = require('../controllers/productController');
const isAdmin = require('../middlewares/isAdmin');
const userAuth = require('../middlewares/userAuth');

const productRoutes= express.Router();


productRoutes.post('/create',userAuth,isAdmin,productController.createProduct);
productRoutes.get('/all',productController.viewProducts);
productRoutes.get('/view/:id',productController.viewProductById);
productRoutes.put('/update/:id',userAuth,isAdmin,productController.updateProduct);
productRoutes.delete('/delete/:id',userAuth,isAdmin,productController.deleteProduct); 


module.exports = productRoutes

