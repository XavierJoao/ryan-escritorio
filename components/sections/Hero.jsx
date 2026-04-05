import React from 'react';

const Hero = () => {
  return (
    <section className="text-text-primary py-24">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="office-name text-5xl md:text-6xl font-bold uppercase tracking-widest mb-6">
          Lopes Pinto Advogados
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-slate-grey leading-relaxed">
          Excelência jurídica com compromisso e dedicação
        </p>
        <button className="px-8 py-3 text-sm uppercase font-semibold tracking-widest border border-brand-copper text-brand-copper bg-transparent hover:bg-brand-copper hover:text-brand-gunmetal transition duration-300">
          Entre em Contato
        </button>
      </div>
    </section>
  );
};

export default Hero;