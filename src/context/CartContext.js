import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item, cantidadItem, colorElegido, precioElegido) => {
            
        if (isInCart(item.id)) {

            sumarCantidad(item, cantidadItem, precioElegido);
        } else {
            setCart([...cart, { ...item, cantidadItem, colorElegido, precioElegido }]);
        }
    };
    
    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id);
    };

    const totalPrecio = () => {
        let acumulador = 0;
        cart.forEach((prod) => {    
            acumulador += prod.cantidadItem * prod.precioElegido;
        });
        return acumulador;
    };

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

    const eliminarProd = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    };

    const cantidadProducto = (id) => {
        const producto = cart.find((prod) => prod.id === id);
        return producto?.cantidadItem;
    };

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
            clearCart, 
             }}>  
                
                 {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
