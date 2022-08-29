import React , {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { stockProductos } from "../Products/Products";


const ItemDetailContainer = () => {

    
     const [productDetail,  setProductDetail] = useState ({});

    const unicoProd = stockProductos.find((producto) => producto.id === 2) 

    useEffect(() => {

        const getDetailProduct = () => new Promise ((resolve, reject) => {
            setTimeout(() => { resolve(unicoProd)}, 4000);});
    
        getDetailProduct()
        .then((data) => {setProductDetail(data)
        })
        .catch((error) => { console.log("esto es error", error)
        })
    
    }, []);

    console.log("UNICO PROD", unicoProd)
    
    console.log("productDetail", productDetail)

    return (
        <div className="productos">

            <h1> ITEM DETAIL CONTAINER</h1>
            
            <ItemDetail unicoProd={productDetail}/>

        </div>
);

}

export default ItemDetailContainer