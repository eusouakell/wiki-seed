---
type: Skill
title: Skill — site
description: Troca o conteúdo de exemplo do site em site/ pelo que a wiki sabe. Não muda o visual. Não publica nada.
tags: [skill, site, portfólio]
timestamp: 2026-11-25T12:00:00Z
---

# Skill: site

O site em `site/` vem com uma persona fictícia ("Joana"). Esta skill troca esse conteúdo de exemplo pelo que a wiki sabe sobre a pessoa. Só texto muda: HTML estrutural, CSS, JS e imagens ficam como estão.

## Páginas cobertas

`index.html`, `sobre.html`, `projetos.html` e cada `projeto-*.html`.

## O que fazer

1. Leia `concepts/index.md` e `concepts/overview.md`
2. Abra só as páginas de pessoa e de projetos que os índices apontam
3. Liste todo texto do exemplo nas páginas cobertas: nome, cargo, frase de apresentação, Sobre, empresas, depoimentos, projetos (título, resumo, case), e-mail, textos de imagem
4. Para cada item, escolha uma de três saídas:
   - **Tem fato na wiki**: troque pelo texto da wiki
   - **Não tem fato na wiki**: troque por `[FALTA: nome do campo]`. Nunca deixe o texto da Joana no lugar
   - **Bloco inteiro sem equivalente** (ex.: um depoimento, um projeto a mais): remova o bloco só se isso não quebrar a estrutura da página. Se quebrar, use `[FALTA: ...]`
5. Páginas de projeto sem projeto correspondente na wiki: não apague o arquivo; marque o conteúdo com `[FALTA: ...]` e diga isso no relatório
6. Imagens e links: a foto e as imagens do exemplo continuam nos arquivos (você não troca imagens). Liste no relatório quais imagens ainda são do exemplo e precisam ser trocadas pela pessoa. Itens de menu que apontam para uma seção removida devem ser listados no relatório
7. Frases curtas de legenda ou slogan que não vêm da wiki contam como texto do exemplo: troque por fato da wiki ou `[FALTA]`
8. Busque "Joana" e os nomes de empresas e pessoas do exemplo em `site/`. Nenhum pode sobrar no texto visível fora de um `[FALTA]`. Nomes de arquivo de imagem e de página (ex.: `joana.jpg`) podem ficar, mas liste no relatório
9. Registre no log: `## [YYYY-MM-DD] site | atualizado a partir da wiki`
10. Relatório final: campos preenchidos, `[FALTA]`, o que foi removido, imagens do exemplo que sobraram

## Regras

- Use só o que está na wiki. Não invente cargos, números, datas, empresas ou depoimentos
- Não publique. Ativar GitHub Pages ou fazer push é decisão da pessoa
- Não inclua telefone, endereço ou outro dado pessoal que a pessoa não tenha pedido para mostrar. E-mail de contato: só se a pessoa pedir; senão `[FALTA: e-mail de contato]`
- Não apague nem mova arquivos, não altere CSS, JS nem imagens
