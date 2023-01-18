import {useState, useEffect} from 'react'
import { products } from '../../utils/productos'
import { customFetch } from '../../utils/customFetch'
import { ItemDetail } from '../ItemDetail'
import { Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

const [listProduct, setListProduct] = useState({})  
const [loading, setLoading] = useState([true])

const { id } = useParams()

useEffect(()=> {
  setLoading(true)
  customFetch(products)
    .then(res =>{
      setLoading(false)
      setListProduct(res.find(item=> item.id === parseInt(id)))
    })
},[])

  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct} /> : <Spinner size='xl'/>}
    </>
  )
}

export default ItemDetailContainer