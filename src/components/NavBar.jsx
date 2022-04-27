import React from "react";
import logo from "../img/logo1.png"
import user from "../img/user.png"
import './NavBar.css';


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
             <ul className="nav">
               <li><a href="/">Inicio</a></li>  
               
               <li><a href="/">Productos</a></li>  
               
               <li><a href="/">Contacto</a></li>  
             </ul>
          </nav>
             <div className="user-container">
             <img className="header-img" src={user} alt="user"/>
             <button style={{fontSize:13}}>Iniciar sesión</button>
             </div>
        
      </header>
      
       
    )
}
export default NavBar

