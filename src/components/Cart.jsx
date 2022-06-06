import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import "../assets/css/cart.css"
import FormCart from "./FormCart";

const Cart = () => {
  const { deleteCart, cartList,totalPrice,newOrder} = useContext(CartContext);

  return (

<div className="cart-container">
     
      <CartList/>
      
      {cartList.length ? (<div className="cart-box">
          <h2>Total del carrito: ${totalPrice()}</h2>
        <button className="button1" onClick={deleteCart}>
          Vaciar carrito
        </button>
       <FormCart/>
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
