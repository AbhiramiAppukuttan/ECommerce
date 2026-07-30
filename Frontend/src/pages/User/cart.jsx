import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from '../../redux/cartSlice'

function Cart() {

  const dispatch = useDispatch()

  const cart = useSelector(
    (state) => state.cart.items
  )

  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  return (

    <Container className='mt-5'>

      <h1 className='text-center mb-4'>
        Cart
      </h1>

      {
        cart.length === 0 ? (

          <Card className='p-4 text-center shadow border-0'>

            <h4>Your Cart Is Empty</h4>

          </Card>

        ) : (

          <>
            {
              cart.map((item) => (

                <Card
                  className='mb-4 shadow border-0 p-3'
                  key={item._id}
                >

                  <Row className='align-items-center'>

                    <Col md={3}>

                      <Card.Img
                        src={item.image}
                        style={{
                          height: '150px',
                          objectFit: 'cover'
                        }}
                      />

                    </Col>

                    <Col md={3}>

                      <h4>{item.name}</h4>

                      <h5>₹ {item.price}</h5>

                    </Col>

                    <Col md={3}>

                      <Button
                        variant='dark'
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item._id)
                          )
                        }
                      >
                        -
                      </Button>

                      <span className='mx-3'>
                        {item.quantity}
                      </span>

                      <Button
                        variant='dark'
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item._id)
                          )
                        }
                      >
                        +
                      </Button>

                    </Col>

                    <Col md={3}>

                      <h5>
                        ₹ {item.price * item.quantity}
                      </h5>

                      <Button
                        variant='danger'
                        size='sm'
                        onClick={() =>
                          dispatch(
                            removeItem(item._id)
                          )
                        }
                      >
                        Remove
                      </Button>

                    </Col>

                  </Row>

                </Card>

              ))
            }

            <Card className='p-4 shadow border-0'>

              <h3>
                Total Amount : ₹ {totalAmount}
              </h3>

            </Card>

          </>

        )
      }

    </Container>

  )

}

export default Cart