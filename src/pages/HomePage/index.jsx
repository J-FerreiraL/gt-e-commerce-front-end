import { Link } from 'react-router-dom'; 
import Products from "@/mocks/mock.js";
import { ProductCategory } from '@/enum';
// import ProductCategory from '@/enum';

const HomePage = () => {
  // Filtra alguns produtos populares para exibir na página inicial
  const popularProducts = Products.filter(product =>
    [ProductCategory.SPORT, ProductCategory.CASUAL].includes(product.type)
  ).slice(0, 6); // Limita a exibição a 6 produtos

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Seção de Introdução */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Digital Store</h1>
        <p className="text-lg text-gray-600">
          Encontre os melhores produtos para você com uma experiência de compra incrível.
        </p>
        <Link to="/products">
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg">
            Ver Todos os Produtos
          </button>
        </Link>
      </section>

      {/* Seção de Produtos Populares */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Produtos Populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Categorias</h2>
        <div className="flex flex-wrap gap-6">
          <Link to="/products?category=sport" className="w-full md:w-1/2 lg:w-1/4 bg-primary text-white text-center py-6 rounded-lg">
            <h3 className="text-xl font-semibold">Esportes</h3>
          </Link>
          <Link to="/products?category=casual" className="w-full md:w-1/2 lg:w-1/4 bg-secondary text-white text-center py-6 rounded-lg">
            <h3 className="text-xl font-semibold">Casual</h3>
          </Link>
          {/* Adicione mais categorias conforme necessário */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
