import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ProductsProvider } from '@/contexts/ProductsContext';

const Layout = ({ children }) => {
  return(
    <main className="bg-[#f9f8fe]">
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