import React from 'react';

const OfficePhoto = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Nosso Escritório
          </h2>
          <img
            src="/images/escritorio.jpg" // Substitua pelo caminho real da imagem
            alt="Foto do Escritório"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default OfficePhoto;