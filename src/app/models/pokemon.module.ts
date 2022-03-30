declare module namespace {

    export interface Species {
        name: string;
        url: string;
    }

    export interface OfficialArtwork {
        front_default: string;
    }

    export interface Other {
        "official-artwork": OfficialArtwork;
    }


    
    export interface Sprites {
        front_default: string;
        other: Other;
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

    export interface RootObject {
        id: number;
        name: string;
        sprites: Sprites;
        stats: Stat[];
    }
}
