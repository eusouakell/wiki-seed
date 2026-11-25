# RAG tradicional vs LLM Wiki + OKF

Como cada abordagem responde a uma pergunta — e por que a wiki compila conhecimento em vez de recuperar trechos.

## Lado a lado

| | RAG tradicional | LLM Wiki + OKF |
|---|---|---|
| Resposta | Recupera ~10 trechos brutos, redundantes e fora de contexto | Lê páginas pré-sintetizadas, escritas para pessoas e agentes |
| Cada pergunta | Reprocessa as fontes do zero | Consulta conhecimento já compilado |
| Contexto do agente | Enche a janela com trechos parecidos | Progressive disclosure: índice pequeno + só as páginas necessárias |
| Aprendizado | Nada persiste entre sessões | Cada ingestão atualiza a wiki (compounding) |
| Governança | Difícil auditar o que o modelo viu | Lint verifica links, frontmatter e contradições |
| Legível por pessoas | Não: são arquivos brutos | Sim: Markdown com frontmatter OKF |

## O mesmo pedido nas duas abordagens

Pergunta: "qual é a política atual de faturamento?"

**RAG tradicional:** a busca vetorial retorna trechos de e-mails, atas e versões antigas da política, misturando o que mudou com o que vale. O modelo precisa adivinhar qual trecho é o atual.

**LLM Wiki:** o agente lê `concepts/index.md`, abre a página de faturamento (com `type`, `authority` e `source_refs` no frontmatter) e responde a partir da versão compilada, com a fonte registrada.

## Quando cada um cabe

- O RAG resolve bem a busca pontual em volumes grandes e heterogêneos (descoberta).
- A LLM Wiki resolve o conhecimento de trabalho, que precisa estar certo, atual e auditável — e que pessoas também leem.
