import React, {useState, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    let maximoProd = 5
    let minimoProd = 0

  
  useEffect (() => {});

    
    const sumar = () => {
      count < maximoProd ? setCount( count + 1) : alert ("maximo stock");
    }

    const restar = () => {
      count > minimoProd ?  setCount (count - 1) : alert ("Ya esta vacio");
    }


  return (
    <div className='btnAgregarQuitar'>

      {/* botones */}
        <button onClick={sumar} className="button-add">+</button>
        <button onClick={restar} className="button-quit">-</button>

        <button onClick={sumar} className="agregarAlCarrito"> Agregar al carrito</button>
        
    {/* contador */}
        <p>Cantidad: {count}</p>

    </div>
  )
}

export default Counter