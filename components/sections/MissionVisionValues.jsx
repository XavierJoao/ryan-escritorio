import React from 'react';

const MissionVisionValues = () => {
  return (
    <section className="py-16 bg-brand-gunmetal">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mb-12">
          Missão, Visão e Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-brand-copper mb-4">Missão</h3>
            <p className="text-text-secondary">
              Oferecer serviços jurídicos de excelência, garantindo justiça e satisfação aos nossos clientes com ética e profissionalismo.
            </p>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-brand-copper mb-4">Visão</h3>
            <p className="text-text-secondary">
              Ser referência em advocacia, reconhecido pela inovação, compromisso e resultados positivos.
            </p>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-brand-copper mb-4">Valores</h3>
            <p className="text-text-secondary">
              Ética, integridade, compromisso, excelência e respeito aos direitos humanos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;