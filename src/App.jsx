import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
// import ProductViewPage from './pages/ProductViewPage'; // Certifique-se de descomentar essa linha quando precisar usar ProductViewPage
import ProductListingPage from './pages/HomePage/ProductListingPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductListingPage />} />
          {/* <Route path='products/:id' element={<ProductViewPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
