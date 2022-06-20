import { useContext, useEffect} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import "../assets/css/cart.css"
import Popup from "./Popup";



const Cart = () => {
  const { deleteCart, cartList,totalPrice} = useContext(CartContext);

  
  return (

<div className="cart-container">
     
      <CartList/>
      
      {cartList.length ? (
      <div className="cart-box">
       
       <div> 
        <button className="button1" onClick={deleteCart}>
          Vaciar carrito
        </button>
       <Popup/>
       </div>
          <h2>Total del carrito: ${totalPrice()}</h2>
        </div>
      ) : (
        <div>
          <p>No se encontraron productos en el carrito</p>
          <br></br>
          <Link to="/" className="button1">
            Comprar productos
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
