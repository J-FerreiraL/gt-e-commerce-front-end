import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ProductsProvider } from '@/contexts/ProductContext';

const Layout = ({ children }) => {
  return(
    <main>
      <Header/>

      <ProductsProvider>
        <Outlet>
          {children}
        </Outlet>
      </ProductsProvider>

      <Footer/>
    </main>
  );
}

export default Layout;