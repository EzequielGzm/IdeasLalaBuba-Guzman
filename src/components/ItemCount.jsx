import { useState } from "react"
import "../assets/css/contador.css"
 
const ItemCount = ({stock,initial,onAdd}) => {
   const [quantity,setQuantity] = useState(initial)
   
   function increment() {
     if(quantity < stock){
       setQuantity(quantity + 1)
     }
   }
   
   function decrement() {
     if(quantity <= stock ) {
       setQuantity(quantity - 1)
     }
   }
   function addCart() {
    if(quantity != initial){ 
    onAdd(quantity)
  }
   }

   return (
     <div className="container1">
      <div className="container-contador">
        <button onClick={decrement} disabled={quantity === initial ? true : null}> - </button>
        <span>{quantity}</span>
        <button onClick={increment}> + </button>
      </div>
      <button className="button1" onClick={addCart}>Agregar al carrito</button>
    </div>
   )
  }
 

 export default ItemCount
