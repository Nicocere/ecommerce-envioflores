// import React , {useEffect, useState} from "react";
// import {collection, getDocs, query, where } from 'firebase/firestore'
// import { FadeLoader } from "react-spinners";
// import { baseDeDatos } from "../../FireBaseConfig";
// import { AdicionalList } from '../AdicionalList/AdicionalList';


// const AdicionalListContainer = () => {

//     const [adicional, setAdicional] = useState('');
//     const [isLoading, setIsLoading] = useState (true); 

    
//     useEffect(() => {
        
//         const adicionalCollection = collection(baseDeDatos, 'adicionales');


//             getDocs()
//             .then((resp) => {

//             const adicionalProd = resp.docs.map((prod)=>{
//                  return{
//                     id: prod.id, 
//                     ...prod.data(),
                    
//                 };
//             });
//             setAdicional(adicionalProd);
//         })
//         .catch((error)=>{
//             console.log("Los Productos no llegaron", error);
//         })
//         .finally(()=>{
//             setIsLoading(false)
//         });

// }, [adicional]);


//     return (
//         <div className="productos">
//             { isLoading ? ( 
//                     <>
//                     <h1 className="loadProd">Cargando Productos...</h1>
//                     <FadeLoader className="fadeLoader" color="rgb(255, 255, 255)" /> 
//                     </>
//                ) : ( 
//                     <>
//                     <AdicionalList adicional={adicional}/> 
//                     </>
//                 )}
//         </div>
// );

// };
// export default AdicionalListContainer