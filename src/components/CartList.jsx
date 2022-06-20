
import { CartContext } from "../context/CartContext";
import { useContext} from "react";


const CartList = ()=> {
  
    const {cartList, removeItem} = useContext(CartContext);
    return (
    
    <div >
       
       {cartList.map((item) => {
       
       return (
          <div key={item.id}>
          <li>
            <h1>{item.title}</h1>
            <img src={item.img}></img>
            <p><strong> ${item.price}</strong></p>
            <p> Cantidad de productos seleccionados: {item.qty}</p>
          </li>
            <button className="button1" onClick={() => removeItem(item.id)}>
              BORRAR PRODUCTO
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default CartList