import React from "react";
import HeartIcon from "../HeartIcon/HeartIcon";
import styles from "./ListItem.module.css";
import { PokemonProps } from "../../types/Pokemon";

interface ListItemProps {
  items: PokemonProps[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((pokemon: PokemonProps, index: number) => {
        return (
          <div className={styles.container} key={index}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={styles.image}
            />
            <div className={styles.typeContainer}>
              {pokemon.name}
              <div>
                {pokemon.types.map((type) => (
                  <span className={styles.type}>{type}</span>
                ))}
              </div>
            </div>
            <div className={styles.contentContainer}>
              <HeartIcon
                isFavorite={pokemon.isFavorite}
                id={pokemon.id}
                size={20}
                name={pokemon.name}
              />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ListItem;
