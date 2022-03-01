import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./PokemonDetailedView.module.css";
import HeartIcon from "../../components/HeartIcon/HeartIcon";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { PokemonProps } from "../../types/Pokemon";
import { AiTwotoneSound } from "react-icons/ai";
import UseSound from "../../hooks/UseSound/UseSound";

type LocationState = {
  pokemon: PokemonProps;
};

const PokemonDetailedView = () => {
  const location = useLocation();

  const {
    pokemon: {
      name,
      types,
      isFavorite,
      image,
      id,
      maxHP,
      maxCP,
      weight,
      height,
      sound,
      evolutions,
    },
  } = location.state as LocationState;

  const [, toggle] = UseSound(sound);
  console.log({ location });
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={image} alt={name} className={styles.image} />
          <AiTwotoneSound className={styles.sound} onClick={toggle} size={30} />
          <div className={styles.footer}>
            <div className={styles.column}>
              <div className={styles.subColumn}>
                <div>
                  <span className={styles.name}>{name}</span>
                  {types.map((type, index) => (
                    <div className={styles.types} key={index}>
                      {type}
                    </div>
                  ))}
                </div>
                <div className={styles.iconContainer}>
                  <HeartIcon
                    isFavorite={isFavorite}
                    id={id}
                    size={30}
                    name={name}
                  />
                </div>
              </div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarWrapper}>
                  <ProgressBar
                    progress={100}
                    color={"#9594FF"}
                    borderRadius="10px"
                  />
                  <div>{maxCP}</div>
                </div>
                <div className={styles.progressBarWrapper}>
                  <ProgressBar
                    progress={100}
                    color={"#43bd95"}
                    borderRadius="10px"
                  />
                  <div>{maxHP}</div>
                </div>
              </div>
              <div className={styles.statsContainer}>
                <div className={styles.stats}>
                  Weight
                  <div>{`${weight.minimum} - ${weight.maximum}`}</div>
                </div>
                <div className={styles.stats}>
                  Height
                  <div>{`${height.minimum}- ${height.maximum}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {evolutions.length > 0 && <h1>Evolutions</h1>}
      <div className={styles.evolutionContainer}>
        {evolutions.map((evolution, index) => (
          <div className={styles.container} style={{ margin: "5px" }}>
            <img src={evolution.image} alt={name} className={styles.image} />
            <div className={styles.footer}>
              <div className={styles.column}>
                <div className={styles.subColumn}>
                  <div>
                    <span className={styles.name}>{name}</span>
                    {types.map((type, index) => (
                      <div className={styles.types} key={index}>
                        {type}
                      </div>
                    ))}
                  </div>
                  <div className={styles.iconContainer}>
                    <HeartIcon
                      isFavorite={isFavorite}
                      id={id}
                      size={30}
                      name={name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PokemonDetailedView;
