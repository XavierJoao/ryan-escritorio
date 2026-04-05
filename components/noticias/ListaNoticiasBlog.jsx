import React from 'react';
import CardNoticia from './CardNoticia';
import { getNoticias } from '@/lib/noticias';

const ListaNoticiasBlog = ({ limit }) => {
  const noticias = getNoticias();
  const displayedNoticias = limit ? noticias.slice(0, limit) : noticias;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedNoticias.map((noticia) => (
        <CardNoticia
          key={noticia.id}
          title={noticia.title}
          date={noticia.date}
          image={noticia.image}
          summary={noticia.summary}
          slug={noticia.slug}
        />
      ))}
    </div>
  );
};

export default ListaNoticiasBlog;