// src/Components/Cart.js
import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import Nav from './Nav';
import { Link } from 'react-router-dom';

// const products = [
//   { id: 1, name: 'Classic Watch', description: 'A classic watch with timeless design.', price: 199.99, image: watch1 },
//   { id: 2, name: 'Sport Watch', description: 'A sport watch with modern features.', price: 249.99, image: watch2 },
//   { id: 3, name: 'Luxury Watch', description: 'A luxury watch for special occasions.', price: 499.99, image: watch3 },
//   { id: 4, name: 'Bluetooth Watch', description: 'A luxury watch for special occasions.', price: 1200, image: bluetoothwatch },
//   { id: 5, name: 'Mens Watch', description: 'A luxury watch for special occasions.', price: 420, image: bluewatch },
//   { id: 6, name: 'Womens Watch', description: 'A luxury watch for special occasions.', price: 615, image: digiwatch },
//   { id: 7, name: 'Digital Watch', description: 'A luxury watch for special occasions.', price: 1200, image: watch6 },
//   { id: 8, name: 'Rolex Watch', description: 'A luxury watch for special occasions.', price: 1200, image: watch4 },
//   { id: 9, name: 'Smart Watch', description: 'A luxury watch for special occasions.', price: 1200, image: watch5 },
// ];

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  // const { productId } = useParams();
  // const product = products.find(p => p.id === parseInt(productId));

  return (
    <>
      <Nav />
      <div className="cart-page">
      {/* <h1 class="hh1" data-text="Awesome">
    <span class="act-text">&nbsp;Shopping Cart&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Shopping Cart&nbsp;</span>
</h1> */}<h1>Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">₹{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <Link to={`/checkout`}>
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Cart;
