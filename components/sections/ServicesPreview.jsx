import React from 'react';

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Direito Tributário
            </h3>
            <p className="text-gray-600">
              Assessoria completa em questões fiscais, planejamento tributário e defesa em processos administrativos e judiciais.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Direito Civil
            </h3>
            <p className="text-gray-600">
              Atuação em contratos, responsabilidade civil, família e sucessões, com foco na resolução pacífica de conflitos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;