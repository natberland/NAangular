# Projeto Angular - FIAP
PWA baseada em Angular e Firebase

## Instalação

Depois de clonar o projeto, execute os seguintes comando na pasta raiz do projeto:

- Instalação da CLI do Angular
```sh
npm install -g @angular/cli
```

- Instalação das dependências do projeto
```sh
npm install
```

- Compilação da aplicação
```sh
ng build
```

- Inicialização da aplicação localmente
```sh
ng serve -o
```

## Funcionalidades

- **Autenticação:**

  - Usuário deve estar autenticado para prosseguir com a naveção da aplicação;
  - Caso não esteja, é exibida a tela de Login para que o realize através do seu email e senha;
  - Caso não tenha login, é possível cadastrar-se;
  - Uma vez logado, o usuário segue para a tela de listagem de usuários.

- **Usuários:**

  - Tela de Listagem de Usuários é exibida caso usuário esteja autenticado;
  - É possível filtrar pelo nome do usuário, cadastrar um novo e editar um existente;
  - Também existe a possibilidade de exclusão de usuário cadastrado.
  
 ## Demo		

Teste esse app através do seguinte link [ProjetoAngular](https://projeto-angular-246bb.web.app)
