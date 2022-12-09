import React , { useContext, useEffect,useState} from "react";
import { SearchContext } from "../../context/SearchContext";

const Searcher = ({items}) => {

  console.log("ITEMS NAV BAR BOTON", items)

  const { prodEncontrado, changeList} = useContext(SearchContext)

  let [itemEncontrado, setItemEncontrado] = useState([])

  const [busqueda, setBusqueda] = useState ('');

  const handleChange = (evento) => {
    setBusqueda(evento.target.value)
    filtrado(evento.target.value)
 
  }

  const filtrado = (prodBuscado) =>{
    console.log("BUSCADO PRODUCTO", prodBuscado)  

    const restultadoBusqueda = items.filter((prod) =>{
      if(prod.nombre.toString().toLowerCase().includes(prodBuscado.toLowerCase())){
        return prod;
      }
    })
     setItemEncontrado(restultadoBusqueda)
  }
  // console.log("ITEM ENCONTRADO", itemEncontrado)

  useEffect(()=>{
         
    changeList(itemEncontrado)

  },[itemEncontrado])
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

    </div>
  )
}

export default Searcher