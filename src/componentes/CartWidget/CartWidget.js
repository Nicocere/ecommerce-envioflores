import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {HiOutlineShoppingBag} from '@react-icons/all-files/hi/HiOutlineShoppingBag'

const CartWidget = ({count}) => {
  
  
  console.log("count de cartwhidegt", count)

  return (
   
 
      <button className="boton-abrircarrito"><p className="shopCart">Shopping Cart</p>
    
        <span ><HiOutlineShoppingBag/></span>
    
    <span className="contadorCarrito"> {} </span>
    
    
     </button>
  )
}

export default CartWidget
