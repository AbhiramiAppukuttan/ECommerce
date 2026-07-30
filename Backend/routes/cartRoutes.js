const express = require('express')

const cartController = require('../controllers/cartController')

const userAuth = require('../middlewares/userAuth')

const cartRoutes = express.Router()

cartRoutes.post('/add',userAuth,cartController.addToCart)

cartRoutes.get('/view',userAuth,cartController.viewCart)

cartRoutes.put('/increase',userAuth,cartController.increaseQuantity)

cartRoutes.put('/decrease',userAuth,cartController.decreaseQuantity)

cartRoutes.delete('/remove/:productId',userAuth,cartController.removeItem)

module.exports = cartRoutes