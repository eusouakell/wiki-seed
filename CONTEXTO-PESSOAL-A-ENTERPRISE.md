# Do contexto pessoal ao enterprise

O que muda quando o contexto sai do uso pessoal. A lógica é a mesma (fonte, conhecimento compilado, regras do agente). O que muda são volume, permissões, donos e risco. Escolha pelo critério, não pelo tamanho da empresa.

| | Pessoal | Corporativo leve | Enterprise |
| --- | --- | --- | --- |
| Quem | uma pessoa | um time ou área | várias áreas e sistemas |
| Volume | dezenas de arquivos | centenas de páginas | dados em vários sistemas e grande volume |
| Formato | Markdown + Git | Markdown + Git compartilhado | camada de busca sobre as fontes, wiki como camada curada |
| Permissões | tudo é seu | poucas pessoas e papéis claros | acesso por pessoa e por agente, auditado |
| Donos | você | dono por página, revisão antes de aceitar | curadoria como processo, com responsáveis |
| Risco | incômodo | exposição interna | incidente (dado de outro departamento, ação errada) |
| Fontes vivas | copiar para `raw/` | alguma fonte viva via MCP | conectores, gateway, identidade |
| Plataformas | nenhuma necessária | opcional | construir ou adotar plataforma |

## Pontos de atenção (verificados em 24/11/2026)

- Git e GitHub não têm leitura por pasta. CODEOWNERS indica quem revisa mudanças em um caminho; não restringe quem lê. Para esconder conteúdo, use outro repositório ou outro sistema (https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).
- GitHub Pages publica na internet, mesmo com repositório privado, salvo publicação privada em planos Enterprise Cloud (https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
- Perguntas que indicam que o pessoal não basta: mais de uma pessoa precisa de acessos diferentes; os dados mudam todo dia em outro sistema; um erro do agente tem custo real; é preciso auditar quem leu ou alterou o quê.

## Enterprise: plataformas

Há duas rotas: construir as camadas (armazenamento, busca, identidade, execução de agentes) ou adotar uma plataforma de agentes. Exemplos de plataformas com nome atual confirmado em fonte do próprio fornecedor ou de imprensa em 2025 e 2026: Gemini Enterprise (que incorporou o Agentspace), Microsoft Foundry (antes Azure AI Foundry), Amazon Bedrock AgentCore e Databricks Agent Bricks. Nomes e planos mudam rápido. Confira a documentação atual antes de decidir. A escolha depende de onde seus dados e sua identidade já vivem.

Roteiro realista: começar por leitura (assistente que responde sobre um domínio), depois ações com aprovação humana, depois orquestração. Pular direto para orquestração é o erro mais comum.
