import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import Dropdown from "./Dropdown";
import logo from "../assets/img/logo1.png"
import '../assets/css/NavBar.css'

function NavBar() {
    return (
      
      <header className="header">
          <div className="logo">
            <Link className="logo" to="/"><img src={logo} alt="logo"/></Link>
          </div>
            <h1>IDEAS LALA BUBA</h1>
          <nav>
             <ul >
              
               <Dropdown/>
               <Link to="/contacto"> Contacto</Link> 
               
             </ul>
   
          </nav>
         
             <div className="user-container">
             <CartWidget/>
             <UserWidget/>
             
             </div>
        
      </header>
      
       
    )
}

export default NavBar

