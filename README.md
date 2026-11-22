# wiki-seed

Seed para o workshop **Como criar wiki**.

Caminho linear de onboarding → ingestão → wiki → site no GitHub Pages.

<p align="center">
  <img src="site/preview.png" alt="Mockup do site gerado" width="800">
</p>

## O que é

Um repositório semente que guarda contexto em Markdown, separa o que é determinístico do que o agente pode alterar, e gera um site a partir do conteúdo da pessoa.

O harness já vem pronto. O site abre com placeholder legível mesmo sem respostas.

## Como funciona

1. Clone o repositório
2. (Opcional) Responda as perguntas em `onboarding.md`
3. Coloque fontes em `raw/` (PDF do LinkedIn + texto curto)
4. A skill de ingestão gera páginas em `concepts/` e atualiza o `index.md` e o `log.md`
5. O site em `site/` usa esse conteúdo
6. Publique no GitHub Pages

## Atributos

- **Wiki viva**: `concepts/` com catálogo (`index.md`) e histórico (`log.md`)
- **Fronteira clara**: `raw/` é imutável; `deterministic/` e `AGENTS.md` controlam o agente
- **Harness pronto**: boundaries e budgets já definidos
- **Site como entrega**: template no estilo portfólio, com placeholder
- **Mensurável**: logs e estrutura permitem ver o que foi feito

## Funcionalidades

- Onboarding mínimo que alimenta o site
- Skill de ingestão de fontes
- Site estático pronto para Pages
- Glossário e princípios separados
- Roadmap de evolução

## O que se aprende

- Como manter uma wiki que o agente ajuda a construir
- A diferença entre fonte (`raw/`) e conhecimento compilado (`concepts/`)
- Por que o agente precisa de limites claros
- Como gerar um artefato real (site) a partir do contexto
- Hábitos de progressive disclosure e medição desde o início

## Exemplo do resultado

O site abre com conteúdo placeholder (nome, frase, cards de projeto, sobre).  
Depois do onboarding e da ingestão, os placeholders são substituídos pelos dados da pessoa.

Veja o mockup em `site/index.html` ou a imagem acima.
