import { Link } from "react-router-dom";

export function ComienzaComponent() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/5 rounded-full -translate-x-8 sm:-translate-x-12 md:-translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-white/5 rounded-full translate-x-12 sm:translate-x-18 md:translate-x-24 translate-y-12 sm:translate-y-18 md:translate-y-24"></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Comienza a leer
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-blue-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light max-w-3xl mx-auto px-2">
            Explora nuestra amplia colección de libros y 
            <span className="font-medium text-white"> comienza a leer hoy mismo</span>.
          </p>
          
          {/* Botón de acción */}
          <div className="text-center">
            <Link 
              to="/libros" 
              className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Explorar biblioteca
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}