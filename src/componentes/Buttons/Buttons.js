import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Buttons = ({items}) => {

  const onAdd = (agregar) => {
    console.log( "click boton agregar pero en un ITEM", agregar);
   }

  return (
    <div> 
      <h6 className="elijaTamaño">Elija un Tamaño</h6>

              <button>BOTON QUE ABRE OPCIONES

              </button>
              <ul> Opciones
                <li>Lista opciones

                </li>
              </ul>

    <ItemCount stock={8} initial={0} onAdd={onAdd} />
    </div>
  )
}


export default Buttons