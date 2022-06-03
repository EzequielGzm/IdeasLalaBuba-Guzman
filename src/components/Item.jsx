import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <article className="article-container">
      <h1>{product.title}</h1>
      <img src={product.img}></img>
      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        <button className="button1">Ver detalle del producto</button>
      </Link>
    </article>
  );
};

export default Item;
