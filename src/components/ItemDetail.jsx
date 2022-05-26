import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../assets/css/contador.css";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const [add, setAdd] = useState(false);

  const onAdd = (qty) => {
    addItem({ ...item, qty })
    setAdd(true)
  };
  return (
    <div>
      <article className="article-container">
        <h1>{item.title}</h1>
        <img src={item.img}></img>
        <p>${item.price}</p>

        <div>
          {add ? (
            <h3> Tu producto fue añadido al carrito </h3>
          ) : (
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          )}
          <Link className="button1" to="/cart">
            Finalizar compra
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
