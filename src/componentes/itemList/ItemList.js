import React from 'react'
import Item from '../Item/Item';


const ItemList = ({items}) => {

  return (
    
    <div className='listadeproductos'>
            {
              items.map((items)=>{
                return (
                  <Item items={items} key={items.id}/>
                )
              })
            }
      
    </div>
 )
}

export default ItemList