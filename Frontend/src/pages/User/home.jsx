import Banner from './banner'
import Products from './products'

function Home({products}) {
  return (
    <>

      <Banner/>
      <Products products={products}/>
 
    </>
  )
}

export default Home
