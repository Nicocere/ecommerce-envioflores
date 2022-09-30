import React, {useState, useEffect} from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {
  const [count, setCount] = useState(initial);
    
  const sumar = () => {
      count < stock ? setCount( count + 1) : <p>Maximo Stock</p>;
    }
    
  const restar = () => {
      count > initial ?  setCount (count - 1) : alert ("Ya esta vacio");
    }  
  const agregarAlCarrito = () => {
      onAdd(count)
    }
  
  useEffect(() => {
      setCount(initial);
  }, [initial]);

  return (
    <div className='btnAgregarQuitar'>
      <div> 
        <p className='contador'>Cantidad: {count}</p>
        <button onClick={sumar} className="button-add">+</button>
        <button onClick={restar} className="button-quit">-</button>
      </div>

        <button onClick={agregarAlCarrito} className="agregarAlCarrito"> Agregar al carrito</button>
    </div>
  )
}

export default ItemCount