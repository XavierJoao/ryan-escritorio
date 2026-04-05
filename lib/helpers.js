/**
 * Formata uma data para o padrão brasileiro (dd/mm/yyyy)
 * @param {Date|string} date - Data a ser formatada
 * @returns {string} Data formatada
 */
export function formatarData(date) {
  const data = new Date(date);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

/**
 * Converte uma string em slug (URL amigável)
 * @param {string} text - Texto a ser convertido
 * @returns {string} Slug gerado
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Remove acentos
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Substitui espaços e caracteres especiais por hífen
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    // Remove hífens do início e fim
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitaliza a primeira letra de uma string
 * @param {string} str - String a ser capitalizada
 * @returns {string} String com primeira letra maiúscula
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}