export const servicos = {
  tributario: {
    titulo: 'Direito Tributário',
    descricao: 'Assessoria completa em questões fiscais, planejamento tributário e defesa em processos administrativos e judiciais.',
    slug: 'tributario',
    teses: [
      'Defesa da não incidência de tributos em operações específicas',
      'Aplicação de benefícios fiscais e incentivos',
      'Revisão de lançamentos tributários indevidos',
      'Estratégias para redução de carga tributária legal'
    ]
  },
  civil: {
    titulo: 'Direito Civil',
    descricao: 'Atuação em contratos, responsabilidade civil, família e sucessões, com foco na resolução pacífica de conflitos.',
    slug: 'civil',
    teses: [
      'Validade e eficácia de contratos civis',
      'Responsabilidade por danos morais e materiais',
      'Direitos sucessórios e inventários',
      'Dissolução de sociedade e partilha de bens'
    ]
  }
};

export function getServicoBySlug(slug) {
  return servicos[slug] || null;
}