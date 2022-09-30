import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

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
