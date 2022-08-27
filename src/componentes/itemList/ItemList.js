import React from 'react'
// import Buttons from "../Buttons/Buttons";
import Item from '../Item/Item';


const ItemList = ({items}) => {

  return (
    
    <div className='listadeproductos'>
        <h4> item list </h4>

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