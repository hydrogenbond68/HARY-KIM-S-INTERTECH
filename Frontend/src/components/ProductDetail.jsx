import React, { useState } from 'react';
import styled from 'styled-components';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function RelatedProducts({ onProductSelect }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/related-products')
      .then(response => setRelatedProducts(response.data))
      .catch(error => console.error('Error fetching related products:', error));
  }, []);

  return (
    <div>
      {relatedProducts.map(product => (
        <div
          key={product.id}
          onClick={() => onProductSelect(product)}
          style={{ cursor: 'pointer', marginBottom: '1rem' }}
        >
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
        </div>
      ))}
    </div>
  );
}

const Background = styled.div`
  background: rgba(255, 255, 255, 0.8); 
  background-size: cover;
  background-position: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

function ProductDetail({ product, addToCart, removeLastFromCart }) {
  const [selectedColor, setSelectedColor] = useState('red');
  const colors = ['red', 'gray', 'yellow'];
  const navigate = useNavigate();

  if (!product) {
    navigate('/');
    return null;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, color: selectedColor });
  };

  const handleRemoveLastFromCart = () => {
    removeLastFromCart();
  };

  return (
    <Background>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">{product.title}</h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <img src={product.image} alt="Product" className="w-full rounded-lg shadow-md mb-4" />
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <img key={i} src={product.image} alt={`Thumbnail ${i}`} className="w-20 h-20 object-cover rounded-md shadow-sm cursor-pointer hover:opacity-75 transition" />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-4xl font-bold mb-4 text-gray-800">${product.price}</p>
          <p className="text-lg mb-8 text-gray-700">{product.description}</p> 
          <div className="flex gap-4 mb-8">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 ${color === selectedColor ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={handleAddToCart} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">ADD TO CART</button>
           
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
              <HeartIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "BRAND", items: ["Shopify Corta Co."] },
          { title: "MATERIAL", items: ["Canvas: 100% ", "Main: 100% "] }
        ].map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3 text-gray-700">{section.title}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Background>
  );
}

export default ProductDetail;
