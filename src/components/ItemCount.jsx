import { useState } from "react"
import { Link } from "react-router-dom"
import "../assets/css/contador.css"
 
const ItemCount = ({stock,initial,onAdd}) => {
   const [qty,setQuantity] = useState(initial)
   
   function addProduct(num) {
     setQuantity(qty + num)
   }
   
   return (
     <div className="container1">
      
       <div className="container-contador">
        <button onClick={()=> addProduct(-1)} disabled={qty === initial ? true : null}> - </button>
        <span>{qty}</span>
        <button onClick={() => addProduct(+1)} disabled={qty === stock ? true : null} > + </button>
       </div>

        <button className="button1" onClick={()=>{onAdd(qty)}} disabled={stock === 0? true : null}>Agregar al carrito</button>
     </div>
   )
  }
 
 export default ItemCount
