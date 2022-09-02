import React , {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { stockProductos } from "../Products/Products";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    
     const [productDetail,  setProductDetail] = useState ({});

     const {prodId} = useParams()
     const prodIdNumber = Number(prodId)
     
     const unicoProd = stockProductos.find((producto) => producto.id === prodIdNumber) 
     
     let prodOptions = unicoProd.opciones
     

    console.log("prod ID", prodId)

    
    
    useEffect(() => {
        
        const getDetailProduct = () => new Promise ((resolve, reject) => {
            setTimeout(() => { resolve(unicoProd, prodOptions)}, 400);});
            
            getDetailProduct()
            .then((data) => {setProductDetail(data)
          
 
                console.log("Esta es la prod Options del then en container", prodOptions)
        })
        .catch((error) => { console.log("esto es error", error)
        })
        


    }, [prodId]);

    

    return (
        <div key={unicoProd.id} className="prodDetailContainer">

            <ItemDetail  unicoProd={productDetail} prodOptions={productDetail}/>

        </div>
);

}

export default ItemDetailContainer