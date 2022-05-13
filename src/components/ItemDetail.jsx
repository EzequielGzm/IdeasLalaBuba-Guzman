
const ItemDetail = ({item}) => {
  return (
    <article>
      <h1>{item.title}</h1>
      <img src={item.img}></img>
      <p>${item.price}</p>
      </article>
  )
}

export default ItemDetail