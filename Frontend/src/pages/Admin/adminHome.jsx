import { Link, Outlet } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function AdminDashboard() {

  return (

    <div className="d-flex">

      {/* Sidebar */}

      <div
        className="bg-dark text-white p-4"
        style={{
          width: '250px',
          minHeight: '100vh'
        }}
      >

        <h3 className="text-center mb-4">
          Admin Panel
        </h3>

        <hr />

        <div className="d-grid gap-3">

                    <Link
            to="/admin-home/add-product"
            className="text-white text-decoration-none"
          >
            Add Product
          </Link>

          <Link
            to="/admin-home/view-product"
            className="text-white text-decoration-none"
          >
            View Products
          </Link>

          <Link
            to="/admin-home/view-user"
            className="text-white text-decoration-none"
          >
            View Users
          </Link>

        </div>

      </div>

      {/* Main Content */}

      <div className="flex-grow-1 bg-light">

        <Navbar
          bg="white"
          className="shadow-sm px-4"
        >
          <Navbar.Brand>
            Admin Dashboard
          </Navbar.Brand>
        </Navbar>

        <div className="p-4">

          <Outlet />

        </div>

      </div>

    </div>

  )

}

export default AdminDashboard