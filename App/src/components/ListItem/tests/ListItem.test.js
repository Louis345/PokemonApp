import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import ListItem from "../ListItem";

const pokemonMockData = [
  {
    __typename: "Pokemon",
    id: "001",
    name: "Bulbasaur",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    types: ["Grass", "Poison"],
    isFavorite: true,
    maxHP: 1071,
    maxCP: 951,
    sound: "http://localhost:4000/sounds/1",
    weight: {
      __typename: "PokemonDimension",
      minimum: "6.04kg",
      maximum: "7.76kg",
    },
    height: {
      __typename: "PokemonDimension",
      minimum: "0.61m",
      maximum: "0.79m",
    },
  },
  {
    __typename: "Pokemon",
    id: "002",
    name: "Ivysaur",
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    types: ["Grass", "Poison"],
    isFavorite: false,
    maxHP: 1632,
    maxCP: 1483,
    sound: "http://localhost:4000/sounds/2",
    weight: {
      __typename: "PokemonDimension",
      minimum: "11.38kg",
      maximum: "14.63kg",
    },
    height: {
      __typename: "PokemonDimension",
      minimum: "0.88m",
      maximum: "1.13m",
    },
  },
  {
    __typename: "Pokemon",
    id: "003",
    name: "Venusaur",
    image: "https://img.pokemondb.net/artwork/venusaur.jpg",
    types: ["Grass", "Poison"],
    isFavorite: true,
    maxHP: 2580,
    maxCP: 2392,
    sound: "http://localhost:4000/sounds/3",
    weight: {
      __typename: "PokemonDimension",
      minimum: "87.5kg",
      maximum: "112.5kg",
    },
    height: {
      __typename: "PokemonDimension",
      minimum: "1.75m",
      maximum: "2.25m",
    },
  },
];

test("should render the correct amount of Pokemon", async () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <ListItem items={pokemonMockData} />
    </ApolloProvider>
  );
  const items = screen.getAllByRole("img");
  expect(items).toHaveLength(3);
});
