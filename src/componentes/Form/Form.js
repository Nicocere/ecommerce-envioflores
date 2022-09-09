import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Form = ({unicoProd}) => {

    const [color, setColor] = useState('');
    const [tamañoPrecio, setTamañoPrecio] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
       
       
        console.log( "Seleccionaste ",color, tamañoPrecio); //envir la info a la base de datos
    
    };
    const handleChangeColor = (event) => {
        console.log("evento en target",event.target.value);
        setColor(event.target.value);
    };

    const handleChangeTamañoPrecio = (e) => {
        setTamañoPrecio(e.target.value);
    };



    const prodOptions = unicoProd.opciones
    console.log( " prodOptions  en formrr", prodOptions)

    

    useEffect(() => {
        const handleMouseMove = (e) => {
            //setX(e.clientX);
        };
        window.addEventListener('mousemove', handleMouseMove);
        console.log('Creo evento');
        //console.log('Creo evento');
        return () => {
            //siempre antes
            //clearInterval()
            window.removeEventListener('mousemove', handleMouseMove);
            console.log('Borro evento');
            //console.log('Borro evento');
        };
    });

    return (
    <div >


    <form action="" onSubmit={handleSubmit}>
                <select value={tamañoPrecio} onChange={handleChangeTamañoPrecio}>
                    <optgroup>
                        {
                        prodOptions?.map((prodTam) => {
                            console.log("precio tamaño", prodTam)
                            console.log("tamaño", prodTam.tamaño )
                            console.log("precio", prodTam.precio)
                            const tamaño = prodTam.tamaño
                            const precio = prodTam.precio
                            console.log(tamaño , precio)
                            return(
                                <option key={tamaño}>
                                    Tamaño:{tamaño}, Precio: ${precio}</option>
                            )
                    
                        })
                        }
                    </optgroup>
                  
                </select>

    


 <select value={color} onChange={handleChangeColor}>  
            <optgroup >{
                  
                prodOptions?.map((colorOption) => {
                    console.log("color optionn", colorOption.color[""])

                    const colorOpt = colorOption.color
                         console.log("ESto es COLOR OPT ", colorOpt)

                         return (

                             colorOpt?.map((colors) => {
                                 
                                 console.log("colors", colors)
                                 return (<option>{colors}</option>)
                                })
                                
                                )
                    
                })

                }</optgroup>

        </select> 

        <button>Enviar</button>
    </form>

    </div>
    );
};
export default Form;