import { useContext } from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "../assets/css/NavBar.css"
import { CartContext } from '../context/CartContext'


const CartWidget = () => {
  const {totalQty} = useContext(CartContext)
  
  return (
    <>
    <h3>{totalQty() !== 0 && totalQty()}</h3>
    <Link to='/cart' >
    <button className='icon'> <AiOutlineShoppingCart/> </button>
    </Link>
    </>
  )
}

export default CartWidget
