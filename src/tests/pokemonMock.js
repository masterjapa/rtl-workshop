const pokemonMock = {
  name: "charizard",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  types: [
    {
      slot: 1,
      type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    },
    {
      slot: 2,
      type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
    },
  ],
  height: 17,
  weight: 905,
};

export default pokemonMock;
