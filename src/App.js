import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';



// import { collection, addDoc } from 'firebase/firestore';
// import { baseDeDatos } from './FireBaseConfig';
// import { stockProductos } from '../src/componentes/Products/Products' 

//  const ref = collection(baseDeDatos, 'productos');

//  stockProductos.map((producto) => addDoc(ref, producto));

function App() {

  return (


    
    <BrowserRouter>

    <div className='cuerpo'>
        <Header />
        <Main />
        <Footer />
    </div>
    </BrowserRouter>


  );
}

export default App;
