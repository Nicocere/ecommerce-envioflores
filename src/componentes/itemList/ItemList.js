import React, { useEffect } from 'react'
import Item from '../Item/Item';


const ItemList = ({items, prodEncontrado}) => {
  


  useEffect(()=>{
    
  }, [])

 

  return (
    
    
    <div className='listadeproductos'>
      
            {
              prodEncontrado.length === 23 || prodEncontrado.length === undefined || prodEncontrado.length === 0  ?
              items?.map((items)=>{
                console.log("LE ENVIO : item", items)

                return (
                  <Item items={items} key={items.id}/>
                )
              }) : prodEncontrado?.map(itemFilter=>{
                console.log("LE ENVIO : itemfilter", itemFilter)
                return (
                  <Item items={itemFilter} key={itemFilter.id}/>
                )
              })
            
            }
      
    </div>
 )
}

export default ItemList