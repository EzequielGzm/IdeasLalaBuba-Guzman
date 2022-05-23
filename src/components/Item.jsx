import { Link } from "react-router-dom";

const Item = ({ title, price, img, id }) => {
  return (
    <article className="article-container">
      <h1>{title}</h1>
      <img src={img}></img>
      <p>${price}</p>

      <Link to={`/item/${id}`}>
        <button className="button1">Ver detalle del producto</button>
      </Link>
    </article>
  );
};

export default Item;
