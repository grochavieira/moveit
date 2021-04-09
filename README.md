<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/grochavieira/moveit?color=%2304D361&style=flat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/grochavieira/moveit?style=flat">
  
  <a href="https://github.com/grochavieira/moveit/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/grochavieira/moveit?style=flat">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">
  
</p>
<h1 align="center">
    <img src="./assets/logo_black.png" />
</h1>

<h4 align="center"> 
	🚧  Aplicação finalizada! 🚧
</h4>

## 🏁 Tópicos

<p>
 👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre</a> <br/>
👉<a href="#-funcionalidades" style="text-decoration: none; "> Funcionalidades</a> <br/>
👉<a href="#-layout" style="text-decoration: none"> Layout</a> <br/>
👉<a href="#-demonstracao" style="text-decoration: none"> Demonstração</a> <br/>
👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
👉<a href="#-tecnologias" style="text-decoration: none"> Tecnologias</a> <br/>
👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
👉<a href="#user-content--licença" style="text-decoration: none"> Licença</a>

</p>

## 💻 Sobre o projeto

Uma aplicação que simula a utilização da técnica de pomodoro com o intuito de tornar devs mais produtivos e mais saudáveis.

Abaixo disponibilizei um link para o site hospedado:

<a align="center" href="https://moveit-taupe-sigma.vercel.app/">
    <img alt="Site moveit" src="https://img.shields.io/static/v1?label=site&message=moveit&color=4953B8&style=flat&logo=vercel">
</a>

---

<a name="-funcionalidades"></a>

## ⚙️ Funcionalidades

- [x] Front-end;
  - [x] Pagina Principal;
  - [x] Cronômetro;
  - [x] Barra de Experiência;
  - [x] Desafios;
  - [x] Botão de Falhei - Cancela Desafio e Reseta Cronômetro;
  - [x] Botão de Completei - Adiciona Experiência do Desafio e Reseta Cronômetro;
  - [x] Apresenta um Modal quando usuário sobe de nível;
  - [x] Os dados do usuário são salvos em cookies;
  - [x] Alternância entre tema claro e escuro.

### A milha extra...

- [x] Troca de temas da interface, na qual o tema é salvo dentro de um cookie;
- [x] A troca de temas é feita pela propriedade data-theme da tag html;
- [x] Foi adicionado rotas para uso do MongoDB como banco de dados da aplicação;
- [x] Foi criado uma Side Bar;
  - [x] Navegação entre Página principal e de Rankings;
  - [x] Botão de LogOut;
  - [x] Troca de Temas;
- [x] Página de Login;
  - [x] Layout Completo;
  - [x] Login pelo Github com NextAuth;
  - [x] Usuário é registrado no banco de dados (se não existir);
- [x] Página Principal:
  - [x] Os dados do usuário são atualizados;
- [x] Página de Rankings;
  - [x] Layout Completo;
  - [x] É criado um ranking de quem tem mais experiência;
- [x] A aplicação está responsiva.
- [x] A aplicação está totalmente funcional em produção.

---

## 🎨 Layout

### Página de Login

<div align="center">
    <img width="100%" src="./assets/login_light.PNG" />
    <img width="100%" src="./assets/login_dark.PNG " />
</div>

### Página Principal

<div align="center">
    <img width="100%" src="./assets/main_light.PNG" />
    <img width="100%" src="./assets/main_dark.PNG " />
</div>

### Modal que aparece ao súbir de nível

<div align="center">
    <img width="100%" src="./assets/modal_light.PNG" />
    <img width="100%" src="./assets/modal_dark.PNG " />
</div>

### Página de Rankings

<div align="center">
    <img width="100%" src="./assets/ranking_light.PNG" />
    <img width="100%" src="./assets/ranking_dark.PNG " />
</div>

---

<a name="-demonstracao"></a>

## 🕹️ Demonstração

<a align="center" href="https://www.linkedin.com/feed/update/urn:li:activity:6774407879257657344/">
    <img alt="moveit" src="https://img.shields.io/static/v1?label=post&message=moveit&color=0072B1&style=flat&logo=linkedin">
</a>

---

## 🚀 Como executar o projeto

Este projeto contém apenas uma parte:

1. Frontend (pasta web)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Váriaveis de Ambiente

> Veja o arquivo [.env.sample](https://github.com/grochavieira/moveit/blob/master/web/.env.sample)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/moveit.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd moveit

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[Next.js](https://nextjs.org/)**
- **[Context](https://pt-br.reactjs.org/docs/context.html)**
- **[js-cookie](https://github.com/js-cookie/js-cookie)**
- **[css-Modules](https://github.com/css-modules/css-modules)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Next-Auth](https://next-auth.js.org/)**
- **[React Icons](https://react-icons.github.io/react-icons/)**

> Veja o arquivo [package.json](https://github.com/grochavieira/moveit/blob/master/web/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fontes: **[Rajdhani](https://fonts.google.com/specimen/Rajdhani)**, **[Inter](https://fonts.google.com/specimen/Inter)**

---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
 <img src="https://avatars.githubusercontent.com/u/48029638?s=460&u=40540691957b5aabf04e2e1d4cddf8d3633cb1be&v=4" width="150px;" alt="grochavieira"/>
 <br />
 <sub><strong>🌟 Guilherme Rocha Vieira 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/grochavieira/)](https://www.linkedin.com/in/grochavieira/)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com :satisfied: por Guilherme Rocha Vieira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/grochavieira/)

---
