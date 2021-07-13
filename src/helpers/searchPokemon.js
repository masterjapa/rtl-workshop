import axios from 'axios';

const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'

export const searchPokemon = async (search, config) => {

    if(!search){
        return null;
    }

    try {
        const query = search.toLowerCase();

        const { data } = await axios.get(`${POKEDEX_URL}/${query}`, config);

        const { name, sprites, types, height, weight } = data;

        return {
            name, sprites, types, height, weight
        }
    } catch (error) {
        console.error(error);

        return null;
    }
}
