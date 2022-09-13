import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';


const Form = ({item}) => {
    
    const [color, setColor] = useState({});
    const [tamañoPrecio, setTamañoPrecio] = useState([]);
    console.log("TAMAÑO PRECIO", tamañoPrecio)
    console.log("COLOR DE SET COLOR", color)


    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log( "Seleccionaste ",color, tamañoPrecio); //envir la info a la base de datos  
    };

    const handleChangeColor = (event) => {
        //  console.log("EVENTO EN TARGET",event.target.value);
        setColor(event.target.value);
    };

    const handleChangeTamañoPrecio = (e) => {
        setTamañoPrecio(e.target.value);
    };
    const onAdd = () => {
        
      
        const colorElegido = color
        const tamañoPrecioElegido = tamañoPrecio
    
        console.log("COLOR ELEGIDO", colorElegido)
        console.log("TAMAÑO Y PRECIO ELEGIDO", tamañoPrecioElegido)
    };

    // creo una variable para color y tamaño+precio 

    const prodOptions = item.opciones;
    // console.log( " prodOptions  en formrr", prodOptions);

    const colorOption = prodOptions[0,1,2].color;
    // console.log("color Option", colorOption);    

    useEffect(() => {
        const handleClick = (e) => {
            //setX(e.clientX);
        };
        window.addEventListener('click', handleClick);
            console.log('Creo evento');
        return () => {
            //siempre antes
            // clearInterval()
            window.removeEventListener('click', handleClick);
            // console.log('Borro evento');
        };
    });

    return (

    <div >
    <form action="./Carrito" onSubmit={handleSubmit}>
        
        <select id='selectId' value={tamañoPrecio } onChange={handleChangeTamañoPrecio}>
                        
                        <option value={''} >Elegi tamaño</option>
                    
                        {
                        prodOptions?.map((prodTam) => {
                            // console.log("precio tamaño", prodTam)
                            // console.log("tamaño", prodTam.tamaño )
                            // console.log("precio", prodTam.precio)
                            const tamaño = prodTam.tamaño
                            const precio = prodTam.precio
                            // console.log(tamaño , precio)
                            return(
                                <>
                               
                                <option  key={tamaño} >
                                    Tamaño:{tamaño}, Precio: ${precio}
                                </option>
                                </>
                                
                            )
                    
                        })
                        }
                    
                  
        </select>


        <select  value={[color]} onChange={handleChangeColor}> 
        <option value='' selected>Elegi Color</option> 
            {
                colorOption?.map((colors) => {
                    // console.log ("colors", colors)
                    return (<option  key={colors}>{colors}</option>)
                })    
            }
        </select> 
          
               <button onClick={() => onAdd}> Agregar</button>  
              
           
    </form>

    </div>
    );
};
export default Form;