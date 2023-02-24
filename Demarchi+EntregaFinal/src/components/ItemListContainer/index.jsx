import { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { Spinner } from '@chakra-ui/react'
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../db/firebase-config"


const ItemListContainer = ({greeting}) => {

const [listProduct, setListProduct] = useState([])
const [loading, setLoading] = useState([true])

const { category } = useParams()


  useEffect(() => {
    setLoading(true)
    const productsCollection = collection(db, "products");
    const firestore = getDocs(productsCollection);

    firestore.then((snapshot) => {
      const productos = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
        if(category){
        setLoading(false)
        setListProduct(productos.filter(prod => prod.category === category))
        } else{
          setLoading(false)
          setListProduct(productos)
        }
      })
      .catch((err) => {
        console.log(err);
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