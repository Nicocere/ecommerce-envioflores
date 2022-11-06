import { CartContext } from '../../context/CartContext';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from '@react-icons/all-files/fa/FaTrashAlt';
import Form from '../Form/Form';


const Cart = () => {
    const { cart, clearCart, eliminarProd, totalPrecio} = useContext(CartContext);
    const [idCompra, setIdCompra] = useState('');
    const total = totalPrecio();

    console.log("cart", cart)

    const itemSelected = cart.map((item) => {
        console.log("ITEM", item)
        
        return {
        
            id: item.id,
            img: item.img,
            cantidad: item.cantidadItem,
            precioAdicional: item.precio,
            precioUnidad: item.precio,
            nombreProducto: item.nombre,
            color: item.colorElegido,
            tamaño: item.tamaño,
            tamañoAdicional: item.tamaño,
            tipo: item.tipo,
            description: item.descr
        }

    
    
    })

    console.log("item selected", itemSelected)

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return (
            <>
            <h2 className='compraFinalizada'>Gracias por comprar. </h2>
            <h2 className='compraFinalizada'>Tu id es:</h2> 
            <h1 className='idCompra'> {idCompra} </h1>
            </>
        )
    }

    if (cart.length === 0) {
        return (
            <h1 className='cartVacio'>
                El Carrito esta vacío... 
                Puedes ir al <Link to="/" className='cart-home'>Inicio</Link>{' '}
                para buscar y agregar algún producto
            </h1>
        );
    }

    return (
        <div className='cart'> 
        <h2 className='tituloProducto'>ESTOS SON LOS PRODUCTOS QUE SELECCIONO</h2>
            { 
                itemSelected.map((prod)=> (
                    <div  className='prodInCart' key={prod.id}>
                        
                    <img className='imgInCart' src={prod.img} alt="imagen producto en carrito"/>
                        
                    <div  className='divCart'>   
                        <h4 className='detailsInCart'> {prod.nombreProducto}</h4>
                    </div>

                    <div className='divCart'>
                         <p className='detailsInCart'>Cantidad:{prod.cantidad}</p>
                            
                    </div>
                    <div className='divCart'>
                        <p className='detailsInCart'>Color: {prod.color}</p>
                            
                    </div>

                    <div className='divCart'>
                        <p className='detailsInCart'>Tamaño: {prod.tamaño}</p>
                    </div>
                    <div className='divCart'>
                        <p className='detailsInCart'>Precio: ${prod.precioUnidad}</p>
                    </div>

                        <button  className='btn-eliminarProd' onClick={() => eliminarProd(prod.id)}>
                            <FaTrashAlt className='icon-eliminarProd'/> Eliminar
                        </button>
                    </div>
                ))
                
            }

            <button className='btn-clear' onClick={clearCart}>Eliminar Todo</button>
         
            <h2 className='totalPrecio'>Total: $ {total}</h2>

            <div className='formulario'>
            <h3 className='form-title'>Ingrese los datos de envío para confirmar la entrega.</h3>
            <Form  
                itemSelected={itemSelected}       
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
                // preferenceId={preferenceId}
                />
            
            

            </div>
           
        </div>
    );
};
export default Cart;