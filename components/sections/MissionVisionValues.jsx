import React from 'react';

const MissionVisionValues = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Missão, Visão e Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Missão</h3>
            <p className="text-gray-600">
              Oferecer serviços jurídicos de excelência, garantindo justiça e satisfação aos nossos clientes com ética e profissionalismo.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Visão</h3>
            <p className="text-gray-600">
              Ser referência em advocacia, reconhecido pela inovação, compromisso e resultados positivos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Valores</h3>
            <p className="text-gray-600">
              Ética, integridade, compromisso, excelência e respeito aos direitos humanos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;