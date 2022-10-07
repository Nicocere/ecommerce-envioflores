import React , {useEffect, useState} from "react";
import {collection, getDocs, query, where } from 'firebase/firestore'
import { baseDeDatos } from "../../FireBaseConfig";



const NavBarBottom = () => {
  
    const [items,  setItems] = useState ([]);
    const [busqueda, setBusqueda] = useState ([]);

    const handleChange = (evento) => {
      setBusqueda(evento.target.value)
   
    }

    useEffect(() => {

        const itemCollection = collection(baseDeDatos, 'productos');

         const q = busqueda 
         ? query(itemCollection, where('categoria', 'array-contains', busqueda)) 
         : itemCollection ;

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

        
}, [busqueda]);


  return (


    <div>  

        <input
        type='text'
        className=''
        value={busqueda}
        placeholder= "Buscar Producto"
        onChange={handleChange}
        />
        <button>
          buscar
        </button>
    
    </div>
  )
}

export default NavBarBottom