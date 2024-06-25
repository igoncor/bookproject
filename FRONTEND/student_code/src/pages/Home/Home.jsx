import React from 'react';
import logo from '../../assets/logo_1.png';
import BookCard from '../../components/BookCard/BookCard';

const books = [
  {
    id: 4,
    title: "Libro 4",
    author: "Autor 4",
    imageURL: "url_de_imagen_del_libro_4",
    likes: 4,
  },
  {
    id: 11,
    title: "Libro 11",
    author: "Autor 11",
    imageURL: "url_de_imagen_del_libro_11",
    likes: 3,
  },
  {
    id: 20,
    title: "Libro 20",
    author: "Autor 20",
    imageURL: "url_de_imagen_del_libro_20",
    likes: 5,
  },
];

function Home() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '20px' }}>
      <img src={logo} alt="Logo 1" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <p>You are in Home</p>

      <div className="read-this" style={{ display: 'flex', justifyContent: 'space-around', border: '2px solid #333', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', marginBottom: '20px' }}>
        <h2>Qué leer:</h2>
        {books.map(book => (
          <BookCard key={book.id} book={book} style={{ margin: '0 5px' }} />
        ))}
      </div>

      <div className="top-rank" style={{ border: '2px solid #4285F4', padding: '20px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
        <h2 style={{ color: '#4285F4', marginBottom: '15px' }}>Top-5:</h2>
        <ol style={{ textAlign: 'left' }}>
          <li>Libro 1</li>
          <li>Libro 2</li>
          <li>Libro 3</li>
          <li>Libro 4</li>
          <li>Libro 5</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
