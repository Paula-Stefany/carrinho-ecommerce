import { Home } from './pages/home'
import { Cart } from './pages/cart'
import { ProductsDetails } from './pages/productDetails'
import { createBrowserRouter } from 'react-router'
import { Layout } from './components/layout'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }, 
      {
        path: '/details/:id',
        element: <ProductsDetails/>
      }
    ]
  }
])

export { router }