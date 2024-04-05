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
    <dialog ref={modalRef} className="modal cart">
        {children}
    </dialog>
  );
};

export default Modal;
