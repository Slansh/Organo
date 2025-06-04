Organo - Um Organizador de Colaboradores por Times

Organo é uma aplicação web interativa desenvolvida em React que permite organizar e visualizar colaboradores de diferentes times de forma dinâmica. É ideal para gerenciar equipes e ter uma visão clara de quem está em qual time.

Sumário
Sobre o Projeto
Funcionalidades
Times Disponíveis
Tecnologias Utilizadas
Como Rodar o Projeto
Pré-requisitos
Instalação
Executando a Aplicação
Estrutura do Projeto
Como Contribuir
Licença
Contato
Agradecimentos
Sobre o Projeto
O Organo é uma aplicação frontend construída com React que oferece uma interface simples para cadastrar colaboradores e associá-los a times específicos. A aplicação exibe cada time em um card colorido distinto, listando os colaboradores pertencentes a ele. O objetivo é fornecer uma ferramenta visual e fácil de usar para a organização de equipes.

Funcionalidades
Cadastro de Colaboradores: Adicione novos colaboradores preenchendo um formulário com nome, cargo, link da imagem e o time ao qual o colaborador pertence.
Visualização por Times: Os colaboradores são automaticamente agrupados e exibidos sob seus respectivos times.
Design Intuitivo: Interface clara e organizada, com cores distintas para cada time, facilitando a identificação visual.
Times Disponíveis
A aplicação já vem configurada com os seguintes times e suas respectivas cores:

Programação (#57C278 / #D9F7E9)
Front-End (#82CFFA / #E8F8FF)
Data Science (#A6D157 / #F0F8E2)
Devops (#E06869 / #FDE7E8)
UX e Design (#DB6EBF / #FAE9F5)
Mobile (#FFBA05 / #FFF5D9)
Inovação e Gestão (#FF8A29 / #FFEEDF)
Tecnologias Utilizadas
React.js: Biblioteca JavaScript para construção da interface de usuário.
JavaScript (ES6+): Linguagem de programação principal.
CSS: Para estilização dos componentes e layout da aplicação.
Como Rodar o Projeto
Siga estas instruções para configurar e executar o projeto em sua máquina local.

Pré-requisitos
Certifique-se de ter o Node.js e o npm (ou Yarn) instalados em seu computador.

Node.js (inclui npm)
Instalação
Clone o repositório:

Bash

git clone <URL_DO_SEU_REPOSITORIO>
cd organo
(Lembre-se de substituir <URL_DO_SEU_REPOSITORIO> pela URL real do seu repositório Git, se você tiver um.)

Instale as dependências:

Bash

npm install
# ou
yarn install
Executando a Aplicação
Inicie o servidor de desenvolvimento:

Bash

npm start
# ou
yarn start
Isso abrirá a aplicação em seu navegador padrão em http://localhost:3000.

Estrutura do Projeto
A estrutura principal do projeto é a seguinte, focando nos componentes utilizados:

.
├── public/                     # Arquivos estáticos e recursos públicos
│   └── imagens/                # Imagens e outros assets visuais da aplicação
├── src/
│   ├── componentes/            # Contém todos os componentes React reutilizáveis
│   │   ├── Banner/
│   │   │   ├── index.js        # Lógica do componente Banner
│   │   │   ├── Banner.js        # Lógica do componente Banner
│   │   │   └── Banner.css      # Estilos do componente Banner
│   │   ├── Botao/
│   │   │   ├── index.js        # Lógica do componente Botao
│   │   │   └── Botao.css       # Estilos do componente Botao
│   │   ├── CampoTexto/
│   │   │   ├── index.js        # Lógica do componente CampoTexto
│   │   │   └── CampoTexto.css  # Estilos do componente CampoTexto
│   │   ├── Colaborador/
│   │   │   ├── index.js        # Lógica do componente Colaborador
│   │   │   └── Colaborador.css # Estilos do componente Colaborador
│   │   ├── Formulario/
│   │   │   ├── index.js        # Lógica do componente Formulario
│   │   │   └── Formulario.css  # Estilos do componente Formulario
│   │   ├── ListaSuspensa/
│   │   │   ├── index.js        # Lógica do componente ListaSuspensa
│   │   │   └── ListaSuspensa.css # Estilos do componente ListaSuspensa
│   │   ├── Rodape/
│   │   │   ├── index.js        # Lógica do componente Rodape
│   │   │   └── Rodape.css      # Estilos do componente Rodape
│   │   └── Time/
│   │       ├── index.js        # Lógica do componente Time
│   │       └── Time.css        # Estilos do componente Time
│   ├── App.js                  # Lógica principal da aplicação e gerenciamento de estado
│   ├── App.css                 # Estilos globais ou do componente App
│   ├── index.js                # Ponto de entrada da aplicação React
│   └── index.css               # Estilos globais
├── package.json                # Dependências e scripts do Node.js
└── README.md                   # Este arquivo!

Como Contribuir
Contribuições são sempre bem-vindas! Se você tiver ideias para melhorias, novas funcionalidades ou encontrar algum bug, siga os passos abaixo:

Faça um fork do projeto.
Crie uma nova branch para sua funcionalidade ou correção (git checkout -b feature/nome-da-sua-feature ou fix/correcao-de-bug).
Faça suas alterações e commit (git commit -m 'feat: Adiciona nova funcionalidade X' ou fix: Corrige bug Y').
Envie suas alterações para o upstream (git push origin nome-da-sua-branch).
Abra um Pull Request, descrevendo suas mudanças.
Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE (se existir) para mais detalhes.

Contato
Seu Nome/Pseudônimo (se desejar incluir)
GitHub: Link para o seu perfil no GitHub
Email: seu.email@exemplo.com (opcional)
Agradecimentos
Agradeço à Alura (ou à fonte do curso/material) por fornecer o conhecimento e a base para o desenvolvimento deste projeto.
