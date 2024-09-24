
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/pages/Home.js';
import Contact from './Components/pages/Contact.js';
import About from './Components/pages/About.js';
import LoginForm from './Components/pages/LoginForm.js';
import Shopping from './Components/Shopping.js';
import Product from './Components/Product.js';
import Cart from './Components/Cart.js';
import { CartProvider } from './Components/CartContext';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Checkout from './Components/Checkout.js';

AOS.init();

const router = createBrowserRouter([
  { path: '/',
   element: <Home /> },
  { path: 'home',
   element: <Home /> },
  { path: 'contact',
   element: <Contact /> },
  { path: 'about',
   element: <About /> },
  { path: 'login',
   element: <LoginForm /> },
  { path: 'shop',
   element: <Shopping /> },
  { path: 'product/:productId',
   element: <Product /> },
  { path: 'cart',
   element: <Cart /> },
   { path: 'checkout',
   element: <Checkout /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <App />
    </CartProvider>
  </React.StrictMode>
);
