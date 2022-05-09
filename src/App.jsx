import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
/* import Contador from './components/ItemCount' */


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
    </div>
  )
}
export default App
