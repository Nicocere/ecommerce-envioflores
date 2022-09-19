import { CartContext } from '../../context/CartContext';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from '@react-icons/all-files/fa/FaTrashAlt';
import Form from '../Form/Form';


const Cart = () => {
    const { cart, clearCart, eliminarProd, totalPrecio, colorElegido, tamañoPrecioElegido} = useContext(CartContext);

    const [idCompra, setIdCompra] = useState('');
    const total = totalPrecio();
    
    console.log("TOTAL", total)
    
    console.log("CART EN CART ",cart);

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }

    if (cart.length === 0) {
        return (
            <h1 className='cartVacio'>
                Aún no tenés productos, podés ir al <Link to="/">Home</Link>{' '}
                para buscar algún producto
            </h1>
        );
    }

    return (
        <div className='cart'>
            {
           

                
                cart.map((prod)=> (
                    <div  className='prodInCart' key={prod.id}>
                        <img className='imgInCart' src={prod.img} alt="imagen producto en carrito"/>
                        <h4 className='detailsInCart'> {prod.nombre}</h4>
                        <p className='detailsInCart'>Cantidad:{prod.cantidadItem}</p>
                        <p className='detailsInCart'>Color: {prod.colorElegido}</p>
                       
                        <p className='detailsInCart'>Precio: ${prod.tamañoPrecioElegido}</p>

                        <button  className='btn-eliminarProd' onClick={() => eliminarProd(prod.id)}>

                            <FaTrashAlt/> Eliminar
                        </button>

                       
                    </div>
                ))
                
            }

            <button className='btn-clear' onClick={clearCart}>Eliminar Todo</button>
         
            <h2 className='totalPrecio'>Total: $ {total}</h2>

            <Form         
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
            />
            
           

        </div>
    );
};
export default Cart;