import React from 'react'
import { VStack, Button, Text, Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Item = ( { product }) => {
  return (
    <VStack boxShadow='lg' p='6' rounded='md' bg='white' m='15px' minWidth='275px'>
      <Image src={product.imagen} alt={product.nombre} w='200px' />
      <Text>{product.nombre}</Text>
      <Text>${product.precio}</Text>
      <Button colorScheme='red' size='xs'>
        <NavLink to={`product/${product.id}`}>Ver detalle</NavLink>
      </Button>

    </VStack>
  )
}

export { Item }