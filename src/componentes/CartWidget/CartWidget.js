import React, { useContext } from 'react'
import {HiOutlineShoppingBag} from '@react-icons/all-files/hi/HiOutlineShoppingBag'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  
  const { cart, cartStorage } = useContext(CartContext);
  console.log("CART N°", cart)
  console.log("cartStorageS N°", cartStorage)
  return (
    <button className="boton-abrircarrito">
      <span ><HiOutlineShoppingBag/></span>
      <span className="contadorCarrito"> {cartStorage ? cartStorage.length : cart.length} </span>     
    </button>
  )
}

export default CartWidget
