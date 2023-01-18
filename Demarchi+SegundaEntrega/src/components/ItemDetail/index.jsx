import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const ItemDetail = ({ listProduct }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={listProduct.imagen}
          alt={listProduct.nombre}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{listProduct.nombre}</Heading>
          <Text>
            {listProduct.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${listProduct.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant='ghost' colorScheme='green'>
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}

export { ItemDetail }