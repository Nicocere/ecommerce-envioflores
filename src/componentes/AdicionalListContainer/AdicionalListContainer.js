import React , {useEffect, useState} from "react";
import {collection, getDocs,  } from 'firebase/firestore'
import { baseDeDatos } from "../../FireBaseConfig";
import  AdicionalList  from "../AdicionalList/AdicionalList";

const AdicionalListContainer = ({onAdd}) => {

    const [adicional, setAdicional] = useState([]);

    useEffect(() => {
        
        const adicionalCollection = collection(baseDeDatos, 'adicionales');



            getDocs(adicionalCollection)
            .then((resp) => {

            const adicionalProd = resp.docs.map((adic)=>{
                 return{
                    id: adic.id, 
                    ...adic.data(),
                    
                };
            });
         
            setAdicional(adicionalProd);
        })
        .catch((error)=>{
            console.log("Los Productos no llegaron", error);
        })

}, []);


    return (
        <div className="adicionales">

                <h2 className="titulo-adicional">Seleccione que adicionales quiere agregar</h2>
                                              
                    <AdicionalList adicional={adicional} /> 
                    
                
        </div>
);

};
export default AdicionalListContainer