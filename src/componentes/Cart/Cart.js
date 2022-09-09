import React from 'react';
import Form from '../Form/Form';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form';

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    console.log(cart);
    return (
        <div style={{ display: 'block', justifyContent: 'center' }}>
            <Form />
            {/* <Form /> */}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};
export default Cart;