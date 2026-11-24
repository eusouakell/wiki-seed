# AGENTS.md

Instruções curtas para o agente. O harness já vem configurado.

## Objetivo

A wiki (`concepts/`) é o artefato principal.  
O site (`site/`) é apenas uma superfície para testar se o contexto está utilizável.

## Regras

- Nunca edite arquivos em `raw/`
- Nunca altere `deterministic/` ou este arquivo
- Mantenha `concepts/index.md` e `concepts/log.md` atualizados
- Toda página em `concepts/` (exceto index.md e log.md) deve ter frontmatter com `type`
- Prefira busca no sistema de arquivos (`grep`, `find`) antes de pedir contexto extra
- Confirme ações que mudem o site publicado

## Operações

- **ingest**: lê `raw/` e gera páginas em `concepts/`
- **query**: responde a partir da wiki
- **lint**: verifica saúde da wiki

## Stack

- Markdown + Git
- Site estático em `site/` (GitHub Pages) — teste do contexto
- Skills sob demanda em `skills/`
