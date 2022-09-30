import React , {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc, collection } from 'firebase/firestore';
import { baseDeDatos } from "../../FireBaseConfig";
import { useParams } from 'react-router-dom'
import { FadeLoader } from "react-spinners";

const ItemDetailContainer = () => {
 
    const [item,  setitem] = useState ({});
    const [isLoading, setIsLoading] = useState(true)
    const {prodId} = useParams()   

    useEffect(() => {
        
        const itemCollection = collection(baseDeDatos, 'productos');
        const ref = doc(itemCollection, prodId);
        getDoc(ref).then((res) => {
            setitem({ id: res.id, ...res.data() });
            setIsLoading(false)
        });
    }, [prodId]);


    return (
        <div key={item.id} className="prodDetailContainer">
            { isLoading ? (
                <>
                <h2 className="loadDetailProd">Cargando Productos....</h2>
                <FadeLoader color="white"/>
                </>
            ) : (
                <ItemDetail  item={item}/>
            )}
        </div>
);

}

export default ItemDetailContainer