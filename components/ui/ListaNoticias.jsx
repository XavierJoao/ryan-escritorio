import React from 'react';
import Link from 'next/link';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {noticias.map((noticia) => (
        <div key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img src={noticia.image} alt={noticia.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{noticia.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{noticia.summary}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{noticia.author}</span>
              <span>{new Date(noticia.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <Link href={`/noticias/${noticia.slug}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Leia mais
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaNoticias;