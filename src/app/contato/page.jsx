import React from 'react';
import Header from '@/components/layout/Header';
import FormContato from '@/components/forms/FormContato';
import Footer from '@/components/layout/Footer';
import { siteConfig, getEnderecoCompleto } from '@/config/site';

export default function Contato() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-widest text-center mb-16 text-gold-champagne font-montserrat-alternates">
            Entre em Contato
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl font-medium uppercase tracking-wider text-gold-champagne mb-8 font-montserrat-alternates">Informações de Contato</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-gold-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-medium">{siteConfig.contato.telefone}</span>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-gold-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <a href={`https://wa.me/${siteConfig.contato.whatsapp}`} className="text-gray-medium hover:text-gold-champagne transition-fast">
                    {siteConfig.contato.telefone} (WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-gold-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${siteConfig.contato.email}`} className="text-gray-medium hover:text-gold-champagne transition-fast">
                    {siteConfig.contato.email}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-gold-champagne mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-medium leading-relaxed">{getEnderecoCompleto()}</span>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <FormContato />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}