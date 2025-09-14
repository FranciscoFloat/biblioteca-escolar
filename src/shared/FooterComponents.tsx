import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-white bottom-0 fixed z-10 left-0 right-0 border-t border-gray-200">
          <div className="flex justify-center items-center px-2 sm:px-4">
            <div className="text-xs sm:text-sm md:text-base font-bold text-gray-400 py-2 sm:py-4 text-center">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span>&copy; {year} Biblioteca Escolar</span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-1">
                  Hecho con{" "}
                  <span className="text-red-400">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                  para el aprendizaje
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
