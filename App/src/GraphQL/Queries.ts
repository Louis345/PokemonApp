import { gql } from "@apollo/client";

// create a query called GET_ALL_POKEMON that accepts variables called limit and offset
// the query should return a list of pokemon
// export const GET_ALL_POKEMON = gql`
//     query{ getAllPokemon($limit: Int!, $offset: Int!) {
//         pokemons(limit: $limit, offset: $offset) {
//             id
//             number
//             name
//             weight {
//                 minimum
//                 maximum
//             }
//             height {
//                 minimum
//                 maximum
//             }
//           }
//         `;

// export const GET_ALL_POKEMON = gql`
//   query {
//     pokemons(query: { filter: { isFavorite: false }}) {
//     limit
//       edges {
//         id
//         name
//         image
//         types
//         isFavorite
//         maxHP
//         maxCP
//         sound
//          weight {
//           minimum
//           maximum
//         }
//         height {
//           minimum
//           maximum
//         }
//       }
//     }
//   }
// `;

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;


export const GET_ALL_POKEMON = gql`
  query Pokemons($limit: Int!) {
  	pokemons(query:{limit:$limit}){
       edges {
       id
        name
        image
        types
        isFavorite
        maxHP
        maxCP
        sound
         weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
         evolutions {
          id
          image
          isFavorite
        }
      }
  }
}
`;



export const GET_ALL_POKEMON_TYPES = gql`query {
 pokemonTypes
}`;