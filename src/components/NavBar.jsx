import logo from "../assets/img/logo1.png"
import '../assets/css/NavBar.css'
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";



function NavBar() {
    return (
      
      <header className="header">
          <div className="logo">
            <a href="/"><img src={logo} alt="logo"/></a>
          </div>
            <h1>IDEAS LALA BUBA</h1>
          <form id="form">
          <input type="search" placeholder="Buscar productos..."/>
          </form>
          
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

