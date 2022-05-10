import ItemCount from "./ItemCount"

const Item = ({id,title,price,img}) => {
  return (
    <article>
      <h1>{title}</h1>
      <img src={img}></img>
      <p>${price}</p>
      <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos fueron agregados al carrito`)} />

    </article>
  )
}

export default Item