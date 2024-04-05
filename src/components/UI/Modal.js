import React, { useContext, useEffect, useRef } from 'react';
import Button from './Button';
import { CartContext } from '../../store/CartContext';

const Modal = ({ isOpen, toggleModal}) => { 
    const modalRef = useRef(null);

    const {cartItems} = useContext (CartContext);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal(); 
        } else {
            modalRef.current.close(); 
        }
    }, [isOpen]);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const formatPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}).format(totalPrice);

    return ( 
        <dialog ref={modalRef} className="modal">
            <h2>Your cart</h2>
            <ul className="cart-items">
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span> - </span>
                        <span>{item.quantity}</span>
                    </li>
                ))}
            </ul>
            <p className="cart-total">{formatPrice}</p>
            <p className="modal-actions">
                {}
                <Button className="text-button" onClick={toggleModal}>Close</Button>
                <Button className="text-button">Checkout</Button>
            </p>
        </dialog>
    );
};

export default Modal