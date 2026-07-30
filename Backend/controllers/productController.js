const Product = require("../model/productModel");

const productController = {

  createProduct: async(req,res)=>{

  const {name,description,price,image} = req.body;

  try {

    const product = await Product.create({
      name,
      description,
      price,
      image
    });

    res.status(201).json({
      message:"Product created successfully",
      product
    });

  } catch(error) {

    console.error(error);

    res.status(500).json({
      message:"Internal server error"
    });

  }
 },
  viewProducts:async(req,res)=>{

    try { 

      const products = await Product.find();

      res.status(200).json({
        message:"Products retrieved successfully",
        products
      })  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }
  },
  viewProductById:async(req,res)=>{ 
    const {id} = req.params;
    try {

      const product = await Product.findById(id); 
      if(!product){
        return res.status(404).json({
          message:"Product not found"
        })
      } 
      res.status(200).json({
        message:"Product retrieved successfully",
        product
      })  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }
  },
  updateProduct:async(req,res)=>{
    const {id} = req.params;
    const {name,description,price,image} = req.body;  
    try {

      const product = await Product.findById(id);
      if(!product){
        return res.status(404).json({
          message:"Product not found"
        })
      }
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.image = image || product.image;
      await product.save();
      res.status(200).json({
        message:"Product updated successfully",
        product
      }) 
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }
  },
  deleteProduct: async (req, res) => {

  const { id } = req.params

  try {

    const product = await Product.findById(id)

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      })
    }

    await Product.findByIdAndDelete(id)

    res.status(200).json({
      message: "Product deleted successfully"
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Internal server error"
    })

  }

}



}

module.exports = productController;