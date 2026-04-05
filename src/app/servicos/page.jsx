import React from 'react';
import Header from '@/components/layout/Header';
import ListaServicos from '@/components/servicos/ListaServicos';
import Footer from '@/components/layout/Footer';

export default function Servicos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h1>
          <ListaServicos />
        </div>
      </div>
      <Footer />
    </div>
  );
}