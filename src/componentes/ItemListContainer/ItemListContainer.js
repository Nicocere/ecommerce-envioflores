import React , {useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ItemList from "../itemList/ItemList";
import { FadeLoader } from "react-spinners";
import {collection, getDocs, query, where } from 'firebase/firestore'
import { baseDeDatos } from "../../FireBaseConfig";
import { SearchContext } from "../../context/SearchContext";
import NavBarBottom from "../NavBarBottom/NavBarBottom";



const ItemListContainer = () => {

    const {prodEncontrado} = useContext(SearchContext);
    const [items,  setItems] = useState ([]);
    const [isLoading, setIsLoading] = useState (true); 
    const {categoryName} = useParams()

    console.log("PROD ENCONTRADO EN LIST", prodEncontrado)

    useEffect(() => {
        const itemCollection = collection(baseDeDatos, 'productos');

         const q = categoryName 
         ? query(itemCollection, where('categoria', 'array-contains', categoryName)) 
         : itemCollection  ;

         
            getDocs(q)
            .then((resp) => {

            const productos = resp.docs.map((prod)=>{
                 return{
                    id: prod.id, 
                    ...prod.data(),
                    
                };
            });
            setItems(productos);
        })
        .catch((error)=>{
            console.log("Los Productos no llegaron", error);
        })
        .finally(()=>{
            setIsLoading(false)
        });

}, [categoryName]);


    return (
        <div className="productos">
            {
                categoryName ?
                <h3 className="cat-selected">Esta en la Categoria: {categoryName}</h3> : null

            }
            { isLoading ? ( 
                    <>
                    <h1 className="loadProd">Cargando Productos...</h1>
                    <FadeLoader className="fadeLoader" color="rgb(255, 255, 255)" /> 
                    </>
               ) : ( 
                    <>
                    <NavBarBottom items={items} />
                    <ItemList items={items} prodEncontrado={prodEncontrado}/> 
                    </>
                )}
        </div>
);

};

export default ItemListContainer;
