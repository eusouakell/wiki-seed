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

- Páginas em `concepts/` (incluindo as pastas de contexto) sem entrada no `index.md` do contexto ou no índice global
- Entradas nos índices que apontam para arquivos inexistentes
- Links internos quebrados
- Páginas sem frontmatter ou sem campo `type` (exceto index.md e log.md)
- Termos fora da linguagem ubíqua: confira o `GLOSSARY.md` (transversal) e o `linguagem-ubiqua.md` do contexto da página
- Contradições óbvias entre páginas
- Entradas antigas ou mal formatadas no log

## Saída

Liste os problemas encontrados e sugira correções concretas.

Registre a execução em `concepts/log.md`:

```
## [YYYY-MM-DD] lint | resumo dos problemas encontrados
```
