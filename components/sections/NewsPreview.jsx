import React from 'react';

const NewsPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mb-12">
          Últimas Notícias
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Nova Reforma Tributária
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Análise das mudanças recentes no sistema tributário brasileiro.
            </p>
            <span className="text-brand-copper text-sm">Leia mais</span>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Casos de Sucesso em Direito Civil
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Histórias de clientes satisfeitos com nossas soluções.
            </p>
            <span className="text-brand-copper text-sm">Leia mais</span>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-3">
              Atualizações Jurídicas
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              As últimas novidades no mundo do direito.
            </p>
            <span className="text-brand-copper text-sm">Leia mais</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;