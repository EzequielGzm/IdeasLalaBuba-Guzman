
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <NavBar/>
       <Routes>
        
        <Route path='/' element ={ <ItemListContainer/> } />
        <Route path='/detail/:detalleId' element= { <ItemDetailContainer/>}/>
        <Route path='/cart' element ={ <Cart/> } />
        
       </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App
