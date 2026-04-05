import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Lopes Pinto Advogados
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Excelência jurídica com compromisso e dedicação
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Entre em Contato
        </button>
      </div>
    </section>
  );
};

export default Hero;