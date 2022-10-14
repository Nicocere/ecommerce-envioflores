import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

// import { collection, addDoc } from 'firebase/firestore';
// import { baseDeDatos } from './FireBaseConfig';
// import { Adicionales } from '../src/componentes/Adicionales/Adicionales.js' 

//  const ref = collection(baseDeDatos, 'adicionales');

//  Adicionales.map((adicional) => addDoc(ref, adicional ));

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
