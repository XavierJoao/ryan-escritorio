import React from 'react';
import Link from 'next/link';

const CardServico = ({ title, description, slug }) => {
  return (
    <div className="surface-card p-6 hover:border-brand-copper transition-fast">
      <h3 className="text-2xl font-semibold text-brand-copper mb-4">{title}</h3>
      <p className="text-text-secondary mb-6">{description}</p>
      <Link href={`/servicos/${slug}`}>
        <button className="btn-primary">
          Saber mais
        </button>
      </Link>
    </div>
  );
};

export default CardServico;