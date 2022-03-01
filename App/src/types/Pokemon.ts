
type PokemonDimension = {
    minimum: string;
    maximum: string;
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
};

