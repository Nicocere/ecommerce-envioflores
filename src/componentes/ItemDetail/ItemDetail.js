import React from 'react'
import estilosDetail from './ItemDetail.module.css'


const ItemDetail = ({unicoProd}) => {

    // const detailOpciones = unicoProd.map ((option)=> option.opciones)

    // console.log("estas son las opciones", detailOpciones)
    const options =  [unicoProd.opciones]


    console.log("este es mi OPTIONS", options)

  return (

    <div className={estilosDetail.productDetail}>
        
        <h3>Item Detail</h3>
           
            <img src={unicoProd.img} alt=""/>
            <h4 className="tituloProducto">{unicoProd.nombre}</h4>
            <p className={estilosDetail.details}> {unicoProd.tipo}</p>

            {/* HASTA EL MOMENTO NO PUDE REENDERIZAR LAS OPCIONES DE PRODUCTO PERO SI LLEGUE A PONERLOS EN CONSOLA */}

{/*  ACA ESTA EL INTENTO FALLIDO 
            <div>
                {options.map((item) => (
                <div key={options.id}>{item} </div>
                ))}
            </div> */}


            <p className={estilosDetail.details}> {unicoProd.categoria}</p>
            <p className={estilosDetail.details}> {unicoProd.descr}</p>






    
    </div>
    
  )
}

export default ItemDetail