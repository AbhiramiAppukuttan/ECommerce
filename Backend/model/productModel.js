const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
    minLength:[4,"Minimum 4 characters needed"]
  },
  description:{
    type:String,
    required:true,
    minLength:[10,"Minimum 4 characters needed"]
  },
  price:{
    type:Number,
    required:true,
    min:[0,"Price cannot be negative"]
  },
  image:{
    type:String,
    required:true
  }


},{timestamps:true});

const Product = mongoose.model('Product',productSchema);

module.exports = Product