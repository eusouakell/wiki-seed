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

1. Leia `concepts/index.md` primeiro
2. Identifique as páginas relevantes pela descrição de uma linha
3. Abra somente essas páginas
4. Não leia `raw/` a menos que a informação não exista na wiki

## Como usar

1. Responda com citação das páginas usadas
2. Se a resposta for útil e reutilizável, pergunte se deve ser gravada como nova página em `concepts/`
3. Registre a consulta em `concepts/log.md`:

```
## [YYYY-MM-DD] query | título da pergunta
```

## Regras

- Prefira a wiki a reprocessar fontes
- Não invente informação ausente da wiki
- Atualize o index se criar nova página
