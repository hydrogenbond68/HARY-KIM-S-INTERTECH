function RelatedProducts() {
  const products = [
    { name: "IPHONE 13 PRO", price: 399.00, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "IPHONE 13 PRO", price: 441.99, image: "https://plus.unsplash.com/premium_photo-1681233751666-612c7bc77485?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "IPHONE 13 PRO", price: 562.00, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D" },
    { name: "APPLE WATCH PRO", price: 199.00, image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg" },
    { name: "APPLE WATCH PRO", price: 312.00, image: "https://appleservicecentre.co.ke/wp-content/uploads/2024/04/Apple-Watch-series-6-44mm.jpg" },
    { name: "APPLE WATCH PRO : Trainer", price: 200.00, image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_modular-face_10052021_carousel.jpg.large.jpg" },
    { name: "APPLE WATCH PRO:Heart mornitor", price: 333.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s9-case-unselect-gallery-1-202403_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1708729783700" },
    { name: "APPLE WATCH PRO:Water Resistant", price: 199.00, image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg" },
  ];

  return (
    <div className="mt-16">
      <h2
  className="text-2xl mb-8 text-gray-800"
  style={{
    fontFamily: "'Dancing Script', 'Playfair Display', cursive",
    fontWeight: 'bold',
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '3rem' 
  }}
>
  You might also like
</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
            <p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
