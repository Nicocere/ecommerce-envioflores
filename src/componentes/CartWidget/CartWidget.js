import React, { useContext } from 'react'
import {HiOutlineShoppingBag} from '@react-icons/all-files/hi/HiOutlineShoppingBag'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  
  const { cart } = useContext(CartContext);

  console.log("count de cartwhidegt", cart )

  return (
   
    
      <button className="boton-abrircarrito"><p className="shopCart">Shopping Cart</p>
    
        <span ><HiOutlineShoppingBag/></span>
    
    <span className="contadorCarrito"> {cart.length} </span>
    
    
     </button>
  )
}

export default CartWidget
