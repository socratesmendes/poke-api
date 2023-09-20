# Poke-api

Poke-api é uma aplicação que permite aos usuários buscar informações sobre pokémons e conhecer alguns detalhes sobre eles. 

![Pokemon Logo](./src/img/pokemon-logo.png)

## Tecnologias Utilizadas

Este projeto foi desenvolvido usando as seguintes tecnologias:

- React: Framework JavaScript para a construção de interfaces de usuário.
- Axios: Biblioteca para fazer requisições HTTP.
- PokeAPI: API que fornece informações detalhadas sobre pokémons.
- CSS: Folhas de estilo para organização da aplicação.

## Funcionamento

A aplicação é composta por três componentes principais:

### Search

O componente `Search` é responsável por permitir aos usuários buscar pokémons pelo nome. Basta digitar o nome do pokémon desejado na caixa de pesquisa e clicar no botão "Buscar". A aplicação então faz uma requisição à PokeAPI para obter os dados do pokémon e exibi-los.

### Infos

O componente `Infos` exibe informações detalhadas sobre o pokémon selecionado, incluindo seu nome, tipo, peso e altura. As informações são buscadas na PokeAPI e exibidas de forma clara e organizada.

### App

O componente principal `App` renderiza o logotipo do Pokémon, um título e os componentes `Search` e `Infos` na página. Ele também gerencia o estado dos dados do pokémon e a interação com os outros componentes.

## Acesso à Aplicação

Você pode acessar a aplicação Poke-api através do seguinte link:

[https://poke-api-dwiii.netlify.app/](https://poke-api-dwiii.netlify.app/)
