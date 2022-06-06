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
            <a href="/"><img src={logo} alt="logo"/></a>
          </div>
            <h1>IDEAS LALA BUBA</h1>
          <form className="search-form">
          <input className="input-search" type="search" placeholder="Buscar productos..."/>
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

