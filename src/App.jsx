
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <NavBar/>
      
       <Routes>
        
        <Route path='/' element ={ <ItemListContainer/> } />
        <Route path='/category/:id' element={ <ItemListContainer />} />
        <Route path='/item/:detalleId' element= { <ItemDetailContainer/>}/>
        <Route path='/cart' element ={ <Cart/> } />
        <Route path="/*" element={<Navigate to="/" replace/>} />
       </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App
