import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      <div className="fixed z-20 top-0 left-0 right-0 p-2 sm:p-4 bg-white shadow-sm">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400 flex items-center gap-1 sm:gap-2">
              <FontAwesomeIcon icon={faBook} className="text-base sm:text-xl md:text-2xl" />
              <span className="hidden xs:inline sm:inline">Biblioteca Escolar</span>
              <span className="xs:hidden sm:hidden">BiblioEscolar</span>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <Link
                to="/"
                className="font-bold text-sm sm:text-base text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200 px-2 py-1 rounded"
              >
                Inicio
              </Link>
              <Link
                to="/libros"
                className="font-bold text-sm sm:text-base text-gray-600 hover:text-gray-800 hover:scale-105 transition-all duration-200 px-2 py-1 rounded"
              >
                Libros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
