import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart({ cart, removeFromCart, removeLastFromCart }) {
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2
        className="text-2xl text-gray-800"
        style={{
          fontFamily: "'Dancing Script', 'Playfair Display', cursive",
          fontWeight: 'bold',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '3rem'
        }}
      >
        Shopping Cart
      </h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 md:w-32 max-w-full max-h-full"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 text-sm mt-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold text-gray-800">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg mt-6 pt-6 border-t border-gray-200">
          <span className="text-gray-800">Total</span>
          <span className="text-gray-800">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={removeLastFromCart}
          className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          REMOVE LAST ITEM
        </button>
        <button
          onClick={handleCheckoutClick}
          className="flex-1 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
