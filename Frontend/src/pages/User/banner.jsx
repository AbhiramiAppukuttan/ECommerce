import { Button, Carousel, Container } from 'react-bootstrap'

function Banner() {
  return (
    <Container className='my-4'>

      <Carousel>

        <Carousel.Item>

          <img
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1498049794561-7780e7231661'
            alt='Electronics'
            style={{
              height: '500px',
              objectFit: 'cover',
              borderRadius: '15px'
            }}
          />

          <Carousel.Caption>
            <h2>Latest Electronics</h2>
            <p>Discover the newest technology products.</p>

            <Button variant='success'>
              Buy Now
            </Button>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <img
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
            alt='Watch'
            style={{
              height: '500px',
              objectFit: 'cover',
              borderRadius: '15px'
            }}
          />

          <Carousel.Caption>
            <h2>Premium Watches</h2>
            <p>Elegant designs for every occasion.</p>

            <Button variant='primary'>
              Shop Now
            </Button>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <img
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
            alt='Headphones'
            style={{
              height: '500px',
              objectFit: 'cover',
              borderRadius: '15px'
            }}
          />

          <Carousel.Caption>
            <h2>Wireless Headphones</h2>
            <p>Experience premium sound quality.</p>

            <Button variant='dark'>
              Shop Now
            </Button>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>

    </Container>
  )
}

export default Banner