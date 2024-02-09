import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "../style/nav.css";

function Header() {
  const location = useLocation();
  return (
    <header className="fixed top-0 w-full bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link to="/">
          <img className="" src={logo} alt="logo" width={50} />
        </Link>
        <nav className="flex space-x-4">
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`nav-link ${location.pathname === "/registrar-prestamos" ? "active" : ""}`}
            to="/registrar-prestamos"
          >
            Registrar Prestamos
          </Link>
          <Link
            className={`nav-link ${location.pathname === "/reportes" ? "active" : ""}`}
            to="/reportes"
          >
            Reportes
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
