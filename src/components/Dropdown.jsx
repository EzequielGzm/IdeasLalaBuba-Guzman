import { useState } from "react"
import { Link } from "react-router-dom"
import "../assets/css/dropdown.css"

const Dropdown = () => {
  const [drop,setDrop] = useState(false)
  
    return (

      <div className="dropdown">
      <div className="dropdown-uno" onClick={()=>setDrop(!drop)} >
       Productos
       {drop? (<ul className="dropdown-list" >
           <Link to="/category/tocadores"> <li>Tocadores </li></Link>
           <Link to="/category/alhajeros"><li>Alhajeros</li></Link>            
       </ul>): 
       null}
       </div>
       
   </div>
  )
}

export default Dropdown