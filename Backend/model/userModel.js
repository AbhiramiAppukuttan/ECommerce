const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
    minLength:[4,"Minimum 4 characters needed"]
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,

  },
  role:{
    type:String,
    enum:['user','admin'],
    default:'user'
  }


},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User