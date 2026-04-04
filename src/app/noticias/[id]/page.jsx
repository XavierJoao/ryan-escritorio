import React from 'react';
import { notFound } from 'next/navigation';
import { noticias } from '../../../lib/noticias';

export default function NoticiaPage({ params }) {
  const { id } = params;
  const noticia = noticias.find(n => n.id === parseInt(id));

  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <img src={noticia.image} alt={noticia.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{noticia.title}</h1>
        <div className="flex justify-between items-center text-gray-600 mb-8">
          <span>Por: {noticia.author}</span>
          <span>{new Date(noticia.date).toLocaleDateString('pt-BR')}</span>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{noticia.content}</p>
      </div>
    </div>
  );
}