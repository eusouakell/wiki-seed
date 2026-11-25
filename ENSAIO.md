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

## Exercício PDF → site (25/11/2026)

Teste de `EXERCICIO-SITE.md` em clone isolado, com outra pessoa fictícia (Marina Alves, analista de dados, Recife) para ver se sobrava algo da Joana. PDF gerado de texto e lido com `pdftotext`. Agente: OpenCode 1.19.6 com `opencode/deepseek-v4.1-flash-free`. Nada publicado. Capturas feitas em navegador com rolagem real, depois das animações.

**Ingest:** ok em uma passada (cerca de 1 min). Criou o contexto da pessoa, atualizou índice, overview e log; `raw/` intacto.

**Site, execução 1 (skill sem as regras de imagem, menu e legenda, cerca de 6 min):** nome, cargo, apresentação, Sobre e os dois projetos reais nas 7 páginas; `[FALTA]` onde não havia dado; depoimentos, FAQ e prazos removidos. Sobrou o retrato da Joana com o `alt` trocado para o nome novo, o menu "Depoimentos" e uma legenda inventada.

**Site, execução 2 (skill com regras de `alt`, menu e legenda, cerca de 13 min):** nenhum texto visível da Joana, de empresas ou de depoimentos do exemplo. `alt` do retrato virou `[FALTA: foto]`, sem legenda inventada. Mas:
- o retrato da Joana continuava visível ao lado do nome novo (a regra só mexia no `alt`)
- as páginas de projeto e os cartões da home ficaram `[FALTA]` em vez de usar os dois projetos da wiki (a execução 1 tinha preenchido)
- o título do Sobre ficou `[FALTA: frase de apresentação]` apesar de a wiki ter dados
- o menu "Depoimentos" continua, apontando para uma seção marcada `[FALTA]` (não é link quebrado)
- logos de ferramentas do exemplo ficaram no card de ferramentas e na faixa

Conclusão: o resultado varia entre execuções com o modelo gratuito. Uma passada não garante site completo; use o relatório do agente e o checklist, e peça uma segunda passada ("preencha de novo os campos [FALTA] que a wiki cobre") quando sobrar `[FALTA]` com dado disponível.

**Depois da execução 2**, a skill passou a trocar o retrato por `img/foto-pendente.svg` (neutro, novo arquivo) e a tratar logos sem fonte na wiki. Essa versão **não foi reexecutada**.

## Limites do teste do exercício

- Modelo gratuito não é igual a Claude ou Codex: a qualidade e o tempo variam
- A cota gratuita não é publicada e a lista de modelos gratuitos muda. Não conte com isso como garantia
- Rode uma vez antes do workshop e guarde a saída como plano B
- Teste do exercício: um modelo, perfil curto e fictício, duas execuções do site. Não testado com PDF real exportado do LinkedIn nem com outros agentes
