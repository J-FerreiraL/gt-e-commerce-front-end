import  { useParams } from 'react-router-dom';
import Products from "@/mocks/mock.js";

const ProductViewPage = () => {
  const { productId } = useParams(); // Assume que o ID do produto é passado na URL
  const product = Products.find(p => p.id === productId);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-primary text-white rounded-lg">
              Adicionar ao Carrinho
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-lg">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
