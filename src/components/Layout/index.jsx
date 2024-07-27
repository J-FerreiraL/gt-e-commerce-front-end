import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ProductProvider from '@/contexts/ProductsContext';

const Layout = ({ children }) => {
  return (
    <main className="bg-[#f9f8fe]">
      <Header />

      <ProductProvider>
        <Outlet>
          {children}
        </Outlet>
      </ProductProvider>

      <Footer />
    </main>
  );
}

export default Layout;
