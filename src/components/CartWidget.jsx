import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "../assets/css/NavBar.css"


const CartWidget = () => {
  return (
    <>
    <Link to='/cart' >
    <button className='icon'> <AiOutlineShoppingCart/> </button>
    </Link>
    </>
  )
}

export default CartWidget
