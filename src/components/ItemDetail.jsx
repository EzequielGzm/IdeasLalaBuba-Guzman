import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import "../assets/css/contador.css"
import { useCartContext } from "../context/CartContext"



const ItemDetail = ({item}) => {

  const {addItem} = useCartContext()
  const [add, setAdd] = useState(false)
  
  
 /*  const onAdd = qty =>{
   setAdd(!add)
  } */
  const onAdd =(qty)=>{
   console.log(qty);
   addItem({...item, qty:qty})
  }
 
  return (
    <div>
    <article className="article-container">
      <h1>{item.title}</h1>
      <img src={item.img}></img>
      <p>${item.price}</p>
      
      <div>
        {
        add ? 
        
        <h2> ¡Añadido al carrito! </h2>
        : 
        < ItemCount stock={5} initial={1} onAdd ={onAdd} />
        } 
        <Link className="button1" to="/cart"> Finalizar compra </Link>
      </div>
     
      </article>
      
</div>
  )
}

export default ItemDetail