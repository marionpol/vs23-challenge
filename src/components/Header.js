import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import { useContext} from 'react'

const Header = ({openModal}) => {
    const { cartItems } = useContext(CartContext);
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button className={"text-button"} onClick={openModal}>Cart ({totalCount})</Button>
            </nav>
        </header>
    )
}

export default Header