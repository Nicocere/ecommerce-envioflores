
import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

// Componente
const ItemDetail = ({item}) => {
  console.log("esto es ITEM", item)
  
  const prodOptions = item.opciones
  console.log("esto es prodOptions ", prodOptions)


  
  // ESTADOS Y CONTEXTO
  const { addToCart, cantidadProducto } = useContext(CartContext);
  const [color, setColor] = useState();
  const [tamañoPrecio, setTamañoPrecio] = useState();
  
  // const [tamañoElegido, setTamañoElegido] = useState();

  console.log("TAMAÑO PRECIO", tamañoPrecio)
  console.log("COLOR DE SET COLOR", color)
  const [cantidad, setCantidad] = useState(0);
  
  const [prodElegido, setProdElegido] = useState(false)

  // CONSTANTES CANTIDAD DE PRODUCTO Y OPCIONES  + COLORES 
    const quantity = cantidadProducto(item.id);
    const colorOption = prodOptions[0,1].color;
    
 


// A PARTIRDE ACA VA LO NUEVO


// EVENTOS QUE ELIGE EL USUARIO DE OPCIONES DE PRODUCTO
const handleSubmit = (event) => {
        event.preventDefault();
        console.log( "Seleccionaste ",color, tamañoPrecio); 
    };

    const handleChangeTamañoPrecio = (e) => {
      console.log("TARGET", e.target.value)
      
        if (e.target.value !== "") {
          setTamañoPrecio(e.target.value)
          console.log("esto es value", e.target.value)
          setProdElegido(true)

        } else {
        setTamañoPrecio( e.target.value === "")
          setProdElegido(false)
        }
    };
      
      const handleChangeColor = (event) => {
        if (event.target.value !== "") {
          
          setColor(event.target.value);
          
        } else {
          setColor(event.target.value === '');
          <h1> Debe elegir un Color</h1>

        }

      };
      
      
      
// CONSTANTES COLORES TAMAÑO Y PRECIO

      //condicional tamaño
      const precioElegido = tamañoPrecio
      console.log("esto es PrecioElegido que le envio a ADD TO CART:", precioElegido)

//       const tamElegido = prodOptions?.map((prodTam) => {
//         //  console.log("precio tamaño", prodTam)
//         //  console.log("tamaño", prodTam.tamaño )
//         // console.log("precio ", prodTam.precio)
//         // const tamaño = prodTam.tamaño
//         // const precio = prodTam.precio
//         return {
          
//           tamaño: prodTam.tamaño,
//           precio: prodTam.precio
//         }
// })
//   console.log("tam ELEGIDO", tamElegido)

      

      //condicional por si el producto no tiene color.

      let colorElegido = color
      if (colorElegido === undefined) {
        colorElegido = false
       } else {
        colorElegido = color
      }



// NO ENCUENTRO LA MANERA DE OBTENER EL DATO DE TAMAÑO SELECCIONADO DEL VALUE. SI SACO EL VALUE={PRECIO}
// DESPUES NO PUEDO EN EL CART ENCONTRARLOS POR SEPARADO, POR LO QUE PIERDO EL VALOR DE "TOTALPRICE()"
// ..


     

useEffect(()=>{

},[])

    const onAdd = (cantidadItem) => {

      setCantidad(cantidadItem);
      addToCart(item, cantidadItem, colorElegido, precioElegido);    

    };

  return (

    <div  className={estilosDetail.productDetail}>          
      <img  className={estilosDetail.productDetailImg} src={item.img} alt=""/>
            <h4 className={estilosDetail.detalles}>{item.nombre}</h4>
            <h4 className="tituloProducto">Categorias que pertenece:</h4>  
            <div className={estilosDetail.ulCategory}> 
            
            {
              item?.categoria?.map((category, idx)=> {  
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
                            return (
                              // <option key={idx} multiple={true} value={[precio, tamaño]}>
                              <option key={idx} multiple={true} value={precio}>

                                Tamaño: {tamaño}
                                Precio: ${precio}
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
               colorOption?.map((colors) => {
                 return (
                  <>
                  
                  <option value={colors}  key={colors.id}>{colors}</option>
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

            <Link to="/Carrito" className={estilosDetail.detalles}>
            <h4  > Ir al carrito </h4>
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
  

