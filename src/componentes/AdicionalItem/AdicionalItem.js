import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount';


const AdicionalItem = ({adicional}) => {
    
   


    const { cart, addToCart } = useContext(CartContext);
    
        
    const [valueAdic, setValueAdic] = useState(
        new Array(adicional.opciones.length).fill(false)
    )

    const [totalAdicionales, setTotalAdicionales] = useState(0)

    const handleChange = (position) =>{
        console.log('position', position)
        const positionChecked = valueAdic.map((item, index) => 
       
            index === position ? !item : item
            
        );

        console.log("pOSITIO CHEKED", positionChecked)

 
        setValueAdic(positionChecked)

        const totalPriceAdicionales = positionChecked.reduce(
            (sum, currentState, index) => {
                if (currentState === true ){
                    return sum + adicional.opciones[index].precio
                }
                return sum;
            },
            0
        );
        setTotalAdicionales(totalPriceAdicionales)
    }




  return (
    <div className='div-adicional'>
        <img src={adicional.img} alt=""/>
        <h4 className="tituloProducto">{adicional.nombre}</h4>  
        {
            adicional.opciones.map(({tamaño, precio}, index) =>{
                console.log("tamaño", tamaño)
                console.log("PRECIO", precio)

                return(
                    <li className='lista-adicionales' key={index}>
                        <div className='adic-nombre'>

                                <input
                                    type='checkbox'
                                    id={`custom-checkbox${index}`}
                                    name={tamaño}
                                    precio={precio}
                                    value={tamaño}
                                    checked={valueAdic[index]}
                                    onChange={()=> handleChange(index)}
                                    />
                                <label htmlFor={`custom-checkbox${index}`}>{tamaño}</label>
                            <div className='adic-precio'>Precio: ${precio}</div>
                        </div>

                    </li>
                );
            })}
            <li className='lista-adicionales'>
                <div className='total-adicionales'>Total: ${totalAdicionales}</div>
            </li>
           
    </div>
  )

}

export default AdicionalItem