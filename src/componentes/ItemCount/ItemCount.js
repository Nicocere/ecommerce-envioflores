import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const ItemCount = ({stock, initial = 1, onAdd}) => {
  const [count, setCount] = useState(initial);


          // PRUEBA SWEET ALERT

          const MySwal = withReactContent(Swal);

     
    
  const sumar = () => {
      count < stock ? setCount( count + 1) : <p>Maximo Stock</p>;
    }
    
  const restar = () => {
      count > initial ?  setCount (count - 1) : alert ("Ya esta vacio");
    }  
  const agregarAlCarrito = () => {
      onAdd(count)
      
         MySwal.fire({
             title: <strong>Agregaste un adicional!</strong>,
             html: <i>Hiciste click en agregar</i>,
             icon: 'success'
         })
         
         
     
  
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