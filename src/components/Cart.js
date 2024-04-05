import React, { useContext } from 'react';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Cart = ({ toggleModal }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formatPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(totalPrice);

  const handleCheckout = () => {
    clearCart(); 
    toggleModal(); 
  };

  return (
    <>
      <h2>Your cart</h2>
      <ul className="cart">
        {cartItems.map(item => (
          <li className="cart-item" key={item.id}>
            <p>
              {item.name} - {item.quantity}
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{formatPrice}</p>
      <div className='modal-actions'>
        <Button className="text-button" onClick={toggleModal}>
          Close
        </Button>
        <Button className="button" onClick={handleCheckout}>
          Checkout
        </Button>
        </div>
    </>
  );
};

export default Cart;
