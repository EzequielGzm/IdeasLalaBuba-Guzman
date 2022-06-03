import Item from "./Item"; 


const ItemList = ({products}) => {
  
  return (
  <div className="container-main" >
   {products.map(prod => <Item key={prod.id} product={prod}>
     </Item>)}
     </div>
  )
};

export default ItemList;
