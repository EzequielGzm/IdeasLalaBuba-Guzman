import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ideas LALA BUBA en construcción...</p>
        <ItemListContainer greetings={"Hola! Voy a ser una página genial... solo esperá "}/>
      </body>
    </div>
  )
}

export default App
