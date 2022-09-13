import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, clearCart, eliminarProd, totalPrecio, colorElegido, tamañoPrecioElegido} = useContext(CartContext);

    const total = totalPrecio();

    console.log("CART EN CART PRECIOO",cart);

    
    return (
        <div style={{ display: 'block', justifyContent: 'center', marginTop:'50px' }}>
            {
                cart.map((prod)=> (
                    <div  className='prodInCart' key={prod.id}>
                        <img className='imgInCart' src={prod.img} alt="imagen producto en carrito"/>
                        <h4 className='detailsInCart'> {prod.nombre}</h4>
                        <p className='detailsInCart'>Cantidad:{prod.cantidadItem}</p>
                        <p className='detailsInCart'>Color: {prod.colorElegido}</p>
                        <p className='detailsInCart'>{prod.tamañoPrecioElegido}</p>

                        <button onClick={() => eliminarProd(prod.id)}>
                            Eliminar Producto
                        </button>

                       
                    </div>
                ))
            }
         
            <h2>Total: $ {total}</h2>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};
export default Cart;