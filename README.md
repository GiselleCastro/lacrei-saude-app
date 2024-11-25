# Projeto: Páginas Web Interativas para Lacrei Saúde

Desafio para Voluntariado em Front End na Lacrei Saúde.

## Table of contents

- [Overview](#overview)
- [Funcionalidades implementadas](#funcionalidades-implementadas)
  1. [Header e Footer Personalizados](#1-header-e-footer-personalizados)
  2. [Roteamento Entre Páginas](#2-roteamento-entre-páginas)
     - [Páginas](#páginas)
  3. [Botões Interativos](#3-botões-interativos)
  4. [Design Responsivo](#4-design-responsivo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Deployment da Aplicação](#deployment-da-aplicação)
- [Como Iniciar](#como-iniciar)
- [Demonstração Visual](#demonstração-visual)
  - [Versão Desktop](#versão-desktop)
  - [Versão Mobile](#versão-mobile)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Como Iniciar](#como-iniciar)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Testes Unitários](#testes-unitários)
- [Contato com a desenvolvedora]()

## Overview

Este repositório contém a implementação de três páginas web interativas desenvolvidas com foco na experiência do usuário, seguindo rigorosamente o guia de estilo da Lacrei Saúde. O projeto destaca um design acolhedor, interatividade criativa e responsividade, culminando em uma aplicação prática, funcional e acessível.

## Funcionalidades implementadas

### 1. Header e Footer Personalizados

O design do Header e do Footer reflete a essência acolhedora e profissional da Lacrei Saúde, alinhando-se perfeitamente com o estilo visual da marca. Ambos os componentes são reutilizáveis e otimizados para diferentes resoluções de tela e também compartilhados por toda a aplicação, sem necessidade de re-renderização de informações estáticas.

### 2. Roteamento Entre Páginas

As páginas foram integradas com um sistema de roteamento fluido e eficiente, permitindo a navegação dinâmica e sem interrupções, podendo acessá-las pelos botões no Header. Ao clicar na logo da Lacrei Saúde, é redirecionado para a página inicial (Home).

#### Páginas

- Home (/)
- Quem Somos (/quem-somos)
- Ajuda (/ajuda)

### 3. Botões Interativos

Há três botões com funcionalidades exclusivas:

- Botão no header para alternar entre as páginas web da aplicação (`Quem Somos` e `Ajuda`)
- Botão no header que mostra as opções de login (`Entrar`), seja o usuário um Paciente ou um Profissional.
- Botão no footer que, ao clicar, leva o usuário ao topo da página.

## 4. Design Responsivo

Todo o layout foi projetado com foco em responsividade, garantindo uma excelente experiência do usuário em diferentes dispositivos, de smartphones a desktops.

## Tecnologias Utilizadas

- **Framework**: Next.js para criar a aplicação React.
- **Linguagem**: TypeScript para um código mais robusto e tipado.
- **Estilização**: CSS Modules e Styled-Components, seguindo o guia de estilo da Lacrei Saúde.
- **Testes**: Utilização do Jest e React Testing Library para validar o funcionamento dos componentes e verificar o comportamento esperado, incluindo responsividade.

## Deployment da Aplicação

A aplicação foi deployed e está acessível - [Acesse aqui a aplicação interativa](https://lacrei-saude-app-fawn.vercel.app/)

> Deployment realizado via Vercel Platform.

## Demonstração Visual

### Versão Desktop

![Demonstração das páginas web interativas para Lacrei Saúde versão desktop](demo/demo-desktop.gif)

### Versão Mobile

![Demonstração das páginas web interativas para Lacrei Saúde versão mobile](demo/demo-mobile.gif)

## Processo de Desenvolvimento

1. **Planejamento**: Análise detalhada dos requisitos e do style guide.
2. **Desenvolvimento**: Implementação dos componentes e roteamento.
3. **Teste**: Realização de testes unitários e manuais para garantir a qualidade.
4. **Deploy**: Deployment da aplicação para acesso público

## Como Iniciar

### Pré-requisitos

- Node.js (versão >= 21.5)
- npm (versão >= 10.2.4)

### Instalação

1. Clone o repositório

```bash
git clone https://github.com/GiselleCastro/lacrei-saude-app.git
```

2. Navegue até o diretório do projeto:

```bash
cd lacrei-saude-app
```

3. Instale as dependências

```bash
npm install
```

4. Inicie o servidor

- ```bash
    npm start
  ```

  Acesse [http://localhost:3000](http://localhost:3000) com seu navegaador. Ou para desenvolvimento

- ```bash
   npm run dev
  ```

  e nesse caso, no terminal irá aparecer em o link de acesso para a aplicação, a depender da disponibildade de portas no dispositivo em questão.

## Testes Unitários

Para executar os testes unitários dos componentes:

```bash
    npm run test
```

## Contato com a desenvolvedora

Giselle dos Santos Castro

> giselle@fisica.ufc.br

> [LinkedIn](https://www.linkedin.com/in/gisellesc/)
