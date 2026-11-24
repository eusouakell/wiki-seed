# AGENTS.md

Schema da LLM Wiki. O harness já vem configurado.

## Objetivo

A wiki (`concepts/`) é o artefato principal e compounding.  
O site (`site/`) é apenas uma superfície para testar se o contexto está utilizável.

## Progressive disclosure

1. Sempre leia `concepts/index.md` primeiro
2. Abra apenas as páginas relevantes listadas no índice
3. Evite carregar `raw/` ou páginas inteiras sem necessidade
4. Use `grep` e `find` antes de pedir contexto extra

## Regras

- Nunca edite arquivos em `raw/` (imutável)
- Nunca altere `deterministic/` ou este arquivo
- Toda página em `concepts/` (exceto index.md e log.md) deve ter frontmatter com `type` não vazio
- Atualize `concepts/index.md` e `concepts/log.md` a cada operação
- Log com formato: `## [YYYY-MM-DD] operação | título`
- Prefira a wiki compilada a reprocessar raw/

## Cabeçalho das páginas

Toda página em `concepts/` começa com frontmatter. Só `type` é obrigatório; o resto é recomendado.
Modelos prontos ficam em `templates/`. Campos opcionais e o que cada um significa: `templates/CABECALHO.md`.

## Operações

- **ingest**: lê `raw/` → gera/atualiza páginas em `concepts/` → atualiza index + log
- **query**: lê index → responde com citações → pode gravar resposta de volta
- **lint**: verifica órfãos, links quebrados, frontmatter faltando, contradições
- **cleanup**: consolida memória, atualiza overview, propõe arquivamento (rode depois de várias ingestões)
- **site**: preenche `site/index.html` com o que a wiki sabe (não publica)
- **fechar sessão**: confere o que foi salvo, propõe o que vale guardar, registra no log (sem apagar nem mover nada)

## Stack

- Markdown + Git + OKF
- Skills em `skills/`
- Site estático em `site/` (teste do contexto)
