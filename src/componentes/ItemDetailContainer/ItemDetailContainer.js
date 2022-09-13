import React , {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { stockProductos } from "../Products/Products";
import { useParams } from 'react-router-dom'
import { FadeLoader } from "react-spinners";

const ItemDetailContainer = () => {
 
    const [productDetail,  setProductDetail] = useState ({});

    const [isLoading, setIsLoading] = useState(true)

     const {prodId} = useParams()
     const prodIdNumber = Number(prodId)
     
     const item = stockProductos.find((producto) => producto.id === prodIdNumber) 
     
     let prodOptions = item.opciones
     

    console.log("prod ID", prodId)

    
    
    useEffect(() => {
        
        const getDetailProduct = () => new Promise ((resolve, reject) => {
            setTimeout(() => { resolve(item, prodOptions)}, 1000);});
            
            getDetailProduct()
            .then((data) => {
                setProductDetail(data);
                setIsLoading(false);
 
                console.log("Esta es la prod Options del then en container", prodOptions)
        })
        .catch((error) => { console.log("esto es error", error)
        })
        


    }, [prodId]);

    

    return (
        <div key={item.id} className="prodDetailContainer">

            { isLoading ? (
                <>
                <h2 className="loadDetailProd">Cargando Productos....</h2>
                <FadeLoader color="white"/>
                </>
            ) : (
                <ItemDetail  item={productDetail} prodOptions={productDetail}/>
            )}

        </div>
);

}

export default ItemDetailContainer