
import logo from "../assets/img/logo1.png"
import '../assets/css/NavBar.css'
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { Link } from "react-router-dom";
const categoria = {id:"1", name:'Tocadores'}

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
               
               <Link to={`/category/${categoria.id}`}>Productos</Link>  
               
               <li><a href="/">Contacto</a></li>  
             </ul>
          </nav>
         
             <div className="user-container">
             <CartWidget/>
             <UserWidget/>
             <button style={{fontSize:13}}>Iniciar sesión</button>
             </div>
        
      </header>
      
       
    )
}
export default NavBar

