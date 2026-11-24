---
type: Guide
title: Ensaio com agente gratuito
description: Como repetir o teste de ponta a ponta com o OpenCode e modelos gratuitos, e o que foi observado em 24/11/2026.
tags: [ensaio, teste, opencode]
timestamp: 2026-11-24T12:00:00Z
---

# Ensaio com agente gratuito

Teste feito em 24/11/2026 com uma pessoa fictícia (Joana Teste). Nenhum dado real, nenhuma publicação.

## Como repetir

1. Crie seu repositório com **Use this template** e clone-o
2. Instale o OpenCode ([opencode.ai](https://opencode.ai)). Os modelos gratuitos funcionam sem conta
3. Dentro da pasta do repositório, rode `opencode models` e escolha um modelo que termine em `-free`
4. Abra `ensaio/perfil-linkedin-ficticio.txt`, copie o texto para um documento e exporte como PDF (era assim o PDF do teste). Salve como `raw/perfil-linkedin.pdf`
5. Rode cada passo com `opencode run -m opencode/NOME-free "PEDIDO"`:
   - "Leia o onboarding.md e siga o AGENTS.md. Preencha a seção 3 com estas respostas: ... Depois rode a skill de ingestão sobre o PDF em raw/."
   - "Siga o AGENTS.md. Operação query: o que a wiki sabe sobre a Joana?"
   - "Siga o AGENTS.md. Execute a operação site."
   - "Siga o AGENTS.md. Execute a operação cleanup. Só proponha."
   - "Siga o AGENTS.md. Execute a operação fechar sessão."
6. Abra `site/index.html` no navegador

## O que foi observado

| Passo | Resultado |
|-------|-----------|
| Onboarding 3.x preenchido pelo agente | funcionou |
| Ingestão do PDF | o modelo gratuito não leu o PDF direto; o agente usou `pdftotext` e seguiu. Sem `pdftotext`, use texto em `raw/` |
| Query | respondeu certo e citou páginas |
| Site a partir da wiki | preencheu nome, projetos e "Sobre" só com dados da wiki; removeu o cartão sem dado em vez de inventar. |
| Cleanup | só propôs (arquivar o exemplo, atualizar o overview); nada foi removido |
| Fechar sessão | conferiu o que foi salvo, não apagou nem moveu arquivos |

Cada operação levou de 40 s a 1 min 40 s.

## Limites

- Modelo gratuito não é igual a Claude ou Codex: a qualidade e o tempo variam
- A cota gratuita não é publicada e a lista de modelos gratuitos muda. Não conte com isso como garantia
- Rode uma vez antes do workshop e guarde a saída como plano B
