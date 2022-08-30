import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';

const ItemDetail = ({unicoProd, prodOptions}) => {

  console.log("UNICOPROD es esto", unicoProd)
  
  console.log("prodOptions es esto", prodOptions)

   const options =  unicoProd.opciones
  
  console.log(" las options", options)


  console.log("categorias", unicoProd.categoria)
  



  const onAdd = (agregar) => {

    console.log( "click boton agregar pero en un ITEM", agregar);


   }


    // let detailOption = options[0]

    // console.log("este es mi detsil", detailOption)
    

  return (

    <div className={estilosDetail.productDetail}>
                 
            <img  className={estilosDetail.productDetailImg} src={unicoProd.img} alt=""/>

            <ItemCount stock={5} initial={0} onAdd={onAdd} />

            <h4 className="tituloProducto">{unicoProd.nombre}</h4>

            <p className={estilosDetail.detalles}> {unicoProd.descr}</p>

             <h4 className="tituloProducto">Categorias que pertenece:</h4>         
            {
              unicoProd.categoria?.map((category, index)=> {  
                  console.log("esto es el category", category)
                    return (
            
                      <ul key={index} className={estilosDetail.ulCategory}> 
                        <li>
                            {category}
                        </li>
                                         
                      </ul>
                    )
            
              })
            }
              <br/>
              <h4 className="tituloProducto">Opciones:</h4>

                <table className={estilosDetail.tableDetail}>
                    <tr className={estilosDetail.trDetail}>
                      <th className={estilosDetail.thDetail}>Tamaño</th>
                      <th className={estilosDetail.thDetail}>Precio</th>
                      <th className={estilosDetail.thDetail}>Colores</th>
                    </tr>
            {
              
              prodOptions.opciones?.map((option)=> {
                console.log("esto es el option", option)
                return (
                  
                  
                  <tr>
                      <td>{option.tamaño}</td>
                      <td>{option.precio}</td>
                      <td>{
                        
                        option.color?.map((colores) => {
                          return(
                            <td>{colores}
                            <br/>
                            </td>
                            )
                          })
                          
                        }</td>
                    </tr>
                 
                 
                 )
                })
                
              }
              </table>
    </div>
    
  )
};

export default ItemDetail