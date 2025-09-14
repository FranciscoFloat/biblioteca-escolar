import { useState, useEffect } from "react";

export default function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/src/assets/images/banner_dickends.png",
      alt: "Charles Dickens Banner",
    },
    {
      src: "/src/assets/images/banner_elenagarro.png",
      alt: "Elena Garro Banner",
    },
    {
      src: "/src/assets/images/banner_oscarwilde.png",
      alt: "Oscar Wilde Banner",
    },
    {
      src: "/src/assets/images/banner_traven.png",
      alt: "B. Traven Banner",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full   mx-auto overflow-hidden  shadow-lg">
      {/* Contenedor de imágenes */}
      <div className="relative h-[85%] md:h-96 lg:h-[28rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Imagen anterior"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
        aria-label="Siguiente imagen"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicador de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30">
        <div
          className="h-full bg-white transition-all duration-4000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / images.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
