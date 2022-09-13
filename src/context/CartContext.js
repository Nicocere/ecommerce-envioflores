import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

//componente -> estado, efect, tener funciones que modifiquen mi estado

//crear componente

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item, cantidad) => {
  
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
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
            console.log("ACUMULADOR ", prod)
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    //sumar cantidades del mismo producto
    const sumarCantidad = (item, cantidad) => {
        const carritoActualizado = cart.map((prod)=> {
            if(prod.id === item.id){ 
                const prodActualizado = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad
                };
                return prodActualizado;

            } else{
                return prod;
            }
        });
        setCart(carritoActualizado);
    };

    // const totalQuantitySingleProduct = (item, cantidad) => {
    //     const updateProducts = cart.map((prod) => {
    //         if (prod.id === item.id) {
    //             const productUpdated = {
    //                 ...prod,
    //                 cantidad: cantidad,
    //             };

    console.log("esto es el carrt", cart)

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
        return producto?.cantidad;

    }

    //calcular total precio

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
        value={{ 
            cart,
            addToCart, 
            clearCart, 
            eliminarProd,
            cantidadProducto,
            totalPrecio,
            totalCantidad,
             }}>  
                
                 {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
