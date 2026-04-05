import React from 'react';
import Link from 'next/link';

const CardServico = ({ title, description, slug }) => {
  return (
    <div className="card hover:border-gold-accent transition-fast">
      <h3 className="text-2xl font-semibold text-gold-accent mb-4">{title}</h3>
      <p className="text-text-secondary mb-6">{description}</p>
      <Link href={`/servicos/${slug}`}>
        <button className="btn-primary">
          Ver mais
        </button>
      </Link>
    </div>
  );
};

export default CardServico;