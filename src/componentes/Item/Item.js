import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({items}) => {
    
  return (
    <div className="product-item">              
        <img src={items.img} alt=""/>
        <h4 className="tituloProducto">{items.nombre}</h4>       
          <Link to={`/detail/${items.id}`}>
          
            <button className='btn-verMas'>Ver Más</button>
        
          </Link>
    </div>
  )
}

export default Item