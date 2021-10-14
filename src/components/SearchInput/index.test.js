import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "./index";
import pokemonMock from "../../tests/pokemonMock";
import * as Search from "../../helpers/searchPokemon";

// criar os mocks V
// criar os spy's V
// renderizar o componente
// testar o fluxo

describe("<SearchInput />", () => {
  // usuario ve o input para buscar o pokemon V
  // usuario digita o texto desejado V
  // input inicia a busca V
  // input encontra o resultado e retorna V
  // input finaliza a busca V
  let onSearchPokemonSpy;

  beforeEach(() => {
    jest.useFakeTimers();
    onSearchPokemonSpy = jest
      .spyOn(Search, "searchPokemon")
      .mockImplementation(() => pokemonMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });

  it("should search the pokemon/text typed - VALID POKEMON", async () => {
    const isFetchingPokemonSpy = jest.fn();
    const onSearchSpy = jest.fn();

    render(
      <SearchInput
        onAfterSearch={onSearchSpy}
        isFetchingPokemon={isFetchingPokemonSpy}
      />
    );

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "charizard");
    jest.runAllTimers();
    await screen.findByDisplayValue(/charizard/i);

    expect(isFetchingPokemonSpy).toHaveBeenCalledTimes(2);
    expect(onSearchPokemonSpy).toHaveBeenCalledWith("charizard");
    expect(onSearchSpy).toHaveBeenCalledWith(pokemonMock);
  });
});
