import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);

export function useCartContext() {
  return useContext(CartContext);
}

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  // Verificando id del producto a agregar
  const isInCart = (id) => {
    const findId = cartList.find((item) => item.id === id);
    return findId;
  };
// Agregar producto al carrito
  const addItem = (item) => {
    isInCart(item.id)
      ? setCartList(
          cartList.map((prod) => {
            if (prod.id === item.id) {
              prod.qty += item.qty;
            }
            return prod;
          })
        )
      : setCartList([...cartList, item]);
  };
// Vaciar Carrito
  const deleteCart = () => {
    setCartList([]);
  };
// Borrar producto de carrito
  const removeItem = (id)=>{
    setCartList(cartList.filter(el => el.id !== id))
  }
// Cantidad de productos en el carrito
  const totalQty = ()=>{
    return cartList.reduce((count,prod)=> count += prod.qty,0)
  }
  //Precio total del carrito
  const totalPrice = () =>{
    return cartList.reduce((count,prod)=> count + (prod.price * prod.qty),0)
  }
  
  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        deleteCart,
        isInCart,
        removeItem,
        totalQty,
        totalPrice,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

