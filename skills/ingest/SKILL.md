# Skill: ingest

Lê arquivos de `raw/` e cria ou atualiza páginas em `concepts/`.

## Entrada

- PDF do LinkedIn (ou texto extraído)
- Texto curto de projeto

## Saída

- Páginas em `concepts/` (perfil, experiências, projeto)
- Atualização de `concepts/index.md` e `concepts/log.md`

## Regras

- Nunca edita `raw/`
- Mantém frontmatter simples (title, description)
- Registra a operação no log
