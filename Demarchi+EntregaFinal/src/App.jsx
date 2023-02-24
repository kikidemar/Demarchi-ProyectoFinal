import * as React from 'react';
import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContextProvider } from "./context/CartContext";

import './App.css';

function App() {

  return (
    <CartContextProvider>
      <Container width="100%" maxWidth="100vw" padding={0}>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda!'/>} />
          <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenidos a la tienda!' />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='category/:product/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element = {<Cart />}/>
        </Routes>
      </Container>
    </CartContextProvider>
  )
}

export default App
