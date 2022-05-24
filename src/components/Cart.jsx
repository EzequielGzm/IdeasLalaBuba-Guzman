import React, { useContext } from 'react'
import { CartContext} from '../context/CartContext'
import Item from './Item'

const Cart = () => {

  /* const {deleteCart, cartList} = useContext(CartContext) */
  const cartContext = useContext(CartContext)
  const {deleteCart, cartList} = cartContext

  console.log(cartList);
  /* console.log(deleteCart); */
 
  return (
    <div className='article-container'>
      {cartList.map((item)=>{
        <li>
           {item.title}     
           {item.price}
        </li>
       
      }
      )}
    <button className='button1' onClick={deleteCart}> Vaciar carrito </button>
    </div>
  )
}

export default Cart