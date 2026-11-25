# Roadmap

## Nível 0 — Estrutura
Pastas e arquivos existem. Site abre com placeholder.

## Nível 1 — Onboarding
Pessoa responde as perguntas mínimas.

## Nível 2 — Ingestão
PDF do LinkedIn + texto curto em `raw/`.

## Nível 3 — Wiki (nível 4–5 do harness)
Páginas geradas em `concepts/` + `index.md` e `log.md` atualizados.  
O índice pequeno fica sempre no contexto; páginas são lidas sob demanda.

## Nível 4 — Site
Site customizado publicado no GitHub Pages.

## Nível 5 — Manter (dreaming / consolidação)
Use fechar sessão ao terminar um trabalho e cleanup quando a wiki crescer. Cleanup propõe; você decide.  
Equivalente ao "dreaming" offline do harness de produção.

## Nível 6 — Ampliar
Mais fontes e mais tipos de página (`templates/`), uma fonte por vez, com lint depois.

## Nível 7 — Conectar fontes vivas
Só quando copiar conteúdo virar problema (por exemplo, dados que mudam sempre em outro app). Antes disso, copiar para `raw/` é mais simples.

## Nível 8 — Compartilhar
Outras pessoas contribuindo: dono por página, revisão antes de aceitar mudanças e cuidado com o que pode ficar visível. Veja `CONTEXTO-PESSOAL-A-ENTERPRISE.md`.

## Depois do workshop

Veja `RESOURCES.md` para coleções de aprofundamento (frontend, tipografia, acessibilidade, etc.).

### Evolução possível: banco de dados com Prisma ORM

Ideia para depois, **não faz parte da trilha da aula**. A trilha continua em Markdown puro, sem instalar nada.

Quando a wiki sair do uso pessoal e virar algo multiusuário ou corporativo (veja `CONTEXTO-PESSOAL-A-ENTERPRISE.md`), dá para espelhar as páginas de `concepts/` em um banco relacional usando Prisma ORM, por exemplo com SQLite para testar em um único arquivo local.

Cuidados antes de adotar:

- **Uma fonte da verdade.** Comece só com Markdown para banco (ler o frontmatter e o corpo das páginas e popular o banco). Os arquivos `.md` continuam mandando. Sincronizar nos dois sentidos exige resolver conflitos e decidir quem manda, então só vale depois que a direção única estiver estável.
- **Autoridade e status continuam no frontmatter** (`status`, `authority`). O banco não substitui esse modelo.
- **Prisma não entrega governança sozinho.** Permissões, aprovação editorial e revisão humana precisam ser desenhadas à parte (por exemplo, Pull Requests ou uma interface própria).
- **Nome.** Se adotar Prisma ORM, vale renomear a Biblioteca Prisma do exemplo para evitar confusão entre a biblioteca fictícia e a ferramenta.

## Alinhamento com harness de produção

O seed implementa as camadas 4 e 5 da progressão de memória (wiki + índice) e as cinco lições aplicáveis a uma LLM Wiki. O restante do harness (prompt caching, tool registry, compactação de contexto, evals) fica fora do escopo deste template.
