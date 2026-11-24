---
type: Skill
title: Skill — lint
description: Verifica saúde da wiki (contradições, órfãos, links quebrados).
timestamp: 2026-11-23T00:00:00Z
---

# Skill: lint

Verifica a saúde da wiki.

## O que verificar

- Páginas sem entrada em `concepts/index.md`
- Links quebrados entre páginas
- Páginas sem frontmatter `type`
- Entradas antigas no log

## Saída

Lista os problemas encontrados e sugere correções.  
Registra a execução em `concepts/log.md` com o formato `## [YYYY-MM-DD] lint | resumo`.
