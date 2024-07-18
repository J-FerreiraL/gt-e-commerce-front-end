import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductViewPage } from './pages/ProductViewPage'
import { ProductListingPage } from './pages/ProductListingPage'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='product-view' element={<ProductViewPage/>}/>
          <Route path='product-listing' element={<ProductListingPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
