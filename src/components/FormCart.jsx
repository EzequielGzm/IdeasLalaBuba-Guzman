import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore"

const FormCart = () => {
   
    const {cartList,totalPrice,deleteCart} = useContext(CartContext);
    
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
   
    const handleSubmit=(e)=>{
        e.preventDefault()
       
      let order={};
      let dateBuyer= new Date()
       
      order.buyer ={name: name, email: email, phone: phone}
      order.total= totalPrice()
      order.product = cartList.map(product =>{
      let id = product.id
      let qty = product.qty
      let name = product.title
      let price = product.price * product.qty
      let date = dateBuyer
      return {id,name,price,date,qty}
    })
    console.log(order);
    const db = getFirestore()
    const queryCollection = collection(db,'orders')
    addDoc(queryCollection, order)
    .then(res => console.log(res))
    .then(()=>alert("Tu compra fue realizada con éxito! Gracias!"))
    .catch(err => console.log(err))
    .finally(()=> deleteCart())
    setEmail("")    
    setName("")
    setPhone("")
}

    return (
    <form className="form-cart" onSubmit={handleSubmit}>
       {/*  <h1>Complete sus datos:</h1> */}
        
        <label>Nombre</label>
        <input 
        placeholder='nombre'
        type='text'
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />

        <label>Email</label>
        <input 
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

        <label>Telefono</label>
        <input 
        value={phone}
        type='text'
        onChange={(e)=> setPhone(e.target.value)}
        placeholder='telefono'
        />

        <button className="button1" type="submit">
          Finalizar la compra
        </button>
    </form>
  )
}

export default FormCart