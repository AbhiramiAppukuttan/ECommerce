import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/User/home'
import About from './pages/User/about'
import Contact from './pages/User/contact'
import Registration from './pages/User/register'
import Login from './pages/User/login'
import Products from './pages/User/products'
import ProductDetails from './pages/User/viewmore'
import Profile from './pages/User/profile'
import Cart from './pages/User/cart'
import AddProduct from './pages/Admin/addProduct'
import ViewProducts from './pages/Admin/viewProduct'
import EditProduct from './pages/Admin/editProduct'
import AdminDashboard from './pages/Admin/adminHome'
import UserLayout from './components/UserLayout'
import ProtectedRoute from './components/ProtectedRoute'
import UserList from './pages/Admin/userlist'


function App(){

   const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProducts = async () => {

    try {

      const response = await axios.get(
        'https://ecommerce-iib4.onrender.com/product/all'
      )

      console.log(response.data)
      setProducts(response.data.products)

    } catch (error) {

      console.log(error)

    }

  }


    fetchProducts()

  }, [])

  return(

    <BrowserRouter>

     <div className="app-container">

    
        <main className="content">

          <Routes>

            {/* User Routes */}

            <Route element={<UserLayout />}>

              <Route path="/" element={<Home products={products} />} />

              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/signup" element={<Registration />} />

              <Route path="/signin" element={<Login />} />

              <Route path="/products" element={<Products products={products} />} />

              <Route path="/viewmore/:id" element={<ProductDetails />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/profile" element={<Profile />} />

            </Route>

            {/* Admin Routes */}

            <Route path="/admin-home" element={
              <ProtectedRoute>
                  <AdminDashboard />
              </ProtectedRoute>
            }>

              
              <Route
                path="admin-home/add-product"
                element={<AddProduct />}
              />

              <Route
                path="admin-home/view-product"
                element={<ViewProducts />}
              />


              <Route
                path="admin-home/edit-product/:id"
                element={<EditProduct />}
              />

              <Route
                path="admin-home/view-user"
                element={<UserList />}
              />

            </Route>

          </Routes>

        </main>
      
     
    </div>
    
    </BrowserRouter>

  )

}

export default App

