import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authSlice'

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({

    initialValues: {
      email: '',
      password: ''
    },

    validationSchema: Yup.object({

      email: Yup.string()
        .email('Invalid Email')
        .required('Email is required'),

      password: Yup.string()
        .required('Password is required')

    }),

    onSubmit: async (values) => {

      try {
        
        const response = await axios.post('http://localhost:4000/user/signin',values);

        localStorage.setItem(
          'token',
           response.data.token
        )

        localStorage.setItem("role", response.data.user.role);



        console.log(response.data.token);
        

        dispatch(login(response.data))

        alert('Login Sucessfull')

        
        formik.resetForm()

        console.log(response.data);
        

        const role = response.data.user.role

        if (role === 'admin') {
          navigate('/admin-home')
        } else {
          navigate('/')
        }


      } catch (error) {

        console.log(error);
        

        alert(
          error.response?.data?.message ||
          'Login Failed'
        )
        
      }

     

    }

  })

  return (

    <Container className='mt-5'>

      <Row className='justify-content-center'>

        <Col md={5}>

          <Card className='shadow border-0 p-4'>

            <h2 className='text-center mb-4'>
              Login Form
            </h2>

            <Form onSubmit={formik.handleSubmit}>

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

              {/* Password */}

              <Form.Group className='mb-4'>

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

              <Button
                type='submit'
                variant='dark'
                className='w-100'
              >
                Login
              </Button>

              <div className='text-center mt-3'>

                Don't have an account?

                <Link
                  to='/signup'
                  className='ms-2 text-dark text-decoration-none fw-bold'
                >
                  Register
                </Link>

              </div>

            </Form>

          </Card>

        </Col>

      </Row>

    </Container>

  )
}

export default Login