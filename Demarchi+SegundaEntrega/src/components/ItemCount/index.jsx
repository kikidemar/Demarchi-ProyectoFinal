import React, { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = (initial, stock, onAdd) => {

  const [count, setCount] = useState(1)

  const increase = () => count < stock ? setCount(count+1) : false
  const decrease = () => count > initial ? setCount(count-1) : false

  return (
    <HStack>
      <Button variant='ghost' colorScheme='red' size='sm' onClick={decrease}>-</Button>
      <Text>{count}</Text>
      <Button variant='ghost' colorScheme='red' size='sm' onClick={increase}>+</Button>
      <Button colorScheme='red' size='sm'>Agregar al carrito</Button>
    </HStack>
  )
}

export { ItemCount }