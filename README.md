# Fox Run — site do projeto

## Persona
**Quem:** adolescentes de 12 a 17 anos que gostam de jogos casuais estilo pixel art e
costumam jogar em navegador, no intervalo entre uma tarefa e outra (aula, trabalho,
transporte).

**Dor principal:** a maioria dos sites de jogos casuais é poluída com anúncios,
demora pra carregar e não deixa claro como jogar. Essa persona quer um lugar simples
onde entende o jogo em poucos segundos e já consegue jogar, sem cadastro.

**Como o site resolve isso:** uma home enxuta que mostra o jogo logo de cara (hero),
explica em três regras curtas como jogar, e tem um botão único e óbvio ("Jogar agora")
que leva direto para a página do jogo.

## Estrutura de arquivos
```
fox-run-site/
├── index.html      → página inicial (hero + sobre + como jogar + contato)
├── jogo.html        → página que carrega o jogo (iframe) — TROCAR o src pelo link do seu jogo Low Code
├── style.css        → todo o visual do site
├── script.js        → menu hamburguer + validação do formulário de contato
└── assets/
    └── game-preview.png
```

## Onde cada critério da rubrica é atendido

**Experiência do usuário**
- Persona e dor: descritas acima.
- Padronização: mesmo estilo de botão, cartão e divisor de tijolos repetido em todas as seções.
- Indicação de interação: links do menu sublinham ao passar o mouse/foco; botões têm sombra 3D que "afunda" ao clicar.
- Facilitação: tipografia com hierarquia clara, layout responsivo até celular, área de toque grande nos botões.
- Alinhamento visual: paleta e imagem do jogo (raposa, maçã, esqueleto) usadas em todo o site.
- Direcionamento: cada seção termina apontando pra próxima ação (jogar, rolar, preencher o formulário).

**Desenvolvimento web**
- Visual: identidade pixel art consistente, sem estilo genérico de template.
- Estrutura: página dividida em seções claras (Início, Sobre o jogo, Como jogar, Contato) + página separada do jogo.
- Código: HTML semântico e indentado, CSS organizado por blocos comentados.
- Responsividade: menu vira hamburguer abaixo de 700px, grids viram coluna única abaixo de 860px.

**Tech Forge (JavaScript)**
- Menu hamburguer: `script.js`, função `toggleMenu`.
- Validação de formulário: `script.js`, valida nome, e-mail (regex) e mensagem antes de enviar.
- Exibição dos dados digitados: após validado, o formulário mostra os dados enviados na própria página (`#formFeedback`).

**Jogo (Low Code)**
- `jogo.html` já está preparado com um `<iframe>` e um botão de acesso na home.
- **Ação necessária:** publique o jogo feito na ferramenta Low Code (Construct, GDevelop, Scratch etc.) e troque
  `src="about:blank"` pela URL real do jogo publicado, dentro de `jogo.html`.

## Como publicar no GitHub Pages
1. Crie um repositório novo no GitHub e envie todos os arquivos desta pasta para a raiz dele.
2. Nas configurações do repositório, vá em **Settings → Pages**.
3. Em "Branch", selecione `main` (ou `master`) e a pasta `/root`, depois salve.
4. Aguarde alguns minutos — o GitHub vai gerar um link do tipo `https://seu-usuario.github.io/nome-do-repo/`.
5. Teste o link em um celular também, pra conferir a responsividade.
