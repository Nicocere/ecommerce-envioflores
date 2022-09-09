
import React, { useState } from 'react';
import Form from '../Form/Form';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item, prodOptions}) => {
 
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

  console.log("item es esto", item)
  
  console.log("prodOptions es esto", prodOptions)

  const onAdd = (cantidadItem) => {

      setCantidad(cantidadItem);
      addToCart(item, cantidadItem);
};

  return (

    <div  className={estilosDetail.productDetail}>
                 
      <img  className={estilosDetail.productDetailImg} src={item.img} alt=""/>

      {
      cantidad === 0 ? (
                    
      <ItemCount stock={5} initial={0} onAdd={onAdd} />   
            ) : (
                    
      <Link to="/Carrito">Ir al carrito</Link>
            )
                
        }


            <h4 className={estilosDetail.detalles}>{item.nombre}</h4>

            <h4 className="tituloProducto">Categorias que pertenece:</h4>  
          <div className={estilosDetail.ulCategory}> 
            
            {
              item.categoria?.map((category, idx)=> {  
                  console.log("esto es el category", category)
                    return (                    
                      <div key={idx}  className={estilosDetail.divCategory}> 
                            {category}
                        </div>                                        
                      )
                        
              })
            }
          </div>
              <br/>

              <Form item={item}/>

          {/* <h4 className="tituloProducto">Opciones:</h4>

            <table className={estilosDetail.tableDetail}>
                  <thead >

                    <tr  className={estilosDetail.trDetail}>
                      <th className={estilosDetail.thDetail}>Tamaños:</th>
                      <th className={estilosDetail.thDetail}>Precio:</th>
                      <th className={estilosDetail.thDetail}>Colores:</th>
                    </tr>
                    </thead>
                    <tbody>
        {
              
          prodOptions.opciones?.map((option, idx)=> {
                return (
                  <tr key={idx} >
                      <td  className={estilosDetail.tdDetail}>{option.tamaño}</td>
                      <td  className={estilosDetail.tdDetail}>$ {option.precio}</td>
                      {
                        
                        option.color?.map((colores, idx) => {
                          return(
                            <td key={idx}  className={estilosDetail.tdDetail}>
                            {colores}
                            <br/>
                            </td>
                            )
                          })   
                      }
                  </tr>
                )
            })
                
        }
              </tbody>
              </table> */}
    </div>
    
  )
};

export default ItemDetail