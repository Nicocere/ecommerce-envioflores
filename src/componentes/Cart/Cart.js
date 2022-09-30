import { CartContext } from '../../context/CartContext';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from '@react-icons/all-files/fa/FaTrashAlt';
import Form from '../Form/Form';


const Cart = () => {
    const { cart, clearCart, eliminarProd, totalPrecio} = useContext(CartContext);
    const [idCompra, setIdCompra] = useState('');
    const total = totalPrecio();


    const itemSelected = cart.map((item)=> {
        const precio = Number(item.precioElegido);
        const precioTamaño = item.opciones.find((tam)=> tam.precio === precio)

        return{
            id: item.id,
            img: item.img,
            cantidad: item.cantidadItem,
            precioUnidad: item.precioElegido,
            nombreProducto: item.nombre,
            color: item.colorElegido,
            tamaño: precioTamaño.tamaño,
            precioCantidad: item.cantidadItem * item.precioElegido,
            tipo: item.tipo

        }
    })


    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return (
            <>
            <h2 className='compraFinalizada'>Gracias por comprar tu id es: </h2>
            <h1 className='idCompra'> {idCompra} </h1>
            </>
        )
    }

    if (cart.length === 0) {
        return (
            <h1 className='cartVacio'>
                Aún no agregaste ningun producto.. 
                Puedes dirigirte al <Link to="/" className='cart-home'>Inicio</Link>{' '}
                para buscar agregar algún producto
            </h1>
        );
    }

    return (
        <div className='cart'>
            { 
                itemSelected.map((prod)=> (
                    <div  className='prodInCart' key={prod.id}>
                        <img className='imgInCart' src={prod.img} alt="imagen producto en carrito"/>
                        <h4 className='detailsInCart'> {prod.nombreProducto}</h4>
                        <p className='detailsInCart'>Cantidad:{prod.cantidad}</p>
                        <p className='detailsInCart'>Color: {prod.color}</p>
                        <p className='detailsInCart'>Tamaño: {prod.tamaño}</p>
                        <p className='detailsInCart'>Precio: ${prod.precioCantidad}</p>

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
                />
            
            </div>
           

        </div>
    );
};
export default Cart;