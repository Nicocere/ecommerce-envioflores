
import React from 'react';
import Form from '../Form/Form';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';

const ItemDetail = ({unicoProd, prodOptions}) => {

  console.log("UNICOPROD es esto", unicoProd)
  
  console.log("prodOptions es esto", prodOptions)

  const onAdd = ((agregar) => {

    console.log( "click boton agregar pero en un item pero en detail", agregar)
  })

  return (

    <div  className={estilosDetail.productDetail}>
                 
      <img  className={estilosDetail.productDetailImg} src={unicoProd.img} alt=""/>

            <ItemCount stock={5} initial={0} onAdd={onAdd} />

            <h4 className={estilosDetail.detalles}>{unicoProd.nombre}</h4>

            <h4 className="tituloProducto">Categorias que pertenece:</h4>  
          <div className={estilosDetail.ulCategory}> 
            
            {
              unicoProd.categoria?.map((category, idx)=> {  
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

              <Form unicoProd={unicoProd}/>

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