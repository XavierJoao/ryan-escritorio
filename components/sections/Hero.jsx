import React from 'react';

const Hero = () => {
  return (
    <section className="bg-brand-gunmetal text-text-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="office-name text-4xl md:text-6xl mb-4">
          Lopes Pinto Advogados
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-text-secondary">
          Excelência jurídica com compromisso e dedicação
        </p>
        <button className="btn-primary">
          Entre em Contato
        </button>
      </div>
    </section>
  );
};

export default Hero;