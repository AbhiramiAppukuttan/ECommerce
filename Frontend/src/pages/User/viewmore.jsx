import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

function ProductDetails() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams()

  const [singleProduct, setSingleProduct] = useState(null)

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/product/view/${id}`
        )
        setSingleProduct(response.data.product)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()

  }, [id])

  if (!singleProduct) {

    return (

      <Container className='mt-5 text-center'>

        <h3>Loading Product...</h3>

      </Container>

    )

  }

  return (

    <Container className='mt-5'>

      <Card className='shadow border-0 p-4'>

        <Row>

          <Col md={5}>

            <Card.Img
              src={singleProduct.image}
              style={{
                height: '400px',
                objectFit: 'cover'
              }}
            />

          </Col>

          <Col md={7}>

            <Card.Body>

              <h2>{singleProduct.name}</h2>

              <p className='mt-3'>
                {singleProduct.description}
              </p>

              <h3 className='text-success'>
                ₹ {singleProduct.price}
              </h3>

              <Button
                variant='dark'
                className='mt-3'
                onClick={() => {

                  dispatch(
                    addToCart(singleProduct)
                  )

                  alert('Product Added To Cart')
                  navigate('/cart')

                }}
              >
                Add To Cart
              </Button>

            </Card.Body>

          </Col>

        </Row>

      </Card>

    </Container>

  )

}

export default ProductDetails