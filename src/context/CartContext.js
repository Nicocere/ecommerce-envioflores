import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

        console.log("esto es el carrt ", cart)

     




    const addToCart = (item, cantidadItem, colorElegido, tamañoPrecioElegido) => {
  
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            sumarCantidad(item, cantidadItem, tamañoPrecioElegido);
        } else {
            setCart([...cart, { ...item, cantidadItem, colorElegido, tamañoPrecioElegido }]);
        }
    };
    
   
    // corroborar si el producto ya está en el carrito (isInCart)
    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id);
    };

    //calcular total precio del carrito
    const totalPrecio = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            
            acumulador += prod.cantidadItem * prod.tamañoPrecioElegido;
        });
        return acumulador;
    };

    //sumar cantidades del mismo producto
    const sumarCantidad = (item, cantidadItem) => {
        const carritoActualizado = cart.map((prod)=> {
            if(prod.id === item.id){ 
                const prodActualizado = {
                    ...prod,
                    cantidadItem: prod.cantidadItem + cantidadItem
                };
                return prodActualizado;

            } else{
                return prod;
            }
        });
        setCart(carritoActualizado);
    };

    //eliminar un solo producto pasandole el id

    const eliminarProd = (id) => {
        console.log( ` eliminando este producto ${id}`);
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    };

    //calcular total de unidades para el cart widget

    const totalCantidad = () => {};

    const cantidadProducto = (id) => {
        const producto = cart.find((prod) => prod.id === id);
        return producto?.cantidadItem;

    }

    //Obtener los Formularios de las opciones

    // const optionSelected = () => {

    // };

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
        value={{ 
            cart,
            addToCart, 
            eliminarProd,
            cantidadProducto,
            totalPrecio,
            totalCantidad,
            clearCart, 
             }}>  
                
                 {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
