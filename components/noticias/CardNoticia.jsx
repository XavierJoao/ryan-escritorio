import React from 'react';
import Link from 'next/link';
import { formatarData, capitalize } from '../../lib/helpers';

const CardNoticia = ({ title, date, image, summary, slug }) => {
  return (
    <article className="surface-card overflow-hidden hover:shadow-lg transition-normal">
      <Link href={`/noticias/${slug}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-normal" />
      </Link>
      <div className="p-8">
        <div className="text-sm text-gray-medium mb-3 uppercase tracking-wider">
          {formatarData(date)}
        </div>
        <Link href={`/noticias/${slug}`}>
          <h3 className="text-xl font-bold text-black-deep mb-4 hover:text-gold-champagne transition-normal line-clamp-2 font-montserrat-alternates">
            {title}
          </h3>
        </Link>
        <p className="text-gray-medium text-sm leading-relaxed mb-6 line-clamp-3">
          {summary}
        </p>
        <Link
          href={`/noticias/${slug}`}
          className="inline-block text-gold-champagne hover:text-champagne-light font-medium transition-normal uppercase tracking-wider text-sm"
        >
          Leia mais →
        </Link>
      </div>
    </article>
  );
};

export default CardNoticia;