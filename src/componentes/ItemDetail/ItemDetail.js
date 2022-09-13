
import React, { useState } from 'react';
import Form from '../Form/Form';
import ItemCount from '../ItemCount/ItemCount'
import estilosDetail from './ItemDetail.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item, prodOptions}) => {
 
    const [cantidad, setCantidad] = useState(0);
    const { addToCart, cantidadProducto } = useContext(CartContext);
    
    
    const quantity = cantidadProducto(item.id);

  console.log("item es esto", item)
  
  console.log("prodOptions es esto", prodOptions)

  const onAdd = (cantidadItem) => {

    setCantidad(cantidadItem);
    addToCart(item, cantidadItem);
};

  return (

    <div  className={estilosDetail.productDetail}>          
      <img  className={estilosDetail.productDetailImg} src={item.img} alt=""/>
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

              
                    {
                      cantidad === 0  ? (       
                      <>
                        <Form item={item} />
                        <ItemCount item={item} stock={5} initial={quantity} onAdd={onAdd} />   
                      </>     
                        ) : (
                      <>
                      <Link to="/"> 
                      <h4>Seguir Comprando</h4>
                      </Link>

                      <Link to="/Carrito">
                      <h4> Ir al carrito </h4>
                      </Link>
                      </>
                        )       
                      }

    </div>
    
    )
  };

export default ItemDetail
  

