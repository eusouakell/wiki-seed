# wiki-seed

Seed para o workshop **Como estruturar um LLM Wiki**  
com Kellen Carolline Bonassoli  
25 de novembro às 19h · TDC Community

<p align="center">
  <img src="site/banner.png" alt="Banner do workshop Como estruturar um LLM Wiki" width="800">
</p>

Como organizar o conhecimento para que pessoas e agentes de IA possam acessá-lo de forma eficiente e consistente? Neste workshop exploramos o padrão **OKF** (Open Knowledge Format) e como utilizá-lo para construir uma **LLM Wiki**: uma base de conhecimento estruturada, persistente e acessível tanto por pessoas quanto por agentes.

A abordagem substitui buscas dinâmicas baseadas em vetores (como as do RAG tradicional) por uma estrutura de conhecimento organizada, reutilizável e continuamente evolutiva.

## O que é

Um repositório semente para construir uma LLM Wiki.  
O conhecimento compilado fica em `concepts/`. O site em `site/` é apenas uma superfície para testar se o contexto está utilizável.

O harness já vem pronto.

## Como funciona

1. Clone o repositório
2. (Opcional) Responda as perguntas em `onboarding.md`
3. Coloque fontes em `raw/` (PDF do LinkedIn + texto curto)
4. A skill de ingestão gera páginas em `concepts/` e atualiza o `index.md` e o `log.md`
5. O site em `site/` reflete o conteúdo da wiki (teste)
6. Publique no GitHub Pages se quiser ver o resultado

## Atributos

- **Wiki viva**: `concepts/` com catálogo (`index.md`) e histórico (`log.md`)
- **Fronteira clara**: `raw/` é imutável; `deterministic/` e `AGENTS.md` controlam o agente
- **OKF**: frontmatter com `type` obrigatório nas páginas de conceito
- **Harness pronto**: boundaries e budgets já definidos
- **Site como teste**: template que mostra se o contexto funciona
- **Mensurável**: logs e estrutura permitem ver o que foi feito

## Funcionalidades

- Onboarding que alimenta o contexto da wiki
- Skill de ingestão de fontes
- Skills de query e lint
- Site estático pronto para Pages (superfície de teste)
- Glossário e princípios separados
- Roadmap de evolução

## O que se aprende

- Como manter uma wiki que o agente ajuda a construir
- A diferença entre fonte (`raw/`) e conhecimento compilado (`concepts/`)
- Por que o agente precisa de limites claros
- Como o formato OKF deixa o conhecimento legível por pessoas e agentes
- Hábitos de progressive disclosure e medição desde o início

## Exemplo do resultado

A wiki começa vazia (com um exemplo).  
Depois da ingestão, `concepts/` tem páginas, `index.md` e `log.md` atualizados.  
O site mostra o que a wiki contém.

Veja o mockup em `site/index.html`.
