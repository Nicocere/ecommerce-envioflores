import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

function App() {



  return (


    <CartProvider>
    <BrowserRouter>

    <div className='cuerpo'>
        <Header />
        <Main />
        <Footer />
    </div>
    </BrowserRouter>
</CartProvider>

  );
}

export default App;
