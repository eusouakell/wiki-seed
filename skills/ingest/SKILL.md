---
type: Skill
title: Skill — ingest
description: Lê fontes em raw/ e gera ou atualiza páginas em concepts/.
tags: [skill, ingest]
timestamp: 2026-11-24T12:00:00Z
---

# Skill: ingest

Lê arquivos de `raw/` e cria ou atualiza páginas em `concepts/`, dentro do contexto correspondente.

## Progressive disclosure

1. Leia `concepts/index.md` para saber quais contextos existem
2. Processe uma fonte por vez
3. Atualize apenas as páginas que a fonte realmente toca

## Entrada

- PDF do LinkedIn (ou texto extraído)
- Texto curto de projeto
- Respostas de `onboarding.md`

## Saída

- Páginas em `concepts/<contexto>/` com frontmatter OKF
- Atualização do `index.md` do contexto, de `concepts/index.md` e de `concepts/log.md`
- Atualização opcional de `concepts/overview.md`
- Contexto novo? Crie a pasta com `index.md` e `linguagem-ubiqua.md` antes da primeira página

## Frontmatter obrigatório em toda página gerada

```yaml
---
type: Concept
title: 
description: 
tags: []
timestamp: YYYY-MM-DDTHH:MM:SSZ
---
```

Campos opcionais (use só se ajudarem; veja `templates/CABECALHO.md`): `status`, `authority`, `source_refs`, `related`, `owner`, `last_reviewed`.

## Regras

- Nunca edita `raw/`
- Toda página gerada deve ter `type` não vazio
- Não adicione frontmatter em `index.md` nem em `log.md`
- Registre a operação no log:

```
## [YYYY-MM-DD] ingest | título da fonte
```
