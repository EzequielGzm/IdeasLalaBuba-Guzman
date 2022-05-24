import { createContext,useContext,useState } from "react";

export const CartContext = createContext([]);

export function useCartContext(){
  return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
  // estados y funciones globales
  const [cartList, setCartList] = useState([]);

  
  const isInCart =(id)=>{
    const findId = cartList.find(item => item.id === id)
    return findId
  }
  const addItem =(item)=>{
    setCartList([
      ...cartList, 
      item
    ])
   }
  const deleteCart=()=>{
    setCartList([])
    
  }   
      
   
  return (
    <CartContext.Provider value={{
       cartList,
       addItem,
       deleteCart
   }}>
     
     {children}
   </CartContext.Provider>
  );
};

export default CartContextProvider;


/* isInCart, addToCart, deleteCart, deleteItem, totalPrice, totalQty FUNCIONES A HACER*/
