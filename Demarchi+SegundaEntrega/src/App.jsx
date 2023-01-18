import * as React from 'react'
import { Container } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {

  return (
    
    <Container width="100%" maxWidth="100vw" padding={0}>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda!'/>} />
        <Route path='/category/:category' element={<ItemListContainer greeting='Bienvenidos a la tienda!' />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='category/:product/product/:id' element={<ItemDetailContainer />} />
      </Routes>
      </Container>
  )
}

export default App
