import React from 'react'
import AdicionalItem from '../AdicionalItem/AdicionalItem'

export const AdicionalList = ({adicional}) => {
  




    return (
    
        <div className='lista-de-adicionales'>

       {

         adicional?.map((adicional) => { 

           return(
            <AdicionalItem adicional={adicional} key={adicional.id} />
           )
          })
        }
          
        </div>
     )
}

export default AdicionalList