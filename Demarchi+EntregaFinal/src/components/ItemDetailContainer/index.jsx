import {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../db/firebase-config"

const ItemDetailContainer = () => {

const [listProduct, setListProduct] = useState({})  
const [loading, setLoading] = useState([true])
const { id } = useParams()


useEffect(()=> {
  setLoading(true)

const productsCollection = collection(db, "products");
const firestore = getDocs(productsCollection);

  firestore.then((snapshot) => {
    const productos = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
      setListProduct(productos.find(item=> item.id === id))
      setLoading(false)     
    })
},[id])

  return (
    <>
      {!loading ?
      <ItemDetail listProduct={listProduct} /> 
      :
      <Spinner size='xl'/>
      }
    </>
  )
}

export default ItemDetailContainer