import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getDetailById } from "../data/products"
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
 
  const [item,setItems]= useState({})
  const {detalleId} = useParams()
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, 'productos', detalleId)
    getDoc(dbQuery)
    .then(res => setItems({id: res.id, ...res.data() } ) ) 
     .catch((error)=> console.log(error)) 
     .finally(() => setLoading(false));
    },[detalleId])
     
    return (
    <div>
     {loading ? <h1>Cargando producto...</h1> : <ItemDetail item= {item}/>}
    </div>
  )
}

export default ItemDetailContainer