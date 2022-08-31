import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const CartWidget = ({count}) => {
  
  
  console.log("count de cartwhidegt", count)

  return (
   
 
      <button className="boton-abrircarrito"><p className="shopCart">Shopping Cart</p>
    
        <span className="material-symbols-outlined">shopping_cart</span>
    
    <span className="contadorCarrito"> {count} </span>
    
    
     </button>
  )
}

export default CartWidget
