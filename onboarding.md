---
type: Onboarding
title: Onboarding
description: Apresentação, instalação, personalização e guia das principais tarefas.
timestamp: 2026-11-24T12:00:00Z
---

# Onboarding

## 1. Apresentação

Este repositório é um seed para construir uma **LLM Wiki**.

- `raw/` guarda as fontes originais (imutável)
- `concepts/` guarda o conhecimento compilado pelo agente
- `skills/` contém as operações (ingest, query, lint)
- O site em `site/` é apenas uma superfície para testar se o contexto funciona

O agente segue o schema em `AGENTS.md` e usa progressive disclosure: lê o `index.md` primeiro e só abre o que precisa.

## 2. Instalação e primeiros passos

1. Clone o repositório
2. Abra a pasta no seu editor ou agente (Claude Code, Cursor, Codex, etc.)
3. (Opcional) Responda as perguntas de personalização abaixo
4. Coloque fontes em `raw/` (PDF do LinkedIn ou texto curto)
5. Peça ao agente para rodar a skill de ingestão

Não é necessário instalar nada. O harness já vem pronto.

## 3. Personalização

Responda as perguntas abaixo. Pode ser curto.  
Essas respostas ajudam o agente a montar as páginas em `concepts/`.

Você pode pular perguntas. A wiki funciona mesmo com pouco conteúdo.

### 3.1 Como você quer ser identificado?

Nome, apelido ou como o agente deve se referir a você.

> 

### 3.2 O que você faz hoje?

Uma ou duas frases sobre sua área e o que constrói ou cuida.

> 

### 3.3 Quais temas o agente deve conhecer sobre você?

Liste 2 ou 3 assuntos, projetos ou áreas relevantes.

> 

### 3.4 Tem alguma fonte pronta?

Pode ser o PDF do LinkedIn ou um texto curto. Coloque em `raw/`.

> 

## 4. Guia das principais tarefas

Depois do setup, você pode pedir ao agente:

| Tarefa | O que dizer | O que acontece |
|--------|-------------|----------------|
| Ingerir fontes | "Rode a skill de ingestão" | Lê `raw/` e cria/atualiza páginas em `concepts/` |
| Perguntar algo | "O que a wiki sabe sobre X?" | Lê o índice e responde com citações |
| Verificar saúde | "Rode o lint" | Checa órfãos, links e frontmatter |
| Ver o estado | "Mostre o overview" | Abre a síntese de alto nível |

Todas as operações atualizam `concepts/index.md` e `concepts/log.md`.

---

Quando terminar as respostas, salve o arquivo.  
Depois peça ao agente para rodar a skill de ingestão.
