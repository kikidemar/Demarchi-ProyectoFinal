import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NavLink from 'react-bootstrap/esm/NavLink'
import {useCartContext} from '../../context/CartContext'

const CartWidget = () => {

  const {cantidadTotal} = useCartContext()

  return (
    <NavLink as= {Link} to="/cart">
      <Text fontSize='20px'>🛒</Text>
      <Text fontSize='xs'>{cantidadTotal()}</Text>
    </NavLink>
  )
}

export default CartWidget