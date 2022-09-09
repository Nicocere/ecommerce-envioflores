import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

//componente -> estado, efect, tener funciones que modifiquen mi estado

//crear componente

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //console.log(props);
    //estados
    //funciones
    const addToCart = (item, cantidad) => {
        //{id: 1, name: 'Producto 1'}
        // 3 ..
        //...item --> id: 1, name: 'Producto 1'
        //console.log({ ...item, cantidad });
        if (false) {
            //lo encuentro y le sumo la cantidad
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)

    //sumar cantidades del mismo producto

    //eliminar un solo producto pasandole el id

    //calcular total de unidades para el cart widget

    //calcular total precio

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
