/*

HAVE SWITCHED TO REDIRECT CHECKOUT INSTEAD OF EMBEDDED CHECKOUT FORM


import  { useCallback } from "react";
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from "react-redux"; 
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';


const stripePromise = loadStripe("");

const CheckoutForm = () => {
 
  const cartItems = useSelector((state) => state.cart.items);

  
  const fetchClientSecret = useCallback(() => {
    return fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems.map(item => ({
          name: item.name,        
          price: item.price,      
          quantity: item.quantity 
        })),
      }),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, [cartItems]); 

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

export default CheckoutForm; */
