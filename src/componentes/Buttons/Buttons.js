import React from 'react'
import Counter from '../Counter.js/Counter'

const Buttons = () => {
  return (
    <div> 
                    <h6 className="elijaTamaño">Elija un Tamaño</h6>
            
            <select  id="select" className="opcionTam"> 
    <option value="1"></option>
    <option value="2"></option>
    <option value="3"></option>
    </select>    
    <p id="precioProd" className="precioProd"> </p>

    <Counter/>
    </div>
  )
}

export default Buttons