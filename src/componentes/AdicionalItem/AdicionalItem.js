import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount';
import { FcApproval } from "@react-icons/all-files/fc/FcApproval";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const AdicionalItem = ({adicional}) => {
    
    const { cart, addAdicional } = useContext(CartContext);     
    const [valueAdic, setValueAdic] = useState(new Array(adicional.opciones.length).fill(false))
    
    const [totalAdicionales, setTotalAdicionales] = useState(0)

    const [cantidadAdicional, setCantidadAdicional] = useState(0)
    const [idAdicional, setIdAdicional] = useState({})
    const [tamaño , setTamaño] = useState([])
    const [precio, setPrecio] = useState([])
    const itemAdicional = adicional
    
    
        // PRUEBA SWEET ALERT

    const MySwal = withReactContent(Swal);

    const showSwal = () => {
       return (
        
        MySwal.fire({
            title: <strong>Agregaste un adicional!</strong>,
            html: <i>Hiciste click en agregar</i>,
            icon: 'success'
        })
        
        )
    }


    const handleChange = (position) =>{
        const positionChecked = valueAdic.map((item, index) => index === position ? !item : item );
        
        setValueAdic(positionChecked)
        
        const totalPriceAdicionales = positionChecked.reduce((sum, currentState, index) => {
            console.log("CURRENT STATE", currentState)
            console.log("INDEX ELEGIDO", index)
            console.log("sum", sum)

        if (currentState === true) {
            const precio = adicional.opciones[index].precio
            const tamaño = adicional.opciones[index].tamaño
        setTamaño(tamaño)
        setPrecio(precio)

        }
        
        if (currentState === true ){
                return   sum + adicional.opciones[index].precio
        }
            return sum;

        },
            0
        );
            setTotalAdicionales(totalPriceAdicionales)
    };

    console.log("PRECIO ELEGIDO", precio)
    console.log("TAMAÑOO ELEGIDO", tamaño)
    

    const handleIdAdicional = (event) => {
        if(event.target.value !== "" ){
            
            setIdAdicional(event.target.value)
        }else{
            setIdAdicional("")
        }
    }

    const onAdd = (cantidadItem) =>{

        setCantidadAdicional(cantidadItem)
        addAdicional(itemAdicional, totalAdicionales, cantidadItem, tamaño, precio)
    }


  return (
    <div className='div-adicional'>
        <img src={adicional.img} alt=""/>
        <h4 className="tituloProducto">{adicional.nombre}</h4>  

        
        {
            adicional.opciones.map(({tamaño, precio}, index) =>{
                
                return(
                    <li className='lista-adicionales' key={index}>
                        <div className='adic-nombre'>

                                <input
                                    type='checkbox'
                                    id={`custom-checkbox${index}`}
                                    name={tamaño}
                                    tamaño={tamaño}
                                    precio={precio}
                                    value={adicional.id}
                                    checked={valueAdic[index]}
                                    onChange={()=> {handleChange(index) }}
                                    onClick={handleIdAdicional}
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

            {

       totalAdicionales === 0 ?  
           <h3 className='aviso-adicional'>Seleccione un tamaño</h3>       
        : 
        (
            cantidadAdicional === 0 ?
            <button onClick={showSwal} >
                 

            </button>
            : 
            <div className='aviso-ad-agr'>
            
            <h2 className='aviso-adicional-agregado'>Adicional Agregado</h2>  
            <FcApproval className='fcApproval'/>
            </div>
        )
                
            }
          
    </div>
  )
}

export default AdicionalItem