import { useState } from 'react';
import BookCard from './BookCard';
import BookViewer from './BookViewer';

interface Book {
  id: number;
  title: string;
  author: string;
  fileName: string;
  color: string;
  coverImage: string;
}

export default function LibrosComponent() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Mapeo de los libros reales de la carpeta public/libros
  const books: Book[] = [
    {
      id: 1,
      title: "Crónica de una Muerte Anunciada",
      author: "Gabriel García Márquez",
      fileName: "Cronica_de_una_Muerte_Anunciada-Gabriel_Garcia_Marquez (1).pdf",
      color: "from-yellow-400 to-yellow-600",
      coverImage: "/images/book-covers/garcia-marquez-cronica.svg"
    },
    {
      id: 2,
      title: "La Mala Hora",
      author: "Gabriel García Márquez",
      fileName: "Gabriel García Márquez - La mala hora (1).pdf",
      color: "from-green-400 to-green-600",
      coverImage: "/images/book-covers/garcia-marquez-mala-hora.svg"
    },
    {
      id: 3,
      title: "El Amor en los Tiempos del Cólera",
      author: "Gabriel García Márquez",
      fileName: "Garcia Marquez Gabriel El Amor en los Tiempos de Cólera.pdf",
      color: "from-red-400 to-red-600",
      coverImage: "/images/book-covers/garcia-marquez-amor.svg"
    },
    {
      id: 4,
      title: "Macario",
      author: "B. Traven",
      fileName: "Macario - B. Traven.pdf",
      color: "from-purple-400 to-purple-600",
      coverImage: "/images/book-covers/traven-macario.svg"
    },
    {
      id: 5,
      title: "Cazadores de Microbios",
      author: "Paul de Kruif",
      fileName: "Paul de Kruif - Cazadores de microbios.pdf",
      color: "from-blue-400 to-blue-600",
      coverImage: "/images/book-covers/kruif-cazadores.svg"
    },
    {
      id: 6,
      title: "Cuentos de Cortázar",
      author: "Julio Cortázar",
      fileName: "cortc3a1zar-julio-cuentos-de-cortc3a1zar.pdf",
      color: "from-indigo-400 to-indigo-600",
      coverImage: "/images/book-covers/cortazar-cuentos.svg"
    },
    {
      id: 7,
      title: "Cuentos",
      author: "Jorge Luis Borges",
      fileName: "cuentos-borges (1).pdf",
      color: "from-pink-400 to-pink-600",
      coverImage: "/images/book-covers/borges-cuentos.svg"
    },
    {
      id: 8,
      title: "Navidad en las Montañas",
      author: "Ignacio Manuel Altamirano",
      fileName: "navidad_en_las_monta_as_-_altamirano.pdf",
      color: "from-teal-400 to-teal-600",
      coverImage: "/images/book-covers/altamirano-navidad.svg"
    }
  ];

  const handleViewBook = (fileName: string) => {
    const book = books.find(b => b.fileName === fileName);
    if (book) {
      setSelectedBook(book);
    }
  };

  const handleCloseViewer = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Catálogo de Libros
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              fileName={book.fileName}
              color={book.color}
              coverImage={book.coverImage}
              onViewBook={handleViewBook}
            />
          ))}
        </div>
      </div>

      {selectedBook && (
        <BookViewer
          fileName={selectedBook.fileName}
          title={selectedBook.title}
          author={selectedBook.author}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
}
