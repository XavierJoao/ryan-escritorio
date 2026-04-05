import React from 'react';
import Header from '@/components/layout/Header';
import { notFound } from 'next/navigation';
import { getNoticiaBySlug } from '@/lib/noticias';
import Footer from '@/components/layout/Footer';

export default function NoticiaPage({ params }) {
  const { slug } = params;
  const noticia = getNoticiaBySlug(slug);

  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl surface-panel p-10">
        <img src={noticia.image} alt={noticia.title} className="w-full h-64 object-cover rounded-lg mb-8 border border-slate-grey" />
        <h1 className="text-4xl font-bold text-text-primary mb-4">{noticia.title}</h1>
        <div className="flex justify-between items-center text-text-secondary mb-8">
          <span>Por: {noticia.author}</span>
          <span>{new Date(noticia.date).toLocaleDateString('pt-BR')}</span>
        </div>
        <p className="text-text-secondary text-lg leading-relaxed mb-8">{noticia.content}</p>
        <div className="text-center">
          <a
            href={`https://wa.me/5511999999999?text=Olá, gostaria de falar sobre a notícia: ${noticia.title}`}
            className="btn-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}