import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {FaTrashAlt} from '@react-icons/all-files/fa/FaTrashAlt';


const Cart = () => {
    const { cart, clearCart, eliminarProd, totalPrecio, colorElegido, tamañoPrecioElegido} = useContext(CartContext);

    const total = totalPrecio();

    console.log("TOTAL", total)

    console.log("CART EN CART ",cart);

    
    return (
        <div className='cart'>
            {
                cart.length !== 0  ? (

                
                cart.map((prod)=> (
                    <div  className='prodInCart' key={prod.id}>
                        <img className='imgInCart' src={prod.img} alt="imagen producto en carrito"/>
                        <h4 className='detailsInCart'> {prod.nombre}</h4>
                        <p className='detailsInCart'>Cantidad:{prod.cantidadItem}</p>
                        <p className='detailsInCart'>Color: {prod.colorElegido}</p>
                        <p className='detailsInCart'>{prod.tamañoPrecioElegido}</p>

                        <button  className='btn-eliminarProd' onClick={() => eliminarProd(prod.id)}>

                            <FaTrashAlt/> Eliminar
                        </button>

                       
                    </div>
                ))
                ) : <h1 className='cartVacio'> ESTA VACIO </h1>
            }

            <button className='btn-clear' onClick={clearCart}>Eliminar Todo</button>
         
            <h2 className='totalPrecio'>Total: $ {total}</h2>
            
           

        </div>
    );
};
export default Cart;