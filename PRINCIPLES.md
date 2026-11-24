# Princípios

- Linguagem clara e simples
- Termos técnicos no glossário (palavras-chave para continuar aprendendo)
- Boas práticas de código, UX, acessibilidade e LGPD
- Privacidade por padrão
- Benefícios mensuráveis
- Fronteira determinística clara
- Portabilidade (Markdown + Git)
- Progressão gradual
- Anti-slop (conteúdo com intenção)
- Segurança de agente por design (inspirado no SAIF da Google)

## Cinco lições de harness (ByteByteGo)

Estas regras vêm do material de Ali Aminian sobre agentes de produção. O seed aplica as que cabem em uma LLM Wiki:

1. **Prefixo estável** — `AGENTS.md`, `concepts/index.md` e regras de fronteira ficam no início do contexto. O resto é carregado sob demanda.
2. **Ferramentas curadas** — Skills em `skills/` são carregadas só quando a operação precisa delas.
3. **Limpar resultados antigos** — Não deixe o contexto crescer com raw ou páginas inteiras. Use o índice e leia só o necessário.
4. **Índice pequeno + notas sob demanda** — Sempre leia `concepts/index.md` primeiro. Abra páginas de `concepts/` só quando o índice apontar.
5. **Retrieval no loop** — Prefira buscar na wiki compilada a reprocessar `raw/` a cada pergunta.

## Camadas de memória (progressão)

O seed começa no nível 4–5 da progressão do professor:

| Nível | O que é | No seed |
|-------|---------|---------|
| 0 | Sem memória | — |
| 1 | Um arquivo | — |
| 2 | Dreaming (consolidação offline) | Skill `cleanup` + `fechar-sessao` |
| 3 | Várias notas | `concepts/` (páginas individuais) |
| 4 | Wiki (Karpathy) | `concepts/` + links entre páginas |
| 5 | Índice | `concepts/index.md` sempre carregado |

`raw/` é o ground truth (transcrições). `concepts/` é a wiki compilada. O índice é o mapa pequeno que entra no prompt.
