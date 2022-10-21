
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import AdicionalListContainer from '../AdicionalListContainer/AdicionalListContainer';



const ItemDetail = ({item}) => {

  const { addToCart, cantidadProducto } = useContext(CartContext);
  const [color, setColor] = useState();
  const [tamañoPrecio, setTamañoPrecio] = useState();
  const [cantidad, setCantidad] = useState(0);
  const [prodElegido, setProdElegido] = useState(false)

  const [tamaño, setTamaño] = useState("")
  const [precio, setPrecio] = useState("")



  const quantity = cantidadProducto(item.id);
  const prodOptions = item.opciones
  const precioElegido = Number(tamañoPrecio)

  
  // console.log("PRECIO ELEGIDO", precioElegido)

  

  const precioTamaño = prodOptions?.find((tam)=> tam.precio === precioElegido)
  // console.log("Precio tamaño", precioTamaño)

useEffect(() => {
  if (precioTamaño !== undefined) {
    setTamaño(precioTamaño.tamaño)
    setPrecio(precioTamaño.precio)
  } 
}, [{precio, tamaño}])



  // console.log("PRECIO CORNETA", precio)
  // console.log("TAMAÑO LPM", tamaño)


  


  
  const handleSubmit = (event) => {
    event.preventDefault();
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
        if (event.target.value !== "") {
          
          setColor(event.target.value);
          
        } else {
          setColor(event.target.value === '');
          <h1> Debe elegir un Color</h1>
          
        }
        
      };

      const colorOption = prodOptions[0,1].color;

      let colorElegido = color
      if (colorElegido === undefined) {
        colorElegido = false
       } else {
        colorElegido = color
      }

    const onAdd = (cantidadItem) => {

      setCantidad(cantidadItem);
      addToCart(item, cantidadItem, colorElegido, tamaño, precio);    

    };

  return (

    <div  className={estilosDetail.productDetail}>          
      <img  className={estilosDetail.productDetailImg} src={item.img} alt=""/>
            <h4 className={estilosDetail.name}>{item.nombre}</h4>
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
        
          <select key={item.id} id='selectId' value={tamañoPrecio} onChange={handleChangeTamañoPrecio}>

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
          <select key={item.id} value={color}  onChange={handleChangeColor}> 
                <option key={item.id} value={''}>Elegir Color</option>
             {
               colorOption?.map((colors, indx) => {
                 return  <option key={indx} value={colors}>{colors}</option>
                })    
              }
          </select> 
          
        {
            cantidad === 0  ? (       
            <>
              <ItemCount item={item} stock={5} initial={quantity} onAdd={onAdd} />  
              <AdicionalListContainer /> 
            </>     
              ) : (

            <div className={estilosDetail.divBtn}>
            <Link to="/"> 
            <button className={estilosDetail.btnSeguir} >Seguir Comprando</button>
            </Link>

            <Link to="/Carrito" >
            <button className={estilosDetail.btnIrCarrito} >Ir al Carrito</button>
            </Link>

            </div>
              )       
        }
          </>
            ) : <h4 className={estilosDetail.aviso}>Debe elegir un Tamaño y Precio.</h4>  

    } 

        </form>

      </div>        

    </div> 
    )
  };

export default ItemDetail
  

