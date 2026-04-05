import React from 'react';

const Hero = () => {
  return (
    <section className="text-white-pure py-32">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-widest mb-8 font-montserrat-alternates text-gold-champagne">
          Lopes Pinto Advogados
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-medium leading-relaxed max-w-3xl mx-auto">
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