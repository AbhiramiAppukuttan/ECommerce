const Cart = require('../model/cartModel')

const cartController = {

  addToCart: async (req, res) => {

    try {

      const { productId } = req.body

      const userId = req.user.userId

      let cart = await Cart.findOne({ userId })

      if (!cart) {

        cart = await Cart.create({
          userId,
          products: [
            {
              productId,
              quantity: 1
            }
          ]
        })

      } else {

        const existingProduct = cart.products.find(
          item => item.productId.toString() === productId
        )

        if (existingProduct) {

          existingProduct.quantity += 1

        } else {

          cart.products.push({
            productId,
            quantity: 1
          })

        }

        await cart.save()

      }

      res.status(200).json({
        message: 'Product added to cart',
        cart
      })

    } catch (error) {

      console.log(error)

      res.status(500).json({
        message: 'Internal Server Error'
      })

    }

  },

  viewCart: async (req, res) => {

    try {

      const userId = req.user.userId

      const cart = await Cart.findOne({ userId })
        .populate('products.productId')

      res.status(200).json(cart)

    } catch (error) {

      console.log(error)

      res.status(500).json({
        message: 'Internal Server Error'
      })

    }

  },

  increaseQuantity: async (req, res) => {

    try {

      const { productId } = req.body

      const userId = req.user.userId

      const cart = await Cart.findOne({ userId })

      const product = cart.products.find(
        item => item.productId.toString() === productId
      )

      if (product) {

        product.quantity += 1

        await cart.save()

      }

      res.status(200).json({
        message: 'Quantity increased'
      })

    } catch (error) {

      res.status(500).json({
        message: 'Internal Server Error'
      })

    }

  },

  decreaseQuantity: async (req, res) => {

    try {

      const { productId } = req.body

      const userId = req.user.userId

      const cart = await Cart.findOne({ userId })

      const product = cart.products.find(
        item => item.productId.toString() === productId
      )

      if (product && product.quantity > 1) {

        product.quantity -= 1

        await cart.save()

      }

      res.status(200).json({
        message: 'Quantity decreased'
      })

    } catch (error) {

      res.status(500).json({
        message: 'Internal Server Error'
      })

    }

  },

  removeItem: async (req, res) => {

    try {

      const { productId } = req.params

      const userId = req.user.userId

      const cart = await Cart.findOne({ userId })

      cart.products = cart.products.filter(
        item =>
          item.productId.toString() !== productId
      )

      await cart.save()

      res.status(200).json({
        message: 'Item removed successfully'
      })

    } catch (error) {

      res.status(500).json({
        message: 'Internal Server Error'
      })

    }

  }

}

module.exports = cartController