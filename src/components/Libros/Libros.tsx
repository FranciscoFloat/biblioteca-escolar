export default function LibrosComponent() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Catálogo de Libros
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Libro 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <i className="fas fa-book text-white text-4xl"></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Charles Dickens
            </h3>
            <p className="text-gray-600 mb-4">Grandes Esperanzas</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* Libro 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <i className="fas fa-book text-white text-4xl"></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Elena Garro
            </h3>
            <p className="text-gray-600 mb-4">Los recuerdos del porvenir</p>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* Libro 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <i className="fas fa-book text-white text-4xl"></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Oscar Wilde
            </h3>
            <p className="text-gray-600 mb-4">El retrato de Dorian Gray</p>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* Libro 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <i className="fas fa-book text-white text-4xl"></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              B. Traven
            </h3>
            <p className="text-gray-600 mb-4">El tesoro de la Sierra Madre</p>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* Libro 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <i className="fas fa-book text-white text-4xl"></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Gabriel García Márquez
            </h3>
            <p className="text-gray-600 mb-4">Cien años de soledad</p>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* Libro 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
            <i className="fas fa-book text-white text-4xl"></i>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Jorge Luis Borges
            </h3>
            <p className="text-gray-600 mb-4">Ficciones</p>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition-colors duration-200">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
