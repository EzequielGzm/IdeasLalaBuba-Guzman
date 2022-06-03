
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'
import CartContextProvider from './context/CartContext'


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
    <div className="App">
          <NavBar/>
      
       <Routes>
        
        <Route path='/' element ={ <ItemListContainer/> } />
        <Route path='/category/:cat' element={ <ItemListContainer />} />
        <Route path='/item/:detalleId' element= { <ItemDetailContainer/>}/>
        <Route path='/cart' element ={ <Cart/> } />
       
        <Route path="/*" element={<Navigate to="/" replace/>} />
       </Routes>
    </div>
    </CartContextProvider>
    </BrowserRouter>
  )
}
export default App
