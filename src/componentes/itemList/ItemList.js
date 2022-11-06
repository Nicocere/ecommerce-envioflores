import React, { useEffect } from 'react'
import Item from '../Item/Item';


const ItemList = ({items, prodEncontrado}) => {
  
  console.log("prodencontrado", prodEncontrado)

  useEffect(()=>{
    
  }, [])

 

  return (
    
    
    <div className='listadeproductos'>
      
            {
              prodEncontrado === undefined   ?
              items.map((items)=>{
                return (
                  <Item items={items} key={items.id}/>
                )
              }) : prodEncontrado[0].map(itemFilter=>{
                // console.log("itemfilter", itemFilter)
                return (
                  <Item items={itemFilter} key={itemFilter.id}/>
                )
              })
            
            }
      
    </div>
 )
}

export default ItemList