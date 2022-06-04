import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import "../assets/css/cart.css"

const Cart = () => {
  const { deleteCart, cartList,totalPrice,newOrder} = useContext(CartContext);

  return (

<div className="article-container">
     
      <CartList/>
      
      {cartList.length ? (<div>
          <h2>Total del carrito: ${totalPrice()}</h2>
        <button className="button1" onClick={deleteCart}>
          Vaciar carrito
        </button>
        <button className="button1" onClick={newOrder}>
          Finalizar la compra
        </button>
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
