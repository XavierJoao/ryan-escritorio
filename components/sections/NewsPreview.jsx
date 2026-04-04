import React from 'react';

const NewsPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Últimas Notícias
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Nova Reforma Tributária
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Análise das mudanças recentes no sistema tributário brasileiro.
            </p>
            <span className="text-blue-600 text-sm">Leia mais</span>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Casos de Sucesso em Direito Civil
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Histórias de clientes satisfeitos com nossas soluções.
            </p>
            <span className="text-blue-600 text-sm">Leia mais</span>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Atualizações Jurídicas
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              As últimas novidades no mundo do direito.
            </p>
            <span className="text-blue-600 text-sm">Leia mais</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;