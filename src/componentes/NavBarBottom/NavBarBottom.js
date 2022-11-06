import React , { useContext, useEffect, useState} from "react";
import {collection, getDocs} from 'firebase/firestore'
import { baseDeDatos } from "../../FireBaseConfig";
import Item from "../Item/Item";
import ItemList from "../itemList/ItemList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { SearchContext } from "../../context/SearchContext";



const NavBarBottom = () => {

  // useContext
    const { prodEncontrado, changeList} = useContext(SearchContext)

  // forma dinamica
  let [itemEncontrado, setItemEncontrado] = useState([])

  // forma estatica
  let [items,  setItems] = useState ([]);

  // buscador empieza siendo vacio, por lo que cuando cambia primero empieza 
  // vacio y dsp cambia el estado por la primer letra que toque.....
  const [busqueda, setBusqueda] = useState ('');


  // ahora ya logre mostrar mis prodocutos cuando hago el click en buscar
  // pero de entrada no me encuentra nada y despues del click (onSubmit), empieza a filtrar..

  
  const datos = e => {
    e.preventDefault()

    const itemBuscado = collection(baseDeDatos, 'productos');
    console.log(itemBuscado, "ITEM BUSCADO")

            getDocs(itemBuscado)
            .then((resp) => {
              console.log("resp ",resp)
            const productos = resp.docs.map((prod)=>{

                 return{
                    id: prod.id,
                    ...prod.data()
                };
            });
            console.log("seteo productos")  
            setItems(productos);
            console.log(productos, "PRODUCTTOS")
            
          })
          .catch((error)=>{
            console.log("Los Productos no llegaron", error);
          });

          // console.log("itemBhscado", itemBuscado)
          
          
           changeList(itemsFiltrados)
  };


  const handleChange = (evento) => {
    setBusqueda(evento.target.value)
    filtrado(evento.target.value)
    // changeList(evento.target.value)

  }
  
  console.log("busqueda cantidad:",busqueda.length)
  console.log("BUSQUEDA letra:",  busqueda)

  console.log("item encontrado", itemEncontrado)


  const filtrado = (prodBuscado) =>{
    console.log("BUSCADO PRODUCTO", prodBuscado)  

    const restultadoBusqueda = items.filter((prod)=>{

      if(prod.nombre.toString().toLowerCase().includes(prodBuscado.toLowerCase())){
        return prod;
      }
    })
    setItemEncontrado(restultadoBusqueda)
  }

  const itemsFiltrados = itemEncontrado?.map(item =>{
    return item
  })

  console.log("iteM FILTRADO", itemsFiltrados)

  useEffect(()=>{
    console.log("componente rendereado: ITEMS: ", items)
    if(items){
      console.log("Filtando de")
      filtrado(busqueda)
    }
  },[items])



  return (


    <div >

      <form className="form-buscador"  onSubmit={datos} >

        <input
        type="text"
        className=''
        value={busqueda}
        placeholder= "Buscar Producto"
        onChange={handleChange}
        />
        <button>Buscar</button>
      </form>

      {/* {
        itemEncontrado !== 23 ?
          <ItemList items={itemsFiltrados}/> : <p>no se que onda</p>
      } */}


    </div>
  )
}

export default NavBarBottom