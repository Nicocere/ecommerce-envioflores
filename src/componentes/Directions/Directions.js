import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { CartContext } from '../../context/CartContext';
import { directionList } from '../DirectionList/DirectionList'


 const Directions = ({priceAllInclusive, setLocationSelect}) => {

    const { totalPrecio, totalPriceLocation, } = useContext(CartContext);

    const [location, setLocation] = useState('')
    const [locationPrice, setLocationPrice] = useState('')
    let priceLocation = Number(locationPrice)

    console.log("location price", priceLocation)
    
   priceAllInclusive = totalPrecio() + priceLocation

   useEffect(()=>{
      if (priceLocation !== 0){
          totalPriceLocation( priceAllInclusive)
      }
   },[priceAllInclusive])
 

    console.log("priceAllInclusive  ", priceAllInclusive)

 

  const handleSelectChange = (event) => {
  
    setLocation(event.label)
    setLocationPrice(event.value)
    
 
  }
  
  setLocationSelect(location)

    return (
    <div className='select-directions'>

        <h4 className='localidad-titulo'>Seleccione la Localidad del envio</h4>

       <Select
            defaultValue={{label: 'Seleccione una Localidad', value: ''}} 
            options={ directionList }
            onChange={handleSelectChange}
       />    


    </div>
  )
}

export default Directions