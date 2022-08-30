import React , {useEffect, useState} from "react";
import ItemList from "../itemList/ItemList";
import { stockProductos } from "../Products/Products";

const ItemListContainer = () => {
    const [items,  setItems] = useState ([]);
    // const [isLoading, setIsLoading] = useState (true);
    
useEffect(() => {

    const getProducts = () => new Promise ((resolve, reject) => {
        setTimeout(() => { resolve(stockProductos)}, 4000);});

    getProducts()
    .then((data) => {setItems(data)
    })
    .catch((error) => { console.log("esto es error", error)
    })

}, []);


    // console.log("items", items)

    return (
        <div className="productos">

            <h2> ITEM LIST CONTAINER</h2>
            
            <ItemList items={items}/>

        </div>
);

};

export default ItemListContainer;