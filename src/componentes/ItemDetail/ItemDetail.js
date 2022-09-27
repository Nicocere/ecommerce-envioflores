
import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

// Componente
const ItemDetail = ({item}) => {

  const { addToCart, cantidadProducto } = useContext(CartContext);
  const [color, setColor] = useState();
  const [tamañoPrecio, setTamañoPrecio] = useState();
  const [cantidad, setCantidad] = useState(0);
  const [prodElegido, setProdElegido] = useState(false)
  const quantity = cantidadProducto(item.id);
  const prodOptions = item.opciones
  const precioElegido = tamañoPrecio
  
  
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

      // ESTO DEBERIA MODIFICARLO PARA QUE QUEDE MAS PROLIJO, ME TIRA WARNING PERO ES FUNCIONAL..
      const colorOption = prodOptions[0,1].color;
      
  // ESTO NO SE COMO HACER PARA QUE QUEDE PROLIJO LO DE ARRIBA...
      // console.log("prod OPTIONS", prodOptions)
      // const colOpt = prodOptions.find((col)=> {
      //   console.log("colores", col.color)
      //   return col.color = ['Rosas ', 'Rojas ', 'Amarillas ', 'Blancas']
  
      // })
      // console.log("col opt", colOpt)

      let colorElegido = color
      if (colorElegido === undefined) {
        colorElegido = false
       } else {
        colorElegido = color
      }

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
        
          <select  id='selectId' value={tamañoPrecio} onChange={handleChangeTamañoPrecio}>

                        <option key={item.id}  value={''} placeholder="vacio" > Elegir tamaño  </option>
                        {                        
                          prodOptions?.map((prodTam, idx) => {

                            return (
                              <option key={idx} value={prodTam.precio}>
                                Tamaño: {prodTam.tamaño} || Precio: ${prodTam.precio}
                              </option>
                            ) 
                          })
                        }
          </select>

    { prodElegido   ? 
            (
          <>
          <select  value={color}  onChange={handleChangeColor}> 
                <option key={item.id} value={''}>Elegir Color</option>
             {
               colorOption?.map((colors) => {
                 return (
                  <>
                  
                  <option  value={colors}  key={colors.color} >{colors}</option>
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
            ) : <h4>Debe elegir un Tamaño y Precio.</h4>             
    } 
  
        </form>
      </div>        
    </div> 
    )
  };

export default ItemDetail
  

