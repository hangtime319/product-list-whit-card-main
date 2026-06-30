# Frontend Mentor - Product list with cart solution

Esta é a solução para o desafio [Product list with cart do Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Os desafios do Frontend Mentor ajudam a melhorar suas habilidades de codificação através da construção de projetos realistas.

## Visão Geral

Este projeto é uma interface de e-commerce responsiva onde os usuários podem visualizar uma lista de sobremesas, adicionar itens ao carrinho, ajustar quantidades e confirmar o pedido final através de uma janela modal. 

### Links

- URL do site em produção: [https://hangtime319.github.io/product-list-whit-card-main/](https://hangtime319.github.io/product-list-whit-card-main/)

### Captura de Tela

<img width="1900" height="867" alt="image" src="https://github.com/user-attachments/assets/bb6d0924-7710-4e6f-985b-d74df5a64574" />

## Feito com

- Marcação semântica HTML5
- Abordagem Mobile-first
- [React](https://reactjs.org/) - Biblioteca JS
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS de utilitários

## O que aprendi

Durante o desenvolvimento deste projeto, aprofundei meus conhecimentos no ecossistema do React e na manipulação de CSS moderno. Os principais aprendizados incluem:

* **Gerenciamento de Estado e Prop Drilling:** Entendimento prático de como o fluxo de dados unidirecional funciona no React, elevando o estado (`useState`) para o componente principal e repassando funções de controle de carrinho (adicionar, remover, incrementar) através de propriedades para os componentes filhos.
* **Renderização Condicional:** Criação de interfaces dinâmicas que reagem imediatamente aos cliques do usuário, alternando entre estados vazios e preenchidos no carrinho.
* **Imagens Responsivas:** Utilização da tag `<picture>` do HTML para servir diferentes resoluções de imagem de forma semântica e performática, dependendo do dispositivo (mobile, tablet, desktop).
* **Animações com Tailwind CSS:** Extensão das configurações padrão do arquivo `tailwind.config.js` para criar animações de *keyframes* customizadas (fade-in, slide-in) durante a montagem de componentes.

## Desenvolvimento contínuo

Para os próximos projetos, pretendo me aprofundar em soluções para evitar o *Prop Drilling* em aplicações maiores, estudando a Context API. Além disso, quero avançar no estudo de rotas utilizando o React Router para construir Single Page Applications (SPAs) com múltiplas páginas e navegação complexa.
