import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

function Contact() {
  return (

    <Container className="my-5">

      {/* Heading */}

      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            We'd love to hear from you. Get in touch with us for any questions or support.
          </p>
        </Col>
      </Row>

      <Row className="g-4">

        {/* Contact Form */}

        <Col lg={7}>

          <Card className="shadow border-0 p-4">

            <h3 className="mb-4">
              Send a Message
            </h3>

            <Form>

              <Form.Group className="mb-3">
                <Form.Label>
                  Full Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Subject
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message"
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
              >
                Send Message
              </Button>

            </Form>

          </Card>

        </Col>

        {/* Contact Information */}

        <Col lg={5}>

          <Card className="shadow border-0 p-4 mb-4">

            <h3 className="mb-3">
              Contact Information
            </h3>

            <p>
              <strong>Address:</strong>
              <br />
              Kochi, Kerala, India
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              +91 9876543210
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              support@ecommerce.com
            </p>

          </Card>

          <Card className="shadow border-0 p-4">

            <h3 className="mb-3">
              Business Hours
            </h3>

            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>

          </Card>

        </Col>

      </Row>

    </Container>

  )
}

export default Contact