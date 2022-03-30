export interface PokemonObject {
    id: number;
    name: string;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
}

    export interface Species {
        name: string;
        url: string;
    }
    
    export interface Sprites {
        front_default: string;
    }


    export interface Stat2 {
        name: string;
        url: string;
    }

    export interface Stat {
        base_stat: number;
        effort: number;
        stat: Stat2;
    }

    export interface Type2 {
        name: string;
        url: string;
    }

    export interface Type {
        slot: number;
        type: Type2;
    }

    