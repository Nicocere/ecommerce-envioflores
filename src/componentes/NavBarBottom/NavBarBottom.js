import React , { useContext, useEffect, useState} from "react";
import {collection, getDocs} from 'firebase/firestore'
import { baseDeDatos } from "../../FireBaseConfig";
import { SearchContext } from "../../context/SearchContext";



const NavBarBottom = ({items}) => {

  console.log("ITEMS NAV BAR BOTON", items)

  // useContext
    const { prodEncontrado, changeList} = useContext(SearchContext)

  // forma dinamica
  let [itemEncontrado, setItemEncontrado] = useState([])

 

  // buscador empieza siendo vacio, por lo que cuando cambia primero empieza 
  // vacio y dsp cambia el estado por la primer letra que toque.....
  const [busqueda, setBusqueda] = useState ('');


  // ahora ya logre mostrar mis prodocutos cuando hago el click en buscar
  // pero de entrada no me encuentra nada y despues del click (onSubmit), empieza a filtrar..

 

  const handleChange = (evento) => {
    setBusqueda(evento.target.value)
    filtrado(evento.target.value)

   
  }


  
  console.log("busqueda cantidad:",busqueda.length)
  console.log("BUSQUEDA letra:",  busqueda)



  

  const filtrado = (prodBuscado) =>{
    console.log("BUSCADO PRODUCTO", prodBuscado)  

    const restultadoBusqueda = items.filter((prod)=>{
      if(prod.nombre.toString().toLowerCase().includes(prodBuscado.toLowerCase())){
        return prod;
      }
    })
    setItemEncontrado(restultadoBusqueda)

  }

  console.log("ITEM ENCONTRADO", itemEncontrado)


  changeList(itemEncontrado)



  return (


    <div className="buscador-div">

      <h5 className="buscador-title">Busque el producto que desea</h5>

      <form className="form-buscador"   >

        <input
        type="text"
        className=''
        value={busqueda}
        placeholder= "Buscar Producto"
        onChange={handleChange}
        />
        <button className="buscador-btn">Refrescar</button>
      </form>

      {/* {
        itemEncontrado !== 23 ?
          <ItemList items={itemsFiltrados}/> : <p>no se que onda</p>
      } */}


    </div>
  )
}

export default NavBarBottom