import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './index';
import * as Search from '../../helpers/searchPokemon';

const mockedResult = {
  "name": "charizard",
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  "types": [
    { "slot": 1, "type": { "name": "fire", "url": "https://pokeapi.co/api/v2/type/10/" } },
    { "slot": 2, "type": { "name": "flying", "url": "https://pokeapi.co/api/v2/type/3/" } }
  ],
  "height": 17,
  "weight": 905
};


describe('<SearchInput />', () => {

  let onSearchPokemonSpy;

  beforeEach(() => {
    jest.useFakeTimers();
  
    onSearchPokemonSpy = jest.spyOn(Search, 'searchPokemon').mockImplementation(() => mockedResult)
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllTimers();
  })

  test('search input should search value typed', async () => {
    // criar os mocks V
    // criar os spy's V
    // renderizar o componente
    // testar o fluxo

    const isFetchingPokemonSpy = jest.fn();
    const onSearchSpy = jest.fn();

    render(<SearchInput onAfterSearch={onSearchSpy} isFetchingPokemon={isFetchingPokemonSpy} />);

    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toBeInTheDocument();

    userEvent.type(searchInput, 'charizard');

    jest.runAllTimers();

    await screen.findByDisplayValue(/charizard/i);

    expect(isFetchingPokemonSpy).toHaveBeenCalledTimes(2);

    expect(onSearchPokemonSpy).toHaveBeenCalledWith('charizard');

    expect(onSearchSpy).toHaveBeenCalledWith(mockedResult);

    // usuario ve o input para buscar o pokemon V
    // usuario digita o texto desejado V
    // input inicia a busca V
    // input encontra o resultado e retorna V
    // input finaliza a busca V
  });
})