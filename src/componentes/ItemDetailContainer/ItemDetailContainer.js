import React , {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { stockProductos } from "../Products/Products";


const ItemDetailContainer = () => {

    
     const [productDetail,  setProductDetail] = useState ({});

    const unicoProd = stockProductos.find((producto) => producto.id === 15) 

    let prodOptions = unicoProd.opciones

    
    
    
    
    useEffect(() => {
        
        const getDetailProduct = () => new Promise ((resolve, reject) => {
            setTimeout(() => { resolve(unicoProd, prodOptions)}, 4000);});
            
            getDetailProduct()
            .then((data) => {setProductDetail(data)
          
 
                console.log("Esta es la prod Options del then en container", prodOptions)
        })
        .catch((error) => { console.log("esto es error", error)
        })
        


    }, []);

    

    return (
        <div className="productoDetail">

            <h4>Item List CONTAINER</h4>

            <ItemDetail unicoProd={productDetail} prodOptions={productDetail}/>

        </div>
);

}

export default ItemDetailContainer