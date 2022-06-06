import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../assets/css/contador.css";

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const [add, setAdd] = useState(false);

  const onAdd = (qty) => {
    addItem({ ...item, qty })
    setAdd(true)
  }
  
  return (
    <div>
      <article>
        <h1>{item.title}</h1>
        <img src={item.img}></img>
        <p>${item.price}</p>

        <div>
          {add ? 
           <>
           <h3> Tu producto fue añadido al carrito </h3>
            <Link className="button1" to="/">
            Seguir comprando
          </Link>
          
          <Link className="button1" to="/cart">
            Finalizar compra
          </Link>
          </>
           : 
           <ItemCount stock={5} initial={1} onAdd={onAdd} />
    
          }

          
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
