import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getDetailById } from "../data/products"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 
  const [item,setItems]= useState({})
  const {detalleId} = useParams()
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      getDetailById(detalleId)
      .then((res)=> setItems(res))
     .catch((error)=> console.log(error)) 
     .finally(() => setLoading(false));
    },[])
     
    return (
    <div>
     {loading ? <h1>Cargando producto...</h1> : <ItemDetail item= {item}/>}
    </div>
  )
}

export default ItemDetailContainer