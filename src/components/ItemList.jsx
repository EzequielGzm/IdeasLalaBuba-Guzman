import Item from "./Item"
import ItemCount from './ItemCount'

const ItemList = () => {
  return (
    <div className="container-main">
    <article>
    <Item greetings="Producto 1" />
    <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos fueron agregados al carrito`)} />
    </article>
    <article>
      <Item greetings="Producto 2"/>
      <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos fueron agregados al carrito`)} />
    </article>
    <article>
      <Item greetings="Producto 3"/>
      <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos fueron agregados al carrito`)} />
    </article>
    </div>
  )
}

export default ItemList