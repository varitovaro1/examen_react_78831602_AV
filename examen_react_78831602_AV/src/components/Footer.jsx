import { Link, useLocation} from 'react-router-dom'
import logo from "../assets/logo.png";
import "../style/nav.css";

function Footer() {
    const location=useLocation();
  return (
    <footer className="bottom-0 shadow-md bg-gray-900 w-full">
        <div className="w-full p-4 md:py-8 container mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    
                    <img src={logo} alt="Logo" width={150} height={200} />
                </Link>
                <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 '>
                    <li>
                    <Link
                        className={`footer ${location.pathname === "/" ? "active" : ""}`}
                        to="/"
                    >
                        Inicio
                    </Link>
                    <li>
                    </li>
                    <Link
                        className={`footer ${location.pathname === "/registrar-prestamos" ? "active" : ""}`}
                        to="/registrar-prestamos"
                    >
                        Registrar Prestamos
                    </Link>
                    <li>
                    </li>
                    <Link
                        className={`footer ${location.pathname === "/reportes" ? "active" : ""}`}
                        to="/reportes"
                    >
                        Reportes
                    </Link>
                    </li>
                </ul>
            </div>
            <hr className='my-6 sm:mx-auto lg:my-8 border-gray-800'/>
            <span className='Block text-sm sm:text-center text-gray-50'>2024</span>
        </div>
      
    </footer>
  )
}

export default Footer
