import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = (item) => {
    const { cart, clearCart, eliminarProd, totalPrecio} = useContext(CartContext);

    const total = totalPrecio();

    console.log("CART EN CART",cart);
    return (
        <div style={{ display: 'block', justifyContent: 'center', marginTop:'50px' }}>
            {
                cart.map((prod)=> (
                    <div  className='prodInCart' key={prod.id}>
                        <img className='imgInCart' src={prod.img} alt="imagen producto en carrito"/>
                        <h4> {prod.nombre}</h4>
                        <p>Cantidad:{prod.cantidad}</p>
                        <p>Precio: ${prod.precio}</p>

                        <button onClick={() => eliminarProd(prod.id)}>
                            Eliminar Producto
                        </button>

                        <h2>Total: $ {total}</h2>
                    </div>
                ))
            }
        
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};
export default Cart;