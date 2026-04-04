import React from 'react';
import Header from '../../../components/layout/Header';
import { notFound } from 'next/navigation';
import { getNoticiaBySlug } from '../../../lib/noticias';
import Footer from '../../../components/layout/Footer';

export default function NoticiaPage({ params }) {
  const { slug } = params;
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <img src={noticia.image} alt={noticia.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{noticia.title}</h1>
        <div className="flex justify-between items-center text-gray-600 mb-8">
          <span>Por: {noticia.author}</span>
          <span>{new Date(noticia.date).toLocaleDateString('pt-BR')}</span>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{noticia.content}</p>
        <div className="text-center">
          <a
            href="https://wa.me/5511999999999?text=Olá, gostaria de falar sobre a notícia: ${noticia.title}"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}