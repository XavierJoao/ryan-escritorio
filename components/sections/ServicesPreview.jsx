import React from 'react';

const ServicesPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-brand-copper mb-4">
              Direito Tributário
            </h3>
            <p className="text-text-secondary">
              Assessoria completa em questões fiscais, planejamento tributário e defesa em processos administrativos e judiciais.
            </p>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-brand-copper mb-4">
              Direito Civil
            </h3>
            <p className="text-text-secondary">
              Atuação em contratos, responsabilidade civil, família e sucessões, com foco na resolução pacífica de conflitos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;