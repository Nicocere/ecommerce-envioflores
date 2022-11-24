import React, {useCallback, useEffect} from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [cartStorage, setCartStorage] = useState([])
    const [ finalPrice, setFinalPrice ] = useState(0)

    console.log("cartStorage",cartStorage)

    const cartLocalStorage = localStorage.getItem('carrito');

    const cartParse =  JSON.parse(cartLocalStorage)
    // console.log("cartLocalStorage",cartLocalStorage)
    // console.log("cartParse", cartParse)

    
    
    // LOCALSTORAGE
    
    const initLocalStorage = () =>{
        !cartLocalStorage && localStorage.setItem('carrito', JSON.stringify(cart))
    }
    
useEffect(() => {
    initLocalStorage()
            
        if(cart.length !== 0){
                setCartStorage(JSON.parse(cartLocalStorage))
            }

        if (cart.length === 0) {
                localStorage.setItem('carrito', null)
            }   
    }, [ cartLocalStorage])


    // AÑADIR ITEM
    const addToCart = (item, cantidadItem, colorElegido,  tamaño, precio) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidadItem,  tamaño, precio);
        } else {
            setCart([...cart, { ...item, cantidadItem, colorElegido, tamaño, precio}]);
            localStorage.setItem('carrito', JSON.stringify([...cart, { ...item, cantidadItem, colorElegido, tamaño, precio}]))
        }
    };

    // AÑADIR ADICIONAL

    const addAdicional = (itemAdicional, totalAdicionales, cantidadItem, tamaño, precio) =>{
        console.log("ITEM ADD ADICIONAL", itemAdicional)
        console.log("TOTAL ADICIONAL ADD", totalAdicionales)

        if(isInCartAdicional(itemAdicional.id)){
            sumarAdicional(itemAdicional, totalAdicionales, cantidadItem)
        }else{

            setCart ([...cart, {...itemAdicional,totalAdicionales, cantidadItem, tamaño, precio}])
            // localStorage.setItem('carrito', JSON.stringify([...cart, {...itemAdicional,totalAdicionales, cantidadItem, tamaño, precio}]))
        }
    }


    const isInCartAdicional = (id) =>{
       return cart.some((adic)=> adic.id === id)
    }

    const sumarAdicional = (itemAdicional, cantidadItem) => {

       const adicionalActualizado = cart.map((adic)=> {
            if(adic.id === itemAdicional.id){
                const adicActualizado = {
                    ...itemAdicional,
                    cantidadItem: adic.cantidadItem + cantidadItem
                };
                return adicActualizado;

            } else{
                return itemAdicional;
            }
         });
        setCart(adicionalActualizado);
        // localStorage.setItem('carrito', JSON.stringify(adicionalActualizado))
    };


    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id);
    };

    const totalPrecio = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidadItem * prod.precio;
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
        // localStorage.setItem('carrito', JSON.stringify(carritoActualizado))
    };

    const eliminarProd = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
        // localStorage.setItem('carrito', JSON.stringify(carritoFiltrado))
    };

    const cantidadProducto = (id) => {
        const producto = cart?.find((prod) => prod.id === id);
        return producto?.cantidadItem;
    };


    const clearCart = () => {
        setCart([]);
        setCartStorage([])
    
    };

    // PRECIO FINAL 
    const totalPriceLocation = (priceAllInclusive) => {
        setFinalPrice (priceAllInclusive)

    }

    return (
        <CartContext.Provider
        value={{
            cart,
            cartStorage,
            addToCart,
            addAdicional,
            eliminarProd,
            cantidadProducto,
            totalPrecio,
            clearCart,
            totalPriceLocation,
            finalPrice
             }}>

                 {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
