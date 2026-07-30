import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Products({products}) {
  
  return (

    <Container className='mt-5'>

      <h1 className='text-center mb-5'>
        Our Products
      </h1>

      <Row>

        {
          products.map((product) => (

            <Col
              lg={4}
              md={6}
              sm={12}
              className='mb-4'
              key={product._id}
            >

              <Card className='shadow h-100 border-0'>

                <Card.Img
                  variant='top'
                  src={product.image}
                  height='250px'
                  style={{
                    objectFit: 'cover'
                  }}
                />

                <Card.Body>

                  <Card.Title>
                    {product.name}
                  </Card.Title>

                  <Card.Text>
                    {product.description}
                  </Card.Text>

                  <h5 className='mb-3'>
                    ₹ {product.price}
                  </h5>

                  <Link
                    to={`/viewmore/${product._id}`}
                  >

                    <Button variant='dark'>
                      View Product
                    </Button>

                  </Link>

                </Card.Body>

              </Card>

            </Col>

          ))
        }

      </Row>

    </Container>

  )
}

export default Products