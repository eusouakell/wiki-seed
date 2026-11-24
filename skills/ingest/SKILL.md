---
type: Skill
title: Skill — ingest
description: Lê fontes em raw/ e gera páginas em concepts/.
timestamp: 2026-11-23T00:00:00Z
---

# Skill: ingest

Lê arquivos de `raw/` e cria ou atualiza páginas em `concepts/`.

## Entrada

- PDF do LinkedIn (ou texto extraído)
- Texto curto de projeto
- Respostas de `onboarding.md`

## Saída

- Páginas em `concepts/` com frontmatter OKF
- Atualização de `concepts/index.md` e `concepts/log.md`

## Frontmatter obrigatório em toda página gerada

```yaml
---
type: Concept
title: 
description: 
timestamp: YYYY-MM-DDTHH:MM:SSZ
---
```

## Regras

- Nunca edita `raw/`
- Toda página gerada deve ter `type` (obrigatório no OKF)
- Não adicione frontmatter em `index.md` nem em `log.md`
- Registra a operação no log com o formato `## [YYYY-MM-DD] ingest | título`
