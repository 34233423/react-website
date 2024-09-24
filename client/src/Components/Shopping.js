import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shopping.css';
import watch1 from './watch1.jpg';
import watch2 from './watch2.jpg';
import watch3 from './watch3.jpg';
import watch4 from './watch4.jpg'
import watch5 from './watch5.jpg'
import watch6 from './watch6.jpg'
import bluetoothwatch from './bluetoothwatch.jpg'
import bluewatch from './bluewatch.jpg'
import digiwatch from './digiwatch.jpg'
import Nav from './Nav';

const watches = [
  {
    id: 1,
    name: 'Classic Watch',
    description: 'A classic watch with timeless design.',
    price: 199.99,
    image: watch1
  },
  {
    id: 2,
    name: 'Sport Watch',
    description: 'A sport watch with modern features.',
    price: 249.99,
    image: watch2
  },
  {
    id: 3,
    name: 'Luxury Watch',
    description: 'A luxury watch for special occasions.',
    price: 499.99,
    image: watch3
  },
  {
    id: 4,
    name: 'Bluetooth Watch',
    description: 'A luxury watch for special occasions.',
    price: 1200,
    image: bluetoothwatch
  },
  {
    id: 5,
    name: 'Mens Watch',
    description: 'A luxury watch for special occasions.',
    price: 420,
    image: bluewatch
  },
  {
    id: 6,
    name: 'Womens Watch',
    description: 'A luxury watch for special occasions.',
    price: 615,
    image: digiwatch
  },
  {
    id: 7,
    name: 'Digital Watch',
    description: 'A luxury watch for special occasions.',
    price: 1200,
    image: watch6
  },
  {
    id: 8,
    name: 'Rolex Watch',
    description: 'A luxury watch for special occasions.',
    price: 1200,
    image: watch4
  },
  {
    id: 9,
    name: 'Smart Watch',
    description: 'A luxury watch for special occasions.',
    price: 1200,
    image: watch5
  },
];

function Shopping() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWatches = watches.filter(watch =>
    watch.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Nav/>
    <div className="shopping-page">
      <header className="shopping-header" id="shopping-header">
        <h1>Watch Collection</h1>
        <input
          type="text"
          placeholder="Search for watches..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </header>
      <div className="product-list">
        {filteredWatches.map(watch => (
          <div key={watch.id} className="product">
            <img src={watch.image} alt={watch.name} className="product-image" />
            <div className="product-details">
              <h3>{watch.name}</h3>
              <p>{watch.description}</p>
              <p className="price">₹{watch.price}</p>
            </div>
            <div className="button-group">
              <Link to={`/product/${watch.id}`}>
                <button className='viewbtn'>View Product</button>
              </Link>
              {/* <button onClick={() => addToCart(watch)}>Add to Cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Shopping;
