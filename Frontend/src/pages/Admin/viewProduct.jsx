import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Container, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ViewProducts() {

  const [products, setProducts] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-iib4.onrender.com/product/all')
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [refreshKey])

  // Delete Product
  const deleteProduct = async (id) => {

    try {

      const token = localStorage.getItem('token')

      await axios.delete(
        `https://ecommerce-iib4.onrender.com/product/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert('Product Deleted')

      setRefreshKey(k => k + 1)

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data?.message ||
        'Delete Failed'
      )

    }

  }

  // Edit Product Navigation
  const editProduct = (id) => {

    navigate(`/admin-home/edit-product/${id}`)

  }

  return (

    <Container className='mt-5'>

      <h2 className='mb-4'>
        View Products
      </h2>

      <Table bordered hover>

        <thead>

          <tr>

            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            products.map((product) => (

              <tr key={product._id}>

                <td>{product.name}</td>

                <td
                  style={{
                    maxWidth: '200px'
                  }}
                  
                >
                  {product.description}
                </td>

                <td>₹ {product.price}</td>

                <td>
                  <img
                    src={product.image}
                    alt=""
                    width="60"
                    height="60"
                  />
                </td>

                <td>

                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => editProduct(product._id)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </Button>

                </td>

              </tr>

            ))
          }

        </tbody>

      </Table>

    </Container>

  )

}

export default ViewProducts