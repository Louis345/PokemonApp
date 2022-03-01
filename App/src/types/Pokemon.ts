
type PokemonDimension = {
    minimum: string;
    maximum: string;
}


type PokemonEvolutions = {
    id: string;
    image: string;
    isFavorite: boolean;
}


export interface PokemonProps  {
    id: string;
    number: number;
    name: string;
    weight: PokemonDimension;
    height: PokemonDimension;
    classification: string;
    types: string[];
    resistant: string[];
    attacks: [];
    maxHP: number;
    maxCP: number;
    image: string;
    sound: string;
    isFavorite: boolean;
    evolutions: PokemonEvolutions[];
};

