import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-white  bottom-0 fixed z-10 left-0 right-0 border-t border-gray-200">
          <div className="flex justify-center items-center">
            <div className="text-1xl font-bold  text-gray-400 mt-4">
              <div>
                <span> &copy; {year} Biblioteca Escolar </span> |{" "}
                <span>
                  Hecho con{" "}
                  <span className="text-red-400">
                    {" "}
                    <FontAwesomeIcon icon={faHeart} />{" "}
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
