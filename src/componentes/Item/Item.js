import React from 'react'
import Buttons from '../Buttons/Buttons'
import {Link} from 'react-router-dom'

const Item = ({items}) => {
    
  return (
    <div className="product-item">
                       
        <img src={items.img} alt=""/>
        <h4 className="tituloProducto">{items.nombre}</h4>

        <Buttons items={items} key={items.id}  />
       
        <Link to={`/detail/${items.id}`}>
          
        <button>Ver Más</button>
        
        </Link>

    </div>
  )
}

export default Item