const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const userController = {

   signup:async(req,res)=>{

    const {name,email,password,role} = req.body;

    try {

      if(!name || !email || !password){

        return res.status(400).json({
          message:"All fields are required"
        })
       
      } 

      const userExist = await User.findOne({email})

      if(userExist){
        return res.status(400).json({
          message:"User already exists"
        })
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password:hashedPassword,
        role
      })

      if(!user){
        return res.status(500).json({
          message:"Error creating user"   
        })
      }

      res.status(201).json({
        message:"User created successfully",
        user
      })

    } catch (error) {
      console.error(error);
      if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(e => e.message)
        return res.status(400).json({ message: messages.join(', ') })
      }
      if (error.code === 11000) {
        return res.status(400).json({ message: 'User already exists' })
      }
      res.status(500).json({
        message:"Internal server error"
      })
    }

  },

  signin: async (req, res) => {

  console.log("Signin API called");

  const { email, password } = req.body;

  try {
    console.log(email);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("Token created");

    res.status(200).json({
      message: "Login successful",
      token,
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
},

  profile:async(req,res)=>{

    try { 
      const user = await User.findById(req.user.userId).select('-password');
      if(!user){
        return res.status(404).json({
          message:"User not found"
        })
      }
      res.status(200).json({
        message:"User profile",
        user
      })
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }
  },
  updateProfile:async(req,res)=>{
    const {name,email} = req.body;

    try {
      const user = await User.findById(req.user.userId);
      if(!user){
        return res.status(404).json({
          message:"User not found"
        })
      }
      user.name = name || user.name;
      user.email = email || user.email;
      await user.save();
      res.status(200).json({
        message:"Profile updated successfully",
        user
      })
    }catch (error) {
      console.error(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }
  },
  deleteProfile:async(req,res)=>{

    try { 
      const user = await User.findByIdAndDelete(req.user.userId);
      if(!user){
        return res.status(404).json({
          message:"User not found"
        })
      }
      res.status(200).json({
        message:"User profile deleted successfully",
      })
    }catch (error) {
      console.error(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }  
  },
  getUsers: async (req, res) => {

  try {

    const users = await User.find().select('-password')

    res.status(200).json({
      users
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: 'Internal server error'
    })

  }

}  


  


}



module.exports = userController;


