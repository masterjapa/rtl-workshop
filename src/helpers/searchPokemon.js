import axios from 'axios';

const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'

const searchPokemon = async (search, config) => {
    try {
        const { data } = await axios.get(`${POKEDEX_URL}/${search}`, config);

        const { name, sprites, types, height, weight } = data;

        return {
            name, sprites, types, height, weight
        }
    } catch (error) {
        console.error(error);

        return null;
    }
}

export default searchPokemon;