import { CartContext } from '../../context/CartContext';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from '@react-icons/all-files/fa/FaTrashAlt';
import Form from '../Form/Form';


const Cart = () => {
    const { cart, clearCart, eliminarProd, totalPrecio} = useContext(CartContext);
    const [idCompra, setIdCompra] = useState('');
    const total = totalPrecio();
    console.log("CART EN CART ",cart);


    const itemSelected = cart.map((item)=> {
        console.log("cart item selected PRECIO ELEGIDO", typeof Number(item.precioElegido));
        const precio = Number(item.precioElegido);
        const precioTamaño = item.opciones.find((tam)=> tam.precio === precio)
        console.log("SIZE SELECTED", precioTamaño)

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
    console.log("item selected", itemSelected)


    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }

    if (cart.length === 0) {
        return (
            <h1 className='cartVacio'>
                Aún no agregaste ningun producto.. 
                Puedes dirigirte al <Link to="/">Home</Link>{' '}
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
                            <FaTrashAlt/> Eliminar
                        </button>
                    </div>
                ))
                
            }
            <button className='btn-clear' onClick={clearCart}>Eliminar Todo</button>
         
            <h2 className='totalPrecio'>Total: $ {total}</h2>


            <div>
            <h3>Ingrese los datos de envío para confirmar la entrega.</h3>
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