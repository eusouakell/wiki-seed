---
type: Skill
title: Skill — cleanup
description: Consolida memória e limpa a wiki (arquivar, resumir, atualizar overview).
tags: [skill, cleanup, memória]
timestamp: 2026-11-24T12:00:00Z
---

# Skill: cleanup

Rotina de memória e limpeza. Rode depois de várias ingestões ou quando o agente notar que a wiki está grande.

## Quando rodar

- Depois de 5 ou mais operações de ingest
- Quando o `index.md` passar de ~30 entradas
- Quando o usuário pedir explicitamente

## O que fazer

1. Rode a skill de lint primeiro e corrija o que for simples
2. Atualize `concepts/overview.md` com o estado atual
3. Identifique páginas pouco referenciadas ou redundantes
4. Proponha (não execute sem confirmação):
   - Mesclar páginas semelhantes
   - Arquivar páginas antigas em `concepts/archive/`
   - Resumir entradas longas do log
5. Registre a operação no log

## Saída

Liste o que foi consolidado e o que foi proposto para remoção ou arquivamento.

Registre em `concepts/log.md`:

```
## [YYYY-MM-DD] cleanup | resumo da consolidação
```
