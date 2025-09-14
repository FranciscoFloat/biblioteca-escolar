import { Link } from "react-router-dom";

export function ComienzaComponent() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-16 px-6 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24 translate-y-24"></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Comienza a leer
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-blue-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Explora nuestra amplia colección de libros y 
            <span className="font-medium text-white"> comienza a leer hoy mismo</span>.
          </p>
          
          {/* Botón de acción */}
          <div className="text-center">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
              
                <Link to="/libros" className="text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                  Explorar biblioteca
                </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}