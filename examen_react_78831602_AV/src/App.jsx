import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Index from "./components/Index.jsx";
import RegistrarPrestamo from "./components/RegistrarPrestamo.jsx";
import Reportes from "./components/Reportes.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element= {<Index/>}/>
        <Route path="registrar-prestamos" element= {<RegistrarPrestamo/>}/>
        <Route path="reportes" element= {<Reportes/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
