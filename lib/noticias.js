/**
 * Dados de notícias - Lopes Pinto Advogados
 * Contém todas as notícias e artigos do blog
 */

export const noticias = [
  {
    id: 1,
    title: 'Novidades no Direito Tributário 2024',
    slug: 'novidades-direito-tributario-2024',
    date: '2024-03-15',
    author: 'Dr. João Silva',
    image: '/images/noticias/noticia-1.jpg',
    summary: 'Confira as principais mudanças na legislação tributária para 2024 e como isso afeta sua empresa.',
    content: 'Este artigo detalha todas as alterações significativas na legislação tributária que entraram em vigor em 2024. Abordaremos as novas regras de imposto de renda, IPI e contribuições sociais que podem impactar diretamente no planejamento tributário das empresas.'
  },
  {
    id: 2,
    title: 'Guia Completo: Direitos do Consumidor',
    slug: 'guia-direitos-consumidor',
    date: '2024-03-10',
    author: 'Dra. Maria Santos',
    image: '/images/noticias/noticia-2.jpg',
    summary: 'Entenda seus direitos como consumidor e como a justiça pode protegê-lo em caso de conflitos.',
    content: 'Este guia abrangente explora todos os direitos garantidos ao consumidor pela legislação brasileira. Incluímos informações sobre como proceder em caso de produtos com defeito, publicidade enganosa e outras situações comuns que podem levar a conflitos entre consumidores e fornecedores.'
  },
  {
    id: 3,
    title: 'Planejamento Sucessório: Por Que é Importante',
    slug: 'planejamento-sucessorio-importancia',
    date: '2024-03-05',
    author: 'Dr. Carlos Oliveira',
    image: '/images/noticias/noticia-3.jpg',
    summary: 'Descubra por que fazer um planejamento sucessório adequado é essencial para proteger seu patrimônio.',
    content: 'O planejamento sucessório é uma ferramenta jurídica fundamental para garantir que seus bens sejam transmitidos de acordo com seus desejos. Este artigo explica os benefícios de um planejamento bem estruturado e as consequências de negligenciá-lo.'
  },
  {
    id: 4,
    title: 'Reforma Trabalhista: O Que Mudou',
    slug: 'reforma-trabalhista-o-que-mudou',
    date: '2024-02-28',
    author: 'Dr. Roberto Costa',
    image: '/images/noticias/noticia-4.jpg',
    summary: 'Confira um resumo das principais mudanças na legislação trabalhista e seus impactos.',
    content: 'Analisamos em detalhes as principais mudanças trazidas pela reforma trabalhista e como elas afetam tanto empregadores quanto empregados. Desde a flexibilização de contratos até novas regras de férias, tudo que você precisa saber está aqui.'
  }
];

/**
 * Retorna todas as notícias
 * @returns {Array} Array com todas as notícias
 */
export function getNoticias() {
  return noticias;
}

/**
 * Busca uma notícia pelo slug
 * @param {string} slug - O slug da notícia a ser buscada
 * @returns {Object|null} A notícia encontrada ou null
 */
export function getNoticiaBySlug(slug) {
  return noticias.find(noticia => noticia.slug === slug) || null;
}
