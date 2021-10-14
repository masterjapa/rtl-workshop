import { render, screen } from '@testing-library/react';
import ResultItem from './index';
import pokemonMock from '../../../tests/pokemonMock'

describe('<ResultItem />', () => {
    test('GIVEN', () => {
        render(<ResultItem pokemon={pokemonMock} />);
      });
})