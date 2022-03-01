import React from "react";
import { useMutation } from "@apollo/client";
import {
  SAVE_FAVORITE_POKEMON,
  UNFAVORITE_POKEMON,
} from "../../GraphQL/mutations";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./HeartIcon.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface HeartIconProps {
  isFavorite: boolean;
  id: string;
  size: number;
  name: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({
  isFavorite,
  id,
  size,
  name,
}) => {
  const [liked, setLiked] = React.useState<Boolean>(false);
  const [favoritePokemon] = useMutation(SAVE_FAVORITE_POKEMON);
  const [unfavoritePokemon] = useMutation(UNFAVORITE_POKEMON);
  const notify = (message: string) => toast(message);
  return (
    <React.Fragment>
      {liked || isFavorite ? (
        <AiFillHeart
          className={styles.heart}
          onClick={() => {
            unfavoritePokemon({ variables: { id } });
            setLiked(false);
            notify(`${name} was removed from favorites`);
          }}
          size={size}
        />
      ) : (
        <AiOutlineHeart
          className={styles.heart}
          onClick={() => {
            setLiked(true);
            favoritePokemon({ variables: { id } });
            notify(`${name} was added to favorites`);
          }}
          size={size}
        />
      )}
    </React.Fragment>
  );
};

export default HeartIcon;
