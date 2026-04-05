import React from 'react';
import Header from '@/components/layout/Header';
import ListaNoticiasBlog from '@/components/noticias/ListaNoticiasBlog';
import Footer from '@/components/layout/Footer';

export default function Noticias() {
  return (
    <div className="min-h-screen bg-brand-gunmetal">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-12">
            Notícias
          </h1>
          <ListaNoticiasBlog />
        </div>
      </div>
      <Footer />
    </div>
  );
}