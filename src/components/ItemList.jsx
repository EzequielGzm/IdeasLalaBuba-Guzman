import { useState, useEffect } from "react";
import productos from "../data/products";
import Item from "./Item";

const ItemList = () => {
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  });

  return (
    <div className="container-main">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <Item
              title={product.title}
              img={product.img}
              price={product.price}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
