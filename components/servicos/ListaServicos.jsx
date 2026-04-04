import React from 'react';
import CardServico from './CardServico';
import { servicos } from '../../lib/servicos';

const ListaServicos = () => {
  const servicosArray = Object.values(servicos);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {servicosArray.map((servico) => (
        <CardServico
          key={servico.slug}
          title={servico.titulo}
          description={servico.descricao}
          slug={servico.slug}
        />
      ))}
    </div>
  );
};

export default ListaServicos;