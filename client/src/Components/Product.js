
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Product.css';
import Nav from './Nav';
import { CartContext } from './CartContext';
import watch1 from './watch1.jpg';
import watch2 from './watch2.jpg';
import watch3 from './watch3.jpg';
import watch4 from './watch4.jpg';
import watch5 from './watch5.jpg';
import watch6 from './watch6.jpg';
import bluetoothwatch from './bluetoothwatch.jpg';
import bluewatch from './bluewatch.jpg';
import digiwatch from './digiwatch.jpg';

const products = [
  { id: 1, name: 'Classic Watch', description: 'A classic watch with timeless design.', price: 199.99, image: watch1 },
  { id: 2, name: 'Sport Watch', description: 'A sport watch with modern features.', price: 249.99, image: watch2 },
  { id: 3, name: 'Luxury Watch', description: 'A luxury watch for special occasions.', price: 499.99, image: watch3 },
  { id: 4, name: 'Bluetooth Watch', description: 'A luxury watch for special occasions.', price: 1200, image: bluetoothwatch },
  { id: 5, name: 'Mens Watch', description: 'A luxury watch for special occasions.', price: 420, image: bluewatch },
  { id: 6, name: 'Womens Watch', description: 'A luxury watch for special occasions.', price: 615, image: digiwatch },
  { id: 7, name: 'Digital Watch', description: 'A luxury watch for special occasions.', price: 1200, image: watch6 },
  { id: 8, name: 'Rolex Watch', description: 'A luxury watch for special occasions.', price: 1200, image: watch4 },
  { id: 9, name: 'Smart Watch', description: 'A luxury watch for special occasions.', price: 1200, image: watch5 },
];

function Product() {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Nav />
      <Link to='/shop'><button className='backbtn'>Back</button></Link>
      <div className="product-page">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="thumbnail-images">
            <img src={product.image} alt={product.name} className="thumbnail" />
            {/* Add more thumbnails if available */}
          </div>
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p>{product.description}</p>
          <div className="button-group">
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to="/checkout">
            <button className="buy-now">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
