# Cabeçalho das páginas (frontmatter)

O cabeçalho é o bloco YAML no topo de cada página. Ele deixa a wiki legível por pessoas e por agentes.

## Mínimo (recomendado para começar)

```yaml
---
type: Concept            # obrigatório: o papel da página
title: Nome legível
description: Uma linha sobre a página.
tags: []
timestamp: YYYY-MM-DDTHH:MM:SSZ
---
```

Só `type` é obrigatório. Os outros quatro são recomendados.

## Opcionais (adicione só quando a dor aparecer)

| Campo | Para quê |
| --- | --- |
| `status` | etapa da página: `draft`, `active`, `archived` |
| `authority` | quanto confiar: `canonical` (fonte de verdade), `reference`, `derived` (veio de outra página ou fonte) |
| `source_refs` | fontes em `raw/` que sustentam a página |
| `related` | links relativos para páginas ligadas |
| `owner` | quem responde pela página (útil quando há mais de uma pessoa) |
| `last_reviewed` | data da última revisão, `AAAA-MM-DD` |

Distinções que não devem ser misturadas: `status` diz em que etapa a página está, `authority` diz quanto ela é confiável.

## Regras

- YAML simples, valores legíveis
- Nunca coloque segredos, senhas, tokens ou dados pessoais no cabeçalho
- `index.md` e `log.md` não têm cabeçalho

Convenção inspirada no Knowledge Base Seed (Wagner Martins), CC BY 4.0. Veja `CREDITOS.md`.
