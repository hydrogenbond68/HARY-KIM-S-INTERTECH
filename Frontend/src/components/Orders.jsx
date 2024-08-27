import React from 'react';
import { useLocation } from 'react-router-dom';

function Orders() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2
        className="text-2xl text-gray-800"
        style={{
          fontFamily: "'Dancing Script', 'Playfair Display', cursive",
          fontWeight: 'bold',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Your Orders
      </h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4">${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <p className="text-xl font-semibold">Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
