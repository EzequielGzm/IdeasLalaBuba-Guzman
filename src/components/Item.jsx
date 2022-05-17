import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({title, price, img, id}) => {
  return (
    <article>
      <h1>{title}</h1>
      <img src={img}></img>
      <p>${price}</p>
      <div>
      <ItemCount
        initial={1}
        stock={5}
        onAdd={(quantity) =>
          alert(`${quantity} productos fueron agregados al carrito`)
        }
      />
      </div>
     
      <Link to={`/item/${id}`}>
      <button className="button1">Ver detalle del producto</button>
      </Link>
      
    </article>
  );
};

export default Item;
