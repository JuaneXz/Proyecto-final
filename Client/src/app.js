import './App.css';
import { Route, Routes , useLocation} from 'react-router-dom';
import  axios  from 'axios';
import Home from './componentes/Home/home'
import Nosotros from './componentes/Nosotros/nosotros';
import Adopcion from './componentes/Adopción/adopcion';
import NavBar from './componentes/NavBar/navbar';
import Fundacion from './componentes/Fundación/Fundacion';
import Registro from './componentes/Sesiones/registro/registro';

//import Login from './componentes/Sesiones/sesion/login';
import Contacto from './componentes/Contacto/contacto'
//import { RequireAuth } from "react-auth-kit";
import Login from './componentes/Autenticación/login';
import LogOut from './componentes/Autenticación/logout';
import Perfil from './componentes/Autenticación/perfil';
import { useAuth0 } from '@auth0/auth0-react';

// import Login from './componentes/Sesiones/sesion/login';
// import Contacto from './componentes/Contacto/contacto';
import Donacion from './componentes/Donaciones/donacionesForm';
// import { RequireAuth } from "react-auth-kit";



// const location = useLocation();
import FormFundaciones from './componentes/Forms/FormFundaciones.jsx'
import FormMascota from './componentes/Forms/FormMascota.jsx'
import DetalleMascota from './componentes/Mascota/detailMascota';
import DetalleFundacion from './componentes/Fundación/detailFundacion'
// import CardFundaciones from './componentes/Cartas/cardFundacion'

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  axios.defaults.baseURL = 'http://localhost:3001/'
  const location = useLocation();
  const { isAutheticated } = useAuth0();

  return (
      <div>
            <NavBar/>
          <Routes>
          {/* <Route
          path="/"
          element={
          //  <RequireAuth loginPath="/login">
              <Home />
          //  </RequireAuth>
          }
        ></Route> */}

            {/* <Route exact path="/" element={<Landing/>}></Route> */}
            <Route path="/" element={<Home />} />            
            <Route path="/about" element={<Nosotros />} />
            <Route path="/fundaciones" element={<Fundacion/>} />
            <Route path="/mascota/:id" element={<DetalleMascota/>} />
            <Route path="/fundacion/:id" element={<DetalleFundacion/>} />
            <Route path="/adopciones" element={<Adopcion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />}/>
            <Route path="/perfil" element={<Perfil />}/>
            <Route path="/registro" element={<Registro />} />
            <Route path="/formFundaciones" element={<FormFundaciones/>}/>
            <Route path="/formMascota" element={<FormMascota />} />
            <Route path="/donation-form/:fundacionId" element={<Donacion />} />
            {/* <Route path='*' element={<Navigate to='/error'/>}/>
            <Route path="/error" element={< Redirect/>} /> */}
          </Routes> 
          <Contacto/>
        </div>
  );
}

export default App;
