---
type: Skill
title: Skill — lint
description: Verifica saúde da wiki (contradições, órfãos, links, frontmatter).
tags: [skill, lint]
timestamp: 2026-11-24T12:00:00Z
---

# Skill: lint

Verifica a saúde e a conformidade da wiki.

## O que verificar

- Páginas em `concepts/` sem entrada em `concepts/index.md`
- Entradas no index que apontam para arquivos inexistentes
- Links internos quebrados
- Páginas sem frontmatter ou sem campo `type` (exceto index.md e log.md)
- Contradições óbvias entre páginas
- Entradas antigas ou mal formatadas no log

## Saída

Liste os problemas encontrados e sugira correções concretas.

Registre a execução em `concepts/log.md`:

```
## [YYYY-MM-DD] lint | resumo dos problemas encontrados
```
