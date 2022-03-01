import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from "./GraphQL/Queries";
import Card from "./components/Card/Card";
import Header from "./Layouts/Header/Header/Header";
import styles from "./App.module.css";
import { PokemonProps } from "./types/Pokemon";
import { useNavigate } from "react-router-dom";
import ListItem from "./components/ListItem/ListItem";
import useOnScreen from "./hooks/UseOnScreen/UseOnScreen";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();
  const bottomRef = useRef<HTMLDivElement>(null);

  const { error, loading, data, fetchMore } = useQuery(GET_ALL_POKEMON, {
    variables: {
      limit: 20,
    },
  });
  const [pokemons, setPokemon] = useState<PokemonProps[] | []>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [isListView, setIsListView] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = useState<string | null>(null);

  useEffect(() => {
    if (!isFavorite && data) {
      setPokemon(data.pokemons.edges);
    }
  }, [isFavorite]);

  const isBottom = useOnScreen(bottomRef);

  useEffect(() => {
    if (isBottom && !loading && data) {
      fetchMore({
        variables: { limit: data.pokemons.edges.length + 10 },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult;
        },
      });
    }
  }, [isBottom]);

  useEffect(() => {
    if (filteredPokemon) {
      setPokemon(data.pokemons.edges);
      const filtered = filterPokemonByType(filteredPokemon);
      setPokemon(filtered);
    }
  }, [filteredPokemon]);

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemons.edges);
    }
  }, [data]);

  useEffect(() => {
    if (search) {
      handleOnSearch(search);
    }
    if (!search && data) {
      setPokemon(data.pokemons.edges);
    }
  }, [search]);

  const handleOnSearch = (search: string) => {
    const filteredPokemons = pokemons.filter((pokemon: PokemonProps) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setPokemon(filteredPokemons);
  };

  const filterPokemonByType = (pokemonType: string) => {
    const filteredData = pokemons.filter((pokemon: PokemonProps) => {
      return pokemon.types.includes(pokemonType);
    });
    return filteredData;
  };

  const renderFavoritePokemon = () => {
    return (
      <div className={styles.container}>
        {pokemons
          .filter((pokemon) => pokemon.isFavorite)
          .map((pokemon, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  image={pokemon.image}
                  pokemonName={pokemon.name}
                  types={pokemon.types}
                  id={pokemon.id}
                  handleOnPokemonClick={(id) =>
                    navigate(`/pokemon/${id}`, { state: { pokemon } })
                  }
                  isFavorite={pokemon.isFavorite}
                />
              </React.Fragment>
            );
          })}
      </div>
    );
  };

  const renderAllPokemon = () => {
    return (
      <div className={styles.container} id="container">
        {pokemons.map((pokemon: PokemonProps, index: number) => {
          return (
            <React.Fragment key={index}>
              <Card
                image={pokemon.image}
                pokemonName={pokemon.name}
                types={pokemon.types}
                id={pokemon.id}
                handleOnPokemonClick={(id) =>
                  navigate(`/pokemon/${id}`, { state: { pokemon } })
                }
                isFavorite={pokemon.isFavorite}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const renderListItems = () => {
    if (isFavorite) {
      const favoritePokemons = pokemons.filter(
        (pokemon: PokemonProps) => pokemon.isFavorite
      );
      return <ListItem items={favoritePokemons} />;
    }
    return <ListItem items={pokemons} />;
  };

  const handleView = () => {
    if (isListView) {
      if (isFavorite) {
        return renderFavoritePokemon();
      } else {
        return renderAllPokemon();
      }
    }
    if (!isListView) {
      return renderListItems();
    }
  };

  if (error) {
    return (
      <div>
        Please ensure that the server is running and the port is correct.
      </div>
    );
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <Header
        onSearch={(e) => setSearch(e.target.value)}
        onTab={(isFavorite: number) => {
          setIsFavorite(isFavorite === 2);
        }}
        handleViewType={() => setIsListView(!isListView)}
        onSelect={(pokemonType) => {
          setPokemon(data.pokemons.edges);
          setFilteredPokemon(pokemonType);
        }}
      />
      {handleView()}
      {<div ref={bottomRef} />}
    </React.Fragment>
  );
}

export default App;
