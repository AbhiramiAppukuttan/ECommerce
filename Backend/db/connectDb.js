const { default: mongoose } = require("mongoose");

async function connectDb(){
  console.log(process.env.PORT);
  
  try {

    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connection Sucessful");
    
    
  } catch (error) {

    console.log(error);
    
    
  }
}


module.exports = connectDb


