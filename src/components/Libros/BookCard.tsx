import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  fileName: string;
  color: string;
  coverImage?: string;
  onViewBook: (fileName: string) => void;
}

export default function BookCard({ title, author, fileName, color, coverImage, onViewBook }: BookCardProps) {
  const handleViewClick = () => {
    onViewBook(fileName);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`h-48 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={`Portada de ${title}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <i className="fas fa-book text-white text-4xl"></i>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {author}
        </h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <div className="flex gap-2">
          <button 
            onClick={handleViewClick}
            className={`flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-200`}
          >
            Leer Libro
          </button>
          <button className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors duration-200">
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}