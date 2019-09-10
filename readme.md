
# Banco Pan Front-end

Teste para vaga de front-end para o departamento de CRM do banco Pan.

## Landing Page:

### Começando:
Siga os passos abaixo para efetuar a instalação dos requisitos para o projeto.

#### Requisitos:


    node
    npm ou yarn

#### Instalação:

Entre na pasta do projeto via terminal e utilize os seguintes comandos para baixar toda a lista de depêndecias do projeto:

npm:
`npm i`
Caso o sistema seja unix:
`npm i --unsafe-perm=true`

yarn:
`yarn install`

#### Rodando o projeto:
Para rodar localmente o projeto, ultilize os comandos:

`gulp`

#### Gerar arquivos:

Para gerar os arquivos estáticos deverá ser rodado:
`gulp build`

Os arquivos gerados irão para o diretório './dist'

###  Desenvolvimento:

- Foi ultilizado Gulp para o gerenciamento de todas as dependências do projeto
- Como havia preferência pela criação de estilos sem o uso de framework, utilizei bootstrap apenas para a criação do slider e da modal, além de usar os componentes de botão e grid.

### Depêndecias:
- [Gulp.js](https://gulpjs.com/) - Atumatizador de tarefas;

- [Boostrap](https://getbootstrap.com/) - Framework responsável por Grids, estilo de botões, modal e slider;

- [Sass](https://sass-lang.com/) - Pré-processador de CSS;

- [PostCSS](https://postcss.org/) - Ferramenta para gerar CSS mais performático;

- [Autoprefixer](https://autoprefixer.github.io/) - Ferramenta para adicionar prefixos automaticamente no CSS;

- [CSS nano](https://cssnano.co/) - Ferramenta para minificar o CSS;

- [Source Map](https://www.npmjs.com/package/gulp-sourcemaps) - Ferramenta para debuggar arquivos minificados;

- [Browser-sync](https://www.browsersync.io/) - Ferramenta para hot reload a cada atualização de arquivos;

- [Babel.js](https://babeljs.io/) - Transpilação de ES6 para ES5 ou inferior;

- [ESLint](https://eslint.org/) - Lint para javascript;


