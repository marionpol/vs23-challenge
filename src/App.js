import React, {useState} from "react";
import Meals from './components/Meals';
import Header from "./components/Header";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart";
import { CartProvider } from './store/CartContext'
import ReactDOM from 'react-dom';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
};
 return (
  <>
    <CartProvider >
      <Header openModal={toggleModal} />
          <Meals />
          {ReactDOM.createPortal( 
  <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
    <Cart toggleModal={toggleModal} />
  </Modal>,
  document.getElementById('modal')
)}
    </CartProvider>
  </>
  );
};

export default App;
