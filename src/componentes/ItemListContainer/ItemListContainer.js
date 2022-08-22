import React from "react";
import Buttons from "../Buttons/Buttons";

const ItemListContainer = ({producto}) => {

    return (
        <div className="product-item" >
             <img src={producto.img} alt=""/>
            <h4 className="tituloProducto">{producto.nombre}</h4>
            
            <Buttons/>
    
        </div>
);

};

export default ItemListContainer;