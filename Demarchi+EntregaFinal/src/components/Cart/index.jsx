import React from 'react'
import { Table, TableCaption, Thead, Tbody, Tr, Th, Td, Box, Button, Image, Stack } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";


const Cart = () => {

  const {listaCarrito, vaciarCarrito, precioTotal, quitarProducto, finalizarCompra} = useCartContext()


  return (
    <Box maxWidth="800px" mx="auto">
      <Table variant="simple">
        <TableCaption>Tu carrito</TableCaption>
        <Thead>
          <Tr>
            <Th>Imagen</Th>
            <Th>Producto</Th>
            <Th>Precio</Th>
            <Th>Cantidad</Th>
            <Th>Total</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {listaCarrito.map((product) => (
            <Tr key={product.id}>
              <Td><Image src={product.imagen} alt={product.nombre} width='100px'/></Td>
              <Td>{product.nombre}</Td>
              <Td>${product.precio}</Td>
              <Td>{product.cantidad}</Td>
              <Td>${product.precio * product.cantidad}</Td>
              <Td>
                <Button onClick={() => quitarProducto(product.id)}>Remove</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box mt="4" fontWeight="bold" fontSize='3xl'>
        Precio total: ${precioTotal()}
      </Box>
      <Stack>
        <NavLink as = {Link} to = '/' >
          <Button width='40' mt="4" colorScheme='green' onClick={finalizarCompra}>
          Finalizar compra
          </Button>
        </NavLink>
        <Button mt='4'width='40' colorScheme='red' onClick={vaciarCarrito}>Vaciar Carrito</Button>
      </Stack>
    </Box>
  );
}

export default Cart 