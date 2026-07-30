const express = require('express');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoute');
const cartRoutes = require('./cartRoutes');


const router = express.Router();

router.use('/user',userRoutes);
router.use('/product',productRoutes);
router.use('/cart',cartRoutes)

module.exports = router;