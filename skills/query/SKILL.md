---
type: Skill
title: Skill — query
description: Responde perguntas a partir da wiki e pode gravar respostas úteis.
tags: [skill, query]
timestamp: 2026-11-24T12:00:00Z
---

# Skill: query

Responde perguntas usando apenas o conteúdo compilado em `concepts/`.

## Progressive disclosure

1. Leia `concepts/index.md` primeiro (nível 0): ele lista os contextos da wiki
2. Abra o `index.md` do contexto relevante (nível 1) e, se precisar dos termos, a `linguagem-ubiqua.md` dele
3. Identifique as páginas pela descrição de uma linha e abra somente elas
4. Não leia `raw/` a menos que a informação não exista na wiki

## Como usar

1. Responda com citação das páginas usadas
2. Se a resposta for útil e reutilizável, pergunte se deve ser gravada como nova página no contexto correspondente
3. Registre a consulta em `concepts/log.md`:

```
## [YYYY-MM-DD] query | título da pergunta
```

## Regras

- Prefira a wiki a reprocessar fontes
- Não invente informação ausente da wiki
- Atualize o index se criar nova página
