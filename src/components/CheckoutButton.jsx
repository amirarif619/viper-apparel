import { useSelector } from "react-redux";
import products from '../data/ProductData';  

const CheckoutButton = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const itemsForCheckout = cartItems.map(cartItem => {
    const product = products.find(p => p.product_variant_id === cartItem.product_variant_id);
    return {
      name: product?.name,     
      price: product?.price,
      quantity: cartItem.quantity,
      image_url: product?.image  
    };
  });

  const handleCheckout = async () => {
    try {
      const response = await fetch("https://57e1fe74-02a5-4657-b006-2b227766f34f-00-hxfn748x47r1.pike.replit.dev/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: itemsForCheckout,
        }),
      });

      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { url } = await response.json(); 
      console.log('Checkout URL:', url); 

      if (url) {
        window.location.href = url; 
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  return (
    <button 
      className="btn btn-primary btn-lg w-100" 
      onClick={handleCheckout}
    >
      <i className="bi bi-bag-fill"></i> Checkout Securely
    </button>
  );
};

export default CheckoutButton;
