import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Products({ setSelectedProduct }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/products');
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    navigate('/cart');  // Navigate to the cart route
  };

  return (
    <>
      <h1
        className="text-3xl text-gray-800"
        style={{
          fontFamily: "'Dancing Script', 'Playfair Display', cursive",
          fontWeight: 'bold',
          fontSize: '3rem',
          color: 'red',
          textAlign: 'center',
          marginTop: '3rem', // Adjust margin-top as needed for spacing
          marginBottom: '3rem' // Optional: Add margin-bottom if needed
        }}
      >
        Available Products
      </h1>

      <div className='flex py-32 flex-wrap justify-center'>
        {products.map(product => (
          <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img className="p-10 rounded-t-lg" src={product.image} alt={`${product.title} image`} />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                {[...Array(5)].map((star, index) => (
                  <svg key={index} className={`w-4 h-4 ${index < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                ))}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
