import { gql } from '@apollo/client';

export const SAVE_FAVORITE_POKEMON  =  gql`
    mutation FavoritePokemon($id: ID!) {
        favoritePokemon(id: $id) {
            id
            isFavorite
        }
    }
`;

export const UNFAVORITE_POKEMON  =  gql`
    mutation unFavoritePokemon($id: ID!) {
        unFavoritePokemon(id: $id) {
            id
            isFavorite
        }
    }
`;

