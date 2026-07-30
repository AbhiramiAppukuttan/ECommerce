import { Container, Row, Col, Nav} from 'react-bootstrap'

function Footer() {

  return (

    <footer className='bg-dark text-light py-4 mt-5'>

      <Container>

        <Row className='align-items-center'>

          <Col md={6}>

            <h4 className='fw-bold'>
              Ecommerce
            </h4>

            <p className='text-light'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla quas asperiores ad iusto magnam aliquid, doloremque placeat cum, ipsa expedita eum error labore eveniet perspiciatis animi earum pariatur neque!
            </p>

          </Col>

          <Col md={6}>

            <Nav className='justify-content-md-end'>

              <Nav.Link
                href='/'
                className='text-light'
              >
                Home
              </Nav.Link>

              <Nav.Link
                href='/login'
                className='text-light'
              >
                Login
              </Nav.Link>

              <Nav.Link
                href='/signup'
                className='text-light'
              >
                Register
              </Nav.Link>

              <Nav.Link
                href='/add-product'
                className='text-light'
              >
                
              </Nav.Link>

            </Nav>

          </Col>

        </Row>

        <hr className='border-light' />

        <div className='text-center'>

          © 2026 Ecommerce | All Rights Reserved

        </div>

      </Container>

    </footer>
  )
}

export default Footer





