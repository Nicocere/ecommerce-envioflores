import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {



  return (
    <BrowserRouter>
    <Header/>    
    <Main/>
    <Footer/>

    </BrowserRouter>

  );
}

export default App;
