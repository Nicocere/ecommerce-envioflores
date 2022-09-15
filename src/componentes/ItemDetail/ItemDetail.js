
import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

// Componente
const ItemDetail = ({item, prodOptions}) => {
  console.log("item es esto", item)
  console.log("prodOptions es esto", prodOptions)


  
  // ESTADOS Y CONTEXTO
  const { addToCart, cantidadProducto } = useContext(CartContext);
  const [color, setColor] = useState();
  const [tamañoPrecio, setTamañoPrecio] = useState([]);
  console.log("TAMAÑO PRECIO", tamañoPrecio)
  console.log("COLOR DE SET COLOR", color)
  const [cantidad, setCantidad] = useState(0);
  
  const [prodElegido, setProdElegido] = useState(false)

  // CONSTANTES CANTIDAD DE PRODUCTO Y OPCIONES  + COLORES 
    const quantity = cantidadProducto(item.id);
    const colorOption = prodOptions[0,1,2].color;
        


// A PARTIRDE ACA VA LO NUEVO


// EVENTOS QUE ELIGE EL USUARIO DE OPCIONES DE PRODUCTO
const handleSubmit = (event) => {
        event.preventDefault();
        console.log( "Seleccionaste ",color, tamañoPrecio); 
    };

    const handleChangeTamañoPrecio = (e) => {
      
        if (e.target.value !== "") {
          setTamañoPrecio(e.target.value)
          setProdElegido(true)

        } else {
        setTamañoPrecio( e.target.value === "")
          setProdElegido(false)
        }
    };
      
      const handleChangeColor = (event) => {
        console.log("EVENTO", event)
        if (event.target.value !== "") {
          
          setColor(event.target.value);
          
        } else {
          setColor(event.target.value === '');
          <h1> Debe elegir un Color</h1>

        }

      };
      
      
      
      // CONSTANTES COLORES TAMAÑO Y PRECIO
      const colorElegido = color
      const tamañoPrecioElegido = tamañoPrecio

      
      


console.log("esto es el set PRODUCTO ELEGIDO", tamañoPrecioElegido)


// ACA O EN EL CONTEXT DEBERIA PONER ALGUNA FUNCION O MANERA PARA CONSEGUIR EL PRECIO DE "TAMAÑO PRECIO ELEGIDO"
// YA QUE NO PUEDO ACCEDER EN EL ACUMULADOR EN EL CART  CARTCONTEXT PORQUE ES UN STRING..

useEffect(()=>{

},[])

    const onAdd = (cantidadItem) => {

      setCantidad(cantidadItem);
      addToCart(item, cantidadItem, colorElegido, tamañoPrecioElegido);    
      // console.log("COLOR ELEGIDO", colorElegido);
      // console.log("TAMAÑO Y PRECIO ELEGIDO", tamañoPrecioElegido);
    };

    // creo una variable para color y tamaño+precio 



  return (

    <div  className={estilosDetail.productDetail}>          
      <img  className={estilosDetail.productDetailImg} src={item.img} alt=""/>
            <h4 className={estilosDetail.detalles}>{item.nombre}</h4>
            <h4 className="tituloProducto">Categorias que pertenece:</h4>  
            <div className={estilosDetail.ulCategory}> 
            
            {
              item.categoria?.map((category, idx)=> {  
                    return (                    
                      <div key={idx}  className={estilosDetail.divCategory}> 
                            {category}
                        </div>                                        
                    )      
              })
            }
            </div>
      <br/>
      <div >
        <form action="./Carrito" onSubmit={handleSubmit}>
        
          <select id='selectId' value={tamañoPrecio} onChange={handleChangeTamañoPrecio}>

                        <option  value={''} placeholder="vacio" > Elegir tamaño  </option>
                        {
                          
                        prodOptions?.map((prodTam, idx) => {
                            //  console.log("precio tamaño", prodTam)
                            //  console.log("tamaño", prodTam.tamaño )
                            // console.log("precio ", prodTam.precio)
                            const tamaño = prodTam.tamaño
                            const precio = prodTam.precio
                             console.log("precio en el map", typeof precio)
                            return(

                                <option  >
                                  
                                   Tamaño:{tamaño},  Precio: ${precio}

                                </option>    
                            )
                        })
                        }
       
          </select>

          { prodElegido   ? 
            (
          <>
          <select  value={color}  onChange={handleChangeColor}> 
                <option value={''}>Elegir Color</option>
             {
               colorOption?.map((colors, index) => {
                  console.log ("colors", colors)
                 return (
                  <>
                  
                  <option value={index}  key={colors.id}>{colors}</option>
                  </>
                  
                  )
                })    
              }
          </select> 
          
{
            cantidad === 0  ? (       
            <>
              <ItemCount item={item} stock={5} initial={quantity} onAdd={onAdd} />   
            </>     
              ) : (
            <>
            <Link to="/"> 
            <h4 className={estilosDetail.detalles} >Seguir Comprando</h4>
            </Link>

            <Link to="/Carrito">
            <h4 className={estilosDetail.detalles} > Ir al carrito </h4>
            </Link>
            </>
              )       
  }

          </>
            ) 
           
          : 
                <h4>Debe elegir un Tamaño y Precio.</h4> 
                  
                  } 
                  
       


      
          
              
           
        </form>

      </div>
              
    </div>
    
    )
  };

export default ItemDetail
  

