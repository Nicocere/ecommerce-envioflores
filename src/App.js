import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import ItemCount from './componentes/ItemCount/ItemCount'


function App() {

   const onAdd = (agregar) => {
    console.log( "click boton agregar", agregar)
   }


  return (
    <>
    <Header/>
    <ItemCount stock={5} initial={0} onAdd={onAdd}/>
    <Main/>
    <Footer/>

    </>

  );
}

export default App;
