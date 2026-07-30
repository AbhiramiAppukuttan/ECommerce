import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { register } from '../../redux/authSlice'

function Registration() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({

    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    },

    validationSchema: Yup.object({

      name: Yup.string()
        .required('Name is required'),

      email: Yup.string()
        .email('Invalid Email')
        .required('Email is required'),

      password: Yup.string()
        .min(6, 'Password must be 6 characters')
        .required('Password is required'),

      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref('password')],
          'Passwords must match'
        )
        .required('Confirm Password is required'),

      role: Yup.string()
        .required('Role is required')

    }),

    onSubmit: async (values) => {

      try {

        const response = await axios.post(
          'http://localhost:4000/user/signup',
          //  `${BASE_URL}/user/signup`,
          values
        )

        dispatch(register(response.data))

        alert('Registration Successful')

        formik.resetForm()

        navigate('/signin')

      } catch (error) {

        console.log(error)

        alert(
          error.response?.data?.message ||
          'Registration Failed'
        )

      }

    }

  })

  return (

    <Container className='mt-5'>

      <Row className='justify-content-center'>

        <Col md={6}>

          <Card className='shadow border-0 p-4'>

            <h2 className='text-center mb-4'>
              Registration Form
            </h2>

            <Form onSubmit={formik.handleSubmit}>

              {/* Name */}

              <Form.Group className='mb-3'>

                <Form.Label>
                  Name
                </Form.Label>

                <Form.Control
                  type='text'
                  name='name'
                  placeholder='Enter Name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {
                  formik.touched.name &&
                  formik.errors.name && (
                    <div className='text-danger'>
                      {formik.errors.name}
                    </div>
                  )
                }

              </Form.Group>

              {/* Email */}

              <Form.Group className='mb-3'>

                <Form.Label>
                  Email
                </Form.Label>

                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {
                  formik.touched.email &&
                  formik.errors.email && (
                    <div className='text-danger'>
                      {formik.errors.email}
                    </div>
                  )
                }

              </Form.Group>

              {/* Role */}

              <Form.Group className='mb-3'>

                <Form.Label>
                  Role
                </Form.Label>

                <Form.Select
                  name='role'
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >

                  <option value=''>
                    Select Role
                  </option>

                  <option value='user'>
                    User
                  </option>

                  <option value='admin'>
                    Admin
                  </option>

                </Form.Select>

                {
                  formik.touched.role &&
                  formik.errors.role && (
                    <div className='text-danger'>
                      {formik.errors.role}
                    </div>
                  )
                }

              </Form.Group>

              {/* Password */}

              <Form.Group className='mb-3'>

                <Form.Label>
                  Password
                </Form.Label>

                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {
                  formik.touched.password &&
                  formik.errors.password && (
                    <div className='text-danger'>
                      {formik.errors.password}
                    </div>
                  )
                }

              </Form.Group>

              {/* Confirm Password */}

              <Form.Group className='mb-4'>

                <Form.Label>
                  Confirm Password
                </Form.Label>

                <Form.Control
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className='text-danger'>
                      {formik.errors.confirmPassword}
                    </div>
                  )
                }

              </Form.Group>

              <Button
                type='submit'
                variant='dark'
                className='w-100'
              >
                Register
              </Button>

              <div className='text-center mt-3'>

                Already have an account?

                <Link
                  to='/signin'
                  className='ms-2 text-dark text-decoration-none fw-bold'
                >
                  Login
                </Link>

              </div>

            </Form>

          </Card>

        </Col>

      </Row>

    </Container>

  )
}

export default Registration