interface BookViewerProps {
  fileName: string;
  title: string;
  author: string;
  onClose: () => void;
}

export default function BookViewer({ fileName, title, author, onClose }: BookViewerProps) {
  const pdfPath = `/libros/${fileName}`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-gray-800/50  flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{author}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              Descargar
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-times"></i>
              Cerrar
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 p-4">
          <div className="w-full h-full border border-gray-300 rounded">
            <iframe
              src={pdfPath}
              className="w-full h-full rounded"
              title={`${title} - ${author}`}
              style={{ minHeight: '600px' }}
            >
              <p className="p-4 text-center text-gray-600">
                Tu navegador no soporta la visualización de PDFs. 
                <a 
                  href={pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline ml-1"
                >
                  Haz clic aquí para abrir el PDF en una nueva pestaña
                </a>
              </p>
            </iframe>
          </div>
        </div>

        {/* Footer with controls */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Archivo: {fileName}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center gap-2"
              >
                <i className="fas fa-external-link-alt"></i>
                Abrir en nueva pestaña
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}