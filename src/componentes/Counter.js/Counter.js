import React, {useState} from 'react'

const Counter = () => {

    // esto es una posibilidad

    // const estado = useState();
    // const  miVariableDeEstado = estado[0]
    // const miFuncionDeEstado = estado[1];

    // esto es otra
    const [count, setCount] = useState(0);

    let maximoProd = 10
    let minimoProd = 0
    
    const sumar = () => {

      // condicional
      // if else
      // if (count < 10){
      //   setCount(count + 1);

      // }else{
      //   alert ("Maximo Stock")
      // };


      // ternario
      count < maximoProd ? setCount( count + 1) : alert ("maximo stock");

    }

    const restar = () => {
      count > minimoProd ?  setCount (count - 1) : alert ("Ya esta vacio");
    }


  return (
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>

        <p>Contador: {count}</p>
    </div>
  )
}

export default Counter