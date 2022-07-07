// import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from './pages/ServiciosPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>{/* Esta es una forma de llamar al componente */}
      <BrowserRouter>
      <Nav />{/* Las siguientes(Nav y Footer) son otra  forma de llamar al componente */}
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="nosotros" element= {<NosotrosPage/>}/>
        <Route path="contacto" element= {<ContactoPage/>}/>
        <Route path="galeria" element= {<GaleriaPage/>}/>
        <Route path="novedades" element= {<NovedadesPage/>}/>
        <Route path="servicios" element= {<ServiciosPage/>}/>


      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
