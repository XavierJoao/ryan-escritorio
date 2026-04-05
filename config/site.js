/**
 * Configurações do site - Lopes Pinto Advogados
 * Contém todas as informações de contato e configurações do escritório
 */

export const siteConfig = {
  // Informações básicas do escritório
  nome: 'Lopes Pinto Advogados',
  slogan: 'Excelência Jurídica com Compromisso',
  descricao: 'Escritório de advocacia especializado em Direito Tributário e Civil, oferecendo assessoria jurídica completa com profissionais qualificados e experiência comprovada.',

  // Informações de contato
  contato: {
    email: 'contato@lopespinto.adv.br',
    telefone: '(11) 99999-9999',
    whatsapp: '5511999999999',
    endereco: {
      rua: 'Rua das Advogadas, 123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
      complemento: 'Sala 456 - Edifício Jurídico'
    }
  },

  // Redes sociais
  redesSociais: {
    linkedin: 'https://linkedin.com/company/lopes-pinto-advogados',
    facebook: 'https://facebook.com/lopespintoadvogados',
    instagram: 'https://instagram.com/lopespintoadv',
    twitter: 'https://twitter.com/lopespintoadv'
  },

  // Horário de funcionamento
  horarioFuncionamento: {
    segunda: { abertura: '08:00', fechamento: '18:00', fechado: false },
    terca: { abertura: '08:00', fechamento: '18:00', fechado: false },
    quarta: { abertura: '08:00', fechamento: '18:00', fechado: false },
    quinta: { abertura: '08:00', fechamento: '18:00', fechado: false },
    sexta: { abertura: '08:00', fechamento: '18:00', fechado: false },
    sabado: { abertura: '09:00', fechamento: '12:00', fechado: false },
    domingo: { abertura: null, fechamento: null, fechado: true }
  },

  // Informações adicionais
  informacoes: {
    anoFundacao: 2010,
    numeroOAB: '123456/SP',
    areasAtuacao: ['Direito Tributário', 'Direito Civil', 'Direito Empresarial'],
    idiomas: ['Português', 'Inglês', 'Espanhol']
  },

  // Configurações do site
  site: {
    url: 'https://lopespinto.adv.br',
    dominio: 'lopespinto.adv.br',
    analytics: 'GA_MEASUREMENT_ID',
    mapsApiKey: 'GOOGLE_MAPS_API_KEY'
  },

  // Configurações de SEO
  seo: {
    title: 'Lopes Pinto Advogados - Excelência Jurídica em São Paulo',
    description: 'Escritório de advocacia especializado em Direito Tributário e Civil. Assessoria jurídica completa com profissionais qualificados em São Paulo.',
    keywords: ['advogados', 'direito tributário', 'direito civil', 'assessoria jurídica', 'São Paulo', 'escritório advocacia'],
    author: 'Lopes Pinto Advogados'
  }
};

// Funções utilitários para acessar as informações
export const getContatoInfo = () => siteConfig.contato;
export const getRedesSociais = () => siteConfig.redesSociais;
export const getHorarioFuncionamento = () => siteConfig.horarioFuncionamento;
export const getEnderecoCompleto = () => {
  const { endereco } = siteConfig.contato;
  return `${endereco.rua}, ${endereco.bairro} - ${endereco.cidade}/${endereco.estado}, CEP: ${endereco.cep}`;
};
export const isAbertoHoje = () => {
  const hoje = new Date().getDay(); // 0 = domingo, 1 = segunda, etc.
  const diasSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  const diaAtual = diasSemana[hoje];
  return !siteConfig.horarioFuncionamento[diaAtual].fechado;
};
export const getHorarioHoje = () => {
  const hoje = new Date().getDay();
  const diasSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  const diaAtual = diasSemana[hoje];
  const horario = siteConfig.horarioFuncionamento[diaAtual];
  if (horario.fechado) return 'Fechado';
  return `${horario.abertura} às ${horario.fechamento}`;
};