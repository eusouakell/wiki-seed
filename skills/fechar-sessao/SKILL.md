---
type: Skill
title: Skill — fechar sessão
description: Confere o que foi salvo, propõe o que vale guardar e registra a sessão no log.
tags: [skill, sessão, memória]
timestamp: 2026-11-24T12:00:00Z
---

# Skill: fechar sessão

Rode ao terminar um trabalho com a wiki ("fechar sessão", "terminei").

## O que fazer

1. Liste os arquivos criados ou alterados na conversa e confirme, abrindo cada um, que o conteúdo está lá
2. Releia a conversa atrás do que deve valer nas próximas vezes (correção, preferência, decisão com o porquê). Proponha a página de destino em `concepts/` e grave só o que a pessoa aprovar
3. Liste as pendências que surgiram e registre só as que a pessoa aprovar
4. Registre a sessão no log

## Regras

- Nunca edite `raw/`
- Zero itens para guardar é um resultado normal
- Dado sensível aparece só como menção ao arquivo onde está
- Esta skill não apaga nem move nada. Limpeza é da skill cleanup, com aprovação
- Se a conversa não alterou arquivo nem trouxe decisão, feche sem entrada no log e diga isso

Registre em `concepts/log.md`:

```
## [YYYY-MM-DD] sessão | tema em poucas palavras
```

## Saída

Resumo curto: o que foi criado, o que foi alterado, o que foi guardado e o que ficou pendente.

---

Ideia adaptada da skill "fechar-sessao" do Kit Segundo Cérebro (Edney Souza), CC BY 4.0. Veja `CREDITOS.md`.
