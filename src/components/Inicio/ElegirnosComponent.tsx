import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUniversalAccess,
  faGraduationCap,
  faChartLine,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export default function ElegirnosComponent() {
  interface Elegirnos {
    id: number;
    title: string;
    icon: IconDefinition;
    text: string;
  }

  const ELEGIRNOS: Elegirnos[] = [
    {
      id: 1,
      title: "Amplio catálogo",
      icon: faBook,
      text: " libros de varios generos",
    },
    {
      id: 2,
      title: "Fácil Acceso",
      icon: faUniversalAccess,
      text: " libros de varios generos",
    },
    {
      id: 3,
      title: "Calidad Educativa",
      icon: faGraduationCap,
      text: "Libros seleccionados por expertos en educación",
    },
    {
      id: 4,
      title: "Progreso Personal",
      icon: faChartLine,
      text: "Seguimiento de tu historial de lectura",
    },
  ];
  return (
    <>
      <div className="container mx-auto pt-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ¿Por qué elegir BiblioEscolar?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Una plataforma diseñada específicamente para enriquecer la experiencia
          educativa de los estudiantes.
        </p>
      </div>

      <div className="container mx-auto border-t-2 border-gray-200 pt-8 mt-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ELEGIRNOS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-white text-xl"
                ></FontAwesomeIcon>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
