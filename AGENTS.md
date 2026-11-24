# AGENTS.md

Schema da LLM Wiki. O harness já vem configurado.

## Objetivo

A wiki (`concepts/`) é o artefato principal e compounding.  
O site (`site/`) é apenas uma superfície para testar se o contexto está utilizável.

## Progressive disclosure (lições 1, 3 e 4)

1. Sempre leia `concepts/index.md` primeiro (mapa pequeno, sempre no contexto)
2. Abra apenas as páginas relevantes listadas no índice
3. Evite carregar `raw/` ou páginas inteiras sem necessidade
4. Use `grep` e `find` antes de pedir contexto extra
5. Skills em `skills/` só são lidas quando a operação exige (carregamento sob demanda)

## Regras de fronteira

- Nunca edite arquivos em `raw/` (imutável — ground truth)
- Nunca altere `deterministic/` ou este arquivo
- Toda página em `concepts/` (exceto index.md e log.md) deve ter frontmatter com `type` não vazio
- Atualize `concepts/index.md` e `concepts/log.md` a cada operação
- Log com formato: `## [YYYY-MM-DD] operação | título`
- Prefira a wiki compilada a reprocessar raw/ (lição 5)

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

## Referência

As regras de progressive disclosure e índice pequeno seguem as lições de harness de produção (ByteByteGo / Ali Aminian) e o padrão LLM Wiki (Karpathy) formalizado no OKF (Google).
