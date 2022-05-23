import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import "../assets/css/contador.css"



const ItemDetail = ({item}) => {
  

  
  const [add, setAdd] = useState(false)
  
  const onAdd = qty =>{
   setAdd(!add)
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
        
        <div> ¡Añadido al carrito! </div>
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