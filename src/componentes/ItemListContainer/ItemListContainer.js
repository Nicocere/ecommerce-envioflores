import React , {useState, useEffect} from "react";
import Buttons from "../Buttons/Buttons";

const ItemListContainer = ({producto}) => {




useEffect(() => {

    
}, [])

    return (
        <div key={producto.id} className="product-item" >

             <img src={producto.img} alt=""/>
            <h4 className="tituloProducto">{producto.nombre}</h4>
            
            <Buttons/>
    
        </div>
);

};

export default ItemListContainer;