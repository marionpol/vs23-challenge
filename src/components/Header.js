import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import { useContext } from 'react'

const Header = () => {
    const { cartItems} = useContext(CartContext);
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button>Cart ({cartItems.length})</Button>
            </nav>
        </header>
    )
}

export default Header