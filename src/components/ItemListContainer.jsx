import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, where, getFirestore, query} from "firebase/firestore"
import ItemList from "./ItemList";
import "../assets/css/ItemListContainer.css";

import Carrousel from "./Carrousel";




const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {cat} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db,'productos')
    const queryCollectionFilter = cat ? query(queryCollection, where("category","==", cat)): queryCollection
    
    getDocs(queryCollectionFilter)
    .then((res)=> setProducts( res.docs.map(el => ({ id: el.id, ...el.data() } ) ) ) )
    .catch((err)=>console.log(err))
    .finally(() => setLoading(false));
}, [cat])

  return (
    <div >
      {loading ? 
        
        <h1>Cargando productos...</h1>
      : 
      <div>
       <Carrousel/>
       <ItemList products={products} ></ItemList>
   
      </div>
       }
    </div>
  )
};

export default ItemListContainer;
