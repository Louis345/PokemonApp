import React from "react";
import styles from "./Card.module.css";
import HeartIcon from "../HeartIcon/HeartIcon";

interface CardProps {
  pokemonName: string;
  image: string;
  types: string[];
  id: string;
  isFavorite: boolean;
  handleOnPokemonClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  pokemonName,
  image,
  types,
  id,
  isFavorite,
  handleOnPokemonClick,
}) => {
  return (
    <div className={styles.container} key={id}>
      <img
        src={image}
        alt={pokemonName}
        className={styles.image}
        onClick={() => handleOnPokemonClick(id)}
      />

      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <div className={styles.title}>{pokemonName}</div>
          <div className={styles.content}>
            {types.map((type, index) => (
              <span className={styles.subTitle}>
                {types.length - 1 !== index ? `${type},` : type}
              </span>
            ))}
            <div className={styles.iconContainer}>
              <HeartIcon
                isFavorite={isFavorite}
                id={id}
                size={15}
                name={pokemonName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
