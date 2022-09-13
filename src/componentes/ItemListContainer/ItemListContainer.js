import React , {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ItemList from "../itemList/ItemList";
import { stockProductos } from "../Products/Products";
import { FadeLoader } from "react-spinners";


const ItemListContainer = () => {
    const [items,  setItems] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);

   const {categoryName} = useParams()
   console.log("categoria name", categoryName)


useEffect(() => {

    const getProducts = () => 
        new Promise ((resolve, reject) => {

    const prodFiltrados = stockProductos.filter(
                (prod) => prod.categoria.includes(categoryName));
                console.log("prod filtrado", prodFiltrados)

            setTimeout(() => { 
                resolve( categoryName ? prodFiltrados : stockProductos)}, 1000);});
    
        getProducts()
        .then((data) => {
            setItems(data)
            setIsLoading(false)
        })
        .catch((error) => { console.log("esto es error", error)
        });
    

}, [categoryName]);



    return (
        <div className="productos">

            { isLoading ? ( 
                    <>
                    <h1 className="loadProd">Cargando Productos...</h1>
                    <FadeLoader color="violet" /> 
                    </>
               ) : ( 
                    <ItemList items={items}/> 
                )}
            

        </div>
);

};

export default ItemListContainer;