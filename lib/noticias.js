// Simulação de banco de dados com array interno
import { slugify } from './helpers.js';

const noticiasData = [
  {
    id: 1,
    title: 'Nova Reforma Tributária Aprovada',
    author: 'Dr. João Lopes',
    date: '2024-04-01',
    image: '/images/noticias/reforma-tributaria.jpg',
    summary: 'Análise das mudanças recentes no sistema tributário brasileiro.',
    content: 'Conteúdo completo da notícia sobre a nova reforma tributária aprovada no congresso...'
  },
  {
    id: 2,
    title: 'Casos de Sucesso em Direito Civil',
    author: 'Dra. Maria Pinto',
    date: '2024-03-15',
    image: '/images/noticias/casos-civil.jpg',
    summary: 'Histórias de clientes satisfeitos com nossas soluções.',
    content: 'Conteúdo completo da notícia sobre casos de sucesso em direito civil...'
  },
  {
    id: 3,
    title: 'Atualizações Jurídicas 2024',
    author: 'Equipe Lopes Pinto',
    date: '2024-02-28',
    image: '/images/noticias/atualizacoes-2024.jpg',
    summary: 'As últimas novidades no mundo do direito.',
    content: 'Conteúdo completo da notícia sobre atualizações jurídicas de 2024...'
  },
  {
    id: 4,
    title: 'Importância da Assessoria Jurídica',
    author: 'Dr. João Lopes',
    date: '2024-02-10',
    image: '/images/noticias/assessoria-juridica.jpg',
    summary: 'Por que contar com profissionais qualificados é essencial.',
    content: 'Conteúdo completo da notícia sobre a importância da assessoria jurídica...'
  },
  {
    id: 5,
    title: 'Direito Digital: Novos Desafios',
    author: 'Dra. Maria Pinto',
    date: '2024-01-20',
    image: '/images/noticias/direito-digital.jpg',
    summary: 'Como o avanço tecnológico impacta o direito.',
    content: 'Conteúdo completo da notícia sobre direito digital e novos desafios...'
  },
  {
    id: 6,
    title: 'Planejamento Sucessório',
    author: 'Equipe Lopes Pinto',
    date: '2024-01-05',
    image: '/images/noticias/planejamento-sucessorio.jpg',
    summary: 'Dicas para organizar o patrimônio familiar.',
    content: 'Conteúdo completo da notícia sobre planejamento sucessório...'
  }
];

// Função para obter todas as notícias
export function getNoticias() {
  return noticiasData;
}

// Função para obter notícia específica pelo slug
export function getNoticiaBySlug(slug) {
  return noticiasData.find(noticia => slugify(noticia.title) === slug) || null;
}