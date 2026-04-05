import React from 'react';
import Link from 'next/link';
import { formatarData, capitalize } from '../../lib/helpers';

const CardNoticia = ({ title, date, image, summary, slug }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link href={`/noticias/${slug}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition duration-300" />
      </Link>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          {formatarData(date)}
        </div>
        <Link href={`/noticias/${slug}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition duration-300 line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {summary}
        </p>
        <Link
          href={`/noticias/${slug}`}
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-300"
        >
          Leia mais →
        </Link>
      </div>
    </article>
  );
};

export default CardNoticia;