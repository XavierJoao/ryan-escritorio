import React from 'react';
import Header from '@/components/layout/Header';
import { notFound } from 'next/navigation';
import { getServicoBySlug } from '@/lib/servicos';
import Footer from '@/components/layout/Footer';

export default function ServicoPage({ params }) {
  const { slug } = params;
  const service = getServicoBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl surface-panel p-10">
        <h1 className="text-4xl font-bold text-text-primary mb-6">{service.titulo}</h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-8">{service.descricao}</p>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Principais Teses:</h2>
        <ul className="list-disc list-inside text-text-secondary space-y-2 mb-8">
          {service.teses.map((tese, index) => (
            <li key={index}>{tese}</li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre os serviços de ${service.titulo}"
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