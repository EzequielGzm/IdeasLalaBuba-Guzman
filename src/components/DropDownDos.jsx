import {Dropdown,DropdownToggle,DropdownMenu} from "reactstrap" 
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"


const DropDownDos = () => {
  
  const [dropdown,setDropdown] = useState(false)
    
  const openClose=()=>{
      setDropdown(!dropdown)
  }
  
  return (
    <div>
    <Dropdown isOpen={dropdown} toggle={openClose} size="lg">
    <DropdownToggle>
        Productos
    </DropdownToggle>
    
    <DropdownMenu>
    <Link to="/cart">Tocadores</Link>
    
    </DropdownMenu>
    </Dropdown>
    </div>
  )
}

export default DropDownDos