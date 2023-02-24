import { useState } from 'react'
import { HStack, Button, Text, Flex } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(1)

  const increase = () => count < stock ? setCount(count+1) : false
  const decrease = () => count > initial ? setCount(count-1) : false

  return (
    <HStack textAlign='center'>
    <Button variant='ghost' colorScheme='red' size='sm' onClick={decrease}>-</Button>
    <Text>{count}</Text>
    <Button Button variant='ghost' colorScheme='red' size='sm' onClick={increase}>+</Button>
    <Button colorScheme='red' size='sm' onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </HStack>
  )
}

export default ItemCount