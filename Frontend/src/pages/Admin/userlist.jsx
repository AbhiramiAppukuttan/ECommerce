import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Table, Card } from 'react-bootstrap'

function UserList() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'https://ecommerce-iib4.onrender.com/user/all-users',
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setUsers(response.data.users)
      } catch (error) {
        console.log(error)
        alert(error.response?.data?.message || 'Failed to fetch users')
      }
    }

    fetchUsers()

  }, [])

  return (

    <Container className="mt-4">

      <Card className="shadow border-0 p-4">

        <h2 className="mb-4">
          User List
        </h2>

        <Table bordered hover responsive>

          <thead>

            <tr>

              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>

            </tr>

          </thead>

          <tbody>

            {
              users.map((user, index) => (

                <tr key={user._id}>

                  <td>{index + 1}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.role}</td>

                </tr>

              ))
            }

          </tbody>

        </Table>

      </Card>

    </Container>

  )

}

export default UserList