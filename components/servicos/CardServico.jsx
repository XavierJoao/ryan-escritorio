import React from 'react';
import Link from 'next/link';

const CardServico = ({ title, description, slug }) => {
  return (
    <div className="surface-card p-8 hover:shadow-lg transition-normal">
      <h3 className="text-2xl font-semibold text-gold-champagne mb-6 font-montserrat-alternates">{title}</h3>
      <p className="text-gray-medium mb-8 leading-relaxed">{description}</p>
      <Link href={`/servicos/${slug}`}>
        <button className="btn-secondary">
          Ver mais
        </button>
      </Link>
    </div>
  );
};

export default CardServico;