import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../assets/css/cart.css"

const Cart = () => {
  const { deleteCart, cartList, removeItem,totalPrice } = useContext(CartContext);

  return (
    <div className="article-cart">
      {cartList.map((item) => {
        return (
          <div key={item.id}>
          <li>
            <h1>{item.title}</h1>
            <img src={item.img}></img>
            <p> ${item.price}</p>
            <p> Cantidad de productos seleccionados: {item.qty}</p>
          </li>
            <button className="button1" onClick={() => removeItem(item.id)}>
              BORRAR PRODUCTO
            </button>
          </div>
        );
      })}
      
      
      {cartList.length ? (<div>
          <h2>El precio total del carrito es : ${totalPrice()}</h2>
        <button className="button1" onClick={deleteCart}>
          Vaciar carrito
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
