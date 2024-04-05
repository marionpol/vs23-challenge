import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, toggleModal, children }) => { 
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal(); 
        } else {
            modalRef.current.close(); 
        }
    }, [isOpen]);

    return ( 
        <dialog ref={modalRef} className="modal">
            <h2>Your cart</h2>
            <ul className="cart-items">
                {children}
            </ul>
            <p className="cart-total"></p>
            <p className="modal-actions">
                {}
                <button className="text-button" onClick={toggleModal}>Close</button>
                <button className="text-button">Checkout</button>
            </p>
        </dialog>
    );
};

export default Modal