import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductViewPage from './pages/ProductViewPage'
import ProductListingPage from './pages/ProductListingPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='product-view' element={<ProductViewPage/>}/>
          <Route path='product-listing' element={<ProductListingPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;