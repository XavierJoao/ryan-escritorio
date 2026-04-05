import React from 'react';

const OfficePhoto = () => {
  return (
    <section className="py-16 bg-brand-gunmetal">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto surface-panel p-8">
          <h2 className="section-title text-center mb-8">
            Nosso Escritório
          </h2>
          <img
            src="/images/escritorio.jpg" // Substitua pelo caminho real da imagem
            alt="Foto do Escritório"
            className="w-full h-96 object-cover rounded-lg shadow-lg border border-slate-grey"
          />
        </div>
      </div>
    </section>
  );
};

export default OfficePhoto;