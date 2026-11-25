---
type: Guide
title: Exercício — do PDF do LinkedIn ao seu site
description: Passo a passo para trocar o conteúdo de exemplo do site pelo seu, a partir do PDF do LinkedIn, passando pela wiki.
tags: [exercício, linkedin, site]
timestamp: 2026-11-25T12:00:00Z
---

# Exercício: do PDF do LinkedIn ao seu site

Objetivo: ver o caminho fonte → wiki → site com os seus dados. O site de exemplo (persona fictícia "Joana") mostra onde cada coisa vai. O visual não muda, só o conteúdo.

Antes: repositório criado a partir do template e um agente configurado (veja `onboarding.md`). A velocidade depende do agente e do tamanho do perfil.

## Passos

1. **Fonte.** Salve seu perfil do LinkedIn em PDF, pelo computador. Instruções atuais do LinkedIn: https://www.linkedin.com/help/linkedin/answer/a541960 (o recurso pode não estar disponível para todos os perfis). Se não funcionar, copie o texto do perfil para um `.md` ou `.txt`. Coloque o arquivo em `raw/`.
2. **Ingest.** Peça: "Siga o AGENTS.md. Rode a skill ingest sobre o arquivo de raw/." Se o agente não ler PDF, peça para extrair o texto com `pdftotext`. Confira as páginas novas em `concepts/`: pessoa, experiências, projetos. Se algo estiver errado, corrija na wiki, não no site.
3. **Lacunas.** Peça: "Liste o que o site precisa (nome, cargo, apresentação, Sobre, projetos, contato) e a wiki ainda não tem." Responda o que quiser mostrar; o resto fica como lacuna.
4. **Site.** Peça: "Siga o AGENTS.md. Execute a operação site." A skill cobre a home (incluindo o bloco Sobre, as redes e "Ferramentas que eu uso"), `projetos`, as páginas de projeto e o rodapé. Onde a wiki não tem o dado, o texto vira `[FALTA: campo]` (nunca fica o texto da Joana). O agente entrega um relatório com preenchidos, `[FALTA]`, removidos e imagens que sobraram.
5. **Revisão.** Abra `site/index.html` e as outras páginas no navegador. Procure "Joana", empresas, depoimentos, e-mail e links de rede do exemplo, também no rodapé. Cada ocorrência visível deve estar trocada, removida ou marcada `[FALTA]`.
6. **Complete.** Preencha os `[FALTA]` na wiki (ou diga ao agente) e rode a operação site de novo. Se sobrar `[FALTA]` com dado que a wiki já tem, peça uma segunda passada: no teste, uma execução só nem sempre preenche tudo. O retrato do exemplo vira uma imagem neutra (`foto-pendente.svg`); coloque a sua foto em `site/img/` e ajuste o arquivo usado. Troque também as outras imagens do exemplo, o agente não mexe nelas.
7. **Publicar é decisão sua.** Nada é publicado automaticamente. Contato e dados pessoais só entram se você pedir.

## Checklist

- [ ] Nenhum nome, empresa, depoimento ou e-mail do exemplo visível, a não ser marcado `[FALTA]`
- [ ] Todo fato do site existe na wiki (inclusive redes sociais e rodapé: nome, frase, e-mail, ©, links)
- [ ] Nenhum link de rede social aponta para o perfil do exemplo ou de terceiros (ou é `#` com `[FALTA]`)
- [ ] Sem telefone ou endereço que você não pediu
- [ ] Foto e imagens do exemplo trocadas (ou você decidiu manter)
- [ ] Menus que levavam a seções removidas revisados
- [ ] Visual e estrutura intactos

## Este exercício é um roteiro com revisão obrigatória

A operação site é uma primeira versão que você revisa: não espere um site pronto numa passada. Use o relatório do agente e o checklist acima. Se o agente travar ou deixar `[FALTA]` com dado disponível, faça a troca à mão na wiki e no HTML, ou peça uma página por vez (esta alternativa não foi testada).

## Como foi testado

Veja a seção "Exercício PDF → site" em `ENSAIO.md`, com o resultado e os limites.
