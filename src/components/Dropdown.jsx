import { useState } from "react"
import { Link } from "react-router-dom"
import "../assets/css/dropdown.css"

const Dropdown = () => {
  const [drop,setDrop] = useState(false)
  
    return (

    <div className="dropdown">
       <div className="dropdown-menu" onClick={()=>setDrop(!drop)} >
        Productos
        {drop? (<ul className="dropdown-list" >
            <Link to="/category"> <li>Tocadores </li></Link>
            <Link to="/cart"><li>Alhajeros</li></Link>            
        </ul>): 
        null}
        </div>
        
    </div>
  )
}

export default Dropdown