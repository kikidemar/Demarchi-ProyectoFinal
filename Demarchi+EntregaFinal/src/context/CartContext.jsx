import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider ({ children }){

    const [listaCarrito, setListaCarrito] = useState([])

    const inCart = (id) => listaCarrito.find(prod => prod.id === id)

    const agregarAlCarrito = (item, cantidad) => {
        if (inCart(item.id)){
            const newCart = listaCarrito.map(prod => {
                if (prod.id === item.id){
                    const newCantidad = prod.cantidad + cantidad
                    return {...prod, cantidad: newCantidad}
                } else{
                    return prod
                }
            })
            setListaCarrito(newCart)
        } else {
            const newProduct = {...item, cantidad: cantidad}
            setListaCarrito([...listaCarrito, newProduct])
        }
    }


        const vaciarCarrito = () => {setListaCarrito([]) 
          Swal.fire({
             title: 'Carrito vacio',
             text: "No hay productos en tu carrito.",
             icon: 'error',
             confirmButtonText: 'ok',
             timer: 3000,

          })}

        const finalizarCompra = () => {
        
        Swal.fire({
            title: 'Compra Finalizada',
            text: 'Gracias por su compra! Que tenga un fantástico día.',    
            icon: 'success',
            confirmButtonText: 'Ok',
        })
    
        setListaCarrito([])
        
    }




        const quitarProducto = (id) => {setListaCarrito(listaCarrito.filter(prod => prod.id != id ))
        Swal.fire({
            icon: 'error',
            title: 'Producto removido',
            text: 'Has quitado un producto de tu carrito'
          })}


        const precioTotal = () =>{
            return listaCarrito.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
        } 
        const cantidadTotal = () =>{ 
            return listaCarrito.reduce((acc, prod) => acc += prod.cantidad, 0)
        }


        const carritoVacio = () => setListaCarrito([])
        

    return(
        <CartContext.Provider value={{
            agregarAlCarrito,
            quitarProducto,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            carritoVacio,
            listaCarrito,
            finalizarCompra
        }}>
            {children}
        </CartContext.Provider>
    )


}


export default CartContext