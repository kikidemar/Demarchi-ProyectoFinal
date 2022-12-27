import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header>
        <Encabezado />
      </header>
      <main>
        <ItemListContainer greeting={"Bienvenidos a la tienda!"}/>
      </main>
    </div>
  )
}

export default App
