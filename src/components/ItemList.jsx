import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { category } = useParams();

  useEffect(() => {
    getProducts
      .then((res) => {
        if (category) {
          const categoryFilter = res.filter((el) => el.category == category);
          setProducts(categoryFilter);
        } else {
          setProducts(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  });

  return (
    <div className="container-main">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((product, id) => (
          <div key={id}>
            <Item
              id={product.id}
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
