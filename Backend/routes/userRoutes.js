const express = require('express');
const userController = require('../controllers/userController');
const userAuth = require('../middlewares/userAuth');
const isAdmin = require('../middlewares/isAdmin');


const userRoutes= express.Router();

userRoutes.post('/signup',userController.signup);
userRoutes.post('/signin',userController.signin);
userRoutes.get('/profile',userAuth,userController.profile);
userRoutes.put('/update-profile',userAuth,userController.updateProfile);
userRoutes.delete('/delete-profile',userAuth,userController.deleteProfile);
userRoutes.get('/all-users',userAuth,isAdmin,userController.getUsers)


module.exports = userRoutes


