import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(0);

    

  
  useEffect (() => {});

    
    const sumar = () => {
      count < stock ? setCount( count + 1) : alert ("maximo stock");
    }

    const restar = () => {
      count > initial ?  setCount (count - 1) : alert ("Ya esta vacio");
    }


  return (
    <div className='btnAgregarQuitar'>

      {/* botones */}
        <button onClick={sumar} className="button-add">+</button>
        <button onClick={restar} className="button-quit">-</button>

        <button onClick={onAdd} className="agregarAlCarrito"> Agregar al carrito</button>
        
    {/* contador */}
        <p>Cantidad: {count}</p>

    </div>
  )
}

export default ItemCount