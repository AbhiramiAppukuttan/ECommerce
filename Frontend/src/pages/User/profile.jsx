import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap'

function Profile() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    const fetchProfile = async () => {

    try {

      const token = localStorage.getItem('token')

      const response = await axios.get(
        'https://ecommerce-iib4.onrender.com/user/profile',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setUser(response.data.user)

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data?.message || 'Failed to load profile'
      )

    }

  }

    fetchProfile()

  }, [])

 

  if (!user) {

    return (

      <Container className='mt-5 text-center'>

        <Spinner animation='border' />

        <p className='mt-3'>
          Loading Profile...
        </p>

      </Container>

    )

  }

  return (

    <Container className='mt-5'>

      <Row className='justify-content-center'>

        <Col md={6}>

          <Card className='shadow border-0 p-4'>

            <div className='text-center mb-4'>

            

            </div>

            <h2 className='text-center mb-4'>
              My Profile
            </h2>

            <hr />

            <Row className="mb-3">
              <Col md={4}>
                <strong>Name</strong>
              </Col>
              <Col md={8}>
                {user.name}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <strong>Email</strong>
              </Col>
              <Col md={8}>
                {user.email}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <strong>Role</strong>
              </Col>
              <Col md={8} className="text-capitalize">
                {user.role}
              </Col>
            </Row>

            

          </Card>

        </Col>

      </Row>

    </Container>

  )
}

export default Profile