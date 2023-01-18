import { products } from "../../utils/productos"
import { customFetch } from "../../utils/customFetch"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { Heading } from "@chakra-ui/react"
import { ItemCount } from '../ItemCount'
import { useParams } from "react-router-dom"
import { Spinner } from '@chakra-ui/react'




const ItemListContainer = ({greeting}) => {

const [listProduct, setListProduct] = useState([])
const [loading, setLoading] = useState([true])

const { category } = useParams()


  useEffect(() => {
    setLoading(true)
    customFetch(products)
      .then(res => {
        if(category){
        setLoading(false)
        setListProduct(res.filter(prod => prod.category === category))
        } else{
          setLoading(false)
          setListProduct(res)
        }
      })
  }, [category])

  return (
    <>
    <Heading>{greeting}</Heading>
    
    {!loading
    ?
    <ItemList listProduct={listProduct} />
    :
    <Spinner size='xl'/>
    }
    </>
  )
}

export default ItemListContainer