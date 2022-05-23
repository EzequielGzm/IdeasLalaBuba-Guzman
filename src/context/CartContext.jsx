import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children})=> {
 // estados y funciones globales
  const [cartList,setCartList] = useState([])  
  console.log(setCartList);
  return(
  <CartContext.Provider value={cartList}>
     {children}
  </CartContext.Provider>
  )
}

export default CartContextProvider;