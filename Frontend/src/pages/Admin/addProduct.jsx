import { useState } from 'react'
import axios from 'axios'
import { Button, Container, Form, Card } from 'react-bootstrap'

function AddProduct() {

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  })

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })

    
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const token = localStorage.getItem('token')

      const response = await axios.post(
        'http://localhost:4000/product/create',
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert(response.data.message || 'Product Added Successfully')

      setProduct({
        name: '',
        price: '',
        image: '',
        description: ''
      })

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data?.message ||
        'Failed to add product'
      )

    }

  }

  return (

    <Container className='mt-5'>

      <Card className='p-4 shadow border-0'>

        <h2 className='mb-4'>
          Add Product
        </h2>

        <Form onSubmit={handleSubmit}>

          {/* Name */}

          <Form.Group className='mb-3'>

            <Form.Label>Product Name</Form.Label>

            <Form.Control
              type='text'
              name='name'
              value={product.name}
              onChange={handleChange}
              placeholder='Enter product name'
              required
            />

          </Form.Group>

          {/* Price */}

          <Form.Group className='mb-3'>

            <Form.Label>Price</Form.Label>

            <Form.Control
              type='number'
              name='price'
              value={product.price}
              onChange={handleChange}
              placeholder='Enter price'
              required
            />

          </Form.Group>

          {/* Image */}

          <Form.Group className='mb-3'>

            <Form.Label>Image URL</Form.Label>

            <Form.Control
              type='text'
              name='image'
              value={product.image}
              onChange={handleChange}
              placeholder='Enter image URL'
              required
            />

          </Form.Group>

          {/* Description */}

          <Form.Group className='mb-3'>

            <Form.Label>Description</Form.Label>

            <Form.Control
              as='textarea'
              rows={3}
              name='description'
              value={product.description}
              onChange={handleChange}
              placeholder='Enter description'
              required
            />

          </Form.Group>

          <Button
            type='submit'
            variant='dark'
            className='w-100'
          >
            Add Product
          </Button>

        </Form>

      </Card>

    </Container>

  )

}

export default AddProduct