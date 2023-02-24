import React from 'react'
import { Card, Button, CardBody, Text, CardFooter, Stack, Heading, Image, HStack, Box, Center } from '@chakra-ui/react'
import { useState } from 'react'
import NavLink from 'react-bootstrap/esm/NavLink'
import ItemCount from '../ItemCount'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ listProduct }) => {

  const {imagen , nombre, descripcion, precio} = listProduct

  const [estaAgregado, setEstaAgregado] = useState(false)

  const {agregarAlCarrito} = useCartContext()

  const onAdd = (cantidad) => {
    agregarAlCarrito(listProduct, cantidad)
    setEstaAgregado(true)

   }

   return (
    <Card
  bgGradient='linear(to-r, gray.100, blue.100)'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src={imagen}
    alt={nombre}
  />

  <Stack>
    <CardBody>
      <Heading>{nombre}</Heading>
      <Text fontSize='2xl' py='10' fontWeight='semibold' fontFamily='merriwather'>{descripcion}</Text>
      <Text fontSize='3xl' m='4' fontWeight='bold' color='blackAlpha.700' fontFamily='merriwather'>$ {precio}</Text>
    </CardBody>
    <CardFooter>
    {
      estaAgregado ?
        <HStack>
          <Center>
            <NavLink as= {Link} to="/">
              <Button colorScheme='blue' size='sm'>Continuar comprando</Button>
            </NavLink>
          </Center>
          <Center>
            <Box as='span' p='4'>
              <NavLink as= {Link} to="/cart">
                <Button colorScheme='blue' size='sm'>Ir al carrito</Button>
              </NavLink>
            </Box>
          </Center>
        </HStack>
       :
       <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    }
    </CardFooter>
  </Stack>
</Card>
  )
}

export { ItemDetail }