import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Container, Form, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ecommerce-iib4.onrender.com/product/view/${id}`
        )
        setProduct(response.data.product)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [id])

  // Handle input change
  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })

  }

  // Update product
  const handleUpdate = async (e) => {

    e.preventDefault()

    try {

      const token = localStorage.getItem('token')

      await axios.put(
        `https://ecommerce-iib4.onrender.com/product/update/${id}`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert('Product Updated Successfully')

      navigate('/admin-home/view-product')

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data?.message ||
        'Update Failed'
      )

    }

  }

  return (

    <Container className='mt-5'>

      <Card className='p-4 shadow border-0'>

        <h2 className='mb-4'>
          Edit Product
        </h2>

        <Form onSubmit={handleUpdate}>

          {/* Name */}

          <Form.Group className='mb-3'>

            <Form.Label>Product Name</Form.Label>

            <Form.Control
              type='text'
              name='name'
              value={product.name}
              onChange={handleChange}
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
            />

          </Form.Group>

          <Button
            type='submit'
            variant='dark'
            className='w-100'
          >
            Update Product
          </Button>

        </Form>

      </Card>

    </Container>

  )

}

export default EditProduct