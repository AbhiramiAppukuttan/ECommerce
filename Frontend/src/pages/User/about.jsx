import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <Container className="my-5">

      {/* Heading Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Your trusted destination for quality products at affordable prices.
          </p>
        </Col>
      </Row>

      {/* About Content */}
      <Row className="align-items-center mb-5">

        <Col md={6}>
          <img
            src="https://marketplace.canva.com/EAGHpqF4xz0/1/0/800w/canva-purple-%26-yellow-illustrative-e-commerce-online-shop-logo-QVernCwAtuU.jpg"
            alt="Ecommerce"
            className="img-fluid rounded shadow"
          />
        </Col>

        <Col md={6}>
          <h2 className="fw-bold mb-3">
            Welcome to Ecommerce
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, nostrum adipisci assumenda ad expedita 
            dicta temporibus quaerat architecto, amet eum officiis distinctio dignissimos nemo vel quisquam repellendus asperiores ut eos maiores! Ullam totam nisi eligendi deserunt dolores, rerum ex nemo saepe earum eius, ad, libero neque assumenda? 
            Voluptates quasi commodi iusto libero modi, magnam officiis accusantium ratione repudiandae officia, a odit alias facere et aspernatur illo aliquid veniam eaque voluptatem molestiae possimus numquam? Repellat provident praesentium sed non
             vitae ullam eaque, debitis hic aliquam quae nulla magni ipsam nemo eligendi voluptates? Illo recusandae obcaecati aspernatur libero alias ipsa mollitia nisi?
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus laborum magnam aperiam quae unde dolorem quibusdam ipsa, sed harum quo doloribus aliquam vitae possimus aliquid praesentium cumque pariatur, qui temporibus porro. Reiciendis quisquam ratione dolorum numquam inventore! Repellendus repellat omnis voluptatum delectus vitae voluptate cumque eveniet? Molestiae quae ratione perspiciatis id! Nihil accusamus ab temporibus, facilis qui harum veritatis facere. Nobis nihil libero iste asperiores fugit ex tempore aliquid dolore hic quia doloribus porro cupiditate, accusantium placeat corrupti accusamus debitis!
          </p>
        </Col>

      </Row>

    </Container>
  )
}

export default About