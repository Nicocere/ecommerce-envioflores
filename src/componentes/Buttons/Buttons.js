import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Buttons = ({items}) => {

  const onAdd = ({items}) => {

    console.log( "click boton agregar pero en un ITEM", items);


   }



  return (
    <div> 
                    <h6 className="elijaTamaño">Elija un Tamaño</h6>
            
            <select  id="select" className="opcionTam"> 
    <option value="1"></option>
    <option value="2"></option>
    <option value="3"></option>
    </select>    
    <p id="precioProd" className="precioProd"> </p>

    <ItemCount stock={8} initial={0} onAdd={onAdd} />
    </div>
  )
}


export default Buttons