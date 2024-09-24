
import React,{useRef} from 'react';
import './Checkout.css';
import Nav from './Nav';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
  
        //If you want send email to the customer you need service_id,template_id and public_key, if you want these ids contact the author: Surya, because it's confidential one anyone can misuse it
        emailjs.sendForm('service_id', 'template_id', form.current, {
            publicKey: 'public_key',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              // alert('msg sent successful');
              toast.success('Message Sent Successfully..wait for a minute to check your email');
            },
            (error) => {
              console.log('FAILED...', error.text);
              // alert('msg not sent');
              toast.error('Message Sent Failed..');
              toast.error("Check the sevice_Id,template_Id and Public_Key");
              toast("Contact the Author.😉");
            },
          );
          e.target.reset()
      };
    return (
      <>
      <Nav />
    <div className="checkout-container">
      <h1 className="check" ><strong>Checkout</strong></h1>
      <div className="checkout-form">
        <h2>Shipping Information</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
          <label htmlFor="address" name="message">Address:</label>
          <textarea id="address" name="address" required></textarea>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <button className="checkout-button" type='submit'>Place Order</button>
        </form>
      </div>
      {/* <div className="payment-details">
        <h2>Payment Details</h2>
        <form>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
          <label htmlFor="expiry">Expiry Date:</label>
          <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </form>
      </div> */}
      
      <ToastContainer/>
    </div>
    </>
  );
};

export default Checkout;
