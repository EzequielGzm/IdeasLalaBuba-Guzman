import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail'

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
    <div className='article-detail'>
     {loading ? <h1>Cargando producto...</h1> : <ItemDetail item= {item}/>}
    </div>
  )
}

export default ItemDetailContainer