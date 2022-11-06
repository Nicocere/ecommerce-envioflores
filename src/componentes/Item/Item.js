import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({items}) => {
    
  // console.log("ITEMS ITEM", items)
  return (
    <div className="product-item">  

         
          <Link to={`/detail/${items.id}`} className="link-producto">
            <img src={items.img} alt=""/>
            <h4 className="tituloProducto">{items.nombre}</h4>       
          </Link>
          
          <Link to={`/detail/${items.id}`} className="link-producto">
            <button className='btn-verMas'>Ver Más</button>
        
          </Link>
    </div>
  )
}

export default Item