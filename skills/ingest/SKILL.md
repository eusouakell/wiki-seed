---
title: Skill — ingest
description: Lê fontes em raw/ e gera páginas em concepts/.
updated: 2026-11-23
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
title: 
Description: 
updated: YYYY-MM-DD
---
```

## Regras

- Nunca edita `raw/`
- Mantém frontmatter simples e consistente
- Registra a operação no log
