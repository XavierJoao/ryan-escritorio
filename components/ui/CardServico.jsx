import React from 'react';
import Link from 'next/link';

const CardServico = ({ title, description, slug }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={`/servicos/${slug}`}>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Saber mais
        </button>
      </Link>
    </div>
  );
};

export default CardServico;