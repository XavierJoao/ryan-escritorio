#!/usr/bin/env node

/**
 * Script de verificação pré-build
 * Executa verificações básicas antes do build para evitar erros comuns
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Executando verificações pré-build...\n');

const errors = [];
const warnings = [];

// 1. Verificar se arquivos críticos existem
const criticalFiles = [
  'lib/noticias.js',
  'lib/servicos.js',
  'lib/helpers.js',
  'config/site.js',
  'src/app/layout.js',
  'src/app/page.jsx'
];

console.log('📁 Verificando arquivos críticos...');
criticalFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    errors.push(`❌ Arquivo crítico não encontrado: ${file}`);
  } else {
    console.log(`✅ ${file}`);
  }
});

// 2. Verificar se funções exportadas existem
console.log('\n🔧 Verificando funções exportadas...');

try {
  const noticias = require('./lib/noticias.js');
  if (typeof noticias.getNoticias !== 'function') {
    errors.push('❌ Função getNoticias não encontrada em lib/noticias.js');
  } else {
    console.log('✅ getNoticias() existe');
  }

  if (typeof noticias.getNoticiaBySlug !== 'function') {
    errors.push('❌ Função getNoticiaBySlug não encontrada em lib/noticias.js');
  } else {
    console.log('✅ getNoticiaBySlug() existe');
  }
} catch (e) {
  errors.push(`❌ Erro ao importar lib/noticias.js: ${e.message}`);
}

try {
  const servicos = require('./lib/servicos.js');
  if (typeof servicos.getServicoBySlug !== 'function') {
    errors.push('❌ Função getServicoBySlug não encontrada em lib/servicos.js');
  } else {
    console.log('✅ getServicoBySlug() existe');
  }
} catch (e) {
  errors.push(`❌ Erro ao importar lib/servicos.js: ${e.message}`);
}

// 3. Verificar se cores CSS são válidas
console.log('\n🎨 Verificando cores CSS...');
const filesWithColors = [
  'components/layout/Header.jsx',
  'components/layout/Footer.jsx'
];

filesWithColors.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const invalidColors = content.match(/#[0-9A-Fa-f]{0,5}[^0-9A-Fa-f\s]/g);
    if (invalidColors) {
      invalidColors.forEach(color => {
        if (color.length !== 7 && color.length !== 4) { // #FFF ou #FFFFFF
          warnings.push(`⚠️ Possível cor inválida em ${file}: ${color}`);
        }
      });
    }
  }
});

// 4. Executar ESLint se disponível
console.log('\n🔍 Executando ESLint...');
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ ESLint passou sem erros');
} catch (e) {
  warnings.push('⚠️ ESLint encontrou problemas (veja acima)');
}

// 5. Tentar build de produção
console.log('\n🏗️ Testando build de produção...');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ Build de produção passou');
} catch (e) {
  errors.push('❌ Build de produção falhou (veja logs acima)');
}

// Resultado final
console.log('\n' + '='.repeat(50));
console.log('📊 RESULTADO DAS VERIFICAÇÕES');
console.log('='.repeat(50));

if (errors.length > 0) {
  console.log('\n❌ ERROS CRÍTICOS:');
  errors.forEach(error => console.log(`   ${error}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️ AVISOS:');
  warnings.forEach(warning => console.log(`   ${warning}`));
}

if (errors.length === 0) {
  console.log('\n✅ Todas as verificações passaram!');
  console.log('🚀 Pronto para commit e deploy.');
  process.exit(0);
} else {
  console.log(`\n❌ ${errors.length} erro(s) encontrado(s). Corrija antes de fazer commit.`);
  process.exit(1);
}