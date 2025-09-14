import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      <div className="fixed z-20 top-0 left-0 right-0 p-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold  text-blue-400 mt-2">
              <FontAwesomeIcon icon={faBook} />
              Biblioteca Escolar
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="font-bold text-gray-600 hover:text-gray-800 hover:text-lg transition-all duration-200"
              >
                Inicio
              </Link>
              <Link
                to="/libros"
                className="font-bold text-gray-600 hover:text-gray-800 hover:text-lg transition-all duration-200"
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
