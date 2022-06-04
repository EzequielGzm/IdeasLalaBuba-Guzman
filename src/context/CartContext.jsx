import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore"


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
  // Generar nueva orden en carrito
  function newOrder() {
    let order = {};
    let dateBuyer= new Date()

    order.buyer ={name:'Ricardo', email:'ricardokpo@gmail.com', phone:'1133003300'}
    order.total= totalPrice()
    order.product = cartList.map(product =>{
      let id = product.id
      let name = product.title
      let price = product.price * product.qty
      let date = dateBuyer
      return {id,name,price,date}
    })
    console.log(order);
    
    const db = getFirestore()
    const queryCollection = collection(db,'orders')
    addDoc(queryCollection, order)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(()=> deleteCart())
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
        newOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

/* isInCart, addToCart, deleteCart, deleteItem, totalPrice, totalQty FUNCIONES A HACER*/
