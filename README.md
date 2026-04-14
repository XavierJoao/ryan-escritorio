# Escritório de Advogados - Site Institucional

Site institucional para escritório de advocacia especializado em Direito Tributário e Civil.

## 🚀 Como Desenvolver

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento Local
```bash
npm run dev
```

### Verificações Antes de Commitar

**IMPORTANTE:** Sempre execute as verificações antes de fazer commit para evitar problemas de build na Vercel.

#### Verificação Completa (Recomendado)
```bash
npm run verify
```

Este comando executa:
- ✅ Verificação de arquivos críticos
- ✅ Validação de funções exportadas
- ✅ Verificação de cores CSS
- ✅ ESLint (linting)
- ✅ Build de produção

#### Verificações Individuais
```bash
# Apenas verificar arquivos e funções
npm run check

# Apenas linting
npm run lint

# Apenas build
npm run build
```

### Corrigir Problemas de Linting
```bash
npm run lint:fix
```

## 📁 Estrutura do Projeto

```
├── components/          # Componentes React reutilizáveis
│   ├── layout/         # Header, Footer
│   ├── sections/       # Seções da página inicial
│   ├── ui/            # Componentes de UI
│   └── noticias/      # Componentes relacionados a notícias
├── config/            # Configurações do site
├── lib/               # Utilitários e dados
├── public/            # Arquivos estáticos
└── src/
    └── app/           # Páginas Next.js (App Router)
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint
- `npm run lint:fix` - Corrige problemas de linting automaticamente
- `npm run check` - Verificações básicas de arquivos e funções
- `npm run verify` - Verificação completa (check + lint + build)

## 🚨 Problemas Comuns e Soluções

### ❌ "getNoticias is not a function"
**Causa:** Arquivo `lib/noticias.js` está vazio ou não exporta as funções corretas.
**Solução:** Verifique se o arquivo tem as funções `getNoticias()` e `getNoticiaBySlug()` exportadas.

### ❌ Build falha na Vercel
**Causa:** Dependências conflitantes ou arquivos corrompidos.
**Solução:**
1. Execute `npm run verify` localmente
2. Corrija todos os erros mostrados
3. Só então faça commit

### ⚠️ Cores CSS inválidas
**Sintomas:** Cores como `#FFFFF` em vez de `#FFFFFF`.
**Solução:** Sempre use cores hexadecimais completas (3 ou 6 dígitos).

### ⚠️ Viewport no metadata
**Sintomas:** Warning sobre viewport no metadata export.
**Solução:** Mova viewport para export separado no `layout.js`.

## 📝 Boas Práticas

1. **Sempre execute `npm run verify`** antes de commitar
2. **Mantenha arquivos em `lib/` completos** - não deixe arquivos vazios
3. **Use cores hexadecimais válidas** (#FFF ou #FFFFFF)
4. **Teste o build localmente** antes de fazer push
5. **Verifique imports** - certifique-se que todas as funções importadas existem

## 🌐 Deploy

O projeto é automaticamente deployado na Vercel quando há push na branch `main`.

**URL de Produção:** [Será definida após primeiro deploy bem-sucedido]

---

**Dica:** Se você encontrar algum erro, execute `npm run check` primeiro para identificar problemas comuns rapidamente.
