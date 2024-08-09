# Next.js JWT Authentication with External API

Este projeto demonstra como integrar a autenticação JWT (JSON Web Token) com uma API externa em uma aplicação Next.js. A aplicação permite o login, registro e gerenciamento de tokens JWT, além de proteger rotas e sessões de forma segura.

## Principais Funcionalidades

- **Autenticação de Usuário**: Login e registro de usuários usando uma API externa.
- **Proteção de Rotas**: Implementa a proteção de páginas e rotas com tokens JWT.
- **Gerenciamento de Sessões**: Armazena e gerencia tokens JWT de forma segura no navegador.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações com renderização do lado do servidor.
- **JWT (JSON Web Token)**: Sistema de autenticação para segurança de tokens.
- **API Externa**: Serviço backend para autenticação e gerenciamento de usuários.

## Como Começar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/NogueiraMat/auth-next-app

2. **Backend**
   - Desenvolva uma API com um endpoint de autentição que define um cookie JWT httponly e um endpoint que retorna as informações do usuário logado;

3. **Auth Provider**
   - Modifique as funções de chamada na API encontradas no diretório context/AuthContenxt.tsx para os endpoints da sua API;

4. **Iniciar**
   - Inicie a aplicação Next com o comando: npm run dev
