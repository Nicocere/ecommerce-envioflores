import React from 'react'
import Buttons from '../Buttons/Buttons'

const Item = ({items}) => {
    
  return (
    <div className="product-item">
                       
        <img src={items.img} alt=""/>
        <h4 className="tituloProducto">{items.nombre}</h4>

        <Buttons items={items} key={items.id}  />

    </div>
  )
}

export default Item